!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/paper-styles/paper-styles.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@polymer/iron-resizable-behavior/iron-resizable-behavior.js"),require("@polymer/polymer/lib/legacy/class.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/paper-styles/paper-styles.js","@polymer/iron-flex-layout/iron-flex-layout.js","@polymer/iron-resizable-behavior/iron-resizable-behavior.js","@polymer/polymer/lib/legacy/class.js"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).CircleProgress={},e.polymerElement_js,null,null,e.ironResizableBehavior_js,e.class_js)}(this,(function(e,r,t,n,o,i){"use strict";function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function l(e,r,t){return(r=h(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function f(e,r){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},f(e,r)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,r){if(r&&("object"==typeof r||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function m(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=u(e);if(r){var o=u(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return y(this,t)}}function b(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=u(e)););return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,r,t){var n=b(e,r);if(n){var o=Object.getOwnPropertyDescriptor(n,r);return o.get?o.get.call(arguments.length<3?e:t):o.value}},d.apply(this,arguments)}function h(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}var v,g=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&f(e,r)}(a,e);var t,n,o,i=m(a);function a(){var e;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,a),e=i.call(this),setTimeout((function(){e.addEventListener("iron-resize",e._onIronResize.bind(p(e)))}),0),e}return t=a,o=[{key:"template",get:function(){return r.html(v||(e=['\n      <style include="paper-material-styles">\n        :host {\n          @apply --layout-vertical;\n          @apply --layout-center-center;\n          position: relative;\n          width: var(--circle-progress-width, 64px);\n          height: var(--circle-progress-height, 64px);\n          margin: 24px;\n          border-radius: 50%;\n        }\n        svg {\n          position: absolute;\n          top: 0;\n          left: 0;\n          display: none;\n        }\n        .circle-background {\n          stroke: var(--circle-progress-bg-stroke-color, --paper-grey-100);\n        }\n        .circle-foreground {\n          transition: stroke-dashoffset var(--circle-progress-transition, 150ms);\n          stroke: var(--circle-progress-stroke-color, blue);\n          stroke-linecap: var(--circle-progress-stroke-linecap, round);\n        }\n      </style>\n\n      <svg id="circle" width="100%" height="100%">\n        <circle\n          class="circle-background"\n          r$="[[_radius]]"\n          cx$="[[_cx]]"\n          cy$="[[_cy]]"\n          fill="transparent"\n          stroke-width$="[[strokeWidth]]"\n        ></circle>\n        <circle\n          class="circle-foreground"\n          r$="[[_radius]]"\n          cx$="[[_cx]]"\n          cy$="[[_cy]]"\n          fill="transparent"\n          stroke-width$="[[strokeWidth]]"\n          stroke-dasharray$="[[_dasharray]]"\n          stroke-dashoffset$="[[_dashoffset]]"\n          transform$="[[_transform]]"\n        ></circle>\n      </svg>\n      <slot></slot>\n    '],t||(t=e.slice(0)),v=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}},{key:"tag",get:function(){return"circle-progress"}},{key:"properties",get:function(){return s(s({},d(u(a),"properties",this)),{},{value:{name:"value",type:Number,value:0},max:{name:"max",type:Number,value:100},strokeWidth:{name:"strokeWidth",type:Number,value:4},angle:{name:"angle",type:Number,value:-90},_cx:{name:"_cx",type:Number,value:null},_cy:{name:"_cy",type:Number,value:null},_radius:{name:"_radius",type:Number,computed:"_computeRadius(_cx, _cy, strokeWidth)"},_transform:{name:"_transform",type:String,computed:"_computeTransform(angle, _cx, _cy)"},_dasharray:{name:"_dasharray",type:Number,computed:"_computeDashArray(_radius)"},_dashoffset:{name:"_dashoffset",type:Number,computed:"_computeDashOffset(value, max, _dasharray)"}})}}],(n=[{key:"_computeDashArray",value:function(e){return 2*Math.PI*e}},{key:"_computeDashOffset",value:function(e,r,t){return(1-e/r)*t}},{key:"_computeRadius",value:function(e,r,t){return e&&r?Math.max(0,Math.min(e,r)-t/2):0}},{key:"_computeTransform",value:function(e,r,t){return r&&t?"rotate("+e+", "+r+", "+t+")":""}},{key:"_onIronResize",value:function(){this.offsetWidth&&this.offsetHeight&&(this._cx=this.offsetWidth/2,this._cy=this.offsetHeight/2,this.shadowRoot.querySelector("#circle").style.display="block")}}])&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.mixinBehaviors([o.IronResizableBehavior],r.PolymerElement));customElements.define(g.tag,g),e.CircleProgress=g,Object.defineProperty(e,"__esModule",{value:!0})}));
