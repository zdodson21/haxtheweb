/**
 * Copyright 2024 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

import { ChatAgentModalStore } from "../chat-agent.js";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { autorun, toJS, } from "mobx";
import { html, css } from "lit";

class ChatDeveloperPanel extends DDD {

  static get tag() {
    return "chat-developer-panel";
  }

  constructor() {
    super();
    this.chatLog = [];
    this.engine = null;
    this.isFullView = null;
    
    autorun(() => {
      this.chatLog = toJS(ChatAgentModalStore.chatLog);
      this.engine = toJS(ChatAgentModalStore.engine);
      this.isFullView = toJS(ChatAgentModalStore.isFullView);
    });
  }

  static get styles() {
    return[
      super.styles,
      css`
        /* https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd */

        :host {
          container-type: inline-size;
          display: block;
        }

        .chat-developer-panel-wrapper {
          background-color: var(--ddd-theme-default-keystoneYellow);
          border-radius: var(--ddd-radius-sm);
          display: flex;
          flex-direction: column;
          gap: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-1) var(--ddd-spacing-1);
        }

        .console-table {
          align-items: center;
          display: flex;
          gap: var(--ddd-spacing-1);
          justify-content: space-between;
        }

        .switch-engine-controls {
          align-items: center;
          display: flex;
          justify-content: center;
        }

        button {
          align-items: center;
          background-color: #2b2a33;
          border-radius: var(--ddd-radius-sm);
          color: var(--ddd-theme-default-white);
          cursor: pointer;
          display: flex;
          gap: var(--ddd-spacing-1);
          justify-content: center;
        }
        
        button:hover, button:focus-visible {
          background-color: #52525e;
        }

        button > simple-icon-lite {
          --simple-icon-color: var(--ddd-theme-default-white);
        }

        simple-tooltip {
          --simple-tooltip-delay-in: 1000ms;
        }

        @container (max-width: 500px) {
          .btn-txt {
            display: none;
          }
        }

        @container (max-width: 180px) {
          .console-table {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media only screen and (max-height: 575px) {
          :host {
            display: none;
          }
        }
      `
    ];
  }

  render() {
    return html`
      <div class="chat-developer-panel-wrapper">

        <div class="console-table">
          <!-- Maybe convert buttons to simple-cta -->
          <button id="console-table-user" @click=${this.handleConsoleTableButton} aria-label="Console table user chat log">
            <div class="button-icon">
              <simple-icon-lite icon="hax:console-line"></simple-icon-lite> 
              <simple-icon-lite icon="lrn:user"></simple-icon-lite>
            </div>
            <div class="button-text">
              <span class="btn-txt">console.table() user chat log</span>
            </div> 
          </button>
          <simple-tooltip for="console-table-user" position="${this.isFullView ? "right" : "top"}">Print User Chat Log as Table to Console</simple-tooltip>

          <button id="console-table-merlin" @click=${this.handleConsoleTableButton} aria-label="Console table merlin chat log">
            <div class="button-icon">
              <simple-icon-lite icon="hax:console-line"></simple-icon-lite>
              <simple-icon-lite icon="hax:wizard-hat"></simple-icon-lite> 
            </div>
            <div class="button-text">
              <span class="btn-txt">console.table() merlin chat log</span>
            </div>
          </button>
          <simple-tooltip for="console-table-merlin" position="${this.isFullView ? "right" : "top"}">Print Merlin Chat Log as Table to Console</simple-tooltip>

          <button id="console-table-all" @click=${this.handleConsoleTableButton} aria-label="Console table entire chat log">
            <div class="button-icon">
              <simple-icon-lite icon="hax:console-line"></simple-icon-lite>
              <simple-icon-lite icon="book"></simple-icon-lite>
            </div>
            <div class="button-text">
              <span class="btn-txt">console.table() entire chat log</span>  
            </div>
          </button>
          <simple-tooltip for="console-table-all" position="${this.isFullView ? "left" : "top"}">Print Entire Chat Log as Table to Console</simple-tooltip>

          <button id="download-as-json" @click=${this.handleDownloadAsJsonButton} aria-label="Download chat log as .json">
            <div class="button-icon">
              <simple-icon-lite icon="icons:file-download"></simple-icon-lite>
              <simple-icon-lite icon="hax:code-json"></simple-icon-lite>
            </div>
            <div class="button-text">
              <span class="btn-txt">Download chat log as .json</span>
            </div>
          </button>
          <simple-tooltip for="download-as-json" position="${this.isFullView ? "left" : "top"}">Download Chat Log as .json</simple-tooltip>
        </div>

        <div class="switch-engine-controls" aria-label="Switch LLM Engine">
          <button id="switch-engine-btn">
          <div class="button-icon">
              <simple-icon-lite icon="hardware:memory"></simple-icon-lite>
            </div>
            <div class="button-text" @click=${this.handleSwitchEngineButton}>
              <span class="btn-txt">Switch LLM Engine</span> <span class="switch-engine-txt">(Current Engine = <em>${this.engine}</em>)</span>
            </div>
          </button>
        </div>
      </div>
    `;
  }

  /**
   * @description handles all console table buttons utilizing button id
   * @param {object} e - event
   */
  handleConsoleTableButton(e) {
    const TARGET = e.currentTarget.id;
    
    console.info(`HAX-DEV-MODE: ${TARGET} button pressed.`);

    switch (TARGET) {
      case "console-table-user":
        console.table(this.compileChatLog(ChatAgentModalStore.userName));
        break;
      case "console-table-merlin":
        console.table(this.compileChatLog("merlin"))
        break;
      case "console-table-all":
        console.table(this.chatLog)
        break;
    }
  }
  
  /**
   * @description compiles a smaller chat log for the given author of messages
   * @param {string} author - the name of the author of the messages. Either the user's name or "merlin".
   */
  compileChatLog(author) {
    ChatAgentModalStore.devStatement(`Compiling "${author}" chat log...`, 'info');
    
    let newChatLog = [];

    this.chatLog.forEach(object => {
      if (object.author === author) {
        newChatLog.push(object);
      }
    });

    return newChatLog;
  }

  /**
   * @description downloads the chat log as a .json file
   */
  handleDownloadAsJsonButton() {
    ChatAgentModalStore.devStatement(`Calling download funtion...`, 'info');

    ChatAgentModalStore.handleDownload('json');
  }

  /**
   * @description handles the functionality of the switch engine button
   */
  handleSwitchEngineButton() {
    switch (this.engine) {
      case "alfred":
        ChatAgentModalStore.engine = "robin";
        break;
      case "robin":
        ChatAgentModalStore.engine = "alfred";
        break;
    }

    ChatAgentModalStore.devStatement(`Engine switched to ${ChatAgentModalStore.engine}`, 'info');

    this.shadowRoot.querySelector(".switch-engine-txt").innerHTML = `(Current Engine = <em>${this.engine}</em>)`;
  }

  static get properties() {
    return {
      ...super.properties,

      isFullView: {
        type: Boolean,
        attribute: "is-full-view",
        reflect: true,
      },
    };
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ChatDeveloperPanel.tag, ChatDeveloperPanel);
export { ChatDeveloperPanel };