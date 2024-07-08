/**
 * Copyright 2024 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { ChatAgentModalStore } from "../chat-agent.js";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { html, css } from "lit";
import { autorun, toJS, } from "mobx";

class ChatInterface extends DDD {

  static get tag() {
    return "chat-interface";
  }

  constructor() {
    super();
    this.chatLog = [];
    this.developerModeEnabled = null;
    this.isFullView = null;
    this.isInterfaceHidden = null;
    this.hasEditorUI = null;
    
    autorun(() => {
      this.chatLog = toJS(ChatAgentModalStore.chatLog);
      this.developerModeEnabled = toJS(ChatAgentModalStore.developerModeEnabled);
      this.isFullView = toJS(ChatAgentModalStore.isFullView);
      this.isInterfaceHidden = toJS(ChatAgentModalStore.isInterfaceHidden);
      
      // TODO will change, brute forcing for now
      const tempSiteGrabber = document.querySelector("#site");
      this.isFullView ? tempSiteGrabber.style.width = "75%" : tempSiteGrabber.style.width = "100%";
      
      if (document.querySelector('haxcms-site-editor-ui')) {
        this.hasEditorUI = true;
      } else {
        this.hasEditorUI = false; 
      }
      console.log(hasEditorUI);
    })
  }

  // TODO may be best to just rewrite the CSS for full view
  static get styles() {
    return [
      super.styles,
      css`
        /* https://oer.hax.psu.edu/bto108/sites/haxcellence/documentation/ddd */
        
        :host {
          display: block;
          z-index: 999999;
          width: 100%;
        }

        /* Chat Interface Wrapper */
        .chat-interface-wrapper {
          background-color: transparent;
        }

        :host([is-full-view]) .chat-interface-wrapper {
          background-color: var(--ddd-theme-default-potentialMidnight);
          padding: var(--ddd-spacing-3);
          height: 100vh;
        }

        :host([is-interface-hidden]) .chat-interface-wrapper {
          display: none;
        }
        
        /* Chat Wrapper */
        .chat-wrapper {
          background-color: var(--data-theme-primary, var(--ddd-primary-1));
          padding: var(--ddd-spacing-0) var(--ddd-spacing-2) var(--ddd-spacing-2) var(--ddd-spacing-2);
          border-radius: var(--ddd-radius-sm);
          box-shadow: var(--ddd-boxShadow-xl);
        }
        
        :host([is-full-view]) .chat-wrapper {
          margin: var(--ddd-spacing-6) var(--ddd-spacing-0) var(--ddd-spacing-6) var(--ddd-spacing-0);
          height: 94%;
        } 
        
        :host([is-full-view][has-editor-ui]) .chat-wrapper {
          margin: var(--ddd-spacing-18) var(--ddd-spacing-0) var(--ddd-spacing-0) var(--ddd-spacing-0);
          height: 87%;
        } 
        
        :host([developer-mode]), .chat-wrapper {
          padding-top: var(--ddd-spacing-1);
        }
        
        /* Main Wrapper */
        .main-wrapper {
          display: flex;
          flex-direction: column;
        }

        :host([is-full-view]) .main-wrapper {
          height: 102%;
        }

        :host([is-full-view][developer-mode]) .main-wrapper {
          height: 88%;
        }
        
        /* Chat Container */
        .chat-container {
          width: 100%;
          background-color: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-sm);
          display: flex;
          flex-direction: column;
        }

        :host([is-full-view]) .chat-container {
          height: 92%;
        }
        
        :host([is-full-view][developer-mode]) .chat-container {
          height: 90%;
        }

        /* Chat Messages */
        .chat-messages {
          max-height: 300px;
          overflow-x: hidden;
          overflow-y: auto;
          scrollbar-width: thin;
        }
        
        :host([is-full-view]) .chat-messages {
          max-height: 100%;
          height: 100%;
        }

        /* TODO container queries, start by changing the margins (adjust heights of .chat-wrapper and .main-wrapper) */
      `
    ];
  }

  // TODO page scrolls down when new message is mapped
  render() {
    return html`
      <div class="chat-interface-wrapper">
        <div class="chat-wrapper">
          ${ChatAgentModalStore.developerModeEnabled ? html`
            <chat-developer-panel></chat-developer-panel>
          ` : ''}
          <div class="main-wrapper">
            <chat-control-bar></chat-control-bar>
            <div class="chat-container">
              <div class="chat-messages">
                  ${this.chatLog.map((message) => html`
                    <chat-message message="${message.message}" ?sent-prompt="${message.author === ChatAgentModalStore.userName}" ?suggested-prompts="${ChatAgentModalStore.currentSuggestions.length > 0}"></chat-message>
                  `)}
              </div>
              <chat-input placeholder="${ChatAgentModalStore.promptPlaceholder}"></chat-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      ...super.properties,
      chatLog: {
        type: Array,
      },
      developerModeEnabled: {
        type: Boolean,
        attribute: "developer-mode",
        reflect: true,
      },
      hasEditorUI: {
        type: Boolean,
        attribute: "has-editor-ui",
        reflect: true,
      },
      isFullView: {
        type: Boolean,
        attribute: "is-full-view",
        reflect: true,
      },
      isInterfaceHidden: {
        type: Boolean,
        attribute: "is-interface-hidden",
        reflect: true,
      },
    };
  }
}

globalThis.customElements.define(ChatInterface.tag, ChatInterface);
export { ChatInterface };