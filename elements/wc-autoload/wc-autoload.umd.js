!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/dynamic-import-registry/dynamic-import-registry.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/dynamic-import-registry/dynamic-import-registry.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).WcAutoload={})}(this,(function(t){"use strict";function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(){n=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new j(n||[]);return o(a,"_invoke",{value:A(t,r,u)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d={};function p(){}function h(){}function y(){}var w={};l(w,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(P([])));g&&g!==e&&r.call(g,a)&&(w=g);var m=y.prototype=p.prototype=Object.create(w);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function A(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return W()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:W}}function W(){return{value:void 0,done:!0}}return h.prototype=y,o(m,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:h,configurable:!0}),h.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(O.prototype),l(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),l(m,c,"Generator"),l(m,a,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function o(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function u(t){o(a,n,i,u,c,"next",t)}function c(t){o(a,n,i,u,c,"throw",t)}u(void 0)}))}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function c(t,e,r){return e&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e,r){return(e=g(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t,e,r){return h=p()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&d(o,r.prototype),o},h.apply(null,arguments)}function y(t){var e="function"==typeof Map?new Map:void 0;return y=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,f(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,t)},y(t)}function w(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){var e=p();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w(this,r)}}function g(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}window.WCAutoload=window.WCAutoload||{},window.WCAutoloadRegistry=window.WCAutoloadRegistry||{},window.WCAutoload.requestAvailability=function(){return window.WCAutoload.instance||(window.WCAutoload.instance=document.createElement("wc-autoload"),document.body.appendChild(window.WCAutoload.instance)),window.WCAutoload.instance};var m=function(){var t=i(n().mark((function t(e,r,o){var i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:if(!(i<o)){t.next=16;break}return t.prev=2,t.next=5,fetch(e,r);case 5:return t.abrupt("return",t.sent);case 8:if(t.prev=8,t.t0=t.catch(2),!(i+1===o)){t.next=13;break}throw t.t0;case 13:i++,t.next=1;break;case 16:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,r,n){return t.apply(this,arguments)}}();window.WCAutoload.process=function(t){return new Promise((function(t,e){var o=window.WCAutoload.requestAvailability();o.loaded=!0;var a={};if(window.WCAutoloadRegistryFileProcessed){var u=document;o.target&&(u=o.target,o.processNewElement(u)),u.querySelectorAll("*").forEach((function(t){t.tagName&&!a[t.tagName]&&(o.processNewElement(t),a[t.tagName]=t.tagName)})),t("autoloader already processed")}else setTimeout(i(n().mark((function e(){var i,u;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.WCAutoloadBasePath?o.registry.basePath=window.WCAutoloadBasePath:window.WCGlobalBasePath&&(o.registry.basePath=window.WCGlobalBasePath),!window.WCAutoloadRegistryFile||window.WCAutoloadRegistryFileProcessed){e.next=10;break}"string"==typeof window.WCAutoloadRegistryFile&&(window.WCAutoloadRegistryFile=[window.WCAutoloadRegistryFile]),i=0;case 4:if(!(i<window.WCAutoloadRegistryFile.length)){e.next=10;break}return e.next=7,m(window.WCAutoloadRegistryFile[i],{},3).then((function(t){return t.json()})).then((function(t){window.WCAutoloadRegistryFileProcessed=!0,window.WCAutoloadRegistry=r(r({},window.WCAutoloadRegistry),t)}));case 7:i++,e.next=4;break;case 10:if(window.WCAutoloadRegistry)for(i in window.WCAutoloadRegistry)o.registry.register({tag:i,path:window.WCAutoloadRegistry[i]});u=document,o.target&&(u=o.target,o.processNewElement(u)),u.querySelectorAll("*").forEach((function(t){t.tagName&&!a[t.tagName]&&(o.processNewElement(t),a[t.tagName]=t.tagName)})),t("autoloader processed on the fly");case 15:case"end":return e.stop()}}),e)}))),0)}))},window.addEventListener("load",window.WCAutoload.process),window.WCAutoload.postLoaded=function(t){setTimeout((function(){var e=window.WCAutoload.requestAvailability();e.loaded&&document.querySelectorAll(t.detail.tag).length>0&&e.registry.loadDefinition(t.detail.tag)}),0)},window.addEventListener("dynamic-import-registry--new-registration",window.WCAutoload.postLoaded);var b=function(t){s(r,t);var e=v(r);function r(){var t;return a(this,r),(t=e.call(this)).loader=window.WCAutoload.requestAvailability(),t}return c(r,[{key:"connectedCallback",value:function(){var t=this;setTimeout((function(){if(t.children.length>0&&"TEMPLATE"==t.children[0].tagName)try{var e=JSON.parse(t.children[0].content.textContent);for(var r in e)t.loader.registry.register({tag:r,path:e[r]})}catch(t){console.warn(t)}}),0)}}],[{key:"tag",get:function(){return"wc-registry"}}]),r}(y(HTMLElement));customElements.define(b.tag,b);var O=function(t){s(r,t);var e=v(r);function r(){var t;return a(this,r),(t=e.call(this)).loaded=!1,t.registry=window.DynamicImportRegistry.requestAvailability(),t.options={childList:!0,subtree:!0},t}return c(r,[{key:"connectedCallback",value:function(){var t=this;this._mutationObserver=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){t.processNewElement(e)}))}))})),window.WCAutoloadOptions&&(this.options=window.WCAutoloadOptions),setTimeout((function(){window.WCAutoloadTarget?t.target=window.WCAutoloadTarget:t.target=document.body,t._mutationObserver.observe(t.target,t.options)}),0)}},{key:"disconnectedCallback",value:function(){this._mutationObserver.disconnect()}},{key:"processNewElement",value:function(t){t.tagName&&t.tagName.includes("-")&&"DYNAMIC-IMPORT-REGISTRY"!=t.tagName&&"WC-REGISTRY"!=t.tagName&&"WC-AUTOLOAD"!=t.tagName&&this.registry.loadDefinition(t.tagName)}}],[{key:"tag",get:function(){return"wc-autoload"}}]),r}(y(HTMLElement));customElements.define(O.tag,O),t.WcAutoload=O,Object.defineProperty(t,"__esModule",{value:!0})}));
