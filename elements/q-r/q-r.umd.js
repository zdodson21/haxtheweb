!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/q-r/lib/qr-code.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/q-r/lib/qr-code.js","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).QR={},null,e.lit)}(this,(function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?i:String(i)),r)}var o,i}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l,a,s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(p,e);var t,o,u,s=f(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=s.call(this)).modulesize=4,e.margin=2,e.format="png",e}return t=p,u=[{key:"styles",get:function(){return[n.css(a||(a=c(["\n        :host {\n          display: block;\n        }\n        qr-code {\n          display: block;\n        }\n        #link {\n          position: absolute;\n          left: -10000px;\n          top: auto;\n          width: 1px;\n          height: 1px;\n          overflow: hidden;\n        }\n      "])))]}},{key:"tag",get:function(){return"q-r"}},{key:"properties",get:function(){return{data:{type:String},title:{type:String},modulesize:{type:Number},margin:{type:Number},format:{type:String}}}},{key:"haxProperties",get:function(){return new URL("./lib/q-r.haxProperties.json","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("q-r.umd.js",document.baseURI).href).href}}],(o=[{key:"render",value:function(){return n.html(l||(l=c(['\n      <qr-code\n        id="qr"\n        data="','"\n        modulesize="','"\n        margin="','"\n        format="','"\n      ></qr-code>\n      <a href="','" id="link">',"</a>\n    "])),this.data,this.modulesize,this.margin,this.format,this.data,this.title)}}])&&r(t.prototype,o),u&&r(t,u),Object.defineProperty(t,"prototype",{writable:!1}),p}(n.LitElement);customElements.define(s.tag,s),e.QR=s,Object.defineProperty(e,"__esModule",{value:!0})}));
