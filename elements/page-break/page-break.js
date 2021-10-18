/**
 * Copyright 2021 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { css, LitElement } from "lit";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
//import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import { pageBreakManager } from "./lib/page-break-manager.js";
// might be optional / using hooks to check in or a manager that does this
//import { HAXStore } from "@lrnwebcomponents/hax-body/lib/hax-store.js";
//import { toJS, autorun } from "mobx";
/**
  * `page-break`
  * `a visual break but also helps manage hierarchy`
  * Needs a uuid
    Path/node / it's actually the route!

    Could have intersection observer of visibility or test on scroll / resize

    Maybe intersection while NOT scrolling/resizing and denounce it

    Need a attribute for new or create it delete. Delete doesn't happen immediate IF it already existed. This way we can parse out and remove on backend.

    If brand new we can delete immediately

    It has a title Dom node AFTER itself in the tree

    Maybe an attribute for subpage or break type

    Make a static demo with content premocked up

    Need to have 2 modes. 1 mode the page break injects a locked page-title tag in slot
    Mode 2 the page break controls a heading after it

  * @demo demo/index.html
  * @element page-break
  */
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import { SimpleIconsetStore } from "@lrnwebcomponents/simple-icon/lib/simple-iconset.js";
const iconPath = SimpleIconsetStore.getIcon("editor:format-page-break");
export class PageBreak extends I18NMixin(SchemaBehaviors(LitElement)) {
  static get tag() {
    return "page-break";
  }
  constructor() {
    super();
    this.t = {
      newPage: "New page",
    };
    this.title = this.t.newPage;
    this.path = "#";
    this.published = true;
    this.lock = false;
    this.depth = 0;
    this._haxState = false;
  }
  static get properties() {
    return {
      ...super.properties,
      title: { type: String, reflect: true },
      path: { type: String },
      parent: { type: String, reflect: true },
      published: { type: Boolean, reflect: true },
      lock: { type: Boolean, reflect: true },
      depth: { type: Number, reflect: true },
      _haxState: { type: Boolean },
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (
      this.nextElementSibling &&
      this.nextElementSibling.tagName &&
      ["H1", "H2", "H3", "H4", "H5", "H6"].includes(
        this.nextElementSibling.tagName
      )
    ) {
      this.title = this.nextElementSibling.innerText;
      this.target = this.nextElementSibling;
    } else {
      // @todo need to have logic to figure out what headings proceed this one
      // HAX should be able to tell us this
      this.target = document.createElement("h2");
      this.target.innerText = this.title;
      this.target.setAttribute("data-hax-lock", "data-hax-lock");
      this.parentNode.insertBefore(this.target, this.nextElementSibling);
    }
    this.observer = new MutationObserver(() => {
      // lock ensures that title update, then updating hte innerText
      // doesn't generate another mutation record
      if (this.title != this.target.innerText) {
        this.__moUpdate = true;
        this.title = this.target.innerText;
      }
    });
    this.setupTargetData(this.target);
    window.dispatchEvent(
      new CustomEvent("page-break-registration", {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: {
          value: this,
          action: "add",
        },
      })
    );
    window.dispatchEvent(
      new CustomEvent("page-break-change", {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: {
          value: this,
        },
      })
    );
  }
  disconnectedCallback() {
    window.dispatchEvent(
      new CustomEvent("page-break-registration", {
        detail: {
          value: this,
          action: "remove",
        },
      })
    );
    window.dispatchEvent(
      new CustomEvent("page-break-change", {
        composed: true,
        bubbles: true,
        cancelable: true,
        detail: {
          value: this,
        },
      })
    );
    this.observer.disconnect();
    super.disconnectedCallback();
  }
  // setup the target data
  setupTargetData(newTarget) {
    if (this.target) {
      this.observer.disconnect();
    }
    this.target = newTarget;
    this.target.setAttribute("data-page-break-title", "data-page-break-title");
    this.observer.observe(this.target, {
      characterData: true,
      childList: true,
      subtree: true,
    });
  }
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (this.target) {
        if (propName === "title" && this[propName]) {
          // change title text to match title if updated but delay
          // to avoid input spamming as this could generate a lot of change records
          // but don't just set it as it would generate another change record
          if (this.__moUpdate) {
            // skips the update of innerText to match
            this.__moUpdate = false;
          } else if (this.title != this.target.innerText) {
            this.target.innerText = this.title;
          }
        }
        // fire event for reaction so we can update state elsewhere
        if (["title", "parent", "path"].includes(propName)) {
          window.dispatchEvent(
            new CustomEvent("page-break-change", {
              composed: true,
              bubbles: true,
              cancelable: true,
              detail: {
                value: this,
              },
            })
          );
        }
        // replicate lock status
        if (this.lock && propName === "lock") {
          pageBreakManager.elementsBetween(this).forEach((el) => {
            el.setAttribute("data-hax-lock", "data-hax-lock");
          });
        }
        // was true, not locked
        else if (!this.lock && propName === "lock" && oldValue) {
          pageBreakManager.elementsBetween(this).forEach((el) => {
            el.removeAttribute("data-hax-lock");
          });
        }
        // the magic a11y rewriter
        if (!this._haxState && propName === "depth" && this.depth >= 0) {
          pageBreakManager
            .elementsBetween(this, "page-break", "h1,h2,h3,h4,h5,h6")
            .forEach((el) => {
              let tagNumber =
                (el.getAttribute("data-original-level")
                  ? new Number(
                      el.getAttribute("data-original-level").replace("H", "")
                    )
                  : new Number(el.tagName.replace("H", ""))) + this.depth;
              tagNumber = tagNumber > 6 ? 6 : tagNumber;
              const newH = document.createElement(`h${tagNumber}`);
              newH.setAttribute("data-original-level", el.tagName);
              for (var i = 0, l = el.attributes.length; i < l; ++i) {
                newH.setAttribute(
                  el.attributes.item(i).nodeName,
                  el.attributes.item(i).nodeValue
                );
              }
              newH.innerHTML = el.innerHTML;
              el.parentNode.replaceChild(newH, el);
              this.setupTargetData(newH);
            });
        }
        // hax state is a special case bc we want to edit in whats saved
        // not what's interpretted
        if (propName === "_haxState" && oldValue !== undefined) {
          if (this._haxState) {
            pageBreakManager
              .elementsBetween(this, "page-break", "h1,h2,h3,h4,h5,h6")
              .forEach((el) => {
                if (el.getAttribute("data-original-level")) {
                  let tagNumber = new Number(
                    el.getAttribute("data-original-level").replace("H", "")
                  );
                  const newH = document.createElement(`h${tagNumber}`);
                  for (var i = 0, l = el.attributes.length; i < l; ++i) {
                    newH.setAttribute(
                      el.attributes.item(i).nodeName,
                      el.attributes.item(i).nodeValue
                    );
                  }
                  newH.innerHTML = el.innerHTML;
                  el.parentNode.replaceChild(newH, el);
                  this.setupTargetData(newH);
                }
              });
          } else {
            pageBreakManager
              .elementsBetween(this, "page-break", "h1,h2,h3,h4,h5,h6")
              .forEach((el) => {
                let tagNumber =
                  (el.getAttribute("data-original-level")
                    ? new Number(
                        el.getAttribute("data-original-level").replace("H", "")
                      )
                    : new Number(el.tagName.replace("H", ""))) + this.depth;
                tagNumber = tagNumber > 6 ? 6 : tagNumber;
                const newH = document.createElement(`h${tagNumber}`);
                newH.setAttribute("data-original-level", el.tagName);
                for (var i = 0, l = el.attributes.length; i < l; ++i) {
                  newH.setAttribute(
                    el.attributes.item(i).nodeName,
                    el.attributes.item(i).nodeValue
                  );
                }
                newH.innerHTML = el.innerHTML;
                el.parentNode.replaceChild(newH, el);
                this.setupTargetData(newH);
              });
          }
        }
      }
    });
  }
  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin: 20px 0;
          padding: 20px;
          opacity: 0.2;
          background-position: center;
          background-repeat: no-repeat;
          transition: all 0.2s linear;
        }
        .mid {
          border: none;
          border-top: 2px solid #cccccc;
          overflow: visible;
          margin: 4px 0 0 0;
          padding: 0;
          height: 0;
        }
        :host(:hover) {
          opacity: 1;
        }
        :host(:hover) .mid::before {
          font-weight: bold;
          content: "Page break";
          color: #000000;
          background-color: #ffffff;
          font-size: 16px;
          left: calc(50% - 2.5em);
          top: -16px;
          position: relative;
          height: 0;
          line-height: 36px;
        }
      `,
    ];
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.style.backgroundImage = `url("${iconPath}")`;
    const hr = document.createElement("hr");
    hr.classList.add("mid");
    this.shadowRoot.appendChild(hr);
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/page-break.haxProperties.json`, import.meta.url).href;
  }
  /**
   * haxHooks
   */
  haxHooks() {
    return {
      editModeChanged: "haxeditModeChanged",
    };
  }
  /**
   * ensure that when we flip states here that we are actively switching the original level var
   */
  haxeditModeChanged(value) {
    this._haxState = value;
  }
}
customElements.define(PageBreak.tag, PageBreak);