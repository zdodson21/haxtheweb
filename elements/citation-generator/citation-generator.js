/**
 * Copyright 2024 haxtheweb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `citation-generator`
 *
 * @demo index.html
 * @element citation-generator
 */
export class CitationGenerator extends DDDSuper(I18NMixin(LitElement)) {

  /*
    TODO:
    * Logic for getting information from site.json
    * Accessibility for buttons
    * APA Rendering
    * MLA Rendering
    * Chicago Rendering
  */

  static get tag() {
    return "citation-generator";
  }

  constructor() {
    super();

    // Variables
    this.currentURL = globalThis.location.href; // Ex: https://haxtheweb.org/welcome/hax-cloud
    this.currentWebsite = globalThis.location.origin; // Ex: https://haxtheweb.org
    this.currentSlug = globalThis.location.pathname; // Ex: /welcome/hax-cloud
    this.pageProtocol = globalThis.location.protocol; // Ex: https or http

    this.citationStyle = "APA"; // Supports APA, MLA, and Chicago
    this.author = "Author";
    this.creationDate = "n.d."
    this.lastUpdatedDate = "n.d."
    this.title = "Title";
    this.organization = "HAXTheWeb";

    switch (this.citationStyles) {
      case "APA":
        this.citationStyle = "APA";
        break;
      case "MLA":
        this.citationStyle = "MLA";
        break;
      case "Chicago":
        this.citationStyle = "Chicago";
        break;
    }



    // Functions
    this.getSiteData();

    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/citation-generator.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      // TODO Remove reflects and attributes
      currentURL: { type: String, reflect: true, attribute: "current-url" },
      currentSlug: { type: String, reflect: true, attribute: "current-slug" },
      citationStyle: { type: String, reflect: true, attribute: "citation-style" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .selected {
        color: red;
      }

      .title {
        font-style: italic;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="citation-generator-wrapper">
        <div class="citation-selection">
          <button id="APA" class="selected">APA</button>
          <button id="MLA">MLA</button>
          <button id="Chicago">Chicago</button>
        </div>
        <div class="citation">
          ${this.renderAPA()}
        </div>
      </div>
    `;
  }

  /**
   * Based on: https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/reference_list_electronic_sources.html
   */
  renderAPA() {
    return html`
      <div class="citation-wrapper">
        <p>
          <span class="author">${this.author}</span>.
          (<span class="date">${this.lastUpdatedDate}</span>).
          <span class="title">${this.title}</span>.
          <span class="organization">${this.organization}</span>.
          <span class="URL">${this.currentURL}</span>
        </p>
      </div>
    `
  }

  /**
   * Based on: https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_works_cited_electronic_sources.html
   */
  renderMLA() {

  }

  /**
   * Based on: https://owl.purdue.edu/owl/research_and_citation/chicago_manual_17th_edition/cmos_formatting_and_style_guide/web_sources.html
   */
  renderChicago() {

  }

  getSiteData() {
    fetch(`${this.currentWebsite}/site.json`).then(d => d.ok ? d.json(): {}).then(data => {
      console.log(data);
      this.author = data.metadata.author.name;
      this.title = findPageData(data, "title");

    })
  }

  findPageData(siteData, objective) {
    // TODO navigate site.json to find the page in items that is relevant to based on objective
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(CitationGenerator.tag, CitationGenerator);
