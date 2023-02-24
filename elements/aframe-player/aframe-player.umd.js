!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).AframePlayer={},e.lit,e.schemaBehaviors_js)}(this,(function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function a(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=p(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},y.apply(this,arguments)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var b,m,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(p,e);var r,n,a,u=f(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=u.call(this)).course="",e.height="480px",e.width="640px",e.skyColor="#DCDCDC",e.ar=!1,e.x="0",e.y="0",e.z="0",e.position={},e}return r=p,a=[{key:"styles",get:function(){return[t.css(m||(m=d(["\n        :host {\n          display: block;\n          position: relative;\n        }\n        .a-hidden {\n          display: hidden;\n        }\n      "])))]}},{key:"tag",get:function(){return"aframe-player"}},{key:"properties",get:function(){return o(o({},y(l(p),"properties",this)),{},{source:{type:String},height:{type:String},width:{type:String},skyColor:{type:String,attribute:"sky-color"},ar:{type:Boolean},x:{type:String},y:{type:String},z:{type:String},position:{type:Object}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"3D player",description:"A 3D file / augmented reality player.",icon:"av:play-circle-filled",color:"amber",tags:["3D","augmented reality","AR","VR","video","aframe","webxr","webvr"],handles:[{type:"3d",source:"source"}],meta:{author:"HAXTheWeb core team"}},settings:{configure:[{property:"source",title:"Source",description:"The URL for this AR file.",inputMethod:"textfield",type:"bar",icon:"link",required:!0},{property:"x",title:"X",description:"X position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"y",title:"Y",description:"Y position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"z",title:"Z",description:"Z position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"skyColor",title:"Sky color",description:"Select the color of the sky in the scene.",inputMethod:"colorpicker",type:"bar",icon:"editor:format-color-fill"}],advanced:[]}}}}],(n=[{key:"render",value:function(){return t.html(b||(b=d(['\n      <a-scene\n        id="scene"\n        class="embedded"\n        embedded\n        ?arjs="','"\n        style="height:',";width:",';"\n      >\n        <a-sky color="','"></a-sky>\n        <a-marker-camera preset="hiro"></a-marker-camera>\n      </a-scene>\n    '])),this.ar,this.height,this.width,this.skyColor)}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,r){["x","y","z","width","height"].includes(r)&&(t.position=t._computePosition(t.x,t.y,t.z,t.width,t.height)),"position"==r&&t._positionChanged(t[r])}))}},{key:"createRenderRoot",value:function(){return this}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-aframePlayer-loaded",this._aframeLoaded.bind(this)),y(l(p.prototype),"disconnectedCallback",this).call(this)}},{key:"connectedCallback",value:function(){y(l(p.prototype),"connectedCallback",this).call(this),"object"===("undefined"==typeof TWEEN?"undefined":i(TWEEN))&&this._aframeLoaded.bind(this),window.addEventListener("es-bridge-aframePlayer-loaded",this._aframeLoaded.bind(this)),window.ESGlobalBridge.requestAvailability().load("aframePlayer","https://aframe.io/releases/0.9.2/aframe.min.js")}},{key:"_aframeLoaded",value:function(e){this.querySelector("#scene").removeFullScreenStyles(),this.__entity=document.createElement("a-entity"),this.__entity.setAttribute("gltf-model","url("+this.source+")"),this._positionChanged(this.position),this.querySelector("#scene").appendChild(this.__entity)}},{key:"_computePosition",value:function(e,t,r,n,o){return{x:e,y:t,z:r}}},{key:"_positionChanged",value:function(e){void 0!==this.__entity&&this.__entity.setAttribute("position",e)}}])&&c(r.prototype,n),a&&c(r,a),Object.defineProperty(r,"prototype",{writable:!1}),p}(r.SchemaBehaviors(t.LitElement));customElements.define(g.tag,g),e.AframePlayer=g,Object.defineProperty(e,"__esModule",{value:!0})}));
