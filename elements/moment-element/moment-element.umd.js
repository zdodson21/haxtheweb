!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MomentElement={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=c(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},f.apply(this,arguments)}var l,p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}(m,e);var u,c,p,d=a(m);function m(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=d.call(this)).datetime=new Date,e.inputFormat="",e.outputFormat="",e.from="",e.to="";var t=new URL("./","undefined"==typeof document&&void 0===n?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?n.href:document.currentScript&&document.currentScript.src||new URL("moment-element.umd.js",document.baseURI).href).href,n="".concat(t,"lib/moment/moment.js");return window.addEventListener("es-bridge-moment-loaded",e._momentLoaded.bind(i(e))),window.ESGlobalBridge.requestAvailability().load("moment",n),e}return u=m,p=[{key:"tag",get:function(){return"moment-element"}},{key:"properties",get:function(){return{datetime:{type:String},inputFormat:{type:String,attribute:"input-format"},outputFormat:{type:String,attribute:"output-format"},from:{type:String},to:{type:String},output:{type:String},libraryLoaded:{type:Boolean}}}}],(c=[{key:"render",value:function(){return t.html(l||(e=[" "," "],n||(n=e.slice(0)),l=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),this.output);var e,n}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){if(["output"].includes(n)){var o="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(o,{detail:{value:t[n]}}))}["datetime","inputFormat","outputFormat","from","to","libraryLoaded"].includes(n)&&(t.output=t._computeOutput(t.datetime,t.inputFormat,t.outputFormat,t.from,t.to,t.libraryLoaded))}))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-moment-loaded",this._momentLoaded.bind(this)),f(o(m.prototype),"disconnectedCallback",this).call(this)}},{key:"_momentLoaded",value:function(){this.libraryLoaded=!0}},{key:"_computeOutput",value:function(e,t,n,o,r,i){if(i){var u=t?moment(e,t):moment(e);return n?u=u.format(n):o?u="now"===o?u.fromNow():u.from(moment(o)):r&&(u="now"===r?u.toNow():u.to(moment(r))),u}}}])&&n(u.prototype,c),p&&n(u,p),Object.defineProperty(u,"prototype",{writable:!1}),m}(t.LitElement);
/**
   * @license
   * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
   * This code may only be used under the MIT style license found at https://abdonrd.github.io/LICENSE.txt
   */window.customElements.define(p.tag,p),e.MomentElement=p,Object.defineProperty(e,"__esModule",{value:!0})}));
