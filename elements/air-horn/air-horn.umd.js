!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).AirHorn={})}(this,(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?i:String(i)),r)}var o,i;
/**
   * Copyright 2019 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return u=i()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i},u.apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return u(e,arguments,r(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,e)},c(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}var a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(y,e);var u,c,a,p,s,d=(u=y,c=i(),function(){var e,t=r(u);if(c){var n=r(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function y(){var e,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t(this,y),(e=d.call(this)).tag=y.tag,e.template=document.createElement("template"),e.attachShadow({mode:"open"}),n||e.render(),setTimeout((function(){e.addEventListener("click",e._playSound.bind(f(e)))}),0),e}return a=y,s=[{key:"tag",get:function(){return"air-horn"}}],(p=[{key:"html",get:function(){return"\n<style>\n:host {\n  display: inline-flex;\n}\n\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<slot></slot>"}},{key:"_playSound",value:function(e){new Audio(new URL("./lib/airhorn.mp3","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("air-horn.umd.js",document.baseURI).href).href).play()}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}])&&n(a.prototype,p),s&&n(a,s),Object.defineProperty(a,"prototype",{writable:!1}),y}(c(HTMLElement));customElements.define(a.tag,a),e.AirHorn=a,Object.defineProperty(e,"__esModule",{value:!0})}));
