!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).A11YBehaviors={})}(this,(function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?i:String(i)),n)}var o,i}function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function i(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=n(t);if(e){var f=n(this).constructor;r=Reflect.construct(o,arguments,f)}else r=o.apply(this,arguments);return i(this,r)}}t.A11yBehaviors=function(t){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(a,t);var n,i,u,c=f(a);function a(){return e(this,a),c.apply(this,arguments)}return n=a,(i=[{key:"getTextContrastColor",value:function(t){var e=t.replace("#",""),r=parseInt(e,16);return.2126*(r>>16&255)+.7152*(r>>8&255)+.0722*(r>>0&255)<141?"#ffffff":"#000000"}},{key:"computeTextPropContrast",value:function(t,e){if(this[e].includes("#")){var r=this.getTextContrastColor(this[e]);this.set(t,r)}}}])&&r(n.prototype,i),u&&r(n,u),Object.defineProperty(n,"prototype",{writable:!1}),a}(t)},Object.defineProperty(t,"__esModule",{value:!0})}));
