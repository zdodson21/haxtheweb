!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/radio-behaviors/radio-behaviors.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/radio-behaviors/radio-behaviors.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).a11yCarousel={},t.lit,t.radioBehaviors_js)}(this,(function(t,e,n){"use strict";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,v(r.key),r)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e,n){return(e=v(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function d(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function b(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=b(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function v(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}var m,g,x,k,j,O,w,P=function(t){c(r,t);var n=f(r);function r(){var t;return i(this,r),(t=n.call(this)).tabindex=0,t.setAttribute("role","button"),t.setAttribute("tabindex",0),t.addEventListener("click",t._handleClick),t.addEventListener("keydown",t._handleClick),t.active=!1,t.hidden=!1,t.disabled=!1,t}return s(r,[{key:"render",value:function(){return e.html(m||(m=h([" <slot></slot> "])))}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._handleClick),this.removeEventListener("keydown",this._handleClick),y(u(r.prototype),"disconnectedCallback",this)&&y(u(r.prototype),"disconnectedCallback",this).call(this)}},{key:"updated",value:function(t){var e=this;y(u(r.prototype),"updated",this)&&y(u(r.prototype),"updated",this).call(this,t),t.forEach((function(t,n){["controls","active"].includes(n)&&(e.disabled=!e.controls||e.active)}))}},{key:"_handleClick",value:function(t){"keydown"===t.type&&" "!==t.key&&"Enter"!==t.key&&"Spacebar"!==t.key||this.disabled||(t.preventDefault(),this.dispatchEvent(new CustomEvent("select-carousel-item",{bubbles:!0,cancelable:!0,composed:!0,detail:this})))}}],[{key:"styles",get:function(){return[e.css(g||(g=h(["\n        :host {\n          display: inline;\n          background-color: transparent;\n          border: 1px solid black;\n          padding: 2px 5px;\n          margin: 15px 2px;\n          text-align: center;\n        }\n        :host([hidden]) {\n          display: none !important;\n        }\n        :host([disabled]) {\n          opacity: 0.5;\n        }\n        @media print {\n          :host {\n            display: none !important;\n          }\n        }\n      "])))]}},{key:"properties",get:function(){return{active:{type:Boolean,attribute:"active",reflect:!0},buttonType:{type:String,attribute:"button-type",reflect:!0},controls:{type:String,attribute:"controls",reflect:!0},disabled:{type:Boolean,attribute:"disabled",reflect:!0},hidden:{type:Boolean,attribute:"hidden",reflect:!0}}}},{key:"tag",get:function(){return"a11y-carousel-button"}}]),r}(e.LitElement);customElements.define(P.tag,P);var _=function(t){c(r,t);var n=f(r);function r(){var t;return i(this,r),(t=n.call(this)).noButtons=!1,t.noPrevNext=!1,t.prevLabel="previous",t.nextLabel="next",t}return s(r,[{key:"render",value:function(){return e.html(x||(x=h(['\n      <div><slot name="above"></slot></div>\n      <div id="inner">\n        <slot name="img"></slot>\n        <slot></slot>\n        ',"\n      </div>\n      ",'\n      <div><slot name="below"></slot></div>\n    '])),this.noPrevNext?"":e.html(k||(k=h(['\n              <a11y-carousel-button\n                class="prevnext"\n                button-type="prev"\n                controls="','"\n                title="','"\n              >\n                <span class="sr-only">','</span>\n                <simple-icon-lite icon="icons:chevron-left"></simple-icon-lite>\n              </a11y-carousel-button>\n              <a11y-carousel-button\n                class="prevnext"\n                button-type="next"\n                controls="','"\n                title="','"\n              >\n                <span class="sr-only">','</span>\n                <simple-icon-lite icon="icons:chevron-right"></simple-icon-lite>\n              </a11y-carousel-button>\n            '])),this.prev,this.prevLabel,this.nextLabel,this.next,this.nextLabel,this.nextLabel),this.noButtons?"":e.html(j||(j=h(['\n            <div class="buttons">\n              ',"\n            </div>\n          "])),(this.itemData||[]).map((function(t){return e.html(O||(O=h(['\n                  <a11y-carousel-button class="button" controls="','">\n                    <span class="sr-only">',"</span>\n                  </a11y-carousel-button>\n                "])),t.id,t.index+1)}))))}},{key:"__query",get:function(){return"figure"}},{key:"__selected",get:function(){return"active"}},{key:"__selectEvent",get:function(){return"select-carousel-item"}},{key:"first",get:function(){return this.itemData&&this.itemData[0]?this.itemData[0].id:void 0}},{key:"prev",get:function(){return this.itemData&&this.itemData[this.selectedIndex-1]?this.itemData[this.selectedIndex-1].id:this.first}},{key:"last",get:function(){return this.itemData&&this.itemData[this.itemData.length-1]?this.itemData[this.itemData.length-1].id:void 0}},{key:"next",get:function(){return this.itemData&&this.itemData[this.selectedIndex+1]?this.itemData[this.selectedIndex+1].id:this.last}},{key:"firstUpdated",value:function(t){y(u(r.prototype),"firstUpdated",this)&&y(u(r.prototype),"firstUpdated",this).call(this,t),this._handleSelectionChange()}},{key:"_getImage",value:function(){var t=this.querySelector("figure#".concat(this.selection," > img"))||this.querySelector("figure > img");return t?'url("'.concat(t.src,'")'):void 0}},{key:"_handleSelectionChange",value:function(){var t=this;y(u(r.prototype),"_handleSelectionChange",this).call(this),this._updateItemData();var e=this.querySelectorAll("a11y-carousel-button");this.style.setProperty("--a11y-carousel-background-image",this._getImage()),Object.keys(e||{}).forEach((function(n){var r=e[n];"first"===r.buttonType&&(r.controls=t.first),"prev"===r.buttonType&&(r.controls=t.prev),"next"===r.buttonType&&(r.controls=t.next),"last"===r.buttonType&&(r.controls=t.last),r.active=r.controls===t.selection}))}}],[{key:"styles",get:function(){return[e.css(w||(w=h(['\n        :host {\n          margin: 15px 0;\n          --a11y-carousel-background-image: none;\n        }\n        ::slotted(figure) {\n          margin: 0 auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }\n        :host([hidden]),\n        ::slotted(figure:not([active])) {\n          display: none !important;\n        }\n        .sr-only {\n          position: absolute;\n          left: -99999px;\n          width: 0;\n          overflow: hidden;\n        }\n        @media screen {\n          #inner {\n            margin-bottom: 10px;\n            position: relative;\n            z-index: 2;\n          }\n          .buttons {\n            display: flex;\n            align-items: stretch;\n            justify-content: center;\n            z-index: 200;\n          }\n          a11y-carousel-button.prevnext {\n            position: absolute;\n            margin: 0;\n            padding: 0;\n            top: 0;\n            bottom: 0;\n            display: flex;\n            flex-direction: column;\n            align-items: stretch;\n            justify-content: center;\n            border: 0px solid transparent;\n            width: 50%;\n          }\n          a11y-carousel-button.prevnext simple-icon-lite {\n            opacity: 0;\n            --simple-icon-width: 30%;\n            --simple-icon-height: 30%;\n            transition: 0.5s all ease-in-out;\n          }\n          a11y-carousel-button.prevnext:focus,\n          a11y-carousel-button.prevnext:hover {\n            outline: none;\n          }\n          a11y-carousel-button.prevnext:focus simple-icon-lite,\n          a11y-carousel-button.prevnext:hover simple-icon-lite {\n            opacity: 1;\n            color: var(--a11y-carousel-button-background-color, black);\n          }\n          a11y-carousel-button[button-type="prev"] {\n            left: 0;\n            right: 50%;\n          }\n          a11y-carousel-button[button-type="next"] {\n            right: 0;\n            left: 50%;\n            align-items: flex-end;\n          }\n          a11y-carousel-button.button {\n            flex: 0 0 var(--a11y-carousel-button-width, 40px);\n            height: var(--a11y-carousel-button-height, 10px);\n            margin: var(--a11y-carousel-button-margin, 5px);\n            padding: var(--a11y-carousel-button-padding, 0px);\n            background-color: var(\n              --a11y-carousel-button-background-color,\n              black\n            );\n            border: var(--a11y-carousel-button-border, 1px solid black);\n            border-radius: var(\n              --a11y-carousel-button-border-radius,\n              1px solid black\n            );\n          }\n        }\n      '])))]}},{key:"properties",get:function(){return o(o({},y(u(r),"properties",this)),{},{nextLabel:{type:String},noPrevNext:{type:Boolean,attribute:"no-prev-next"},noButtons:{type:Boolean,attribute:"no-buttons"},prevLabel:{type:String}})}},{key:"tag",get:function(){return"a11y-carousel"}}]),r}(n.RadioBehaviors(e.LitElement));customElements.define(_.tag,_),t.a11yCarousel=_,Object.defineProperty(t,"__esModule",{value:!0})}));
