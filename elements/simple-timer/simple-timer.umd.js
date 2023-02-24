!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleTimer={},e.polymerElement_js)}(this,(function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(i=n.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),n)}var i,o}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=c(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},a.apply(this,arguments)}var f,l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(m,e);var u,c,l,p=s(m);function m(){return r(this,m),p.apply(this,arguments)}return u=m,l=[{key:"template",get:function(){return t.html(f||(e=["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      [[_formattedTime]]\n    "],r||(r=e.slice(0)),f=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))));var e,r}},{key:"tag",get:function(){return"simple-timer"}},{key:"properties",get:function(){return{startTime:{type:Number,value:60},currentTime:{type:Number,notify:!0},isRunning:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},countUp:{type:Boolean,value:!1},_elapsedTime:{type:Number,value:0},_formattedTime:{type:String,value:"0"}}}}],(c=[{key:"ready",value:function(){a(i(m.prototype),"ready",this).call(this),this.countUp?(this.set("currentTime",0),this.set("_formattedTime","0")):(this.set("currentTime",this.startTime),this.set("_formattedTime",this.startTime.toString()))}},{key:"start",value:function(){(this.currentTime<=0&&!this.countUp||this.currentTime>=this.startTime&&this.countUp)&&(this.currentTime=this.countUp?this.startTime:0),this.startTime&&!this.isRunning?(this._elapsed=performance.now()/1e3,this.isRunning=!0,window.requestAnimationFrame(this._decreaseTimer.bind(this))):this.pause()}},{key:"pause",value:function(){this.isRunning=!1}},{key:"_decreaseTimer",value:function(e){if(this.isRunning){if(this.currentTime<=0&&!this.countUp||this.currentTime>=this.startTime&&this.countUp)return this.currentTime=this.countUp?this.startTime:0,this.pause(),void this.dispatchEvent(new CustomEvent("simple-timer-end",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}));var t=e/1e3,r=t-this._elapsed;this.currentTime=this.countUp?this.currentTime+r:this.currentTime-r,this._formattedTime=this._formatTime(this.currentTime),this._elapsed=t,window.requestAnimationFrame(this._decreaseTimer.bind(this))}}},{key:"_formatTime",value:function(e){var t=e.toString().split(".");return 0===t[0].indexOf("-")?0:t[0]+"."+t[1].substring(0,2)}}])&&n(u.prototype,c),l&&n(u,l),Object.defineProperty(u,"prototype",{writable:!1}),m}(t.PolymerElement);customElements.define(l.tag,l),e.SimpleTimer=l,Object.defineProperty(e,"__esModule",{value:!0})}));
