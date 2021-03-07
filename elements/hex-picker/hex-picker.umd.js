!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).HexPicker={},e.litElement_js)}(this,function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function p(e,t,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(){var e=d(['\n      <fieldset>\n        <label for="','">',"</label>\n        <input\n          @input=",'\n          type="range"\n          min="0"\n          max="255"\n          id="','"\n          step="1"\n          value="0"\n        />\n        <output for="','" id="','_out">0</output>\n      </fieldset>\n    ']);return h=function(){return e},e}function f(){var e=d(['<div class="large-display"></div>']);return f=function(){return e},e}function g(){var e=d(["\n      ",'\n      <div class="input-container">\n        <input\n          class="text-input"\n          maxlength="9" \n          @input="','"\n          @keydown="','" \n          .disabled=','>\n        </input>\n        <div class="color-square"></div>\n      </div>\n      <div class="slider-container">\n        ',"\n        ","\n        ","\n        ","\n      </div>\n    "]);return g=function(){return e},e}function y(){var e=d(["\n        :host {\n          --color-picker-width: 200px;\n          --color-picker-input-margin: 5px;\n          --color-picker-input-padding: 5px;\n          display: flex;\n          flex-direction: column;\n        }\n\n        .input-container {\n          display: inline-flex;\n          align-items: center;\n          box-sizing: border-box;\n          width: var(--color-picker-width);\n        }\n\n        .color-square {\n          background-color: #000000ff;\n          border: 1px dotted black;\n          width: var(--color-picker-square-width, 15px);\n          height: var(--color-picker-square-height, 15px);\n          margin-left: -35px;\n        }\n\n        .slider-container {\n          width: var(--color-picker-width);\n        }\n\n        fieldset {\n          border: none;\n          display: flex;\n          align-items: center;\n        }\n\n        .text-input {\n          margin-top: var(--color-picker-input-margin);\n          margin-bottom: var(--color-picker-input-margin);\n          padding: var(--color-picker-input-padding);\n          width: calc(\n            var(--color-picker-width) - 8px - var(--color-picker-input-margin)\n          );\n        }\n\n        .large-display {\n          width: var(--color-picker-width);\n          height: var(--color-picker-lg-block-height, 100px);\n          background-color: #000000ff;\n          border: 1px dotted black;\n          border-radius: 2px;\n        }\n      "]);return y=function(){return e},e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(o,t.LitElement);var r=s(o);function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=r.call(this)).value="#000000FF",e._rValue=0,e._gValue=0,e._bValue=0,e._oValue=255,e.disabled=!1,e}return n(o,null,[{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Hex Picker",description:"Hexcode color picker",icon:"image:colorize",color:"grey",groups:["color","picker"],handles:[],meta:{author:"collinkleest",owner:"ELMS:LN"}},settings:{configure:[{property:"value",title:"Value",description:"Default hex value",inputMethod:"textfield"},{property:"disabled",title:"Disabled",description:"Disable the text field",inputMethod:"boolean"},{property:"largeDisplay",title:"Large Display",description:"Include color in large display",inputMethod:"boolean"}],advanced:[]},demoSchema:[{tag:"hex-picker",properties:{org:"elmsln",repo:"lrnwebcomponents"},content:""}]}}},{key:"properties",get:function(){return a(a({},p(l(o),"properties",this)),{},{value:{type:String,reflect:!0,attribute:"value"},disabled:{type:Boolean,reflect:!0,attribute:"disabled"},largeDisplay:{type:Boolean,reflect:!0,attribute:"large-display"}})}},{key:"styles",get:function(){return[t.css(y())]}},{key:"tag",get:function(){return"hex-picker"}}]),n(o,[{key:"render",value:function(){return t.html(g(),this.largeDisplay?t.html(f()):"",this._inputChanged,this._validateInput,this.disabled,this.renderFieldSet("R"),this.renderFieldSet("G"),this.renderFieldSet("B"),this.renderFieldSet("O"))}},{key:"_validateInput",value:function(e){String.fromCharCode(e.which).match(/[0-9A-Fa-f\b]/g)||39===e.which||37===e.which||e.preventDefault()}},{key:"_padHex",value:function(e){return e.length<2?"0"+e:e}},{key:"_computeHex",value:function(){var e=this._rValue.toString(16),t=this._gValue.toString(16),r=this._bValue.toString(16),n=this._oValue.toString(16);return"#"+this._padHex(e)+this._padHex(t)+this._padHex(r)+this._padHex(n)}},{key:"_inputChanged",value:function(e){var t=e.target.value;t.startsWith("#")||(t="#"+t),this.shadowRoot.querySelector(".color-square").style.backgroundColor=t,this.value=t,this.largeDisplay&&(this.shadowRoot.querySelector(".large-display").style.backgroundColor=t),this._dispatchChange(t);var r=this._hexToRgb(t);null!==r&&this._updateSliders(r)}},{key:"_updateSliders",value:function(e){this.shadowRoot.querySelector("#R").value=e.r,this.shadowRoot.querySelector("#R_out").value=e.r,this.shadowRoot.querySelector("#G").value=e.g,this.shadowRoot.querySelector("#G_out").value=e.g,this.shadowRoot.querySelector("#B").value=e.b,this.shadowRoot.querySelector("#B_out").value=e.b,this.shadowRoot.querySelector("#O").value=e.o,this.shadowRoot.querySelector("#O_out").value=e.o}},{key:"_hexToRgb",value:function(e){return 4===e.length?{r:parseInt(e[1]+"F",16),g:parseInt(e[2]+"F",16),b:parseInt(e[3]+"F",16),o:0}:5===e.length?{r:parseInt(e[1]+"F",16),g:parseInt(e[2]+"F",16),b:parseInt(e[3]+"F",16),o:parseInt(e[4]+"F",16)}:7===e.length?{r:parseInt(e[1]+e[2],16),g:parseInt(e[3]+e[4],16),b:parseInt(e[5]+e[6],16),o:0}:9===e.length?{r:parseInt(e[1]+e[2],16),g:parseInt(e[3]+e[4],16),b:parseInt(e[5]+e[6],16),o:parseInt(e[7]+e[8],16)}:{r:0,g:0,b:0,o:0}}},{key:"_fieldSetChange",value:function(e){var t=this.shadowRoot.querySelector("#".concat(e.target.id,"_out")),r=this.shadowRoot.querySelector(".color-square"),n=this.shadowRoot.querySelector("input");t.value=e.target.value,"R"===e.target.id?this._rValue=parseInt(e.target.value,10):"G"===e.target.id?this._gValue=parseInt(e.target.value,10):"B"===e.target.id?this._bValue=parseInt(e.target.value,10):"O"===e.target.id&&(this._oValue=parseInt(e.target.value,10));var o=this._computeHex();r.style.backgroundColor=o,n.value=o,this.largeDisplay&&(this.shadowRoot.querySelector(".large-display").style.backgroundColor=o),this._dispatchChange(o)}},{key:"_dispatchChange",value:function(){this.dispatchEvent(new CustomEvent("value-changed",{bubbles:!0,cancelable:!1,composed:!1,detail:this}))}},{key:"renderFieldSet",value:function(e){return t.html(h(),e,e,this._fieldSetChange,e,e,e)}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,r){if("value"===r&&t[r]){t.shadowRoot.querySelector(".color-square").style.backgroundColor=t.value,t.shadowRoot.querySelector("input").value=t.value,t.largeDisplay&&(t.shadowRoot.querySelector(".large-display").style.backgroundColor=t.value);var n=t._hexToRgb(t.value);null!==n&&t._updateSliders(n)}})}}]),o}();customElements.define(v.tag,v),e.HexPicker=v,Object.defineProperty(e,"__esModule",{value:!0})});