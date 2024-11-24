/**
 * Copyright 2024 haxtheweb
 * @license Apache-2.0, see LICENSE for full text.
 */
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { LitElement, css, html } from "lit";

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
    this.lastUpdated = "n.d."
    this.accessDate = new Date(); // Will be formatted by citation style functions
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
      currentURL: { type: String, },
      currentSlug: { type: String, },
      citationStyle: { type: String, },
      pageProtocol: { type: String, },

      citationStyle: { type: String, reflect: true, attribute: "citation-style", },

      author: { type: String, },
      creationDate: { type: String, },
      lastUpdated: { type: String,},
      accessDate: { type: String, },
      title: { type: String, },
      organization: { type: String, },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }

      /* Controls */
      .selected {
        color: red;
      }

      /* Citation */
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
          <button id="APA">APA</button>
          <button id="MLA">MLA</button>
          <button id="Chicago">Chicago</button>
        </div>
        <div class="citation">
          ${this.renderCitation()}
        </div>
      </div>
    `;
  }

  renderCitation() {
    switch (this.citationStyle) {
      case "APA":
        return this.renderAPA();
      case "MLA":
        return this.renderMLA();
      case "Chicago":
        return this.renderChicago();
    }
  }

  /**
   * Based on: https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/reference_list_electronic_sources.html
   */
  renderAPA() {
    return html`
      <div class="citation-wrapper">
        <p>
          <span class="author">${this.author}</span>.
          (<span class="date">${this.lastUpdated}</span>).
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
    return html`
      <p>
        <span class="author">${this.author}</span>.
        "<span class="title">${this.title}</span>."
        <!-- Name of website -->
        <span class="organization">${this.organization}</span>, <span class="date">${this.lastUpdated}</span>
        <span class="URL">${this.currentURL}</span>
      </p>
    `
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
