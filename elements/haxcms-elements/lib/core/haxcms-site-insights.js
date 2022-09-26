import { store } from "./haxcms-site-store.js";
import { toJS } from "mobx";
import { LitElement, html, css } from "lit";
import { HAXCMSI18NMixin } from "./utils/HAXCMSI18NMixin.js";
import { MicroFrontendRegistry } from "@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js";
import { enableServices } from "@lrnwebcomponents/micro-frontend-registry/lib/microServices.js";
import "@lrnwebcomponents/a11y-tabs/a11y-tabs.js";
import "@lrnwebcomponents/accent-card/accent-card.js";
import "@lrnwebcomponents/retro-card/retro-card.js";
import "@lrnwebcomponents/simple-img/simple-img.js";
import "@lrnwebcomponents/simple-fields/simple-fields.js";
import "@lrnwebcomponents/lesson-overview/lib/lesson-highlight.js";
import "@github/time-elements/dist/relative-time-element.js";
import "@lrnwebcomponents/iframe-loader/lib/loading-indicator.js";
enableServices(["haxcms", "core"]);

/**
 * `haxcms-outline-editor-dialog`
 * `Dialog for presenting an editable outline`
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 */
class HAXCMSShareDialog extends HAXCMSI18NMixin(LitElement) {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          overflow: auto;
          height: 85vh;
        }
        :host([hide-results*="link-status-false"]) .link-status-false,
        :host([hide-results*="link-status-true"]) .link-status-true {
          display: none;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a11y-tabs {
          --a11y-tabs-horizontal-background: white;
        }
        a11y-tabs::part(tab) {
          font-size: 24px;
        }
        a11y-tabs::part(tab-insights) {
          color: var(--simple-colors-default-theme-purple-8);
        }
        a11y-tabs::part(tab-linkchecker) {
          color: var(--simple-colors-default-theme-orange-8);
        }
        a11y-tabs::part(tab-mediabrowser) {
          color: var(--simple-colors-default-theme-red-8);
        }
        a11y-tabs::part(tab-contentbrowser) {
          color: var(--simple-colors-default-theme-blue-8);
        }
        a11y-tab#insights loading-indicator {
          --loading-indicator-color: var(--simple-colors-default-theme-purple-8);
        }
        a11y-tab#linkchecker loading-indicator {
          --loading-indicator-color: var(--simple-colors-default-theme-orange-8);
        }
        a11y-tab#mediabrowser loading-indicator {
          --loading-indicator-color: var(--simple-colors-default-theme-red-8);
        }
        a11y-tab#contentbrowser loading-indicator {
          --loading-indicator-color: var(--simple-colors-default-theme-blue-8);
        }
        simple-icon {
          --simple-icon-height: 24px;
          --simple-icon-width: 24px;
          padding: 2px;
        }
        accent-card {
          height: 225px;
          width: 300px;
          overflow-x: hidden;
          overflow-y: auto;
          --accent-card-image-width: 25%;
        }
        accent-card .title-link {
          text-decoration: none;
          font-family: "Roboto Mono", Consolas, Monospace;
          font-size: 20px;
          color: blue;
        }
        accent-card .title-link:hover,
        accent-card .title-link:focus,
        accent-card .title-link:active {
          text-decoration: underline;
          color: black;
        }
        accent-card .stats {
          height: 125px;
        }
        .content-list li accent-card .stats li {
          display: block;
          padding: 0px;
          margin: 0px;
          list-style: none;
        }
        .content-list li accent-card .stats li simple-icon {
          padding-right: 8px;
        }
        .content-list li {
          display: inline-block;
          margin: 0;
          padding: 0;
          font-size: 12px;
          --accent-card-padding: 0;
        }
        .insights {
          column-count: 3;
        }
        .insights .recently-updated-items {
          font-size: 16px;
          line-height: 20px;
        }
        .media-list li {
          margin: 8px;
          display: inline-flex;
        }
        .media-list retro-card {
          width: 350px;
        }
        .media-list retro-card::part(title) {
          padding: 0;
          font-size: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
          height: 75px;
        }
        .media-list retro-card::part(description) {
          padding: 0;
          font-size: 14px;
        }
        .media-list retro-card .body {
          height: 275px;
        }
        .media-list retro-card img {
          max-height: 250px;
          width: 275px;
        }
        .mediabrowser-wrapper {
          overflow: hidden;
        }
      `,
    ];
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'activeTab' && this[propName]) {
        this.refreshData();
      }
    })
  }

  _insightResponse(data) {
    this.loading = false;
    this.data = data.data;
    // for filtering purposes
    this._originalData = JSON.parse(JSON.stringify(data.data));
    this.filters = {};
    setTimeout(() => {
      switch(this.activeTab) {
        case 'linkchecker':
          this.filters = {links: 'all'};
          this.shadowRoot.querySelector('#schema').fields = [
            {
              property: "links",
              title: "Link status",
              inputMethod: "select",
              options: {
                all : "All",
                error: "Error only",
                ok: "OK only"
              }
            }
          ];
        break;
        case 'contentbrowser':
          this.filters = {sort: 'title', title:'', hasVideo: false, hasLinks: false, hasImages: false};
          this.shadowRoot.querySelector('#schema').value = this.filters;
          this.shadowRoot.querySelector('#schema').fields = [
            {
              property: "sort",
              title: "Sort by",
              inputMethod: "select",
              options: {
                title : "Title",
                lastUpdated: "Last updated",
                contentLength: "Content length"
              }
            },
            {
              property: "title",
              title: "Title",
              inputMethod: "textfield",
            },
            {
              property: "hasVideo",
              title: "Video",
              description: "Includes video",
              inputMethod: "boolean",
            },
            {
              property: "hasLinks",
              title: "Links",
              description: "Includes external links",
              inputMethod: "boolean",
            },
            {
              property: "hasImages",
              title: "Images",
              description: "Includes images",
              inputMethod: "boolean",
            },
          ];
        break;
        case 'mediabrowser':
          this.filters = {title:'', type: 'all', location:'all'};
          this.shadowRoot.querySelector('#schema').fields = [
            {
              property: "title",
              title: "Title",
              inputMethod: "textfield",
            },
            {
              property: "type",
              title: "Media type",
              inputMethod: "select",
              options: {
                all: "All",
                audio: this.t.audio,
                video: this.t.video,
                image: this.t.images,
                document: "Document",
              }
            },
            {
              property: "location",
              title: "Location",
              inputMethod: "select",
              options: {
                all : "All",
                external: "External only",
                internal: "Internal only"
              }
            }
          ];
          this.shadowRoot.querySelector('#schema').values = this.filters;         
        break;
      }
    }, 0);
  }
  refreshData() {
    var base = "";
    if (document.querySelector("base")) {
      base = document.querySelector("base").href;
    }
    const site = toJS(store.manifest);
    const params = {
      type: "site",
      site: {
        file: base + "site.json",
        id: site.id,
        title: site.title,
        author: site.author,
        description: site.description,
        license: site.license,
        metadata: site.metadata,
        items: site.items,
      },
      activeId: this.shadowRoot.querySelector('#selector').value,
      link: base,
    };
    this.loading = true;
    switch (this.activeTab) {
      case 'insights':
        MicroFrontendRegistry.call(
          "@haxcms/insights",
          params,
          this._insightResponse.bind(this),
          this
        );
      break;
      case 'linkchecker':
        MicroFrontendRegistry.call(
          "@haxcms/linkChecker",
          params,
          this._insightResponse.bind(this),
          this
        );
      break;
      case 'contentbrowser':
        MicroFrontendRegistry.call(
          "@haxcms/contentBrowser",
          params,
          this._insightResponse.bind(this),
          this
        );
      break;
      case 'mediabrowser':
        MicroFrontendRegistry.call(
          "@haxcms/mediaBrowser",
          params,
          this._insightResponse.bind(this),
          this
        );
      break;
      // bad selection
      default:
        this.loading = false;
      break;
    }
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "haxcms-site-insights";
  }
  getReadingTime(value) {
    let readVal = [];
    var hours = Math.floor(value / 60);
    var minutes = Math.floor(value - hours * 60);
    // handle hours of reading
    if (hours === 1) {
      readVal.push(`${hours} ${this.t.hour}`);
    } else if (hours === 0) {
      // do nothing for 0
    } else {
      readVal.push(`${hours} ${this.t.hours}`);
    }
    // minutes
    if (minutes === 1) {
      readVal.push(`${minutes} ${this.t.minute}`);
    } else if (minutes === 0) {
      // do nothing for 0
    } else {
      readVal.push(`${minutes} ${this.t.minutes}`);
    }
    return readVal.join(", ");
  }
  closeModal() {
    window.dispatchEvent(new CustomEvent('simple-modal-hide'));
  }
  activeChanged(e) {
    this.activeTab = e.detail.activeTab;
  }
  linkFormChanged(e) {
    this.filters.links = e.detail.value.links;
    // @todo refactor
    if (this.filters.links === 'error') {
      this.hideResults = "link-status-true";
    }
    else if (this.filters.links === 'ok') {
      this.hideResults = "link-status-false";
    }
  }
  contentBrowserFormChanged(e) {
    this.data = JSON.parse(JSON.stringify(this._originalData));
    let val = e.detail.value;
    this.filters = {
      title: val.title ? val.title : '',
      sort: val.sort,
      hasVideo: val.hasVideo,
      hasLinks: val.hasLinks,
      hasImages: val.hasImages,
    };
    if (this.data.contentData) {
      this.data.contentData = this.data.contentData.filter((item) => {
        if (this.filters.hasVideo === true && item.videos === 0) {
          return false;
        }
        if (this.filters.hasLinks === true && item.links === 0) {
          return false;
        }
        if (this.filters.hasImages === true && item.images === 0) {
          return false;
        }
        // no filtering, skip
        if (this.filters.title == '') {
          return true;
        }
        else if (!item.title.toLowerCase().includes(this.filters.title.toLowerCase())) {
          return false;
        }
        return true;
      })
      this.data.contentData.sort((a,b) => {
        switch (this.filters.sort) {
          case 'title':
            return a.title.localeCompare(b.title);
          break;
          case 'contentLength':
            return b.readTime - a.readTime;
          break;
          case 'lastUpdated':
            return new Date(b.updated) - new Date(a.updated);
          break;
        }
      });
    }
  }
  mediaBrowserFormChanged(e) {
    this.data = JSON.parse(JSON.stringify(this._originalData));
    let val = e.detail.value;
    this.filters = {
      title: val.title ? val.title : '',
      type: val.type ? val.type : 'all',
      location: val.location ? val.location : 'all',
    };
    if (this.data.mediaData) {
      this.data.mediaData = this.data.mediaData.filter((item) => {
        if (this.filters.location != 'all') {
          if (this.filters.location != item.locType) {
            return false;
          }
          else {
            return true;
          }
        }
        return true;
      });
      this.data.mediaData = this.data.mediaData.filter((item) => {
        if (this.filters.type != 'all') {
          if (this.filters.type != item.type) {
            return false;
          }
          else {
            return true;
          }
        }
        return true;
      });
      this.data.mediaData = this.data.mediaData.filter((item) => {
        // no filtering, skip
        if (!this.filters.title || this.filters.title == '') {
          return true;
        }
        else if (this.filters.title.toLowerCase && !item.name.toLowerCase().includes(this.filters.title.toLowerCase())) {
          return false;
        }
        return true;
      });
    }
  }
  // render function
  render() {
    const data = this.data;
    var base = "";
    if (document.querySelector("base")) {
      base = document.querySelector("base").href;
    }
    return html`
    ${this.pageSelector()}
    <button @click="${this.refreshData}" icon="refresh" ?disabled="${this.loading}">${this.t.updateInsights}</button>
    <a11y-tabs id="tabs" full-width @a11y-tabs-active-changed="${this.activeChanged}" sticky>
      <a11y-tab id="insights" icon="hax:clipboard-pulse" label="${this.t.insights}">
      ${this.activeTab === 'insights' ? html`
      <loading-indicator full ?loading="${this.loading}"></loading-indicator>
      ${this.loading ? html`<p>${this.t.loading} ${this.t.insights}..</p>`: html`
        <div class="insights">
          <h2>${data && data.title ? data.title : ''} ${this.t.insights}</h2>
          <ul>
            <li>
            <lesson-highlight icon="editor:insert-drive-file">
              <p slot="title">${data.pages ? data.pages : html`0`} ${this.t.pages}</p>
              <p>${data.objectives} ${this.t.learningObjectives},
              ${data.specialTags} ${this.t.specialElements},
              ${data.dataTables} ${this.t.dataTables},
              ${data.headings} ${this.t.headings}</p>
            </lesson-highlight>
            </li>
            ${data.video == 0 ? `` : html`<li>
            <lesson-highlight icon="av:play-circle-outline">
              <p slot="title">${data.video} ${this.t.videos}</p>${data.videoLength != 0 ? html`(<p>${toHHMMSS(data.videoLength)}</p>)` : ``}
            </lesson-highlight>
            </li>`}
            ${data.audio == 0 ? `` : html`<li>
            <lesson-highlight icon="av:music-video">
              <p slot="title">${data.audio} ${this.t.audio}</p>
            </lesson-highlight>
            </li>`}
            <li>
            <lesson-highlight icon="icons:link">
              <p slot="title">${data.links} ${this.t.externalLinks}</p>
            </lesson-highlight>
            </li>
            <li>
            <lesson-highlight icon="communication:import-contacts">
              <p slot="title">${this.getReadingTime(data.readTime)} ${this.t.ofReading}</p>
            </lesson-highlight>
            </li>
            ${data.readability ? html`
            <li>
            <lesson-highlight icon="editable-table:numbers">
              <p slot="title">${data.readability.gradeLevel} ${this.t.gradeReadingLevel}</p>
            </lesson-highlight>
            </li>
            <li>
            <lesson-highlight icon="hax:format-textblock">
              <p slot="title">${data.readability.lexiconCount} ${this.t.words}</p>
              <p>${data.readability.difficultWords} ${this.t.longWords}</p>
            </lesson-highlight>
            </li>
            ` : ``}
            <li>
            <lesson-highlight icon="device:access-time">
              <p slot="title">${this.t.created}: <relative-time datetime="${data.created}"></relative-time></p>
            </lesson-highlight>
            </li>
            <li>
            <lesson-highlight icon="device:access-time">
              <p slot="title">${this.t.lastUpdated}: <relative-time datetime="${data.updated}"></relative-time></p>
            </lesson-highlight>
            </li>
            <li>
              <lesson-highlight icon="av:av-timer">
              <p slot="title">${this.t.recentUpdates}</p>
              <ol class="recently-updated-items">
                ${data.updatedItems ? data.updatedItems.map((item) => html`
                <li>
                  <a @click="${this.closeModal}" href="${item.slug}">${item.title} <relative-time datetime="${item.metadata.updated}"></relative-time></a>
                </li>`) : ``}
              </ol>
              </lesson-highlight>
            </li>
            </ul>
            </div>
        </div>
      `}
      ` : ``}
      </a11y-tab>
      <a11y-tab id="linkchecker" icon="icons:link" label="${this.t.linkChecker}">
      ${this.activeTab == 'linkchecker' ? html`
        <loading-indicator full ?loading="${this.loading}"></loading-indicator>
          ${this.loading ? html`<p>${this.t.loading} ${this.t.linkChecker}..</p>`: html`
          <div>
            <h2>${this.t.linkReport}</h2>
            <form id="form"><simple-fields id="schema" autofocus @value-changed="${this.linkFormChanged}"></simple-fields></form>
            <ul class="link-list">
            ${
              data.linkData ? Object.keys(data.linkData).map((key) => this.renderLinkCheck(data.linkData, key)) : html`${this.t.noLinksInSelectedPages}`}
            </ul>
          </div>
        `}
      ` : ``}
      </a11y-tab>
      <a11y-tab id="contentbrowser" icon="icons:view-module" label="${this.t.contentBrowser}">
      ${this.activeTab == 'contentbrowser' ? html`
        <loading-indicator full ?loading="${this.loading}"></loading-indicator>
          ${this.loading ? html`<p>${this.t.loading} ${this.t.contentBrowser}..</p>`: html`
          <div>
            <h2>${this.t.contentBrowser}</h2>
            <form id="form"><simple-fields id="schema" autofocus @value-changed="${this.contentBrowserFormChanged}"></simple-fields></form>
            <ul class="content-list">
            ${data.contentData ? data.contentData.map(item => html`
            <li>
            <accent-card
            image-src="https://screenshoturl.elmsln.vercel.app/api/screenshotUrl?quality=25render=img&urlToCapture=${base}${item.location}"
            horizontal>
            <div slot="heading"><a class="title-link" href="${item.slug}" @click="${this.closeModal}">${item.title}</a></div>
              <div slot="content">
                <div>
                  ${this.t.created} <relative-time datetime="${item.created}"></relative-time>
                </div>
                <div>
                  ${this.t.lastUpdated} <relative-time datetime="${item.updated}"></relative-time>
                </div>
              </div>
              <div slot="footer">
                <ul class="stats">
                ${item.objectives > 0 ? html`<li><simple-icon icon="editor:format-list-bulleted"></simple-icon>${item.objectives} ${this.t.learningObjectives}</li>` : ``}
                ${item.videos > 0 ? html`<li><simple-icon icon="av:play-arrow"></simple-icon>${item.videos} ${this.t.videos}</li>` : ``}
                ${item.audio > 0 ? html`<li><simple-icon icon="av:music-video"></simple-icon>${item.audio} ${this.t.audio}</li>` : ``}
                ${item.selfChecks > 0 ? html`<li><simple-icon icon="hardware:videogame-asset"></simple-icon>${item.selfChecks} ${this.t.selfChecks}</li>` : ``}
                ${item.images > 0 ? html`<li><simple-icon icon="image:collections"></simple-icon>${item.images} ${this.t.images}</li>` : ``}
                ${item.dataTables > 0 ? html`<li><simple-icon icon="image:grid-on"></simple-icon>${item.dataTables} ${this.t.dataTables}</li>` : ``}
                ${item.specialTags > 0 ? html`<li><simple-icon icon="icons:stars"></simple-icon>${item.specialTags} ${this.t.specialElements}</li>` : ``}
                ${item.links > 0 ? html`<li><simple-icon icon="icons:link"></simple-icon>${item.links} ${this.t.links}</li>` : ``}
                ${item.readTime > 0 ? html`<li><simple-icon icon="icons:chrome-reader-mode"></simple-icon>${this.getReadingTime(item.readTime)} ${this.t.ofReading}</li>` : ``}
                </ul>
              </div>
            </accent-card>
            </li>
            `) : ``}
            </ul>
          </div>
          `}
        ` : ``}
      </a11y-tab>
      <a11y-tab id="mediabrowser" icon="icons:perm-media" label="${this.t.mediaBrowser}">
      ${this.activeTab == 'mediabrowser' ? html`
        <loading-indicator full ?loading="${this.loading}"></loading-indicator>
          ${this.loading ? html`<p>${this.t.loading} ${this.t.mediaBrowser}..</p>`: html`
          <div class="mediabrowser-wrapper">
            <h2>${this.t.mediaBrowser}</h2>
            <form id="form"><simple-fields id="schema" autofocus @value-changed="${this.mediaBrowserFormChanged}"></simple-fields></form>
            <ul class="media-list">
            ${data.mediaData ? data.mediaData.map(item => html`
              <li>
                <retro-card
                nosource
                class="${item.locType} ${item.type}"
                accent-color="${this.accentColorFromType(item.type)}"
                title="${item.name}"
                tags="${item.locType},${item.type}">
                <div class="body">
                ${item.type == 'image' ? html`<img src="${item.source}" />` : ``}
                ${item.type == 'video' && item.source.includes('videoseries') ? html`<iframe src="${item.source}"></iframe>` : ``}
                ${item.type == 'video' && !item.source.includes('videoseries') ? html`<video-player source="${item.source}"></video-player>` : ``}
                ${item.type == 'audio' ? html`<video-player source="${item.source}"></video-player>` : ``}
                ${item.type == 'document' ? html`<div><a href="${item.source}" target="_blank">${this.t.openInNewTab}</a></div>` : ``}
                  <div>${item.itemId ? this.renderItemLinkById(item.itemId) : ``}</div>
                  </div>
                </retro-card>
              </li>
            `) : `${this.t.noMediaInSelectedPages}`}
            </ul>
          </div>
          `}
        ` : ``}
      </a11y-tab>
    </a11y-tabs>
    `;
  }
  // response is key'ed object by link and response data
  linkValidationResponse(e) {
    let keys = Object.keys(e.data)
    this.linkResponseData[keys[0]] = e.data[keys[0]];
    // basic debounce so we only update every 500ms if we had a lot of links
    clearTimeout(this.__interval);
    this.__interval = setTimeout(() => {
      this.requestUpdate();      
    }, 500);
  }
  renderLinkCheck(links, key) {
    // kick off a call that'll satisfy later down the road, but only if its a new key
    if (!this.linkResponseData[key]) {
      // set something so we don't get looped back  over and over
      this.linkResponseData[key] = {
        ok: 'loading'
      };
      MicroFrontendRegistry.call(
        "@core/linkValidator",
        { links: key, __method: "GET" },
        this.linkValidationResponse.bind(this)
      );
    }
    return html`
    <li class="link-status-${this.linkResponseData[key].ok}">
      ${this.linkResponseData[key].ok === 'loading' ? html`<simple-icon icon="hax:loading" accent-color="grey"></simple-icon>` : ``}
      ${this.linkResponseData[key].ok != 'loading' ? (this.linkResponseData[key].ok ? html`<simple-icon icon="check" accent-color="green"></simple-icon>` : html`<simple-icon icon="clear" accent-color="red" title="${this.linkResponseData[key].status}"></simple-icon>`) : ``}
      ${this.linkResponseData[key].ok != 'loading' ? (this.linkResponseData[key].ok ? html`<a href="${key}" target="_blank" rel="noopener nofollow noreferrer">${key}</a>` : html`${key}`) : ``} (${links[key].map(linkUsage => html`
      <strong>${linkUsage.linkTitle}</strong> ${this.t.onPage} ${linkUsage.itemId ? this.renderItemLinkById(linkUsage.itemId) : ``}
      `)})
    </li>
    `;
  }
  accentColorFromType(type) {
    switch(type) {
      case 'video':
        return 'red';
      case 'audio':
        return 'orange';
      case 'image':
        return 'blue';
      case 'document':
        return 'green';
      default:
        return 'grey';
    }
  }
  renderItemLinkById(itemId) {
    // trap for highest level of the site
    if (itemId != null) {
      const item = toJS(store.findItem(itemId));
      if (item) {
        return html`<a href="${item.slug}" @click="${this.closeModal}">${item.title}</a>`;
      }
    }
    return html``;
  }

  constructor() {
    super();
    this.filters = {};
    this.linkResponseData = {};
    this.t = this.t || {};
    this.t = {
      ...this.t,
      pageToProvideInsightsAbout: "Page to provide insights about",
      noLinksInSelectedPages: "No links in selected pages",
      noMediaInSelectedPages: "No media in selected pages",
      recentUpdates: "Recent updates",
      created: "Created",
      lastUpdated: "Last updated",
      updateInsights: "Update insights",
      onPage: "on page",
      learningObjectives: "learning objectives",
      specialElements: "Special elements",
      headings: "Headings",
      externalLinks: "External links",
      pages: "Pages",
      videos: "videos",
      video: "Video",
      audio: "Audio",
      selfChecks: "Self checks",
      openInNewTab: "Open in new tab",
      links: "Links",
      images: "Images",
      dataTables: "Data tables",
      ofReading: "of reading",
      gradeReadingLevel: "grade reading level",
      words: "Words",
      longWords: "long words",
      linkReport: "Link report",
      loading: "Loading",
      fullSite: "Full site",
      insights: "Insights",
      linkChecker: "Link checker",
      mediaBrowser: "Media browser",
      contentBrowser: "Content browser",
      hour: "hour",
      hours: "hours",
      minute: "minute",
      minutes: "minutes"
    };
    this.data = {
      readability: {},
      updatedItems: []
    };
    this.activeTab = 'insights';
    this.loading = false;
  }
  static get properties() {
    return {
      ...super.properties,
      data: {
        type: Object,
      },
      hideResults: {
        type: String,
        attribute: 'hide-results',
        reflect: true,
      },
      filters: {
        type: Object,
      },
      linkResponseData: {
        type: Object,
      },
      activeTab: {
        type: String,
      },
      loading: { type: Boolean, reflect: true},
    }
  }
  pageSelector() {
    const itemManifest = store.getManifestItems(true);
    // default to null parent as the whole site
    var items = [
      {
        text: `-- ${this.t.fullSite} --`,
        value: null,
      },
    ];
    itemManifest.forEach((el) => {
      // calculate -- depth so it looks like a tree
      let itemBuilder = el;
      // walk back through parent tree
      let distance = "- ";
      while (itemBuilder && itemBuilder.parent != null) {
        itemBuilder = itemManifest.find((i) => i.id == itemBuilder.parent);
        // double check structure is sound
        if (itemBuilder) {
          distance = "--" + distance;
        }
      }
      items.push({
        text: distance + el.title,
        value: el.id,
      });
    });
    return html`<label style="font-weight:bold;" for="selector">${this.t.pageToProvideInsightsAbout}</label>:<select id="selector">
      ${
        items.map(item => html`
        <option .value="${item.value}" ?selected="${toJS(store.activeId) == item.value}">${item.text}</option>
      `)}
      </select>`;
  }
}
window.customElements.define(
  HAXCMSShareDialog.tag,
  HAXCMSShareDialog
);
export { HAXCMSShareDialog };

// convert seconds back into full time stamp
function toHHMMSS(seconds) {
  var out = "";
  var snum = parseInt(seconds, 10);
  var hours = Math.floor(snum / 3600);
  var minutes = Math.floor((snum - hours * 3600) / 60);

  if (hours !== 0) {
    out += `${hours} hour`;
    if (hours !== 1) {
      out += "s";
    }
    out += ", ";
  }
  if (minutes !== 0) {
    out += `${minutes} minute`;
    if (hours !== 1) {
      out += "s";
    }
  }
  return out;
}