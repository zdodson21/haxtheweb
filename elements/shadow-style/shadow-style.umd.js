!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).ShadowStyle={})}(this,function(e){"use strict";function t(e,t,n,r,o,c,a){try{var i=e[c](a),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function a(e,t,n){return(a=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var c=new(Function.bind.apply(e,r));return n&&o(c,n.prototype),c}).apply(null,arguments)}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,c)}function c(){return a(e,arguments,r(this).constructor)}return c.prototype=Object.create(e.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o(c,e)})(e)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(y,i(HTMLElement));var a,u,l,f,p,h=(a=y,u=c(),function(){var e,t=r(a);if(u){var n=r(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),null!=(e=h.call(this)).getAttribute("evil")&&(Element.prototype._attachShadow=Element.prototype.attachShadow,Element.prototype.attachShadow=function(){return this._attachShadow({mode:"open"})},console.error("Leave us.."),console.warn("No, stay here. I'm in charge"),console.error("[laying a hand on the web component] Do you feel in charge?"),console.warn("..I've paid your APIs a small fortune."),console.error("And this gives you... power over me?"),console.warn("What is this.."),console.error("You APIs and web platform have been important, till now"),console.warn("What are you.."),console.error("I'm web standards' reckoning, here to end the ball of twine you've all been coding on."),console.warn("You .. you're evil."),console.error("I am nessecary evil")),e.cssMap={},e.style.display="none",e.processShadowText(e.innerText),e}return l=y,f=[{key:"processShadowText",value:function(){var e,n=(e=regeneratorRuntime.mark(function e(t){var n,r,o,c,a,i,s,u=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=new RegExp("(.*?)([^{])s*{s*([^}]*?)}","gim"),o=[];r=n.exec(t);)c=r[1].trim().replace(/\s\s+/g," "),a=c.split("::shadow"),i=a[0],s=a[1].replace("(","").replace(")",""),this.cssMap[i]||(this.cssMap[i]={}),this.cssMap[i][s]?this.cssMap[i][s]+=r[3].trim().replace(/\s\s+/g," "):this.cssMap[i][s]=r[3].trim().replace(/\s\s+/g," "),o.push(customElements.whenDefined(i));return e.next=5,Promise.all(o);case 5:setTimeout(function(){for(var e in u.cssMap)u.getRootNode().querySelectorAll(e).forEach(function(t){var n=t;t.shadowRoot&&(n=t.shadowRoot);var r=document.createElement("style");for(var o in r.innerHTML="",u.cssMap[e])r.innerHTML+="".concat(o," {").concat(u.cssMap[e][o],"}");n.appendChild(r)})},0);case 6:case"end":return e.stop()}},e,this)}),function(){var n=this,r=arguments;return new Promise(function(o,c){var a=e.apply(n,r);function i(e){t(a,o,c,i,s,"next",e)}function s(e){t(a,o,c,i,s,"throw",e)}i(void 0)})});return function(e){return n.apply(this,arguments)}}()}],p=[{key:"tag",get:function(){return"shadow-style"}}],f&&n(l.prototype,f),p&&n(l,p),y}();customElements.define(u.tag,u),e.ShadowStyle=u,Object.defineProperty(e,"__esModule",{value:!0})});