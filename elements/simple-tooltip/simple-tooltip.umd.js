!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],n):n((t=t||self).SimpleTooltip={},t.litElement_js)}(this,function(t,n){"use strict";function e(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,i)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach(function(n){o(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,i,o,a=s(t);if(n){var r=s(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return i=this,!(o=e)||"object"!=typeof o&&"function"!=typeof o?c(i):o}}function u(t,n,e){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var i=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=s(t)););return t}(t,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(e):o.value}})(t,n,e||t)}function d(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function p(){var t=d(["\n:host {\n  display: block;\n  position: absolute;\n  outline: none;\n  z-index: 1002;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n}\n\n#tooltip {\n  display: block;\n  outline: none;\n  font-size: var(--simple-tooltip-font-size, 10px);\n  line-height: 1;\n  background-color: var(--simple-tooltip-background, #616161);\n  color: var(--simple-tooltip-text-color, white);\n  padding: 8px;\n  border-radius: var(--simple-tooltip-border-radius, 2px);\n  width: var(--simple-tooltip-width)\n}\n\n@keyframes keyFrameScaleUp {\n  0% {\n    transform: scale(0.0);\n  }\n\n  100% {\n    transform: scale(1.0);\n  }\n}\n\n@keyframes keyFrameScaleDown {\n  0% {\n    transform: scale(1.0);\n  }\n\n  100% {\n    transform: scale(0.0);\n  }\n}\n\n@keyframes keyFrameFadeInOpacity {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: var(--simple-tooltip-opacity, 0.9);\n  }\n}\n\n@keyframes keyFrameFadeOutOpacity {\n  0% {\n    opacity: var(--simple-tooltip-opacity, 0.9);\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes keyFrameSlideDownIn {\n  0% {\n    transform: translateY(-2000px);\n    opacity: 0;\n  }\n\n  10% {\n    opacity: 0.2;\n  }\n\n  100% {\n    transform: translateY(0);\n    opacity: var(--simple-tooltip-opacity, 0.9);\n  }\n}\n\n@keyframes keyFrameSlideDownOut {\n  0% {\n    transform: translateY(0);\n    opacity: var(--simple-tooltip-opacity, 0.9);\n  }\n\n  10% {\n    opacity: 0.2;\n  }\n\n  100% {\n    transform: translateY(-2000px);\n    opacity: 0;\n  }\n}\n\n.fade-in-animation {\n  opacity: 0;\n  animation-delay: var(--simple-tooltip-delay-in, 500ms);\n  animation-name: keyFrameFadeInOpacity;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-duration: var(--simple-tooltip-duration-in, 500ms);\n  animation-fill-mode: forwards;\n}\n\n.fade-out-animation {\n  opacity: var(--simple-tooltip-opacity, 0.9);\n  animation-delay: var(--simple-tooltip-delay-out, 0ms);\n  animation-name: keyFrameFadeOutOpacity;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-duration: var(--simple-tooltip-duration-out, 500ms);\n  animation-fill-mode: forwards;\n}\n\n.scale-up-animation {\n  transform: scale(0);\n  opacity: var(--simple-tooltip-opacity, 0.9);\n  animation-delay: var(--simple-tooltip-delay-in, 500ms);\n  animation-name: keyFrameScaleUp;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-duration: var(--simple-tooltip-duration-in, 500ms);\n  animation-fill-mode: forwards;\n}\n\n.scale-down-animation {\n  transform: scale(1);\n  opacity: var(--simple-tooltip-opacity, 0.9);\n  animation-delay: var(--simple-tooltip-delay-out, 500ms);\n  animation-name: keyFrameScaleDown;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-in;\n  animation-duration: var(--simple-tooltip-duration-out, 500ms);\n  animation-fill-mode: forwards;\n}\n\n.slide-down-animation {\n  transform: translateY(-2000px);\n  opacity: 0;\n  animation-delay: var(--simple-tooltip-delay-out, 500ms);\n  animation-name: keyFrameSlideDownIn;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n  animation-duration: var(--simple-tooltip-duration-out, 500ms);\n  animation-fill-mode: forwards;\n}\n\n.slide-down-animation-out {\n  transform: translateY(0);\n  opacity: var(--simple-tooltip-opacity, 0.9);\n  animation-delay: var(--simple-tooltip-delay-out, 500ms);\n  animation-name: keyFrameSlideDownOut;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n  animation-duration: var(--simple-tooltip-duration-out, 500ms);\n  animation-fill-mode: forwards;\n}\n\n.cancel-animation {\n  animation-delay: -30s !important;\n}\n\n\n\n.hidden {\n  display: none !important;\n}\n      "]);return p=function(){return t},t}function h(){var t=d(['\n\n<div id="tooltip" class="hidden" @animationend="','">\n  <slot></slot>\n</div>']);return h=function(){return t},t}var f=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(o,n.LitElement);var e=m(o);function o(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(t=e.call(this)).manualMode=!1,t.position="bottom",t.fitToVisibleBounds=!1,t.offset=14,t.marginTop=14,t.animationEntry="",t.animationExit="",t.animationConfig={entry:[{name:"fade-in-animation",node:c(t),timing:{delay:0}}],exit:[{name:"fade-out-animation",node:c(t)}]},setTimeout(function(){t.addEventListener("webkitAnimationEnd",t._onAnimationEnd.bind(c(t))),t.addEventListener("mouseenter",t.hide.bind(c(t)))},0),t}return i(o,[{key:"render",value:function(){return n.html(h(),this._onAnimationEnd)}}],[{key:"styles",get:function(){return[n.css(p())]}},{key:"properties",get:function(){return r(r({},u(s(o),"properties",this)),{},{for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}})}},{key:"tag",get:function(){return"simple-tooltip"}}]),i(o,[{key:"disconnectedCallback",value:function(){this.manualMode||this._removeListeners(),u(s(o.prototype),"disconnectedCallback",this).call(this)}},{key:"playAnimation",value:function(t){"entry"===t?this.show():"exit"===t&&this.hide()}},{key:"cancelAnimation",value:function(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}},{key:"show",value:function(){if(!this._showing){if(""===this.textContent.trim()){for(var t=!0,n=this.children,e=0;e<n.length;e++)if(""!==n[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}},{key:"hide",value:function(){var t=this;if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout(function(){t._cancelAnimation()},5e3)}}},{key:"updatePosition",value:function(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var n,e,i=this.offsetParent.getBoundingClientRect(),o=this._target.getBoundingClientRect(),a=this.getBoundingClientRect(),r=(o.width-a.width)/2,s=(o.height-a.height)/2,l=o.left-i.left,c=o.top-i.top;switch(this.position){case"top":n=l+r,e=c-a.height-t;break;case"bottom":n=l+r,e=c+o.height+t;break;case"left":n=l-a.width-t,e=c+s;break;case"right":n=l+o.width+t,e=c+s}this.fitToVisibleBounds?(i.left+n+a.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,n)+"px",this.style.right="auto"),i.top+e+a.height>window.innerHeight?(this.style.bottom=i.height-c+t+"px",this.style.top="auto"):(this.style.top=Math.max(-i.top,e)+"px",this.style.bottom="auto")):(this.style.left=n+"px",this.style.top=e+"px")}}},{key:"_addListeners",value:function(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}},{key:"_findTarget",value:function(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}},{key:"_manualModeChanged",value:function(){this.manualMode?this._removeListeners():this._addListeners()}},{key:"_cancelAnimation",value:function(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}},{key:"_onAnimationFinish",value:function(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}},{key:"_onAnimationEnd",value:function(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}},{key:"_getAnimationType",value:function(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var n=this.animationConfig[t][0].timing.delay;"entry"===t?document.documentElement.style.setProperty("--simple-tooltip-delay-in",n+"ms"):"exit"===t&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",n+"ms")}return this.animationConfig[t][0].name}}},{key:"_removeListeners",value:function(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}},{key:"firstUpdated",value:function(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}},{key:"updated",value:function(t){var n=this;t.forEach(function(t,e){"for"==e&&n._findTarget(n[e],t),"manualMode"==e&&n._manualModeChanged(n[e],t),"animationDelay"==e&&n._delayChange(n[e],t)})}},{key:"_delayChange",value:function(t){500!==t&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}},{key:"target",get:function(){var t=this.parentNode,n=this.getRootNode();return this.for?n.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?n.host:t}}]),o}();customElements.define(f.tag,f),t.SimpleTooltip=f,Object.defineProperty(t,"__esModule",{value:!0})});
