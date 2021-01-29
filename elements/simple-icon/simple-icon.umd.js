!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js"],e):e((t=t||self).SimpleIcon={},t.litElement_js,t.simpleColors_js)}(this,function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function d(t,e,n){return(d=y()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&p(o,n.prototype),o}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return d(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),p(r,t)})(t)}function m(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){var e=y();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function g(t,e,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function b(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function w(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}String.prototype.replaceAll||(String.prototype.replaceAll=function(t,e){return this.split(t).join(e)});var j=function(t){a(n,h(HTMLElement));var e=v(n);function n(){var t;return o(this,n),(t=e.call(this)).iconsets={},t.needsHydrated=[],t}return c(n,null,[{key:"tag",get:function(){return"simple-iconset"}}]),c(n,[{key:"registerIconset",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"===r(n)?this.iconsets[t]=u({},n):"string"==typeof n&&(this.iconsets[t]=n),this.needsHydrated.length>0){var o=[];this.needsHydrated.forEach(function(t,n){t.setSrcByIcon(e)&&o.push(n)}),o.reverse().forEach(function(t){e.needsHydrated.splice(t,1)})}}},{key:"getIcon",value:function(t,e){var n=t.replaceAll("/","-").split(":");if(1===n.length&&(n=["icons",t]),2==n.length&&this.iconsets[n[0]]){if("string"!=typeof this.iconsets[n[0]]&&this.iconsets[n[0]][n[1]]&&"function"!=typeof this.iconsets[n[0]][n[1]])return this.iconsets[n[0]][n[1]];if(n[1])return"".concat(this.iconsets[n[0]]).concat(n[1],".svg")}return e!=this&&this.needsHydrated.push(e),null}}]),n}();customElements.define(j.tag,j),window.SimpleIconset=window.SimpleIconset||{},window.SimpleIconset.requestAvailability=function(){return null==window.SimpleIconset.instance&&(window.SimpleIconset.instance=document.createElement("simple-iconset")),document.body.appendChild(window.SimpleIconset.instance),window.SimpleIconset.instance};var S=window.SimpleIconset.requestAvailability();function x(){var t=b(["\n          :host {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            position: relative;\n            vertical-align: middle;\n            height: var(--simple-icon-height, 24px);\n            width: var(--simple-icon-width, 24px);\n          }\n          :host([hidden]) {\n            display: none;\n          }\n          svg {\n            height: var(--simple-icon-height, 24px);\n            width: var(--simple-icon-width, 24px);\n            max-height: var(--simple-icon-height, 24px);\n            max-width: var(--simple-icon-width, 24px);\n          }\n          feFlood {\n            flood-color: var(--simple-icon-color, currentColor);\n          }\n          svg {\n            pointer-events: none;\n          }\n        "]);return x=function(){return t},t}function k(){var t=b(['<feFlood result="COLOR" />']);return k=function(){return t},t}function I(){var t=b(['\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">\n          <filter\n            color-interpolation-filters="sRGB"\n            x="0"\n            y="0"\n            height="24px"\n            width="24px"\n          >\n            ','\n            <feComposite operator="in" in="COLOR" in2="SourceAlpha" />\n          </filter>\n          <image\n            xlink:href=""\n            width="24px"\n            height="24px"\n            focusable="false"\n            preserveAspectRatio="xMidYMid meet"\n          ></image>\n        </svg>\n      ']);return I=function(){return t},t}var P=function(t){return function(n){a(i,t);var r=v(i);function i(){var t;return o(this,i),(t=r.call(this)).noColorize=!1,t}return c(i,[{key:"render",value:function(){return e.svg(I(),this.feFlood)}},{key:"feFlood",get:function(){return this.noColorize?"":e.svg(k())}}],[{key:"styles",get:function(){return[g(f(i),"styles",this)||[]].concat([e.css(x())])}},{key:"properties",get:function(){return u(u({},g(f(i),"properties",this)),{},{src:{type:String},noColorize:{type:Boolean,attribute:"no-colorize"},icon:{type:String,attribute:"icon",reflect:!0}})}}]),c(i,[{key:"firstUpdated",value:function(t){g(f(i.prototype),"firstUpdated",this)&&g(f(i.prototype),"firstUpdated",this).call(this,t);var e="f-"+Math.random().toString().slice(2,10);this.shadowRoot.querySelector("image").style.filter="url(#".concat(e,")"),this.shadowRoot.querySelector("filter").setAttribute("id",e)}},{key:"setSrcByIcon",value:function(t){return this.src=S.getIcon(this.icon,t),this.src}},{key:"updated",value:function(t){var e=this;g(f(i.prototype),"updated",this)&&g(f(i.prototype),"updated",this).call(this,t),t.forEach(function(t,n){"icon"==n&&(e[n]?e.setSrcByIcon(e):e.src=null),"src"==n&&e[n]&&e.shadowRoot.querySelector("image").setAttribute("xlink:href","".concat(e[n]))})}}]),i}()},R=function(t){a(r,P(e.LitElement));var n=v(r);function r(){return o(this,r),n.apply(this,arguments)}return c(r,null,[{key:"tag",get:function(){return"simple-icon-lite"}}]),r}();function A(){var t=b(["\n        feFlood {\n          flood-color: var(\n            --simple-icon-color,\n            var(--simple-colors-default-theme-accent-8, #000000)\n          );\n        }\n        feFlood.contrast-1 {\n          flood-color: var(\n            --simple-icon-color,\n            var(--simple-colors-default-theme-accent-9, #000000)\n          );\n        }\n        feFlood.contrast-2 {\n          flood-color: var(\n            --simple-icon-color,\n            var(--simple-colors-default-theme-accent-10, #000000)\n          );\n        }\n        feFlood.contrast-3 {\n          flood-color: var(\n            --simple-icon-color,\n            var(--simple-colors-default-theme-accent-11, #000000)\n          );\n        }\n        feFlood.contrast-4 {\n          flood-color: var(\n            --simple-icon-color,\n            var(--simple-colors-default-theme-accent-12, #000000)\n          );\n        }\n      "]);return A=function(){return t},t}function E(){var t=b(['<feFlood class="contrast-','" part="simple-icon-svg" result="COLOR" />']);return E=function(){return t},t}customElements.define(R.tag,R);var C=function(t){a(i,P(n.SimpleColors));var r=v(i);function i(){var t;return o(this,i),(t=r.call(this)).contrast=0,t}return c(i,[{key:"feFlood",get:function(){return this.noColorize?"":e.svg(E(),this.contrast)}}],[{key:"tag",get:function(){return"simple-icon"}},{key:"styles",get:function(){return[].concat(w(g(f(i),"styles",this)),[e.css(A())])}},{key:"properties",get:function(){return u(u({},g(f(i),"properties",this)),{},{contrast:{type:Number,attribute:"contrast",reflect:!0}})}}]),i}();customElements.define(C.tag,C),t.SimpleIcon=C,Object.defineProperty(t,"__esModule",{value:!0})});
