import { css, html } from "lit";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip.js";
import { HAXCMSI18NMixin } from "./HAXCMSI18NMixin.js";

const EmailPageMixin = function (SuperClass) {
  return class extends HAXCMSI18NMixin(SuperClass) {
    constructor() {
      super();
      this.t.emailPage = "Email page";
      this.t.emailLinkToCurrentPage = "Email link to Current page";
    }
    static get styles() {
      let styles = [];
      if (super.styles) {
        styles = super.styles;
      }
      return [
        ...styles,
        css`
          .email-btn {
            color: inherit;
            --simple-icon-height: 24px;
            --simple-icon-width: 24px;
          }
        `,
      ];
    }

    EmailPageButton(direction = "left") {
      return html`
        <div
          id="emailbtnwrapper"
          part="${this.editMode ? `edit-mode-active` : ``}"
        >
          <simple-icon-button-lite
            part="email-btn"
            class="email-btn btn"
            icon="hax:email"
            label="${this.t.emailLinkToCurrentPage}"
            @click="${this.EmailPageButtonAction}"
            id="emailbtn"
          ></simple-icon-button-lite>
          <simple-tooltip for="emailbtn" position="${direction}">
            ${this.t.emailPage}
          </simple-tooltip>
        </div>
      `;
    }
    EmailPageButtonAction(e) {
      let title = store.activeTitle.replace(/"/g,'%22');
      title= title.replace(/&/g,'%26');
      window.open(`mailto:?subject=${title}&body=${encodeURIComponent(window.location.href)}`, 'mail');
    }
  };
};

export { EmailPageMixin };
