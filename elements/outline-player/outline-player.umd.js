!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-git-corner.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js"),require("@polymer/app-layout/app-drawer-layout/app-drawer-layout.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("lit"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js"),require("@polymer/polymer/lib/elements/custom-style.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-git-corner.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-title.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js","@polymer/app-layout/app-drawer-layout/app-drawer-layout.js","@polymer/app-layout/app-drawer/app-drawer.js","lit","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js","@polymer/polymer/lib/elements/custom-style.js"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).OutlinePlayer={},e.$$0,null,null,null,null,null,null,null,null,null,null,e.lit,e.HAXCMSLitElementTheme_js,e.simpleColors_js,e.haxcmsSiteStore_js,e.mobx)}(this,(function(e,n,t,i,o,r,s,l,a,c,p,u,d,m,b,f,h){"use strict";function y(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var v,g,w=y(n);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){k(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,A(i.key),i)}}function k(e,n,t){return(n=A(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function P(e,n){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},P(e,n)}function S(e,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=_(e);if(n){var o=_(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return S(this,t)}}function C(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=_(e)););return e}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var i=C(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},E.apply(this,arguments)}function z(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function M(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return R(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return R(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function A(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}var T=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&P(e,n)}(r,e);var n,t,i,o=q(r);function r(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this)).__disposer=[],e.closed=!1,e}return n=r,i=[{key:"styles",get:function(){return[].concat(M(E(_(r),"styles",this)),[d.css(g||(g=z(['\n        :host {\n          display: block;\n          font-family: libre baskerville;\n          position: relative;\n          overflow: hidden;\n          --outline-player-min-height: 100vh;\n          --app-drawer-width: 300px;\n          --outline-player-dark: #222222;\n          --outline-player-light: #f8f8f8;\n          background-color: var(--outline-player-light);\n        }\n\n        simple-icon-button-lite:not(:defined),\n        site-breadcrumb:not(:defined),\n        site-rss-button:not(:defined),\n        site-print-button:not(:defined),\n        site-menu-button:not(:defined),\n        site-modal:not(:defined),\n        site-git-corner:not(:defined),\n        site-menu-button:not(:defined) {\n          display: none;\n        }\n\n        :host([closed]) {\n          --app-drawer-width: 0px;\n        }\n\n        :host,\n        :host * ::slotted(*) {\n          line-height: 1.8;\n        }\n        :host ul,\n        :host * ::slotted(ul),\n        :host ol,\n        :host * ::slotted(ol) {\n          padding-left: 20px;\n          margin-left: 20px;\n        }\n        :host ul,\n        :host * ::slotted(ul) {\n          list-style-type: disc;\n        }\n        :host li,\n        :host * ::slotted(li) {\n          margin-bottom: 6px;\n        }\n\n        h1 {\n          font-size: 36px;\n        }\n\n        h2 {\n          font-size: 32px;\n        }\n\n        h3 {\n          font-size: 28px;\n        }\n\n        p {\n          line-height: 26px;\n          min-height: 26px;\n        }\n\n        a,\n        a:visited,\n        a:active {\n          color: #000;\n        }\n\n        a:hover {\n          color: #2196f3;\n        }\n\n        ul li {\n          padding-bottom: 24px;\n          line-height: 1.5;\n          color: #424242;\n          max-width: 448px;\n        }\n\n        ul li:last-child {\n          padding-bottom: 16px;\n        }\n\n        app-drawer-layout {\n          min-height: 100vh;\n          min-height: -moz-available; /* WebKit-based browsers will ignore this. */\n          min-height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */\n          min-height: fill-available;\n          /* if the user has set a specific value then override the defaults */\n          min-height: var(--outline-player-min-height);\n        }\n\n        outline-player-navigation {\n          --outline-player-dark: var(--outline-player-dark);\n        }\n\n        div[main-title] {\n          margin-left: 8px;\n          font-size: 16px;\n          line-height: 22px;\n          overflow-wrap: break-word;\n          text-overflow: ellipsis;\n          display: inline-block;\n          word-break: break-word;\n        }\n        #content {\n          padding: 8px 8px 8px 64px;\n        }\n\n        /* Required for HAX */\n        :host([edit-mode]) #slot {\n          display: none !important;\n        }\n        :host([edit-mode]) #contentcontainer {\n          padding: 32px 8px 8px 8px;\n        }\n        #contentcontainer {\n          max-width: 840px;\n          display: block;\n          margin: 40px;\n          padding: 0 16px 16px 16px;\n          flex: none;\n          transition: 0.5s opacity ease-in-out;\n        }\n        #contentcontainer h-a-x {\n          margin: 0;\n        }\n        site-menu-button {\n          display: inline-flex;\n        }\n        site-print-button {\n          display: inline-flex;\n        }\n        site-active-title {\n          --site-active-title-margin: 0px;\n          --site-active-title-padding: 0px;\n          margin: 0 0 0 24px;\n          padding: 0;\n          display: block;\n        }\n        @media screen and (max-width: 640px) {\n          #content {\n            padding: 8px 8px 8px 8px;\n          }\n        }\n        app-drawer {\n          box-shadow: 0 0 6px -3px var(--outline-player-dark);\n          overflow: hidden;\n          --app-drawer-scrim-background: rgba(80, 80, 80, 0.8);\n          z-index: 1000000;\n        }\n        .nav-btns {\n          display: flex;\n        }\n        .nav-btns site-menu-button,\n        .nav-btns site-print-button,\n        .nav-btns site-modal,\n        .nav-btns simple-icon-button-lite {\n          display: inline-flex;\n          height: 32px;\n          width: 32px;\n          margin: 0 16px;\n          padding: 0;\n        }\n        site-menu {\n          height: calc(100vh - 64px);\n          color: #000000;\n          padding: 0;\n          background-color: #ffffff;\n          --site-menu-active-color: rgba(0, 0, 0, 0.1);\n          --site-menu-scrolltrack-bg-color: rgba(0, 0, 0, 0.3);\n          --site-menu-bg-shadow: rgba(0, 0, 0, 0.3);\n          --site-menu-bg-color: #fafafa;\n          --site-menu-padding: 0;\n          --site-menu-background-color: #ffffff;\n          --site-menu-color: #000000;\n          --site-menu-container-padding: 0;\n          --site-menu-container-background-color: #ffffff;\n          --site-menu-container-color: #000000;\n          --site-menu-item-active-item-color: var(\n            --simple-colors-default-theme-light-blue-1,\n            rgba(100, 100, 255, 0.1)\n          );\n        }\n        site-menu-button {\n          --site-menu-button-button-hover-background-color: rgba(0, 0, 0, 0.2);\n        }\n        site-breadcrumb {\n          display: block;\n          margin: 24px 24px 0;\n        }\n        :host([responsive-size="xs"]) site-breadcrumb,\n        :host([responsive-size="sm"]) site-breadcrumb {\n          display: none;\n        }\n        :host([responsive-size="xs"]) site-git-corner {\n          display: none;\n        }\n      '])))])}},{key:"tag",get:function(){return"outline-player"}},{key:"properties",get:function(){return j(j({},E(_(r),"properties",this)),{},{opened:{type:Boolean,reflect:!0},closed:{type:Boolean,reflect:!0},activeId:{type:String},narrow:{type:Boolean,reflect:!0}})}}],(t=[{key:"siteModalClick",value:function(e){Promise.resolve(w).then((function(e){window.SimpleModal.requestAvailability().querySelector("site-search").shadowRoot.querySelector("simple-fields-field").focus()}))}},{key:"render",value:function(){return d.html(v||(v=z(['\n      <site-git-corner part="git-corner-btn"></site-git-corner>\n      <custom-style>\n        <style>\n          app-drawer {\n            --app-drawer-content-container: {\n              overflow: hidden;\n            }\n          }\n        </style>\n      </custom-style>\n      <app-drawer-layout\n        .narrow="','"\n        @narrow-changed="','"\n      >\n        <nav>\n          <app-drawer\n            id="drawer"\n            swipe-open=""\n            slot="drawer"\n            .opened="','"\n            @opened-changed="','"\n          >\n            <site-menu></site-menu>\n          </app-drawer>\n        </nav>\n        <div id="content">\n          <header>\n            <div class="nav-btns">\n              <simple-icon-button-lite\n                icon="menu"\n                @click="','"\n              ></simple-icon-button-lite>\n              <site-modal\n                @site-modal-click="','"\n                ?disabled="','"\n                id="searchmodalbtn"\n                icon="icons:search"\n                title="Search site"\n                button-label="Search"\n                part="search-btn"\n              >\n                <site-search></site-search>\n              </site-modal>\n              <site-print-button part="print-btn"></site-print-button>\n              <site-menu-button\n                type="prev"\n                position="bottom"\n              ></site-menu-button>\n              <site-menu-button\n                type="next"\n                position="bottom"\n              ></site-menu-button>\n            </div>\n            <site-breadcrumb part="page-breadcrumb"></site-breadcrumb>\n            <site-active-title part="page-title"></site-active-title>\n            <div><slot name="title"></slot></div>\n          </header>\n          <main>\n            <article id="contentcontainer">\n              <section id="slot"><slot></slot></section>\n            </article>\n          </main>\n        </div>\n      </app-drawer-layout>\n    '])),this.narrow,this._narrowChanged,this.opened,this._openedChanged,this._toggleMenu,this.siteModalClick,this.editMode)}},{key:"_narrowChanged",value:function(e){this.narrow=e.detail.value}},{key:"_openedChanged",value:function(e){this.opened=e.detail.value}},{key:"updated",value:function(e){var n=this;E(_(r.prototype),"updated",this)&&E(_(r.prototype),"updated",this).call(this,e),e.forEach((function(e,t){"activeId"==t&&n._activeIdChanged(n[t],e),"closed"==t&&n.dispatchEvent(new CustomEvent("closed-changed",{detail:{value:n[t]}}))}))}},{key:"_toggleMenu",value:function(e){this.shadowRoot.querySelector("#drawer").toggle(),this.closed=!this.shadowRoot.querySelector("#drawer").opened,window.dispatchEvent(new Event("resize"))}},{key:"_activeIdChanged",value:function(e,n){this.opened&&this.narrow&&this.shadowRoot.querySelector("#drawer").toggle(),window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"firstUpdated",value:function(e){var n=this;E(_(r.prototype),"firstUpdated",this)&&E(_(r.prototype),"firstUpdated",this).call(this,e),h.autorun((function(e){n.activeId=h.toJS(f.store.activeId),n.__disposer.push(e)}))}},{key:"disconnectedCallback",value:function(){for(var e in this.__disposer)this.__disposer[e].dispose();E(_(r.prototype),"disconnectedCallback",this).call(this)}}])&&O(n.prototype,t),i&&O(n,i),Object.defineProperty(n,"prototype",{writable:!1}),r}(b.SimpleColorsSuper(m.HAXCMSLitElementTheme));customElements.define(T.tag,T),e.OutlinePlayer=T,Object.defineProperty(e,"__esModule",{value:!0})}));
