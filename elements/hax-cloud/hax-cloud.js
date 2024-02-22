/**
 * `hax-cloud`
 * `Turn any website into authorware with one tag and a computer`
 * @demo demo/index.html
 * @element hax-cloud
 */
import { LitElement, html } from "lit";
import { FileSystemBrokerSingleton } from "@lrnwebcomponents/file-system-broker/file-system-broker.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-builder.js";
class HaxCloud extends LitElement {
  createRenderRoot() {
    return this;
  }
  /**
   * Convention we use
   */
  static get tag() {
    return "hax-cloud";
  }
  static get properties() {
    return {
      step: { type: Number },
    };
  }

  constructor() {
    super();
    this.windowControllers = new AbortController();
    this.step = 1;
    this.fileRoot = "";
    this.fileObjects = [];
    if (!window.__haxLogoFontLoaded) {
      let link = document.createElement("link");
      link.setAttribute(
        "href",
        "https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap",
      );
      link.setAttribute("rel", "stylesheet");
      document.head.appendChild(link);
      window.__haxLogoFontLoaded = true;
    }
    window.addEventListener("manifest-changed", this.loadLocalHax.bind(this), {
      signal: this.windowControllers.signal,
    });
  }

  disconnectedCallback() {
    this.windowControllers.abort();
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
  }

  render() {
    return html`
      <style>
        simple-icon-button-lite {
          border: 2px solid black;
          border-radius: 0;
          display: inline-flex;
          padding: 16px;
          margin: 0;
          --simple-icon-button-border-radius: 0;
          --simple-icon-width: 200px;
          --simple-icon-height: 200px;
        }
        simple-icon-button-lite::part(button) {
          font-size: 20px;
        }
        simple-icon-button-lite:focus,
        simple-icon-button-lite:hover,
        simple-icon-button-lite:focus-within {
          background-color: #3333ff;
          color: white;
        }
        hax-cloud ol,
        hax-cloud ul {
          margin: 8px;
        }
        hax-cloud li {
          padding: 0;
          margin: 0;
        }
        hax-cloud h1 {
          margin: 0;
          padding: 0;
        }
        hax-cloud h2 {
          padding: 0;
          margin: 0;
        }
        .step-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .step {
          border: 2px solid black;
          padding: 16px;
          font-size: 32px;
          display: inline-block;
          width: 30%;
        }
        .step h2,
        .step simple-icon-button-lite {
          display: flex;
        }
        .name-wrapper {
          display: flex;
          margin: 0 auto;
          justify-content: center;
          align-items: center;
          margin: 16px;
        }
        .name-icon {
          --simple-icon-width: 64px;
          --simple-icon-height: 64px;
          display: inline-flex;
          padding: 16px;
        }
        .dot {
          display: inline-flex;
          font-size: 64px;
          font-family: "Press Start 2P", sans-serif;
        }
      </style>
      <main>
        <h1 class="name-wrapper" title="Welcome to HAX.cloud">
          <simple-icon
            icon="hax:hax2022"
            class="name-icon"
            accent-color="deep-purple"
          ></simple-icon>
          <div class="dot" aria-hidden="true">[dot]</div>
          <simple-icon
            icon="cloud"
            class="name-icon"
            accent-color="green"
          ></simple-icon>
        </h1>
        <div class="step-container">
          <details open class="step">
            <summary>Load HAX locally</summary>
            <ol>
              <li>Click Download HAX site (if needed)</li>
              <li>Unzip folder where you manage files on your computer</li>
              <li>Click Select HAX site</li>
              <li>Select a HAX site (what you just unzipped)</li>
            </ol>
          </details>
          <div class="step">
            <h2>Step 1</h2>
            <simple-icon-button-lite
              icon="file-download"
              @click="${this.downloadHAXLatest}"
              >Download HAX site</simple-icon-button-lite
            >
          </div>
          <div class="step">
            <h2>Step 2</h2>
            <simple-icon-button-lite
              ?disabled="${this.step < 1}"
              icon="folder-open"
              @click="${this.findLocalHaxCopy}"
              >Select HAX site</simple-icon-button-lite
            >
          </div>
        </div>
      </main>
    `;
  }

  async downloadHAXLatest() {
    this.step = 1;
    let a = document.createElement("a");
    a.href =
      "https://github.com/elmsln/hax-single-site/archive/refs/heads/main.zip";
    a.download = "hax-single-site.zip";
    a.click();
  }

  async findLocalHaxCopy() {
    if (this.step > 0) {
      const broker = FileSystemBrokerSingleton;
      // this allows confirmation that all file objects in this directory are open for read and write
      this.fileObjects = await broker.openDir(true, { mode: "readwrite" });
      await this.fileObjects.forEach(async (fileRecord) => {
        if (fileRecord.kind === "file" && fileRecord.name === "site.json") {
          let file = await fileRecord.handle.getFile();
          let manifest = JSON.parse(await file.text());
          this.fileRoot = fileRecord.folder;
          console.log(manifest);
          if (manifest && manifest.items.length > 0) {
            document.querySelector("haxcms-site-builder").manifest = manifest;
          }
        }
      });
      setTimeout(() => {
        if (this.step === 1) {
          alert("You must select a valid HAXcms site folder");
        }
      }, 10);
    }
  }

  loadLocalHax() {
    // fake app settings so we get the buttons, it'll be on the userfs to handle the rest
    window.appSettings = {
      login: "dist/dev/login.json",
      logout: "dist/dev/logout.json",
      saveNodePath: "dist/dev/saveNode.json",
      saveManifestPath: "dist/dev/saveManifestPath.json",
      createNodePath: "dist/dev/saveNode.json",
      deleteNodePath: "dist/dev/saveNode.json",
      saveOutlinePath: "dist/dev/saveNode.json",
      publishSitePath: "dist/dev/saveNode.json",
      syncSitePath: "dist/dev/saveNode.json",
      getSiteFieldsPath: "dist/dev/getSiteFieldsPath.json",
      revertSitePath: "dist/dev/saveNode.json",
      getFormToken: "adskjadshjudfu823u823u8fu8fij",
      appStore: {
        url: new URL("./lib/appstore.json", import.meta.url).href,
      },
      // add your custom theme here if testing locally and wanting to emulate the theme selector
      // this isn't really nessecary though
      themes: {
        "haxcms-dev-theme": {
          element: "haxcms-dev-theme",
          path: "@lrnwebcomponents/haxcms-elements/lib/haxcms-dev-theme.js",
          name: "Developer theme",
        },
      },
    };
    this.step = 2;
    // inject the file object / directory root into the user file system backend handler
    // this way we can intercept failed page requests and redirect them to the local file system
    // and keep all logic inside the userfs handler and remove this element
    document.querySelector("haxcms-backend-userfs").fileObjects =
      this.fileObjects;
    document.querySelector("haxcms-backend-userfs").fileRoot = this.fileRoot;
    // show the hidden site tag
    document.querySelector("haxcms-site-builder").style.display = "";
    // you may rest now my friend
    setTimeout(() => {
      this.remove();
    }, 0);
  }
}
customElements.define(HaxCloud.tag, HaxCloud);
export { HaxCloud };
