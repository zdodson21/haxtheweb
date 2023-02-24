!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).A11yTabs={},t.lit,t.responsiveUtilityBehaviors_js)}(this,(function(t,e,n){"use strict";function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,m(a.key),a)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return d(this,n)}}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var a=p(t,e);if(a){var o=Object.getOwnPropertyDescriptor(a,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function v(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function m(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}var _,k,w,x,T,j,O,S,C,P,A,E,B=function(t){c(a,t);var n=f(a);function a(){var t;return r(this,a),(t=n.call(this)).disabled=!1,t.hidden=!1,t.order=1,t.role="tabpanel",t.total=1,t.tabindex=0,t.flag="",t.addEventListener("a11y-tab-flag",(function(e){return t.handleFlag(e)})),t}return s(a,[{key:"render",value:function(){return e.html(_||(_=h(['\n      <span class="sr-only">Tab ','</span>\n      <div class="label-heading" part="heading">\n        <simple-icon-lite\n          class="icon"\n          ?hidden="','"\n          .icon="','"\n          part="icon"\n        >\n        </simple-icon-lite>\n        <slot name="label" ?hidden="','"></slot>\n        <div class="label" part="label">','</div>\n      </div>\n      <div id="content-inner" part="content"><slot></slot></div>\n      <span class="sr-only">\n        End of tab ','. Back to <a href="#','">tabs</a>.\n      </span>\n    '])),this.xOfY,!this.icon,this.icon,!this.label,this.label,this.xOfY,this.id)}},{key:"observer",get:function(){var t=this;return new MutationObserver((function(e){return t._labelChanged()}))}},{key:"xOfY",get:function(){return"".concat(this.order," of ").concat(this.total)}},{key:"connectedCallback",value:function(){y(b(a.prototype),"connectedCallback",this).call(this),this._labelChanged(),this.observer.observe(this,{childList:!0})}},{key:"disconnectedCallback",value:function(){var t=this;this.observer.disconnect(),this.removeEventListener("a11y-tab-flag",(function(e){return t.handleFlag(e)})),this._fireTabChanged(),y(b(a.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var e=this;t.forEach((function(t,n){["id","order"].includes(n)&&!e.id&&(e.id="tab-".concat(e.order)),["label","order"].includes(n)&&!e.label&&e._labelChanged(),"flag"===n&&e._fireTabChanged(),"flagIcon"===n&&e._fireTabChanged(),"icon"===n&&e._fireTabChanged(),"id"===n&&(e.ariaLabelledby="".concat(e.id,"-button"),e._fireTabChanged()),"label"===n&&e._fireTabChanged(),"disabled"===n&&e.disabled&&e._fireTabChanged()}))}},{key:"_handleFlag",value:function(t){this.flag=t.detail.flag,this.flagIcon=t.detail.flagIcon}},{key:"_labelChanged",value:function(){this.label&&""!==this.label.trim()||(this.label=this.querySelector('*[slot="label"]')?this.querySelector('*[slot="label"]').innerHTML:"Tab ".concat(this.order))}},{key:"_fireTabChanged",value:function(){this.dispatchEvent(new CustomEvent("a11y-tab-changed",{bubbles:!0,cancelable:!0,composed:!1,detail:this}))}}],[{key:"styles",get:function(){return[e.css(k||(k=h(["\n        :host {\n          display: block;\n          margin-bottom: var(--a11y-tabs-content-padding);\n          border: 1px solid var(--a11y-tabs-border-color);\n          padding: var(--a11y-tabs-content-padding);\n        }\n        .sr-only {\n          position: absolute;\n          left: -99999px;\n          height: 0;\n          overflow: hidden;\n        }\n        .label-heading {\n          display: flex;\n          align-items: center;\n          color: var(--a11y-tabs-selected-color, var(--a11y-tabs-focus-color));\n          background-color: var(--a11y-tabs-background);\n          font-weight: var(--a11y-tabs-selected-font-weight, normal);\n          border-bottom: 1px solid var(--a11y-tabs-border-color);\n          margin: 0 0 calc(var(--a11y-tabs-content-padding) / 2);\n          padding: 0 0 calc(var(--a11y-tabs-content-padding) / 2);\n          border-radius: var(--a11y-tabs-horizontal-border-radius, 2px)\n            var(--a11y-tabs-horizontal-border-radius, 2px) 0 0;\n        }\n        simple-icon-lite {\n          margin-right: 1em;\n        }\n        @media screen {\n          :host {\n            border: none;\n            height: var(--a11y-tabs-tab-height, --a11y-tabs-height);\n            overflow: var(--a11y-tabs-tab-overflow, --a11y-tabs-overflow);\n            margin-bottom: unset;\n          }\n          :host([inactive]) {\n            display: none;\n          }\n          #content-inner {\n            max-width: 100%;\n            overflow: auto;\n          }\n          .label-heading {\n            display: none;\n          }\n        }\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Tab",description:"A single tab.",icon:"view-day",color:"grey",tags:["Content","a11y","presentation","tab","layout","tabs"]},settings:{configure:[{property:"icon",title:"Tab Icon",inputMethod:"iconpicker"},{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"label",title:"Tab Label",inputMethod:"textfield"},{slot:"",title:"Tab Content",description:"A content of the tab.",inputMethod:"code-editor"}],advanced:[{property:"id",title:"Unique ID",inputMethod:"textfield"},{property:"flag",title:"Optional Flag Text",inputMethod:"textfield"},{property:"flagIcon",title:"Optional Flag Icon",inputMethod:"iconpicker"}]}}}},{key:"properties",get:function(){return{ariaLabelledby:{type:String,reflect:!0,attribute:"aria-labelledby"},flag:{type:String,reflect:!0},flagIcon:{type:String,attribute:"flag-icon"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},icon:{type:String},id:{type:String,reflect:!0,attribute:"id"},inactive:{type:Boolean,reflect:!0,attribute:"inactive"},label:{type:String},order:{type:Number},role:{type:String,reflect:!0,attribute:"role"},tabindex:{type:Number},total:{type:Number}}}},{key:"tag",get:function(){return"a11y-tab"}}]),a}(e.LitElement);customElements.define(B.tag,B);var z=function(t){c(a,t);var n=f(a);function a(){var t;return r(this,a),(t=n.call(this)).fullWidth=!1,t.disableResponsive=!1,t.disabled=!1,t.hidden=!1,t.__tabs=[],t.__tabFocus=0,t.addEventListener("a11y-tab-changed",(function(e){return t.updateTabs()})),t}return s(a,[{key:"render",value:function(){var t=this;return e.html(w||(w=h([' <ul id="tabs" role="tablist" part="tablist">\n        ','\n      </ul>\n      <div id="content" part="content">\n        <slot></slot>\n      </div>'])),this.tabs.map((function(n,a){return e.html(x||(x=h(['\n            <li part="tablist-item">',"</li>\n          "])),t._tabButton(n,a))})))}},{key:"buttons",get:function(){return this.__tabButtons}},{key:"iconsOnly",get:function(){return this.iconBreakpoint&&(this.tabs||[]).filter((function(t){return!t.icon})).length<1&&this.responsiveWidth<this.iconBreakpoint}},{key:"observer",get:function(){var t=this;return new MutationObserver((function(){return t.updateTabs()}))}},{key:"tabQuery",get:function(){return"a11y-tab"}},{key:"tabs",get:function(){var t=this;return Object.keys(this.__tabs||{}).map((function(e){return t.__tabs[e].order=e+1,t.__tabs[e].total=t.__tabs.length,t.__tabs[e]}))}},{key:"vertical",get:function(){return this.layoutBreakpoint&&this.layoutBreakpoint<this.responsiveWidth}},{key:"connectedCallback",value:function(){y(b(a.prototype),"connectedCallback",this).call(this),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1})}},{key:"firstUpdated",value:function(t){var e=this;y(b(a.prototype),"firstUpdated",this)&&y(b(a.prototype),"firstUpdated",this).call(this,t),setTimeout((function(){e.updateTabs()}),0)}},{key:"disconnectedCallback",value:function(){this.observer&&this.observer.disconnect&&this.observer.disconnect(),y(b(a.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var e=this;t.forEach((function(t,n){"id"===n&&e._idChanged(e.id,t),"activeTab"===n&&e.activeTab!==t&&e._activeTabChanged(e.activeTab,t),"responsiveWidth"===n&&(e.vertical?e.setAttribute("vertical",!0):e.removeAttribute("vertical")),["iconsBreakpoint","responsiveWidth","__tabs"].includes(n)&&(e.iconsOnly?e.setAttribute("icons-only",!0):e.removeAttribute("icons-only"))}))}},{key:"selectTab",value:function(t){var e=this.querySelectorAll(this.tabQuery);if(e&&e.length>0){var n=Object.keys(e||[]).filter((function(t){return!e[t].disabled})).map((function(t){return e[t].id})),a=n.filter((function(e){return e===t}))[0]||n[0];e.forEach((function(t){t.inactive=t.id!==a})),this.activeTab=a}}},{key:"updateTabs",value:function(t){this.__tabs=this.querySelectorAll(this.tabQuery),this.__tabButtons=this.shadowRoot.querySelectorAll("[role=tab]"),this.selectTab(this.activeTab)}},{key:"_activeTabChanged",value:function(t,e){t!==e&&this.selectTab(t),window.dispatchEvent(new CustomEvent("a11y-tabs-active-changed",{cancelable:!0,detail:this})),this.dispatchEvent(new CustomEvent("a11y-tabs-active-changed",{detail:this}))}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"_handleTab",value:function(t){t.disabled||(this.activeTab=t.id)}},{key:"_handleKey",value:function(t,e){var n=this;0===this.buttons.length&&this.updateTabs(),this.__tabFocus=t;39!==e.keyCode&&37!==e.keyCode||(this.buttons[this.__tabFocus].setAttribute("tabindex",-1),function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;n.__tabFocus=n.__tabFocus+a,n.__tabFocus>=n.buttons.length?n.__tabFocus=0:n.__tabFocus<0&&(n.__tabFocus=n.buttons.length-1),n.buttons[n.__tabFocus].disabled&&n.__tabFocus!==t&&e(a)}(39===e.keyCode?1:-1),this.buttons[this.__tabFocus].disabled||(this.buttons[this.__tabFocus].setAttribute("tabindex",0),this.buttons[this.__tabFocus].focus()),e.preventDefault(),e.stopPropagation())}},{key:"_idChanged",value:function(t,e){t||(this.id="a11y-tabs"+this._generateUUID())}},{key:"_tabButton",value:function(t,n){var a=this;return e.html(T||(T=h(['\n      <button\n        id="','-button"\n        aria-selected="','"\n        aria-controls="','"\n        class="','"\n        .flag="','"\n        @click="','"\n        @keydown="','"\n        ?disabled="','"\n        tabindex="','"\n        role="tab"\n        part="'," tab tab-",'"\n      >\n        '," ","\n        "," ","\n      </button>\n      ","\n    "])),t.id,t.id===this.activeTab?"true":"false",t.id,t.id!==this.activeTab||this.disabled?"":"active",t.flag,(function(e){return a._handleTab(t)}),(function(t){return a._handleKey(n,t)}),t.disabled||this.disabled,t.id===this.activeTab?0:-1,t.id!==this.activeTab||this.disabled?this.disabled||t.disabled?"tab-disabled":"":"tab-active",t.id,this._tabIcon(t,"flagIcon"),this._tabLabel(t),this._tabFlag(t),this._tabIcon(t,"icon"),this._tabTooltip(t))}},{key:"_tabFlag",value:function(t){return e.html(j||(j=h(['\n      <span class="flag-type" ?hidden="','" part="flag">\n        ',"\n      </span>\n    "])),!t.flag,t.flag)}},{key:"_tabIcon",value:function(t,n){return t.flag?e.html(O||(O=h(['\n          <simple-icon-lite\n            class="icon"\n            ?hidden="','"\n            .icon="','"\n            .title="','"\n            part="icon"\n          >\n          </simple-icon-lite>\n        '])),!t[n],t[n],t.flag):e.html(S||(S=h(['\n          <simple-icon-lite\n            class="icon"\n            ?hidden="','"\n            .icon="','"\n            part="icon"\n          >\n          </simple-icon-lite>\n        '])),!t[n],t[n])}},{key:"_tabLabel",value:function(t){return e.html(C||(C=h([' <span class="label" part="label">',"</span> "])),t.label)}},{key:"_tabTooltip",value:function(t){return e.html(P||(P=h(['\n      <simple-tooltip for="','-button" part="tooltip">\n        ',"\n      </simple-tooltip>\n    "])),t.id,t.label)}}],[{key:"A11yTabsCoreStyles",get:function(){return[e.css(A||(A=h(["\n        :host {\n          display: block;\n          height: var(--a11y-tabs-height);\n          overflow: var(--a11y-tabs-overflow);\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        #tabs {\n          display: none;\n        }\n        @media screen {\n          :host([vertical]) {\n            border-radius: var(--a11y-tabs-vertical-border-radius, 2px);\n            display: flex;\n            justify-content: space-between;\n            align-items: stretch;\n          }\n          #content {\n            flex: 1 1 calc(100% - 2 * var(--a11y-tabs-content-padding, 16px));\n            overflow: auto;\n          }\n          #tabs {\n            align-items: stretch;\n            flex-wrap: var(--a11y-tabs-wrap, unset);\n            margin: 0;\n            display: flex;\n            list-style: none;\n            padding: 0;\n            overflow: auto;\n            max-width: 100%;\n            overflow-x: auto;\n            z-index: 1;\n            justify-content: var(--a11y-tabs-horizontal-justify-tabs);\n          }\n          :host([vertical]) #tabs {\n            flex: 0 0 auto;\n            flex-direction: column;\n            overflow-y: auto;\n            max-width: unset;\n            overflow-x: unset;\n            z-index: unset;\n            flex-wrap: var(--a11y-tabs-vertical-wrap);\n          }\n          :host([sticky]) #tabs {\n            position: sticky;\n            top: 0;\n          }\n          #tabs li {\n            display: flex;\n            align-items: stretch;\n          }\n          :host([full-width]) #tabs li {\n            width: 100%;\n          }\n          :host([vertical]) #tabs li {\n            flex-direction: column;\n          }\n          #tabs .flag-type {\n            position: absolute;\n            left: -99999px;\n            height: 0;\n            overflow: hidden;\n          }\n          :host(:not([vertical])) #content {\n            margin-top: -1px;\n          }\n          #tabs button {\n            width: 100%;\n            min-width: unset;\n            margin: 0;\n          }\n\n          :host([vertical]) #tabs button {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n          }\n\n          #tabs button[disabled] {\n            pointer-events: none;\n          }\n\n          #tabs span.label,\n          #tabs .flag-icon {\n            margin-right: 8px;\n          }\n\n          :host([icons-only]) #tabs button {\n            justify-content: center;\n          }\n\n          :host([icons-only]) #tabs span.label {\n            display: none;\n          }\n\n          :host(:not([icons-only])) #tabs #tabs simple-tooltip {\n            display: none;\n          }\n          simple-icon-lite:not([hidden]) {\n            display: inline-block;\n          }\n\n          simple-icon-lite[hidden] {\n            display: none;\n          }\n        }\n      "])))]}},{key:"A11yTabsThemeStyles",get:function(){return[e.css(E||(E=h(['\n        :host {\n          font-size: var(--a11y-tabs-font-size, unset);\n          font-family: var(--a11y-tabs-font-family, unset);\n          --a11y-tabs-focus-color: var(--a11y-tabs-color);\n          --a11y-tabs-horizontal-border-radius: var(\n            --a11y-tabs-border-radius,\n            2px\n          );\n          --a11y-tabs-vertical-border-radius: var(\n            --a11y-tabs-border-radius,\n            2px\n          );\n          --a11y-tabs-vertical-button-padding: var(\n            --a11y-tabs-button-padding,\n            4px\n          );\n          --a11y-tabs-horizontal-button-padding: var(\n            --a11y-tabs-button-padding,\n            4px\n          );\n        }\n        @media screen {\n          :host([vertical]) {\n            border-radius: var(--a11y-tabs-vertical-border-radius, 2px);\n            border: 1px solid var(--a11y-tabs-border-color, #ddd);\n          }\n\n          #content {\n            border: 1px solid var(--a11y-tabs-border-color, #ddd);\n            padding: var(--a11y-tabs-content-padding, 16px);\n            background-color: var(--a11y-tabs-content-background);\n          }\n\n          #tabs {\n            background-color: var(--a11y-tabs-horizontal-background);\n            font-family: var(\n              --a11y-tabs-tab-font-family,\n              var(--a11y-tabs-font-family, unset)\n            );\n            font-size: var(\n              --a11y-tabs-tab-font-size,\n              var(--a11y-tabs-font-size, unset)\n            );\n          }\n\n          :host([vertical]) #tabs {\n            border-left: none;\n            background-color: var(--a11y-tabs-vertical-background);\n            justify-content: var(--a11y-tabs-vertical-justify-tabs);\n          }\n\n          :host([vertical]) #tabs button {\n            padding: var(--a11y-tabs-vertical-button-padding);\n            border-radius: 0;\n          }\n\n          :host([vertical]) #content {\n            border: none;\n          }\n          :host(:not([vertical])) #content {\n            border-radius: var(--a11y-tabs-horizontal-border-radius, 2px);\n          }\n\n          #tabs button {\n            text-transform: unset;\n            color: var(--a11y-tabs-faded-color, #333);\n            border: 1px solid var(--a11y-tabs-border-color);\n            background-color: var(--a11y-tabs-faded-background, #f8f8f8);\n            padding: var(--a11y-tabs-horizontal-button-padding);\n            font-weight: var(--a11y-tabs-font-weight, normal);\n            border-radius: var(--a11y-tabs-horizontal-border-radius, 2px)\n              var(--a11y-tabs-horizontal-border-radius, 2px) 0 0;\n          }\n\n          button .label {\n            text-decoration: var(--a11y-tabs-text-decoration, none);\n          }\n\n          :host(:not([vertical])) #tabs button {\n            border-top-color: var(--a11y-tabs-border-accent);\n          }\n\n          :host(:not([vertical])) #tabs li:not(:first-of-type) button {\n            border-left: none;\n          }\n\n          :host([vertical]) #tabs button {\n            border-top: none;\n            border-left-color: var(--a11y-tabs-border-accent);\n          }\n\n          #tabs button:focus,\n          #tabs button:hover {\n            color: var(--a11y-tabs-focus-color);\n            font-weight: var(--a11y-tabs-focus-font-weight, normal);\n          }\n\n          button:focus .label,\n          button:hover .label {\n            text-decoration: var(--a11y-tabs-focus-text-decoration, underline);\n          }\n\n          :host(:not([vertical])) #tabs button:focus,\n          :host(:not([vertical])) #tabs button:hover {\n            border-top-color: var(--a11y-tabs-focus-border-accent);\n          }\n\n          :host([vertical]) #tabs button:focus,\n          :host([vertical]) #tabs button:hover {\n            border-left-color: var(--a11y-tabs-focus-border-accent);\n          }\n\n          #tabs button[aria-selected="true"] {\n            font-weight: var(--a11y-tabs-selected-font-weight, normal);\n            color: var(\n              --a11y-tabs-selected-color,\n              var(--a11y-tabs-focus-color)\n            );\n            background-color: var(--a11y-tabs-background);\n          }\n\n          button[aria-selected="true"] .label {\n            text-decoration: var(--a11y-tabs-selected-text-decoration, none);\n          }\n\n          :host(:not([vertical])) #tabs button[aria-selected="true"] {\n            border-bottom-color: var(--a11y-tabs-background);\n            border-top-color: var(--a11y-tabs-selected-border-accent);\n          }\n\n          :host([vertical]) #tabs button[aria-selected="true"] {\n            border-right-color: var(--a11y-tabs-background);\n            border-left-color: var(--a11y-tabs-selected-border-accent);\n          }\n\n          #tabs button[disabled] {\n            color: var(--a11y-tabs-disabled-color, #999);\n            background-color: var(--a11y-tabs-disabled-background, #eee);\n          }\n\n          #tabs button[disabled]:focus,\n          #tabs button[disabled]:hover {\n            color: unset;\n            font-weight: unset;\n          }\n\n          button[disabled]:focus .label,\n          button[disabled]:hover .label {\n            text-decoration: none;\n          }\n\n          :host(:not([vertical])) #tabs button[disabled] {\n            border-left-color: var(--a11y-tabs-disabled-border-accent, unset);\n          }\n\n          :host([vertical]) #tabs button[disabled] {\n            border-top-color: var(--a11y-tabs-disabled-border-accent, unset);\n          }\n        }\n      '])))]}},{key:"styles",get:function(){return[].concat(v(this.A11yTabsCoreStyles),v(this.A11yTabsThemeStyles))}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("a11y-tabs.umd.js",document.baseURI).href).href}},{key:"properties",get:function(){return o(o({},y(b(a),"properties",this)),{},{ariaLabel:{type:String,reflect:!0,attribute:"aria-label"},activeTab:{type:String,reflect:!0,attribute:"active-tab"},fullWidth:{type:Boolean,reflect:!0,attribute:"full-width"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},iconBreakpoint:{type:Number,attribute:"icon-breakpoint"},id:{type:String,reflect:!0},layoutBreakpoint:{type:Number,attribute:"layout-breakpoint"},responsiveSize:{type:String,reflect:!0,attribute:"responsive-size"},sticky:{type:Boolean,reflect:!0,attribute:"sticky"},__tabs:{type:Array},__tabButtons:{type:Array},__tabFocus:{type:Number}})}},{key:"tag",get:function(){return"a11y-tabs"}}]),a}(n.ResponsiveUtilityBehaviors(e.LitElement));customElements.define(z.tag,z),t.A11yTabs=z,Object.defineProperty(t,"__esModule",{value:!0})}));
