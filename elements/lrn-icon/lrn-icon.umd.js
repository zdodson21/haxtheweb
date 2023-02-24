!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/iron-meta/iron-meta.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@lrnwebcomponents/lrn-shared-styles/lrn-shared-styles.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/iron-meta/iron-meta.js","@polymer/iron-flex-layout/iron-flex-layout.js","@lrnwebcomponents/lrn-shared-styles/lrn-shared-styles.js","@lrnwebcomponents/simple-icon/simple-icon.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LrnIcon={},e.polymerElement_js)}(this,(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var l,a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(p,e);var i,s,a,u=c(p);function p(){return n(this,p),u.apply(this,arguments)}return i=p,a=[{key:"template",get:function(){return t.html(l||(e=['\n      <style include="lrn-shared-styles">\n        :host {\n          position: relative;\n\n          vertical-align: middle;\n\n          fill: var(--lrn-icon-fill-color, currentcolor);\n          stroke: var(--lrn-icon-stroke-color, none);\n\n          width: var(--lrn-icon-width, 24px);\n          height: var(--lrn-icon-height, 24px);\n          @apply --layout-inline;\n          @apply --layout-center-center;\n          @apply --lrn-icon;\n        }\n      </style>\n      <simple-icon\n        hidden$="[[!icon]]"\n        icon$="lrn:[[icon]]"\n        accent-color="grey"\n        contrast="4"\n      ></simple-icon>\n    '],n||(n=e.slice(0)),l=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"lrn-icon"}},{key:"properties",get:function(){return{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:document.createElement("iron-meta",{type:"iconset"})}}}},{key:"observers",get:function(){return["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"]}}],(s=[{key:"_iconChanged",value:function(e){this._iconName=e,this._iconsetName="lrn",this._updateIcon()}},{key:"_srcChanged",value:function(e){this._updateIcon()}},{key:"_usesIconset",value:function(){return this.icon||!this.src}},{key:"_updateIcon",value:function(){this._usesIconset()?(this._img&&this._img.parentNode&&this.root.removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),window.removeEventListener("lrn-iconset-added",this._updateIcon.bind(this))):window.addEventListener("lrn-iconset-added",this._updateIcon.bind(this)))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,this.root.appendChild(this._img))}}])&&r(i.prototype,s),a&&r(i,a),Object.defineProperty(i,"prototype",{writable:!1}),p}(t.PolymerElement);
/**
  This is a fork of https://github.com/PolymerElements/lrn-icon
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */customElements.define(a.tag,a),e.LrnIcon=a,Object.defineProperty(e,"__esModule",{value:!0})}));
