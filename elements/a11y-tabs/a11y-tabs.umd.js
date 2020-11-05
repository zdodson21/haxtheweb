!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/responsive-utility/lib/responsive-utility-behaviors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js"],n):n((t=t||self).A11yTabs={},t.litElement_js,t.responsiveUtilityBehaviors_js)}(this,function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach(function(n){r(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function c(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&b(t,n)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,n){return(b=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function f(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,o=u(t);if(n){var a=u(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return d(this,e)}}function p(t,n,e){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var o=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=u(t)););return t}(t,n);if(o){var a=Object.getOwnPropertyDescriptor(o,n);return a.get?a.get.call(e):a.value}})(t,n,e||t)}function y(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function h(){var t=y(['\n        :host {\n          display: block;\n          height: var(--a11y-tabs-tab-height, --a11y-tabs-height);\n          overflow: var(--a11y-tabs-tab-overflow, --a11y-tabs-overflow);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        .sr-only {\n          position: absolute;\n          left: -99999px;\n          height: 0;\n          overflow: hidden;\n        }\n        #content-inner {\n          max-width: 100%;\n          overflow: auto;\n        }\n        ::slotted(*[slot="label"]) {\n          display: none;\n        }\n      ']);return h=function(){return t},t}function v(){var t=y(['\n      <span class="sr-only">Tab ','</span>\n      <slot name="label"></slot>\n      <div id="content-inner"><slot></slot></div>\n      <span class="sr-only">\n        End of tab ','. Back to <a href="#','">tabs</a>.\n      </span>\n    ']);return v=function(){return t},t}var g=function(t){c(a,n.LitElement);var e=f(a);function a(){var t;return o(this,a),(t=e.call(this)).disabled=!1,t.hidden=!1,t.order=1,t.total=1,t.flag="",t.addEventListener("a11y-tab-flag",function(n){return t.handleFlag(n)}),t}return i(a,[{key:"render",value:function(){return n.html(v(),this.xOfY,this.xOfY,this.id)}}],[{key:"styles",get:function(){return[n.css(h())]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Tab",description:"A single tab.",icon:"view-day",color:"grey",groups:["Content","Presentation","Tabs"]},settings:{quick:[{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"sticky",title:"Sticky.",desc:"Horizontal tabs stick to the top of the window when scrolling.",inputMethod:"boolean"}],configure:[{property:"icon",title:"Tab Icon",inputMethod:"iconpicker"},{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"label",title:"Tab Label",inputMethod:"textfield"},{slot:"",title:"Tab Content",description:"A content of the tab.",inputMethod:"code-editor"}],advanced:[{property:"id",title:"Unique ID",inputMethod:"textfield"},{property:"flag",title:"Optional Flag Text",inputMethod:"textfield"},{property:"flagIcon",title:"Optional Flag Icon",inputMethod:"iconpicker"}]}}}},{key:"properties",get:function(){return{flag:{type:String,reflect:!0},flagIcon:{type:String,attribute:"flag-icon"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},icon:{type:String},id:{type:String,reflect:!0,attribute:"id"},label:{type:String},order:{type:Number},total:{type:Number}}}}]),i(a,[{key:"connectedCallback",value:function(){p(u(a.prototype),"connectedCallback",this).call(this),this._labelChanged(),this.observer.observe(this,{childList:!0})}},{key:"disconnectedCallback",value:function(){var t=this;this.observer.disconnect(),this.removeEventListener("a11y-tab-flag",function(n){return t.handleFlag(n)}),this._fireTabChanged(),p(u(a.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var n=this;t.forEach(function(t,e){["id","order"].includes(e)&&!n.id&&(n.id="tab-".concat(n.order)),["label","order"].includes(e)&&!n.label&&n._labelChanged(),"flag"===e&&n._fireTabChanged(),"flagIcon"===e&&n._fireTabChanged(),"icon"===e&&n._fireTabChanged(),"id"===e&&n._fireTabChanged(),"label"===e&&n._fireTabChanged(),"disabled"===e&&n.disabled&&n._fireTabChanged()})}},{key:"_handleFlag",value:function(t){this.flag=t.detail.flag,this.flagIcon=t.detail.flagIcon}},{key:"_labelChanged",value:function(){this.label&&""!==this.label.trim()||(this.label=this.querySelector('*[slot="label"]')?this.querySelector('*[slot="label"]').innerHTML:"Tab ".concat(this.order))}},{key:"_fireTabChanged",value:function(){this.dispatchEvent(new CustomEvent("a11y-tab-changed",{bubbles:!0,cancelable:!0,composed:!1,detail:this}))}},{key:"observer",get:function(){var t=this;return new MutationObserver(function(n){return t._labelChanged()})}},{key:"xOfY",get:function(){return"".concat(this.order," of ").concat(this.total)}}],[{key:"tag",get:function(){return"a11y-tab"}}]),a}();function m(){var t=y(['\n      <simple-tooltip for="','-button"> '," </simple-tooltip>\n    "]);return m=function(){return t},t}function k(){var t=y([' <span class="label">',"</span> "]);return k=function(){return t},t}function w(){var t=y(['\n          <simple-icon\n            class="icon"\n            ?hidden="','"\n            .icon="','"\n          >\n          </simple-icon>\n        ']);return w=function(){return t},t}function _(){var t=y(['\n          <simple-icon\n            class="icon"\n            ?hidden="','"\n            .icon="','"\n            .title="','"\n          >\n          </simple-icon>\n        ']);return _=function(){return t},t}function x(){var t=y(['\n      <span class="flag-type" ?hidden="','"> '," </span>\n    "]);return x=function(){return t},t}function O(){var t=y(['\n      <button\n        id="','-button"\n        controls="','"\n        class="','"\n        @click="','"\n        ?disabled="','"\n        .flag="','"\n      >\n        '," ","\n        "," ","\n      </button>\n      ","\n    "]);return O=function(){return t},t}function j(){var t=y(["\n:host {\n  display: block;\n  height: var(--a11y-tabs-height);\n  overflow: var(--a11y-tabs-overflow);\n  font-size: var(--a11y-tabs-font-size, unset);\n  font-family: var(--a11y-tabs-font-family, unset);\n  --a11y-tabs-width: 100%;\n  --a11y-tabs-background: white;\n  --a11y-tabs-border-color: #ddd;\n  --a11y-tabs-color: #000;\n  --a11y-tabs-faded-color: #333;\n  --a11y-tabs-focus-color: var(-a11y-tabs-color);\n  --a11y-tabs-faded-background: #f8f8f8;\n  --a11y-tabs-disabled-color: #999;\n  --a11y-tabs-disabled-background: #eee;\n  --a11y-tabs-border-radius: 2px;\n  --a11y-tabs-horizontal-background: var(--a11y-tabs-background, white);\n  --a11y-tabs-horizontal-border-radius: var(--a11y-tabs-border-radius, 2px);\n  --a11y-tabs-vertical-border-radius: var(--a11y-tabs-border-radius, 2px);\n  --a11y-tabs-content-background: var(--a11y-tabs-background, white);\n  --a11y-tabs-content-padding: 16px;\n  --a11y-tabs-button-padding: 8px;\n  --a11y-tabs-vertical-button-padding: var(--a11y-tabs-button-padding, 8px);\n  --a11y-tabs-horizontal-border-radius: unset;\n  --a11y-tabs-vertical-border-radius: unset;\n  --a11y-tabs-horizontal-button-padding: var(--a11y-tabs-button-padding, 8px);\n  --a11y-tabs-width: auto;\n}\n\n:host([vertical]) {\n  border: 1px solid var(--a11y-tabs-border-color);\n  border-radius: var(--a11y-tabs-vertical-border-radius);\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host #tabs {\n  align-items: stretch;\n  flex-wrap: var(--a11y-tabs-wrap, unset);\n  margin: 0;\n  display: flex;\n  list-style: none;\n  padding: 0;\n  overflow: auto;\n  max-width: 100%;\n  overflow-x: auto;\n  z-index: 1;\n  justify-content: var(--a11y-tabs-horizontal-justify-tabs);\n  background-color: var(--a11y-tabs-horizontal-background);\n  font-family: var(--a11y-tabs-tab-font-family, var(--a11y-tabs-font-family, unset));\n  font-size: var(--a11y-tabs-tab-font-size, var(--a11y-tabs-font-size, unset));\n}\n\n:host([vertical]) #tabs {\n  border-left: none;\n  flex: 0 0 auto;\n  flex-direction: column;\n  overflow-y: auto;\n  max-width: unset;\n  overflow-x: unset;\n  z-index: unset;\n  background-color: var(--a11y-tabs-vertical-background);\n  justify-content: var(--a11y-tabs-vertical-justify-tabs);\n  flex-wrap: var(--a11y-tabs-vertical-wrap);\n}\n\n:host([sticky]) #tabs {\n  position: sticky;\n  top: 0;\n}\n\n:host #tabs li {\n  display: flex;\n  align-items: stretch;\n}\n\n:host([vertical]) #tabs li {\n  flex-direction: column;\n}\n\n:host #tabs .flag-type {\n  position: absolute;\n  left: -99999px;\n  height: 0; \n  overflow: hidden;\n}\n\n:host #content {\n  padding: var(--a11y-tabs-content-padding);\n  background-color: var(--a11y-tabs-content-background);\n  border: 1px solid var(--a11y-tabs-border-color);\n  flex: 1 1 calc(100% - 2 * var(--a11y-tabs-content-padding));\n  overflow: auto;\n}\n\n:host([vertical]) #content {\n  border: none;\n}\n\n:host(:not([vertical])) #content {\n  border-radius: var(--a11y-tabs-horizontal-border-radius);\n  margin-top: -1px;\n}\n\n:host #tabs button {\n  margin: 0;\n  text-transform: unset;\n  color: var(--a11y-tabs-faded-color);\n  border: 1px solid var(--a11y-tabs-border-color);\n  background-color: var(--a11y-tabs-faded-background);\n  padding: var(--a11y-tabs-horizontal-button-padding);\n  border-radius: var(--a11y-tabs-horizontal-border-radius) var(--a11y-tabs-horizontal-border-radius) 0 0; \n}\n\n:host([vertical]) #tabs button {\n  border-top: none;\n  border-left: none;\n  border-radius: 0; \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--a11y-tabs-vertical-button-padding);\n}\n\n:host(:not([vertical])) #tabs li:not(:first-of-type) button {\n  border-left: none;\n}\n\n:host #tabs button:active,\n:host #tabs button:focus,\n:host #tabs button:hover {\n  color: var(--a11y-tabs-focus-color);\n}\n\n:host #tabs button.active[disabled] {\n  color: var(--a11y-tabs-focus-color);\n  background-color: var(--a11y-tabs-background);\n}\n\n:host(:not([vertical])) #tabs button.active {\n  border-bottom: var(--a11y-tabs-background);\n}\n\n:host([vertical]) #tabs button.active {\n  border-right: var(--a11y-tabs-background);\n}\n\n:host #tabs button:not(.active)[disabled] {\n  color: var(--a11y-tabs-disabled-color);\n  background-color: var(--a11y-tabs-disabled-background);\n  cursor: not-allowed;\n}\n\n:host #tabs span.label,\n:host #tabs .flag-icon {\n  margin-right: 8px;\n}\n\n:host([icons-only]) #tabs button {\n  justify-content: center;\n}\n\n:host([icons-only]) #tabs span.label {\n  display: none;\n}\n\n:host(:not([icons-only])) #tabs #tabs simple-tooltip {\n  display: none;\n}\n\nsimple-icon:not([hidden]) {\n  display: inline-block;\n}\n\nsimple-icon[hidden] {\n  display: none;\n}\n      "]);return j=function(){return t},t}function T(){var t=y(["\n    <li>","</li>\n  "]);return T=function(){return t},t}function C(){var t=y(['\n\n<ul id="tabs">\n  ','\n</ul>\n<div id="content">\n  <slot></slot>\n</div>']);return C=function(){return t},t}window.customElements.define(g.tag,g);var z=function(t){c(r,e.ResponsiveUtilityBehaviors(n.LitElement));var a=f(r);function r(){var t;return o(this,r),(t=a.call(this)).disableResponsive=!1,t.disabled=!1,t.hidden=!1,t.__tabs=[],t.addEventListener("a11y-tab-changed",function(n){return t.updateTabs()}),t}return i(r,[{key:"render",value:function(){var t=this;return n.html(C(),this.tabs.map(function(e,o){return n.html(T(),t._tabButton(e))}))}}],[{key:"styles",get:function(){return[n.css(j())]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!1,gizmo:{title:"Tabs",description:"A set of tabs.",icon:"view-day",color:"grey",groups:["Content","Presentation","Tabs"]},settings:{quick:[{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"hidden",title:"Hidden",inputMethod:"boolean"},{property:"sticky",title:"Sticky",desc:"Horizontal tabs stick to the top of the window when scrolling.",inputMethod:"boolean"}],configure:[{property:"disabled",title:"Disabled",inputMethod:"boolean"},{property:"hidden",title:"Hidden",inputMethod:"boolean"},{property:"sticky",title:"Sticky.",desc:"Horizontal tabs stick to the top of the window when scrolling.",inputMethod:"boolean"},{property:"layoutBreakpoint",title:"Layout Breakpoint",inputMethod:"Number",descripton:"Optional minimum breakpoint for horizontal layout of tabs. Default is unset (always horizontal). Setting `-1` forces vertical-only mode."},{property:"iconBreakpoint",title:"Icon Breakpoint",inputMethod:"Number",descripton:"Optional minimum breakpoint for showing tab text with icons. Default is always text with icons (0). Setting to -1 forces icon-only mode."},{slot:"",title:"Tabs",description:"A series of <a11y-tab/> elements.",inputMethod:"code-editor"}],advanced:[{property:"id",title:"Unique ID",inputMethod:"textfield"}]}}}},{key:"properties",get:function(){return l(l({},p(u(r),"properties",this)),{},{activeTab:{type:String,reflect:!0,attribute:"active-tab"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},hidden:{type:Boolean,reflect:!0,attribute:"hidden"},iconBreakpoint:{type:Number,attribute:"icon-breakpoint"},id:{type:String,reflect:!0},layoutBreakpoint:{type:Number,attribute:"layout-breakpoint"},responsiveSize:{type:String,reflect:!0,attribute:"responsive-size"},sticky:{type:Boolean,reflect:!0,attribute:"sticky"},__tabs:{type:Array}})}},{key:"tag",get:function(){return"a11y-tabs"}}]),i(r,[{key:"connectedCallback",value:function(){p(u(r.prototype),"connectedCallback",this).call(this),this.updateTabs(),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1})}},{key:"disconnectedCallback",value:function(){this.observer&&this.observer.disconnect&&this.observer.disconnect(),p(u(r.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var n=this;t.forEach(function(t,e){"id"===e&&n._idChanged(n.id,t),"activeTab"===e&&n.activeTab!==t&&n._activeTabChanged(n.activeTab,t),"responsiveWidth"===e&&(n.vertical?n.setAttribute("vertical",!0):n.removeAttribute("vertical")),["iconsBreakpoint","responsiveWidth","__tabs"].includes(e)&&(n.iconsOnly?n.setAttribute("icons-only",!0):n.removeAttribute("icons-only"))})}},{key:"selectTab",value:function(t){var n=this.querySelectorAll(this.tabQuery);if(n&&n.length>0){var e=Object.keys(n||[]).filter(function(t){return!n[t].disabled}).map(function(t){return n[t].id}),o=e.filter(function(n){return n===t})[0]||e[0];n.forEach(function(t){t.hidden=t.id!==o}),this.activeTab=o}}},{key:"updateTabs",value:function(t){this.__tabs=this.querySelectorAll(this.tabQuery),this.selectTab(this.activeTab)}},{key:"_activeTabChanged",value:function(t,n){t!==n&&this.selectTab(t),window.dispatchEvent(new CustomEvent("active-tab-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"_handleTab",value:function(t){t.disabled||(this.activeTab=t.id)}},{key:"_idChanged",value:function(t,n){t||(this.id="a11y-tabs"+this._generateUUID())}},{key:"_tabButton",value:function(t){var e=this;return n.html(O(),t.id,t.id,t.id!==this.activeTab||this.disabled?"":"active",function(n){return e._handleTab(t)},t.id===this.activeTab||t.disabled||this.disabled,t.flag,this._tabIcon(t,"flagIcon"),this._tabLabel(t),this._tabFlag(t),this._tabIcon(t,"icon"),this._tabTooltip(t))}},{key:"_tabFlag",value:function(t){return n.html(x(),!t.flag,t.flag)}},{key:"_tabIcon",value:function(t,e){return t.flag?n.html(_(),!t[e],t[e],t.flag):n.html(w(),!t[e],t[e])}},{key:"_tabLabel",value:function(t){return n.html(k(),t.label)}},{key:"_tabTooltip",value:function(t){return n.html(m(),t.id,t.label)}},{key:"iconsOnly",get:function(){return this.iconBreakpoint&&(this.tabs||[]).filter(function(t){return!t.icon}).length<1&&this.responsiveWidth<this.iconBreakpoint}},{key:"observer",get:function(){var t=this;return new MutationObserver(function(){return t.updateTabs()})}},{key:"tabQuery",get:function(){return"a11y-tab"}},{key:"tabs",get:function(){var t=this;return Object.keys(this.__tabs||{}).map(function(n){return t.__tabs[n].order=n+1,t.__tabs[n].total=t.__tabs.length,t.__tabs[n]})}},{key:"vertical",get:function(){return this.layoutBreakpoint&&this.layoutBreakpoint<this.responsiveWidth}}]),r}();window.customElements.define(z.tag,z),t.A11yTabs=z,Object.defineProperty(t,"__esModule",{value:!0})});
