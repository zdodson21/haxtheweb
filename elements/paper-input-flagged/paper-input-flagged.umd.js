!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/simple-fields/lib/simple-fields-field.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/simple-fields/lib/simple-fields-field.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).PaperInputFlagged={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l,c,u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}(f,e);var i,s,u,p=o(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=p.call(this)).disabled=!1,e.label="",e.value="",e.inputSuccess={message:"You passed our simple accessibility checks.",status:"info"},e.flaggedInput=[{match:null,message:"Alt data is required for everything except decoration images.",status:"notice"},{match:"image",message:"Screenreaders will say the word image, don't put it in the descriptive text",status:"error"},{match:"photo",message:"Screenreaders will say the word image, don't put photo in the descriptive text",status:"error"},{match:"picture",message:"Screenreaders will say the word image, don't put picture in the descriptive text",status:"error"},{match:3,message:"Description not effective enough. This should be at least a sentance about what the image is.",status:"error"},{match:10,message:"Make sure your alt text is descriptive enough for those that can't see the media.",status:"warning"}],e}return i=f,u=[{key:"styles",get:function(){return[t.css(c||(c=a(['\n        :host {\n          display: block;\n        }\n        simple-icon {\n          transition: 0.6s all ease-in;\n          width: 24px;\n          height: 24px;\n          margin-right: 4px;\n        }\n        simple-tooltip {\n          --simple-tooltip-delay-in: 100;\n          font-size: 11px;\n        }\n        #icon {\n          color: var(--paper-grey-400);\n          background-color: transparent;\n        }\n        :host([status="info"]) #icon {\n          color: var(--paper-green-400);\n        }\n        :host([status="notice"]) #icon {\n          color: var(--paper-grey-400);\n        }\n        :host([status="warning"]) #icon {\n          color: var(--paper-yellow-700);\n        }\n        :host([status="error"]) #icon {\n          color: var(--paper-red-900);\n        }\n        .element-invisible {\n          position: absolute !important;\n          clip: rect(1px, 1px, 1px, 1px);\n          overflow: hidden;\n          height: 1px;\n        }\n      '])))]}},{key:"tag",get:function(){return"paper-input-flagged"}},{key:"properties",get:function(){return{label:{type:String},disabled:{type:Boolean},icon:{type:String},maxlength:{type:Number},minlength:{type:Number},status:{type:String,reflect:!0},value:{type:String},flaggedInput:{type:Array,attribute:"flagged-input"},inputSuccess:{type:Object,attribute:"input-success"},__activeMessage:{type:String}}}}],(s=[{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){if(["value"].includes(n)){var i="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(i,{detail:{value:t[n]}}))}"status"==n&&(t.icon=t._iconFromStatus(t.status)),"flaggedInput"!=n&&"value"!=n||(t.status=t.testStatus(t.flaggedInput,t.value))}))}},{key:"valueEvent",value:function(e){this.value=e.detail.value}},{key:"render",value:function(){return t.html(l||(l=a(['\n      <simple-fields-field\n        label="','"\n        value="','"\n        @value-changed="','"\n        ?char-counter="','"\n        ?disabled="','"\n        minlength="','"\n        maxlength="','"\n      >\n        <simple-icon id="icon" icon="','" slot="prefix"></simple-icon>\n      </simple-fields-field>\n      <div class="element-invisible">','</div>\n      <simple-tooltip\n        for="icon"\n        position="top"\n        offset="20"\n        fit-to-visible-bounds\n      >\n        ',"\n      </simple-tooltip>\n    "])),this.label,this.value,this.valueEvent,this.charCounter,this.disabled,this.minlength,this.maxlength,this.icon,this.__activeMessage,this.__activeMessage)}},{key:"testStatus",value:function(e,t){for(var n in e){if(null===e[n].match&&(""===t||null===t))return this.__activeMessage=e[n].message,e[n].status;if(!isNaN(e[n].match)&&t.split(/\s+/g).length<parseInt(e[n].match))return this.__activeMessage=e[n].message,e[n].status;if(t.toLowerCase().includes(e[n].match))return this.__activeMessage=e[n].message,e[n].status}return this.__activeMessage=this.inputSuccess.message,this.inputSuccess.status}},{key:"_iconFromStatus",value:function(e){switch(e){case"error":return"icons:error";case"warning":case"notice":return"icons:warning";case"info":return"icons:info-outline";default:return"icons:info"}}}])&&n(i.prototype,s),u&&n(i,u),Object.defineProperty(i,"prototype",{writable:!1}),f}(t.LitElement);window.customElements.define(u.tag,u),e.PaperInputFlagged=u,Object.defineProperty(e,"__esModule",{value:!0})}));
