!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-toast/simple-toast.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-toast/simple-toast.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).RelativeHeading={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,y(i.key),i)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return h(this,n)}}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var i=g(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var v,m;
/**
   * Copyright 2019 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */window.RelativeHeadingStateManager=window.RelativeHeadingStateManager||{},window.RelativeHeadingStateManager.requestAvailability=function(){return window.RelativeHeadingStateManager.instance||(window.RelativeHeadingStateManager.instance=document.createElement("relative-heading-state-manager"),document.body.appendChild(window.RelativeHeadingStateManager.instance)),window.RelativeHeadingStateManager.instance};var k,w,L=function(e){s(r,e);var n=p(r);function r(){var e;return o(this,r),(e=n.call(this)).closeIcon="close",e.closeLabel="Close",e.copyMessage="Copied to Clipboard",e.headings=[],e.copyHeading={},e.usesCopyLink=!1,window.RelativeHeadingStateManager.instance||(window.RelativeHeadingStateManager.instance=d(e)),e}return a(r,[{key:"render",value:function(){return t.html(v||(v=b(['\n      <simple-toast\n        id="relative-heading-toast"\n        duration="5000"\n        ?hidden="','"\n        ?disabled="','"\n        text="',": ",'"\n      >\n        <simple-icon-button-lite\n          icon="','"\n          label="','"\n          title="','"\n          @click="','"\n        ></simple-icon-button-lite>\n      </simple-toast>\n    '])),!this.usesCopyLink,!this.usesCopyLink,this.copyHeading.copyMessage||this.copyMessage,this.copyUrl,this.copyHeading.closeIcon||this.closeIcon,this.copyHeading.closeLabel||this.closeLabel,this.copyHeading.closeLabel||this.closeLabel,this.closeCopyLink)}},{key:"copyUrl",get:function(){return"".concat(window.location.href.replace(window.location.hash,""),"#").concat(this.copyHeading&&this.copyHeading.id?this.copyHeading.id:"")}},{key:"useCopyLink",value:function(){this.usesCopyLink||(this.usesCopyLink=!0)}},{key:"copyLink",value:function(e){this.copyHeading=e;var t=document.createElement("textarea");t.value=this.copyUrl,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.shadowRoot.querySelector("#relative-heading-toast")&&this.shadowRoot.querySelector("#relative-heading-toast").open&&this.shadowRoot.querySelector("#relative-heading-toast").open()}},{key:"closeCopyLink",value:function(){this.shadowRoot.querySelector("#relative-heading-toast")&&this.shadowRoot.querySelector("#relative-heading-toast").close&&this.shadowRoot.querySelector("#relative-heading-toast").close()}},{key:"addHeading",value:function(e){e&&(this.addSubhead(e),this.setHeading(e.id,e),this.updateLevel(e))}},{key:"removeHeading",value:function(e){var t=this;e&&(e.id&&this.headings[e.id]&&(this.headings[e.id].heading=null,this.headings[e.id].subheads.forEach((function(e){return t.updateLevel(e)}))),this.removeSubhead(e.parent,e))}},{key:"updateId",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(t&&this.setHeading(t,null),this.setHeading(e.id,e))}},{key:"updateParent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e&&(t&&this.removeSubhead(t,e),this.addSubhead(e))}},{key:"updateDefaultLevel",value:function(e){e&&this.updateLevel(e)}},{key:"addSubhead",value:function(e){e&&(e.parent&&(this.headings[e.parent]||(this.headings[e.parent]={heading:null,subheads:[]}),this.headings[e.parent].subheads.includes(e)||this.headings[e.parent].subheads.push(e)),this.updateLevel(e))}},{key:"removeSubhead",value:function(e,t){e&&this.headings[e]&&this.headings[e].subheads&&(this.headings[e].subheads=this.headings[e].subheads.filter((function(e){return e!=t})))}},{key:"setHeading",value:function(e,t){e&&(this.headings[e]||(this.headings[e]={heading:null,subheads:[]}),this.headings[e].heading=t)}},{key:"updateLevel",value:function(e){var t=this;if(e){var n=e.parent&&this.headings[e.parent].heading?parseInt(this.headings[e.parent].heading.__level):null,i=n?Math.min(6,Math.max(n+1,1)):null,o=i||e.defaultLevel;e._setLevel(o),this.headings[e.id]&&this.headings[e.id].subheads.forEach((function(e){return t.updateLevel(e)}))}}}],[{key:"tag",get:function(){return"relative-heading-state-manager"}},{key:"properties",get:function(){return i(i({},f(c(r),"properties",this)),{},{closeIcon:{type:String},closeLabel:{type:String},copyHeading:{type:Object},copyMessage:{type:String},headings:{type:Object},usesCopyLink:{type:Boolean}})}},{key:"styles",get:function(){return[t.css(m||(m=b(["\n        simple-toast:not(:defined) {\n          display: none;\n        }\n      "])))]}}]),r}(t.LitElement);customElements.define(L.tag,L);var O,S,j,H,M=function(e){s(r,e);var n=p(r);function r(){var e;return o(this,r),(e=n.call(this)).parent=null,e.checkId(),e.__level=e.querySelector("h1,h2,h3,h4,h5,h6")?parseInt(e.querySelector("h1,h2,h3,h4,h5,h6").tagName.replace(/\D/,"")):1,e.defaultLevel=1,e}return a(r,[{key:"render",value:function(){return this.template}},{key:"template",get:function(){return t.html(k||(k=b([" <slot></slot> "])))}},{key:"connectedCallback",value:function(){f(c(r.prototype),"connectedCallback",this).call(this),this.manager.addHeading(this),this.observer.observe(this,{childList:!0})}},{key:"observer",get:function(){var e=this;return new MutationObserver((function(){return e.updateContents()}))}},{key:"manager",get:function(){return window.RelativeHeadingStateManager.requestAvailability()}},{key:"checkId",value:function(){this.id=this.id||"heading-".concat(this._generateUUID())}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"defaultLevel"===n&&((!t.defaultLevel||t.defaultLevel<1||t.defaultLevel>6)&&(t.defaultLevel=Math.min(0,Math.max(t.defaultLevel,6))),t.manager.updateDefaultLevel(t,e)),"id"===n&&(t.id||t.checkId(),t.manager.updateId(t,e)),"parent"===n&&t.manager.updateParent(t,e),"__level"===n&&(t.observer.disconnect(),t.updateContents(),t.observer.observe(t,{childList:!0}))}))}},{key:"_setLevel",value:function(e){this.__level!==e&&(this.__level=e)}},{key:"updateContents",value:function(){(!this.querySelector("h".concat(this.__level))||this.children>0)&&(this.innerHTML="<h".concat(this.__level,">").concat(this.children&&this.children[0]?this.children[0].innerHTML:this.textContent,"</h").concat(this.__level,">"))}},{key:"_generateUUID",value:function(){return"ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"disconnectedCallback",value:function(){this.observer.disconnect(),this.manager.removeHeading(this),f(c(r.prototype),"disconnectedCallback",this).call(this)}}],[{key:"styles",get:function(){return[t.css(w||(w=b(["\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      "])))]}},{key:"properties",get:function(){return i(i({},f(c(r),"properties",this)),{},{defaultLevel:{type:Number,attribute:"default-level",reflect:!0},id:{type:String,attribute:"id",reflect:!0},parent:{type:String,attribute:"parent",reflect:!0},__level:{type:Number,attribute:"level",reflect:!0}})}},{key:"tag",get:function(){return"relative-heading-lite"}}]),r}(t.LitElement);customElements.define(M.tag,M);var _=function(e){s(r,e);var n=p(r);function r(){var e;return o(this,r),(e=n.call(this)).linkAlignRight=!1,e.disableLink=!1,e.linkIcon="link",e.linkLabel="Get link",e}return a(r,[{key:"render",value:function(){return t.html(O||(O=b([" "," ",""])),this.template,this.button)}},{key:"connectedCallback",value:function(){f(c(r.prototype),"connectedCallback",this).call(this),this.disableLink||this.manager.useCopyLink()}},{key:"anchored",get:function(){return!(!window.AnchorBehaviors||!window.AnchorBehaviors.getTarget)&&window.AnchorBehaviors.getTarget(this)}},{key:"button",get:function(){return this.disableLink?t.html(S||(S=b([""]))):t.html(j||(j=b(['\n          <simple-icon-button-lite\n            controls="relative-heading-toast"\n            .aria-describedby="','"\n            .icon="','"\n            .title="','"\n            ?hidden="','"\n            ?disabled="','"\n            @click="','"\n          >\n          </simple-icon-button-lite>\n        '])),this.id,this.linkIcon,this.linkLabel,this.disableLink,this.disableLink,this._handleCopyClick)}},{key:"_handleCopyClick",value:function(){!this.disableLink&&this.manager&&this.manager.copyLink&&this.manager.copyLink(this)}}],[{key:"styles",get:function(){return[t.css(H||(H=b(["\n        :host {\n          display: flex;\n          flex-wrap: var(--relative-heading-wrap, wrap);\n          align-items: var(--relative-heading-align, center);\n          justify-content: flex-start;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        ::slotted(*) {\n          flex: 0 0 auto;\n        }\n\n        :host([link-align-right]) {\n          justify-content: space-between;\n        }\n\n        :host([link-align-right]) ::slotted(*) {\n          flex: 1 1 auto;\n        }\n\n        :host > simple-icon-button-lite:not(:defined) {\n          opacity: 0;\n        }\n\n        :host > simple-icon-button-lite {\n          flex: 0 0 auto;\n        }\n\n        simple-icon-button-lite {\n          color: var(--relative-heading-button-color, #666);\n          background: var(--relative-heading-button-bg);\n          border: var(--relative-heading-button-border);\n          outline: var(--relative-heading-button-outline);\n          margin: var(--relative-heading-button-margin, 0 0 0 8px);\n          padding: var(--relative-heading-button-padding, 8px);\n          opacity: var(--relative-heading-button-opacity, 0);\n          transition: var(--relative-heading-button-transition, all 0.5s);\n        }\n\n        :host([link-align-right]) simple-icon-button-lite,\n        :host(:not([link-align-right]):focus) simple-icon-button-lite,\n        :host(:not([link-align-right]):focus-within) simple-icon-button-lite,\n        :host(:not([link-align-right]):hover) simple-icon-button-lite {\n          opacity: var(--relative-heading-button-active-opacity, 1);\n        }\n\n        simple-icon-button-lite:focus-within,\n        simple-icon-button-lite:focus,\n        simple-icon-button-lite:hover {\n          color: var(--relative-heading-button-focus-color, #000);\n          background: var(--relative-heading-button-focus-bg);\n          border: var(--relative-heading-button-focus-border);\n          outline: var(--relative-heading-button-focus-outline);\n          opacity: var(--relative-heading-button-focus-opacity, 1);\n        }\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Relative heading",description:"outputs the correct heading hierarchy based on parent's heading",icon:"icons:android",color:"green",tags:["Content","heading","header","h1","h2","h3","h4","h5","h6"],handles:[],meta:{author:"HAXTheWeb core team",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"parent",description:"Parent Heading's Resource ID",inputMethod:"textfield",required:!1},{property:"disableLink",description:"Disables link button feature.",inputMethod:"boolean",required:!1},{property:"linkAlignRight",description:"Aligns copy link button to far right of heading.",inputMethod:"boolean",required:!1}],advanced:[{property:"defaultLevel",description:"Heading level if parent is not found.",inputMethod:"number",required:!1},{property:"copyMessage",description:"Overrides default text for copy link's toast message.",inputMethod:"textfield",required:!1},{property:"linkLabel",description:"Overrides default label copy link button.",inputMethod:"textfield",required:!1},{property:"linkIcon",description:"Overrides default icon copy link button.",inputMethod:"iconpicker",required:!1},{property:"closeLabel",description:"Overrides default label for copy link's toast's close button.",inputMethod:"textfield",required:!1},{property:"closeIcon",description:"Overrides default icon for copy link's toast's close button.",inputMethod:"iconpicker",required:!1}]}}}},{key:"properties",get:function(){return i(i({},f(c(r),"properties",this)),{},{closeIcon:{type:String},closeLabel:{type:String},copyMessage:{type:String},disableLink:{type:Boolean,attribute:"disable-link"},linkAlignRight:{type:Boolean,attribute:"link-align-right",reflect:!0},linkIcon:{type:String},linkLabel:{type:String}})}},{key:"tag",get:function(){return"relative-heading"}}]),r}(M);customElements.define(_.tag,_),e.RelativeHeading=_,Object.defineProperty(e,"__esModule",{value:!0})}));
