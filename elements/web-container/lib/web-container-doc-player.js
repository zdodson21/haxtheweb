import "../web-container.js";
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { haxElementToNode } from "@haxtheweb/utils/utils.js";

export class WebContainerDocPlayer extends DDDSuper(LitElement) {
  static get tag() {
    return "web-container-doc-player";
  }
  constructor() {
    super();
    this.element = null;
    this.project = null;
    this.importpath = null;
    this.version = "latest";
    this.rebuilding = false;
    // listen for the frame sending back it's height
    globalThis.addEventListener(
      'message',
       (e) => {
        // message that was passed from iframe page
        let message = JSON.parse(e.data);
        if (message.subject === "frameResize" && message.height) {
          this.shadowRoot.querySelector('web-container').style.setProperty('--web-container-iframe-height', parseInt(message.height) + 40 + "px");
        }
      }
    );
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (['element', 'project', 'version'].includes(propName) && this.shadowRoot) {
        if (!this.rebuilding) {
          this.rebuildwebcontainerdocs();
        }
      }
    });
  }

  async rebuildwebcontainerdocs() {
    this.rebuilding = true;
    let wcEl = this.shadowRoot.querySelector("#webcontainer");
    await globalThis.WebContainerManager.requestAvailability();
    let wc = globalThis.document.createElement('web-container');
    wc.hideTerminal = true;
    wc.hideEditor = true;
    wc.files ={
      'index.html': {
        file: {
          contents: `
<!doctype html>
<html lang="en">
  <head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="Description" content="Demonstration for web-container">
    <style>
      :root, html, body {
        margin: 0;
        padding: 0;
      }
    </style>
    <title>Demo of ${this.importpath ? this.importpath : this.project} : ${this.version}</title>
  </head>
  <body>
      <h1>Demo of ${this.importpath ? this.importpath : this.project} : ${this.version}</h1>
      <div id="dox"></div>
      <div id="codesample"></div>
      <div id="demo"></div>
  </body>
  <script>
    window.process = window.process || {
      env: {
        NODE_ENV: "production"
      }
    };
  </script>
  <script type="module" async defer>
    import "${this.importpath ? this.importpath : this.project}";
    import { setWcDoxConfig } from 'wc-dox/index.js';
    const customElPath = new URL('./node_modules/${this.project}/custom-elements.json', import.meta.url).href;
    const manifest = await fetch(customElPath).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
    if (manifest) {
      setTimeout(() => {
        setWcDoxConfig(manifest);
        const docx = document.createElement('wc-dox');
        docx.setAttribute('tag', '${this.element}');
        globalThis.document.body.querySelector('#dox').appendChild(docx);
      }, 0);
    }
    import "@haxtheweb/code-sample/code-sample.js";
    import "@haxtheweb/code-editor/lib/code-pen-button.js";
    import { haxElementToNode } from "@haxtheweb/utils/utils.js";
    // take tag and convert it to a demo implementation
    async function getExample() {
      let el = globalThis.document.createElement("${this.element}");
      let CEClass = globalThis.customElements.get("${this.element}");
      if (CEClass && typeof CEClass.haxProperties !== undefined) {
        let schema = CEClass.haxProperties;
        // resolve direct setting vs loading file
        if (typeof schema === "string") {
          schema = await fetch(schema).then((response) => {
            if (response && response.json) return response.json();
            return false;
          });
        }
        if (schema && schema.demoSchema && schema.demoSchema[0]) {
          el = haxElementToNode(schema.demoSchema[0]);        
        }
      }
      let demo = globalThis.document.querySelector('#demo');
      demo.innerHTML = '';
      demo.appendChild(el);
      let sample = globalThis.document.createElement('code-sample');
      sample.innerHTML = '<template>' + el.outerHTML + '</template>';
      let sampleWrapper = globalThis.document.querySelector('#codesample');
      sampleWrapper.innerHTML = '';
      sampleWrapper.appendChild(sample);
      const bodyObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          if (entry.target === globalThis.document.body) {
            const newHeight = entry.contentRect.height;
            parent.postMessage(
              '{"subject":"frameResize", "height":"' + entry.contentRect.height + '" }',
              "*",
            );
          }
        }
      });
      bodyObserver.observe(globalThis.document.body);
    }
    // generate example dynamically so we can use HAXProps if it exists
    getExample();
  </script>
</html>
`,
        },
      },
      'package.json': {
        file: {
          contents: `
            {
              "name": "${this.element} doc example",
              "type": "module",
              "dependencies": {
                "@haxtheweb/utils": "^10.0.0",
                "@haxtheweb/code-sample": "^10.0.2",
                "@haxtheweb/code-editor": "^10.0.2",
                "wc-dox": "^1.1.0",
                "${this.project}": "${this.version}"
              },
              "devDependencies": {
                "@web/dev-server": "0.4.6"
              },
              "scripts": {
                "start": "npm run web-dev-server",
                "web-dev-server": "web-dev-server"
              }
            }`,
        },
      },
      'web-dev-server.config.mjs': {
        file: {
          contents: `
const hmr = process.argv.includes('--hmr');
export default ({
  open: '/',
  watch: !hmr,
  https: true,
  dedupe: true,
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  appIndex: 'index.html',
});
`,
        }
      },
    };
    wc.innerHTML = ``;
    wcEl.innerHTML = '';
    wcEl.appendChild(wc);
    this.rebuilding = false;
  }

  static get properties() {
    return {
      ...super.properties,
      project: {
        type: String,
        reflect: true,
      },
      importpath: {
        type: String,
        reflect: true,
      },
      version: {
        type: String,
        reflect: true,
      },
      element: {
        type: String,
        reflect: true,
      },
      rebuilding: {
        type: Boolean,
        reflect: true,
      },
    }
  }

  static get styles() {
    return [super.styles,
      css`
        :host {
          display: block;
        }
      `
    ]
  }

  // take tag and convert it to a demo implementation
  async getExample(tagName, asText = true) {
    let el = globalThis.document.createElement(tagName);
    if (typeof el.haxProperties === 'function') {
      let schema = el.haxProperties();
      // resolve direct setting vs loading file
      if (typeof schema === "string") {
        schema = await fetch(schema).then((response) => {
          if (response && response.json) return response.json();
          return false;
        });
        el = haxElementToNode(schema.demoSchema[0]);
      }
    }
    if (asText) {
      return el.outerHTML;
    }
    return el;
  }

  render() {
    return html`
      <div id="webcontainer"></div>
    `;
  }

  _getDataString(data) {
    return JSON.stringify(data).replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }

  async codePenData() {
    let data = this._getDataString({
      title: `Demo of ${this.project} : ${this.version}`,
      html: await this.getExample(this.element),
      head: `<script>globalThis.WCGlobalCDNPath="https://cdn.hax.cloud/cdn/";</script><script src="https://cdn.hax.cloud/cdn/build.js"></script>`,
    });
    this.shadowRoot.querySelector('code-pen-button').setAttribute('data-string', data);
  }

    /**
   * haxProperties integration via file reference
   */
    static get haxProperties() {
      return new URL(`./${this.tag}.haxProperties.json`, import.meta.url)
        .href;
    }
}

globalThis.customElements.define(WebContainerDocPlayer.tag, WebContainerDocPlayer);