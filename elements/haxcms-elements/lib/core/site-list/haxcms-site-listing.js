/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { setPassiveTouchGestures } from "@polymer/polymer/lib/utils/settings.js";
import { afterNextRender } from "@polymer/polymer/lib/utils/render-status.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "@lrnwebcomponents/json-outline-schema/json-outline-schema.js";
import "@lrnwebcomponents/simple-toast/simple-toast.js";
import "@lrnwebcomponents/simple-modal/simple-modal.js";
import "@lrnwebcomponents/simple-datetime/simple-datetime.js";
import "@lrnwebcomponents/jwt-login/jwt-login.js";
import "@vaadin/vaadin-grid/vaadin-grid.js";
import "@vaadin/vaadin-grid/vaadin-grid-column.js";
import "@vaadin/vaadin-grid/vaadin-grid-sort-column.js";
import "@vaadin/vaadin-grid/vaadin-grid-filter-column.js";
import "@vaadin/vaadin-grid/vaadin-grid-selection-column.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
/**
 * `haxcms-site-listing`
 * `A listing of all sites being managed by this instance.`
 */
class HAXCMSSiteListing extends PolymerElement {
  /**
   * created life cycle
   */
  constructor() {
    super();
    this.SimpleColors = new SimpleColors();
    setPassiveTouchGestures(true);
    import("@lrnwebcomponents/simple-login/simple-login.js");
    import("@lrnwebcomponents/simple-login/lib/simple-login-avatar.js");
    import("@polymer/iron-image/iron-image.js");
    import("@lrnwebcomponents/simple-colors/lib/simple-colors-picker.js");
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/iron-icon/iron-icon.js");
    import("@polymer/paper-icon-button/paper-icon-button.js");
    import("@polymer/app-layout/app-header/app-header.js");
    import("@polymer/app-layout/app-toolbar/app-toolbar.js");
    import("@polymer/paper-item/paper-item.js");
    import("@polymer/paper-input/paper-input.js");
    import("@polymer/paper-dialog/paper-dialog.js");
    import("@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
    import("@polymer/paper-tooltip/paper-tooltip.js");
    import("@lrnwebcomponents/simple-picker/simple-picker.js");
    import("@lrnwebcomponents/simple-icon-picker/simple-icon-picker.js");
    import("@lrnwebcomponents/magazine-cover/magazine-cover.js");
    import("@lrnwebcomponents/eco-json-schema-form/eco-json-schema-form.js");
    import("@lrnwebcomponents/eco-json-schema-form/lib/eco-json-schema-object.js");
    window.HAXCMS = {};
    afterNextRender(this, function() {
      import("@polymer/iron-icons/iron-icons.js");
      import("@polymer/iron-icons/editor-icons.js");
      import("@polymer/iron-icons/notification-icons.js");
      import("@polymer/iron-icons/av-icons.js");
      import("@polymer/iron-icons/device-icons.js");
      import("@polymer/iron-icons/image-icons.js");
      import("@polymer/iron-icons/social-icons.js");
    });
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "haxcms-site-listing";
  }
  // render function
  static get template() {
    return html`
      <style>
        :host {
          --haxcms-site-listing-color-dark: var(--simple-colors-default-theme-blue-11);
          --haxcms-site-listing-color-light: #FFFFFF;
          --haxcms-site-listing-color-hover: var(--simple-colors-default-theme-blue-8);
          outline-color: var(--haxcms-site-listing-color-hover);
        }
        paper-icon-button {
          --paper-icon-button-ink-color: var(--haxcms-site-listing-color-light);
        }
        app-toolbar div.main-title {
          margin-left: 8px;
          font-size: 24px;
          min-width: 50px;
        }
        app-header {
          color: var(--haxcms-site-listing-color-light);
          @apply --layout-fixed-top;
          --app-header-background-rear-layer: {
            background-color: var(--haxcms-site-listing-color-dark);
          }
        }
        app-toolbar {
          color: var(--haxcms-site-listing-color-light);
          background-color: var(--haxcms-site-listing-color-dark);
        }
        vaadin-grid {
          margin-top: 64px;
          height: calc(100vh - 64px);
        }
        .login-prompt {
          margin: 80px auto 0;
          display: flex;
          justify-content: center;
        }
        .login-prompt[hidden] {
          display: none;
        }
        .login-prompt div {
          margin-right: 32px;
          font-size: 30px;
          width: 35%;
        }
        .login-prompt div#selfie {
          position: absolute;
          margin: 0;
        }
        .has-snap {
          z-index: 3;
        }
        .hide-camera {
          display:none;
        }
        .login-prompt div#selfie img {
          z-index: 2;
          position: absolute;
          margin: 0 0 0 -122.5px;
          width: 355px;
          height: 200px;
        }
        paper-dialog {
          width: 60vw;
          min-height: 60vh;
          top: 15vh;
        }
        h2.dialog-header {
          background-color: var(--haxcms-site-listing-color-dark);
          margin: 0;
          padding: 28px;
          color: var(--haxcms-site-listing-color-light);
        }
        .buttons {
          text-align: center;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          margin-top: 2em;
          color: var(--haxcms-site-listing-color-dark);
          font-weight: 500;
        }
        .action-button {
          width: 50%;
          height: 64px;
          background-color: var(--haxcms-site-listing-color-dark);
          color: var(--haxcms-site-listing-color-light);
          margin-right: 48px;
        }
        .action-button:hover,
        .action-button:active,
        .action-button:focus {
          background-color: var(--haxcms-site-listing-color-hover);
        }
        .action-button iron-icon {
          margin-right: 8px;
        }
        paper-input {
          --paper-input-container-focus-color: var(--haxcms-site-listing-color-hover);
        }
        #newsitecolor {
          padding: 4px;
          margin: 0;
          display: inline-flex;
          vertical-align: middle;
        }
        #newsitecolor > * {
          display: inline-flex;
          align-self: center;
          margin-right: 8px;
          --simple-colors-picker-preview-size: 20px;
        }
        .small-location {
          font-size: 11px;
          text-align: center;
          font-style: italic;
        }
        #loading {
          width: 100%;
          z-index: 1000;
          opacity: 0.8;
          padding: 16px;
          text-align: center;
          align-content: center;
          justify-content: center;
          height: 100vh;
          position: absolute;
          background-color: rgba(250, 250, 250, 0.8);
          transition: all linear 0.8s;
          visibility: visible;
        }
        #loading div {
          font-size: 32px;
          font-weight: bold;
          padding: 16px;
        }
        #loading[data-loading] {
          background-color: rgba(0, 0, 0, 0);
          opacity: 0;
          visibility: hidden;
        }
        a {
          text-decoration: none;
        }
        .site-title {
          font-size: 20px;
          color: black;
          text-align: center;
          width: 100%;
          text-transform: unset;
          min-width: unset;
        }
        .site-title:hover,
        .site-title:active,
        .site-title:focus {
          background-color: var(--haxcms-site-listing-color-hover);
          color: var(--haxcms-site-listing-color-light);
        }
        .operations paper-button {
          font-weight: 500;
          font-size: 20px;
          color: var(--haxcms-site-listing-color-light);
          margin: 0;
          padding: 8px;
          min-width: 100px;
          width: auto;
          display: inline-flex;
          height: 48px;
        }
        .operations paper-button:hover,
        .operations paper-button:active,
        .operations paper-button:focus {
          background-color: var(--haxcms-site-listing-color-light);
          color: var(--haxcms-site-listing-color-hover);
        }
        #add {
          background-color: var(--haxcms-site-listing-color-hover);
          color: (--haxcms-site-listing-color-light);
          transition: .2s all linear;
        }
        #add:hover,
        #add:active,
        #add:focus {
          background-color: var(--haxcms-site-listing-color-light);
          color: var(--haxcms-site-listing-color-hover);
        }

        .selected-operations {
          margin: 0 16px;
          transition: 0.3s linear all;
          display: inline-flex;
          visibility: visible;
          opacity: 1;
          border-left: 2px solid var(--haxcms-site-listing-color-light);
          border-right: 2px solid var(--haxcms-site-listing-color-light);
          height: 64px;
        }
        .selected-operations[data-hidden] {
          visibility: hidden;
          opacity: 0;
        }
        .selected-operations paper-button {
          background-color: var(--haxcms-site-listing-color-light);
          font-weight: 500;
          font-size: 16px;
          color: var(--haxcms-site-listing-color-dark);
          margin: 0;
          min-width: unset;
          margin: 8px;
          height: 48px;
        }
        .selected-operations paper-button:active,
        .selected-operations paper-button:hover,
        .selected-operations paper-button:focus {
          background-color: var(--haxcms-site-listing-color-hover);
          color: var(--haxcms-site-listing-color-light); !important;
        }
        .danger {
          color: var(--simple-colors-default-theme-red-7) !important;
        }
        .danger:hover {
          color: var(--haxcms-site-listing-color-light) !important;
        }
        #newsiteicon {
          display: inline-flex;
        }
        eco-json-schema-object {
          --eco-json-schema-object-form: {
            -ms-flex: unset;
            -webkit-flex: unset;
            flex: unset;
            -webkit-flex-basis: unset;
            flex-basis: unset;
          }
        }
        #configform {
          --eco-json-schema-object-form: {
            display: block !important;
          }
        }
      </style>
      <div>
        <jwt-login
          id="jwt"
          method="[[method]]"
          body="[[jwtBody]]"
          url="[[__loginPath]]"
          logout-url="[[__logoutPath]]"
          jwt="{{jwt}}"
        ></jwt-login>
        <iron-ajax
          id="loaddata"
          auto=""
          loading="{{__loading}}"
          url="[[dataSource]]"
          handle-as="json"
          debounce-duration="250"
          last-response="{{sitesResponse}}"
        ></iron-ajax>
        <iron-ajax
          id="createrequest"
          method="[[method]]"
          body="[[createParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__createNewSitePath]]"
          handle-as="json"
          on-response="handleCreateResponse"
        ></iron-ajax>
        <iron-ajax
          id="downloadrequest"
          method="[[method]]"
          body="[[downloadParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__downloadSitePath]]"
          handle-as="json"
          on-response="handleDownloadResponse"
        ></iron-ajax>
        <iron-ajax
          id="archiverequest"
          method="[[method]]"
          body="[[archiveParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__archiveSitePath]]"
          handle-as="json"
          on-response="handleArchiveResponse"
        ></iron-ajax>
        <iron-ajax
          id="deleterequest"
          method="[[method]]"
          body="[[deleteParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__deleteSitePath]]"
          handle-as="json"
          on-response="handleDeleteResponse"
        ></iron-ajax>
        <iron-ajax
          id="clonerequest"
          method="[[method]]"
          body="[[cloneParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__cloneSitePath]]"
          handle-as="json"
          on-response="handleCloneResponse"
        ></iron-ajax>
        <iron-ajax
          id="publishrequest"
          method="[[method]]"
          body="[[publishParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__publishSitePath]]"
          handle-as="json"
          on-response="handlePublishResponse"
        ></iron-ajax>
        <iron-ajax
          id="getconfigrequest"
          method="[[method]]"
          body="[[configParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__getConfigPath]]"
          handle-as="json"
          on-response="handleConfigResponse"
        ></iron-ajax>
        <iron-ajax
          id="setconfigrequest"
          method="[[method]]"
          body="[[setConfigParams]]"
          headers='{"Authorization": "Bearer [[jwt]]"}'
          content-type="application/json"
          url="[[__setConfigPath]]"
          handle-as="json"
          on-response="handleSetConfigResponse"
        ></iron-ajax>
      </div>
      <div id="loading" data-loading\$="[[!__loading]]">
        <elmsln-loading size="large"></elmsln-loading>
        <div>Loading..</div>
      </div>
      <app-header reveals>
        <app-toolbar>
          <slot name="app-header-pre"></slot>
          <div class="operations">
            <paper-button
              on-click="_addTap"
              id="add"
              raised
              hidden$="[[!loggedIn]]"
            >
              <iron-icon icon="icons:add"></iron-icon> Create site
            </paper-button>
          </div>
          <div class="main-title">[[title]]</div>
          <div class="selected-operations" data-hidden$="[[!hasSelectedItems]]">
            <paper-button on-click="_bulkSitesConfirm" id="publish" raised>
              <iron-icon icon="editor:publish"></iron-icon> Publish
            </paper-button>
            <paper-button on-click="_bulkSitesConfirm" id="clone" raised>
              <iron-icon icon="icons:content-copy"></iron-icon> Clone
            </paper-button>
            <paper-button on-click="_bulkSitesConfirm" id="download" raised>
              <iron-icon icon="icons:file-download"></iron-icon> Download
            </paper-button>
            <paper-button on-click="_bulkSitesConfirm" id="archive" raised>
              <iron-icon icon="icons:archive"></iron-icon> Archive
            </paper-button>
            <paper-button
              on-click="_bulkSitesConfirm"
              id="delete"
              raised
              class="danger"
            >
              <iron-icon icon="icons:delete-forever"></iron-icon> Delete
            </paper-button>
          </div>
          <div class="operations">
            <paper-button
              on-click="_settingsTap"
              id="settings"
              raised
              hidden$="[[!showSpecialButtons(hideGlobalSettings,loggedIn)]]"
            >
              <iron-icon icon="icons:settings"></iron-icon> Settings
            </paper-button>
            <paper-button
              hidden$="[[!showSpecialButtons(hideLogin,loggedIn)]]"
              on-click="_loginUserRoutine"
              id="login"
              ><iron-icon icon="[[__loginIcon]]"></iron-icon>
              [[__loginText]]</paper-button
            >
          </div>
        </app-toolbar>
      </app-header>

      <vaadin-grid
        hidden$="[[!loggedIn]]"
        id="grid"
        items="[[sites]]"
        theme="row-dividers"
        column-reordering-allowed
        multi-sort
      >
        <vaadin-grid-selection-column
          auto-select
          frozen
        ></vaadin-grid-selection-column>
        <vaadin-grid-filter-column width="6em" path="title">
          <template>
            <a tabindex="-1" href$="[[item.location]]" target="_blank"
              ><paper-button raised class="site-title"
                >[[item.title]]
                <iron-icon
                  style="width:12px;height:12px;"
                  icon="icons:launch"
                ></iron-icon
              ></paper-button>
              <div class="small-location">[[cleanLocation(item.location)]]</div>
            </a>
          </template>
        </vaadin-grid-filter-column>
        <vaadin-grid-filter-column
          width="2em"
          path="metadata.theme.name"
          header="Theme"
        ></vaadin-grid-filter-column>
        <vaadin-grid-sort-column
          width="1em"
          path="metadata.pageCount"
          header="Pages"
        ></vaadin-grid-sort-column>
        <vaadin-grid-sort-column
          width="1em"
          header="Last published"
          path="metadata.lastPublished"
        >
          <template>
            <template is="dom-if" if="[[item.metadata.lastPublished]]">
              <simple-datetime
                format="M jS, Y"
                timestamp="[[item.metadata.lastPublished]]"
                unix
              ></simple-datetime>
            </template>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-sort-column
          width="1em"
          header="Updated"
          path="metadata.updated"
        >
          <template>
            <template is="dom-if" if="[[item.metadata.updated]]">
              <simple-datetime
                format="M jS, Y"
                timestamp="[[item.metadata.updated]]"
                unix
              ></simple-datetime>
            </template>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-sort-column
          width="1em"
          header="Created"
          path="metadata.created"
        >
          <template>
            <template is="dom-if" if="[[item.metadata.created]]">
              <simple-datetime
                format="M jS, Y"
                timestamp="[[item.metadata.created]]"
                unix
              ></simple-datetime>
            </template>
          </template>
        </vaadin-grid-sort-column>
        <vaadin-grid-column width="1em" header="Icon">
          <template
            ><iron-icon icon="[[item.metadata.icon]]"></iron-icon
          ></template>
        </vaadin-grid-column>
        <vaadin-grid-column width="1em" header="Color">
          <template>
            <div
              style$="border:1px solid black;width:48px;height:48px;background-color:[[item.metadata.hexCode]];"
            ></div>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column width="1em" header="Banner">
          <template
            ><iron-image
              sizing="contain"
              preload
              src$="[[item.metadata.image]]"
              style="width:100px; height:48px;"
            ></iron-image
          ></template>
        </vaadin-grid-column>
      </vaadin-grid>
      <div class="login-prompt" hidden$="[[loggedIn]]">
        <div>
          <h1>Log into HAXcms</h1>
          <p>
            Hey, I mean we think you look awesome, don't get us wrong. We just
            need more than your mug in order to let you into the future.
          </p>
          <p>
            So please. please please please.... login and get this party started
            :)
          </p>
        </div>
        <simple-login>
          <simple-login-avatar>
            <div id="selfie"></div>
            <simple-login-camera id="camera" autoplay></simple-login-camera>
          </simple-login-avatar>
          <paper-button id="snap" raised slot="buttons"
            >Snap photo</paper-button
          >
          <paper-button id="newsnap" raised slot="buttons"
            >Clear photo</paper-button
          >
        </simple-login>
      </div>
      <paper-dialog id="confirm">
        <h2 class="dialog-header">
          [[activeOpertion]] these [[selectedItems.length]] sites
        </h2>
        <paper-dialog-scrollable>
          <ul>
            <dom-repeat items="[[selectedItems]]" as="site">
              <template>
                <li>[[site.title]]</li>
              </template>
            </dom-repeat>
          </ul>
        </paper-dialog-scrollable>
        <div class="buttons">
          <paper-button
            on-click="_confirmBulkOperation"
            dialog-confirm
            id="bulksites"
            class="action-button"
            raised
            ><iron-icon icon="icons:thumb-up"></iron-icon> Yes,
            [[activeOpertion]]</paper-button
          >
          <paper-button class="action-button" dialog-dismiss
            ><iron-icon icon="icons:thumb-down"></iron-icon>
            Cancel</paper-button
          >
        </div>
      </paper-dialog>
      <paper-dialog id="newdialog">
        <h2 class="dialog-header">Create new site</h2>
        <div>
          <paper-input
            id="newsitetitle"
            label="Title"
            required
            autofocus
            value="{{siteTitle}}"
          ></paper-input>
          <paper-input
            id="newsitedescription"
            label="Description"
          ></paper-input>
          <paper-input
            id="newsiteimage"
            label="Image"
            value="[[activeItem.metadata.image]]"
          ></paper-input>
          <label for="newsitecolor">Select a color:</label>
          <simple-colors-picker id="newsitecolor"></simple-colors-picker>
          <simple-picker id="newsitetheme" label="Theme"></simple-picker>
          <label for="newsiteicon">Select an icon:</label>
          <simple-icon-picker
            id="newsiteicon"
            hide-option-labels
            value="[[activeItem.metadata.icon]]"
          ></simple-icon-picker>
        </div>
        <div class="buttons">
          <paper-button
            on-click="_createSite"
            class="action-button"
            dialog-confirm
            id="create"
            raised
            ><iron-icon icon="icons:home"></iron-icon> Create your new
            site!</paper-button
          >
          <paper-button class="action-button" dialog-dismiss
            ><iron-icon icon="icons:thumb-down"></iron-icon>
            Cancel</paper-button
          >
        </div>
      </paper-dialog>
      <paper-dialog id="settingsdialog">
        <h2 class="dialog-header">Edit HAXCMS configuration</h2>
        <paper-dialog-scrollable>
          <eco-json-schema-object id="settingsform"></eco-json-schema-object>
        </paper-dialog-scrollable>
        <div class="buttons">
          <paper-button
            on-click="_saveConfig"
            dialog-confirm
            id="saveconfig"
            class="action-button"
            raised
            ><iron-icon icon="icons:save"></iron-icon> Save</paper-button
          >
          <paper-button class="action-button" dialog-dismiss
            ><iron-icon icon="icons:thumb-down"></iron-icon>
            Cancel</paper-button
          >
        </div>
      </paper-dialog>
    `;
  }
  /**
   * Parse JSON Outline Schema for the items and bind that to sites
   */
  _sitesResponseChanged(newValue, oldValue) {
    if (newValue) {
      if (typeof newValue.items !== typeof undefined) {
        this.title = newValue.title;
        this.set("sites", []);
        this.set("sites", newValue.items);
        this.notifyPath("sites.*");
      }
    }
  }
  cleanLocation(location) {
    return location.replace("/_sites/", "").replace("/", "");
  }
  static get properties() {
    return {
      __loading: {
        type: Boolean
      },
      jwtBody: {
        type: Object,
        value: {}
      },
      /**
       * Object, JSON Outline Schema format
       */
      sitesResponse: {
        type: Object,
        notify: true,
        observer: "_sitesResponseChanged"
      },
      method: {
        type: String,
        value: "POST"
      },
      /**
       * Title
       */
      title: {
        type: String,
        value: "My sites"
      },
      /**
       * Site title
       */
      siteTitle: {
        type: String
      },
      sites: {
        type: Array,
        notify: true
      },
      /**
       * Base path of where this is located.
       */
      basePath: {
        type: String
      },
      /**
       * If we should hide the login button all the time or not
       */
      hideLogin: {
        type: Boolean,
        value: false
      },
      /**
       * If we should hide the login button all the time or not
       */
      hideGlobalSettings: {
        type: Boolean,
        value: false
      },
      /**
       * Data Source to power the loading of sites in JSON Outline Schema format.
       */
      dataSource: {
        type: String,
        observer: "_dataSourceChanged"
      },
      /**
       * JSON Web token
       */
      jwt: {
        type: String,
        notify: true,
        observer: "_jwtChanged"
      },
      /**
       * Request params for creating a new site
       */
      createParams: {
        type: Object,
        value: {}
      },
      downloadParams: {
        type: Object,
        value: {}
      },
      deleteParams: {
        type: Object,
        value: {}
      },
      cloneParams: {
        type: Object,
        value: {}
      },
      publishParams: {
        type: Object,
        value: {}
      },
      archiveParams: {
        type: Object,
        value: {}
      },
      configParams: {
        type: Object,
        value: {}
      },
      setConfigParams: {
        type: Object,
        value: {}
      },
      activeOpertion: {
        type: String
      },
      selectedItems: {
        type: Array,
        value: [],
        observer: "_selectedItemsChanged"
      },
      /**
       * Active item that's being reviewed / has bubbled up.
       */
      activeItem: {
        type: Object,
        notify: true
      },
      /**
       * Logged in state
       */
      loggedIn: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true,
        observer: "_loggedInChanged"
      },
      /**
       * Edit mode
       */
      editMode: {
        type: Boolean,
        notify: true,
        reflectToAttribute: true,
        value: false,
        observer: "_editModeChanged"
      },
      hasSelectedItems: {
        type: Boolean,
        value: false
      },
      hideCamera: {
        type: Boolean,
        value: false
      }
    };
  }
  /**
   * Show the login button if we have cause
   */
  showSpecialButtons(hideButton, loggedIn) {
    if (hideButton) {
      return false;
    }
    if (!loggedIn) {
      return false;
    }
    return true;
  }
  _selectedItemsChanged(newValue) {
    if (newValue && newValue.length > 0) {
      this.hasSelectedItems = true;
    } else {
      this.hasSelectedItems = false;
    }
  }
  _dataSourceChanged(newValue) {
    if (newValue) {
      this._dataSource = newValue + "?" + Math.floor(Date.now() / 1000);
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _jwtLoggedIn(e) {
    if (e.detail) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _editModeChanged(newValue) {
    if (newValue) {
      this.__editIcon = "icons:check";
    } else {
      this.__editIcon = "icons:create";
    }
  }
  /**
   * Open the new dialog when tapped
   */
  _addTap() {
    // reset activeItem
    this.set("activeItem", {});
    this.set("activeItem", {
      id: false,
      title: "",
      description: "",
      metadata: {
        siteName: "",
        theme: "simple-blog",
        image: "assets/banner.jpg",
        color: "blue",
        icon: "icons:add-circle-outline"
      }
    });
    this.shadowRoot.querySelector("#newdialog").opened = true;
  }
  /**
   * Login state changed
   */
  _loggedInChanged(newValue, oldValue) {
    if (typeof oldValue !== typeof undefined) {
      if (newValue) {
        this.__loginText = "Log out";
        this.__loginIcon = "icons:account-circle";
        const evt = new CustomEvent("simple-toast-show", {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: {
            text: "Welcome, log in successful!",
            duration: 4000
          }
        });
        this.dispatchEvent(evt);
        this.shadowRoot.querySelector("#add").hidden = false;
      } else {
        this.__loginText = "Log in";
        this.__loginIcon = "icons:power-settings-new";
        const evt = new CustomEvent("simple-toast-show", {
          bubbles: true,
          composed: true,
          cancelable: true,
          detail: {
            text: "You logged out",
            duration: 4000
          }
        });
        this.dispatchEvent(evt);
        this.shadowRoot.querySelector("#add").hidden = true;
      }
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _jwtChanged(newValue) {
    if (newValue) {
      this.__loginText = "Log out";
      this.__loginIcon = "icons:account-circle";
    } else {
      this.__loginText = "Log in";
      this.__loginIcon = "icons:power-settings-new";
    }
  }
  /**
   * Request a user login if we need one or log out
   */
  _loginUserRoutine(e) {
    this.shadowRoot.querySelector("#jwt").toggleLogin();
  }
  /**
   * Use events for real value in theme.
   */
  _themeChanged(e) {
    // while not the actual spec for our theme metadata, this is the primary key
    // so the backend can update it correctly on response
    if (e.detail.value) {
      this.set("activeItem.metadata.theme", e.detail.value);
      this.notifyPath("activeItem.metadata.theme");
    }
  }
  /**
   * Use events for real value in color area.
   */
  _colorChanged(e) {
    this.set("activeItem.metadata.cssVariable", e.detail.value);
    this.notifyPath("activeItem.metadata.cssVariable");
    this.set(
      "activeItem.metadata.hexCode",
      this.SimpleColors.colors[
        e.detail.value
          .replace("--simple-colors-default-theme-", "")
          .replace("-7", "")
      ][6]
    );
    this.notifyPath("activeItem.metadata.hexCode");
  }
  /**
   * Toggle edit state
   */
  _editTap(e) {
    this.editMode = !this.editMode;
  }
  /**
   * _settingsTap
   */
  _settingsTap(e) {
    this._loadConfig();
    this.shadowRoot.querySelector("#settingsdialog").opened = true;
    var evt = document.createEvent("UIEvents");
    evt.initUIEvent("resize", true, false, window, 0);
    window.dispatchEvent(evt);
  }
  /**
   * force the request to regenerate
   */
  refreshData(e) {
    this.shadowRoot.querySelector("#loaddata").generateRequest();
  }
  _gridSelectedItemsChanged(e) {
    // skip splicing, just rebuild whole object
    this.set("selectedItems", []);
    this.set("selectedItems", e.path[0].selectedItems);
  }
  /**
   * Attached life cycle
   */
  connectedCallback() {
    super.connectedCallback();
    // if we're on an insecure environment, hide the buttons for camera
    if (!navigator.mediaDevices) {
      this.shadowRoot.querySelector("#snap").style.display = "none";
      this.shadowRoot.querySelector("#newsnap").style.display = "none";
    }
    if (this.jwt) {
      this.loggedIn = true;
    }
    window.addEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
    afterNextRender(this, function() {
      if (this.hideCamera) {
        this.shadowRoot.querySelector("#newsnap").classList.add("hide-camera");
        this.shadowRoot.querySelector("#snap").classList.add("hide-camera");
        this.shadowRoot.querySelector("#camera").classList.add("hide-camera");
      } else {
        import("@lrnwebcomponents/simple-login/lib/simple-login-camera.js");
      }
      this.addEventListener(
        "simple-login-login",
        this.loginPromptEvent.bind(this)
      );
      this.shadowRoot
        .querySelector("#grid")
        .addEventListener(
          "selected-items-changed",
          this._gridSelectedItemsChanged.bind(this)
        );
      this.__loginPath = window.appSettings.login;
      this.__logoutPath = window.appSettings.logout;
      let themeOptions = [];
      let firstTheme = null;
      for (var theme in window.appSettings.themes) {
        let item = [
          {
            alt: window.appSettings.themes[theme].name,
            value: theme
          }
        ];
        themeOptions.push(item);
        if (!firstTheme) {
          firstTheme = theme;
        }
      }
      this.shadowRoot.querySelector("#newsitetheme").options = themeOptions;
      if (!this.shadowRoot.querySelector("#newsitetheme").value) {
        this.shadowRoot.querySelector("#newsitetheme").value = firstTheme;
      }
      this.__setConfigPath = window.appSettings.setConfigPath;
      this.__getConfigPath = window.appSettings.getConfigPath;
      this.__createNewSitePath = window.appSettings.createNewSitePath;
      this.__downloadSitePath = window.appSettings.downloadSitePath;
      this.__archiveSitePath = window.appSettings.archiveSitePath;
      this.__cloneSitePath = window.appSettings.cloneSitePath;
      this.__publishSitePath = window.appSettings.publishSitePath;
      this.__revertSitePath = window.appSettings.revertSitePath;
      this.__deleteSitePath = window.appSettings.deleteSitePath;
      // case where backend has set the JWT ahead of time
      // useful for systems that are managing login above HAXcms
      if (window.appSettings.jwt) {
        this.set("jwt", window.appSettings.jwt);
      }
      document.body.addEventListener(
        "haxcms-load-site",
        this.loadActiveSite.bind(this)
      );
      this.shadowRoot
        .querySelector("#newsitetheme")
        .addEventListener("change", this._themeChanged.bind(this));
      this.shadowRoot
        .querySelector("#newsitecolor")
        .addEventListener("change", this._colorChanged.bind(this));
      this.shadowRoot
        .querySelector("#snap")
        .addEventListener("click", this.snapPhoto.bind(this));
      this.shadowRoot
        .querySelector("#newsnap")
        .addEventListener("click", this.clearPhoto.bind(this));
    });
  }
  async snapPhoto(e) {
    const camera = this.shadowRoot.querySelector("#camera");
    let img = await camera.takeASnap().then(camera.renderImage);
    camera.removeAttribute("autoplay");
    const selfie = this.shadowRoot.querySelector("#selfie");
    selfie.innerHTML = "";
    selfie.appendChild(img);
    selfie.classList.add("has-snap");
  }
  clearPhoto(e) {
    const camera = this.shadowRoot.querySelector("#camera");
    camera.setAttribute("autoplay", "autoplay");
    const selfie = this.shadowRoot.querySelector("#selfie");
    selfie.innerHTML = "";
    selfie.classList.remove("has-snap");
  }
  loginPromptEvent(e) {
    this.set("jwtBody", {});
    this.set("jwtBody", {
      u: e.detail.u,
      p: e.detail.p
    });
    this._loginUserRoutine(e);
  }
  /**
   * detached life cycle
   */
  disconnectedCallback() {
    window.removeEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
    document.body.removeEventListener(
      "haxcms-load-site",
      this.loadActiveSite.bind(this)
    );
    this.removeEventListener(
      "simple-login-login",
      this.loginPromptEvent.bind(this)
    );
    this.shadowRoot
      .querySelector("#snap")
      .removeEventListener("click", this.snapPhoto.bind(this));
    this.shadowRoot
      .querySelector("#newsnap")
      .removeEventListener("click", this.clearPhoto.bind(this));
    this.shadowRoot
      .querySelector("#grid")
      .removeEventListener(
        "selected-items-changed",
        this._gridSelectedItemsChanged.bind(this)
      );
    this.shadowRoot
      .querySelector("#newsitetheme")
      .removeEventListener("change", this._themeChanged.bind(this));
    this.shadowRoot
      .querySelector("#newsitecolor")
      .removeEventListener("change", this._colorChanged.bind(this));
    this.shadowRoot
      .querySelector("#jwt")
      .removeEventListener("jwt-logged-in", this._jwtLoggedIn.bind(this));
    super.disconnectedCallback();
  }
  /**
   * Ready life cycle
   */
  ready() {
    super.ready();
    this.shadowRoot
      .querySelector("#jwt")
      .addEventListener("jwt-logged-in", this._jwtLoggedIn.bind(this));
    window.JSONOutlineSchema.requestAvailability();
    window.SimpleModal.requestAvailability();
    window.SimpleToast.requestAvailability();
  }
  /**
   * Simple method of loading whatever's been dictated as active.
   */
  loadActiveSite(e) {
    let findSite = this.sites.filter(site => {
      if (site.id !== e.detail.id) {
        return false;
      }
      return true;
    });
    let item = findSite.pop();
    // if location isn't there, push out to it
    if (item.location) {
      window.open(item.location);
    } else {
      window.open(this.basePath + "_sites/" + item.metadata.siteName + "/");
    }
  }
  /**
   * Create a new site button was clicked
   */
  _createSite(e) {
    // ship off a new call
    this.set(
      "createParams.siteName",
      this.shadowRoot.querySelector("#newsitetitle").value
    );
    this.notifyPath("createParams.siteName");
    this.set(
      "createParams.description",
      this.shadowRoot.querySelector("#newsitedescription").value
    );
    this.notifyPath("createParams.description");
    // need to pull this from the active item bc of data binding silly
    this.set("createParams.theme", this.activeItem.metadata.theme);
    this.notifyPath("createParams.theme");
    this.set("createParams.hexCode", this.activeItem.metadata.hexCode);
    this.notifyPath("createParams.hexCode");
    this.set("createParams.cssVariable", this.activeItem.metadata.cssVariable);
    this.notifyPath("createParams.cssVariable");
    this.set(
      "createParams.image",
      this.shadowRoot.querySelector("#newsiteimage").value
    );
    this.notifyPath("createParams.image");
    this.set(
      "createParams.icon",
      this.shadowRoot.querySelector("#newsiteicon").icon
    );
    this.notifyPath("createParams.icon");
    // pass along the jwt for user "session" purposes
    this.set("createParams.jwt", this.jwt);
    this.notifyPath("createParams.jwt");
    this.shadowRoot.querySelector("#newsitetitle").value = "";
    this.shadowRoot.querySelector("#newsitedescription").value = null;
    this.shadowRoot.querySelector("#createrequest").generateRequest();
  }
  /**
   * Download site button was hit, package and send a zip
   */
  async _downloadSites(e) {
    // ship off a new call
    // pass along the jwt for user "session" purposes
    this.set("downloadParams.jwt", this.jwt);
    this.notifyPath("downloadParams.jwt");
    for (var i in this.selectedItems) {
      this.set("activeItem", {});
      this.set("activeItem", this.selectedItems[i]);
      this.set(
        "downloadParams.siteName",
        this.selectedItems[i].metadata.siteName
      );
      this.notifyPath("downloadParams.siteName");
      await this.shadowRoot.querySelector("#downloadrequest").generateRequest();
    }
  }
  /**
   * Archive sites
   */
  async _archiveSites(e) {
    // ship off a new call
    // pass along the jwt for user "session" purposes
    this.set("archiveParams.jwt", this.jwt);
    this.notifyPath("archiveParams.jwt");
    for (var i in this.selectedItems) {
      this.set("activeItem", {});
      this.set("activeItem", this.selectedItems[i]);
      this.set(
        "archiveParams.siteName",
        this.selectedItems[i].metadata.siteName
      );
      this.notifyPath("archiveParams.siteName");
      await this.shadowRoot.querySelector("#archiverequest").generateRequest();
    }
  }
  /**
   * Confirm delete
   */
  _bulkSitesConfirm(e) {
    this.activeOpertion = e.target.id;
    this.shadowRoot.querySelector("#confirm").opened = true;
  }
  async _confirmBulkOperation(e) {
    await this["_" + this.activeOpertion + "Sites"]();
    this.activeOpertion = "";
    this.shadowRoot.querySelector("#grid").set("selectedItems", []);
  }
  /**
   * Delete sites
   */
  async _deleteSites(e) {
    // ship off a new call
    // pass along the jwt for user "session" purposes
    this.set("deleteParams.jwt", this.jwt);
    this.notifyPath("deleteParams.jwt");
    for (var i in this.selectedItems) {
      this.set("activeItem", {});
      this.set("activeItem", this.selectedItems[i]);
      this.set(
        "deleteParams.siteName",
        this.selectedItems[i].metadata.siteName
      );
      this.notifyPath("deleteParams.siteName");
      await this.shadowRoot.querySelector("#deleterequest").generateRequest();
    }
  }
  /**
   * Clone sites
   */
  async _cloneSites(e) {
    // @todo obtain confirmation first
    // ship off a new call
    // pass along the jwt for user "session" purposes
    this.set("cloneParams.jwt", this.jwt);
    this.notifyPath("cloneParams.jwt");
    for (var i in this.selectedItems) {
      this.set("activeItem", {});
      this.set("activeItem", this.selectedItems[i]);
      this.set("cloneParams.siteName", this.selectedItems[i].metadata.siteName);
      this.notifyPath("cloneParams.siteName");
      await this.shadowRoot.querySelector("#clonerequest").generateRequest();
    }
  }
  /**
   * Clone sites
   */
  async _publishSites(e) {
    // @todo obtain confirmation first
    // ship off a new call
    // pass along the jwt for user "session" purposes
    this.set("publishParams.jwt", this.jwt);
    this.notifyPath("publishParams.jwt");
    for (var i in this.selectedItems) {
      this.set("activeItem", {});
      this.set("activeItem", this.selectedItems[i]);
      this.set(
        "publishParams.siteName",
        this.selectedItems[i].metadata.siteName
      );
      this.notifyPath("publishParams.siteName");
      await this.shadowRoot.querySelector("#publishrequest").generateRequest();
    }
  }
  /**
   * Load configuration
   */
  _loadConfig() {
    // pass along the jwt for user "session" purposes
    this.set("configParams.jwt", this.jwt);
    this.notifyPath("configParams.jwt");
    this.set("configParams.token", this.createParams.token);
    this.notifyPath("configParams.token");
    this.shadowRoot.querySelector("#getconfigrequest").generateRequest();
  }
  /**
   * Save configuration
   */
  _saveConfig(e) {
    window.HAXCMS.config.values = this.shadowRoot.querySelector(
      "#settingsform"
    ).value;
    // pass along the jwt for user "session" purposes
    this.set("setConfigParams.values", {});
    this.set("setConfigParams.values", window.HAXCMS.config.values);
    this.notifyPath("setConfigParams.values.*");
    this.set("setConfigParams.jwt", this.jwt);
    this.notifyPath("setConfigParams.jwt");
    this.set("setConfigParams.token", this.createParams.token);
    this.notifyPath("setConfigParams.token");
    this.shadowRoot.querySelector("#setconfigrequest").generateRequest();
  }
  /**
   * Standard response that refreshes the listing too
   */
  standardResponse(toast, refresh = true) {
    if (refresh) {
      this.dispatchEvent(
        new CustomEvent("sites-listing-refresh-data", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: true
        })
      );
    }
    this.dispatchEvent(
      new CustomEvent("simple-toast-show", {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          text: toast,
          duration: 5000
        }
      })
    );
  }
  /**
   * Create a new site button was clicked
   */
  handleCreateResponse(e) {
    // update the listing data
    this._dataSource = this.dataSource + "?" + Math.floor(Date.now() / 1000);
    this.standardResponse(e.detail.response.title + " created!");
  }
  handleConfigResponse(e) {
    window.HAXCMS.config = e.detail.response;
    this.shadowRoot
      .querySelector("#settingsform")
      .set("schema", window.HAXCMS.config.schema);
    this.shadowRoot
      .querySelector("#settingsform")
      .set("value", window.HAXCMS.config.values);
  }
  handleSetConfigResponse(e) {
    this.shadowRoot.querySelector("#settingsdialog").opened = false;
    this.standardResponse("HAXCMS configuration updated!");
  }
  /**
   * Download a site
   */
  handleDownloadResponse(e) {
    let element = document.createElement("a");
    element.setAttribute("href", e.detail.response.link);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    this.standardResponse(this.activeItem.title + " downloaded!");
  }
  handleArchiveResponse(e) {
    this.standardResponse(this.activeItem.title + " archived!");
  }
  handleDeleteResponse(e) {
    this.standardResponse(this.activeItem.title + " deleted!");
  }
  handleCloneResponse(e) {
    this.standardResponse(this.activeItem.title + " cloned!");
  }
  handlePublishResponse(e) {
    this.standardResponse(this.activeItem.title + " published!");
  }
}
window.customElements.define(HAXCMSSiteListing.tag, HAXCMSSiteListing);
export { HAXCMSSiteListing };
