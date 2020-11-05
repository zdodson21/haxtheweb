!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js"),require("@polymer/polymer/lib/legacy/class.js"),require("@polymer/paper-progress/paper-progress.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js","@polymer/polymer/lib/legacy/class.js","@polymer/paper-progress/paper-progress.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e=e||self).PaperAudioPlayer={},e.polymerElement_js,e.ironA11yKeysBehavior_js,e.class_js,null,null,null,null,null,e.simpleColorsPolymer_js,e.schemaBehaviors_js)}(this,function(e,t,o,n,r,i,a,l,s,c,u){"use strict";function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?y(Object(o),!0).forEach(function(t){d(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var o,n=f(e);if(t){var r=f(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return v(this,o)}}function g(e,t,o){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,o){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(n){var r=Object.getOwnPropertyDescriptor(n,t);return r.get?r.get.call(o):r.value}})(e,t,o||e)}function w(){var e,t,o=(e=['\n      <style include="simple-colors-shared-styles-polymer">\n        :host {\n          display: block;\n          box-sizing: border-box;\n          font-family: var(\n            --paper-audio-player-font-family,\n            "Roboto",\n            "Noto",\n            sans-serif\n          );\n          --paper-audio-player-color: var(\n            --simple-colors-default-theme-accent-9\n          );\n          --paper-audio-player-text-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n          --paper-audio-player-shadow: var(\n            --simple-colors-default-theme-grey-2\n          );\n          --paper-audio-player-background: var(\n            --simple-colors-default-theme-grey-1\n          );\n          background-color: var(--paper-audio-player-background);\n        }\n        #wrapper {\n          position: relative;\n          cursor: pointer;\n          height: 50px;\n          box-shadow: 0 1px 2px var(--paper-audio-player-shadow);\n        }\n        #left,\n        #center {\n          border-right: 1px solid var(--paper-audio-player-shadow);\n        }\n        #left,\n        #right {\n          height: 50px;\n          width: 50px;\n          position: relative;\n        }\n\n        #left {\n          opacity: 0.8;\n          background-color: var(--paper-audio-player-color);\n          transition: opacity 0.25s;\n        }\n        #left:focus,\n        #left:hover {\n          opacity: 1;\n        }\n\n        #right {\n          background-color: var(--paper-audio-player-background);\n        }\n\n        simple-icon-button,\n        simple-icon {\n          color: var(--paper-audio-player-text-color);\n        }\n\n        #duration,\n        #title,\n        #progress2 {\n          text-align: center;\n          line-height: 50px;\n        }\n\n        #duration {\n          font-size: 11px;\n          color: var(--paper-audio-player-color);\n        }\n\n        simple-icon-button,\n        simple-icon {\n          margin: auto;\n        }\n\n        #replay {\n          opacity: 0;\n          color: var(--paper-audio-player-color);\n        }\n\n        #title,\n        #progress2 {\n          pointer-events: none;\n          font-size: 15px;\n        }\n\n        #title {\n          z-index: 2;\n          color: var(--paper-audio-player-color);\n        }\n\n        #progress2 {\n          width: 0px;\n          z-index: 5;\n          color: var(--paper-audio-player-text-color);\n          overflow: hidden;\n        }\n\n        #center {\n          position: relative;\n          overflow: hidden;\n          background-color: var(--paper-audio-player-background);\n        }\n\n        #progress {\n          width: 100%;\n          transform-origin: left;\n          transform: scaleX(0);\n          background-color: var(--paper-audio-player-color);\n        }\n\n        /* On hover */\n\n        :host(:not(.cantplay)) #right:hover #replay {\n          opacity: 1;\n        }\n\n        #right:hover #duration {\n          opacity: 0;\n        }\n\n        #left:hover #play,\n        #left:hover #pause {\n          transform: scale3d(1.1, 1.1, 1.1);\n          -ms-transform: scale3d(1.1, 1.1, 1.1);\n          -webkit-transform: scale3d(1.1, 1.1, 1.1);\n        }\n\n        /* On Error */\n\n        :host(.cantplay) #title {\n          font-size: 12px;\n        }\n\n        :host(.cantplay) #wrapper {\n          cursor: default;\n        }\n\n        :host(.cantplay) #play {\n          opacity: 0;\n        }\n\n        /* Flexbox Helpers */\n\n        .layout-horizontal {\n          display: flex;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n        }\n\n        .flex {\n          -ms-flex: 1;\n          -webkit-flex: 1;\n          flex: 1;\n        }\n\n        .fit {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n        }\n\n        .self-start {\n          -ms-align-self: flex-start;\n          -webkit-align-self: flex-start;\n          align-self: flex-start;\n        }\n\n        .self-end {\n          -ms-align-self: flex-end;\n          -webkit-align-self: flex-end;\n          align-self: flex-end;\n        }\n      </style>\n      <div id="wrapper" class="layout-horizontal">\n        <div id="left" class="self-start" on-click="playPause">\n          \x3c!-- Icon --\x3e\n          <simple-icon-button\n            id="play"\n            icon="paper-audio-icons:play-arrow"\n            class="fit"\n            hidden$="[[ _hidePlayIcon(isPlaying, canBePlayed) ]]"\n            role="button"\n            aria-label="Play Audio"\n            tabindex="-1"\n          ></simple-icon-button>\n          <simple-icon-button\n            id="pause"\n            icon="paper-audio-icons:pause"\n            class="fit"\n            hidden$="[[ !isPlaying ]]"\n            role="button"\n            aria-label="Pause Audio"\n            tabindex="-1"\n          ></simple-icon-button>\n          <simple-icon\n            id="error"\n            icon="paper-audio-icons:error-outline"\n            class="fit"\n            hidden$="[[ !error ]]"\n          ></simple-icon>\n        </div>\n        <div id="center" class="flex" on-down="_onDown">\n          \x3c!-- Title --\x3e\n          <div id="title" class="fit" role="alert">[[title]]</div>\n          \x3c!-- Audio HTML5 element --\x3e\n          <audio\n            id="audio"\n            src$="[[src]]"\n            preload$="[[ _setPreload(autoPlay, preload) ]]"\n          ></audio>\n          \x3c!-- Progress bar --\x3e\n          <div id="progress" class="fit"></div>\n          \x3c!-- Secondary white title --\x3e\n          <div id="progress2" class="fit">\n            <div id="title2" aria-hidden="true">[[title]]</div>\n          </div>\n        </div>\n        <div id="right" class="self-end" on-click="restart">\n          \x3c!-- Duration --\x3e\n          <div id="duration" class="fit" hidden$="[[ended]]">\n            <span class="fit" role="timer" aria-label="Audio Track Length"\n              >[[ _convertSecToMin(timeLeft) ]]</span\n            >\n          </div>\n          \x3c!-- Icon --\x3e\n          <simple-icon-button\n            id="replay"\n            class="fit"\n            icon="paper-audio-icons:replay"\n            tabindex="-1"\n            role="button"\n            aria-label="Replay Audio"\n          ></simple-icon-button>\n        </div>\n      </div>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return w=function(){return o},o}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(s,n.mixinBehaviors([o.IronA11yKeysBehavior],u.SchemaBehaviors(c.SimpleColorsPolymer)));var r,i,a,l=b(s);function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),l.apply(this,arguments)}return r=s,a=[{key:"template",get:function(){return t.html(w())}},{key:"tag",get:function(){return"paper-audio-player"}},{key:"properties",get:function(){return h(h({},g(f(s),"properties",this)),{},{src:{type:String,observer:"_srcChanged"},title:{type:String,value:"Click to play this audio file"},autoPlay:{type:Boolean,value:!1},preload:{type:String,value:"auto"},currentTime:{type:Number,value:0,notify:!0},timeLeft:{type:Number,value:0},smallSkip:{type:Number,value:15},largeSkip:{type:Number,value:60},error:{type:Boolean},timeOffset:{type:Number,value:0}})}},{key:"keyBindings",get:function(){return{space:"playPause",enter:"playPause",left:"_skipReverseByInterval",right:"_skipReverseByInterval",down:"_skipReverseByInterval",up:"_skipReverseByInterval"}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Mini Audio player",description:"A very small audio player good for MP3s.",icon:"image:music-note",color:"green",groups:["Audio","Media"],handles:[{type:"audio",source:"src",title:"title",color:"color"}],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"src",title:"Source",description:"The URL for this audio file.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"title",title:"Title",description:"Title of this sound track.",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"src",title:"Source",description:"The URL for this audio file.",inputMethod:"haxupload",icon:"link",required:!0,validationType:"url"},{property:"title",title:"Title",description:"Title of this sound track.",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"}],advanced:[]}}}}],(i=[{key:"connectedCallback",value:function(){g(f(s.prototype),"connectedCallback",this).call(this),this.shadowRoot.querySelector("#audio").addEventListener("loadedmetadata",this._onCanPlay.bind(this)),this.shadowRoot.querySelector("#audio").addEventListener("playing",this._onPlaying.bind(this)),this.shadowRoot.querySelector("#audio").addEventListener("pause",this._onPause.bind(this)),this.shadowRoot.querySelector("#audio").addEventListener("ended",this._onEnd.bind(this)),this.shadowRoot.querySelector("#audio").addEventListener("error",this._onError.bind(this)),this.setAttribute("tabindex","0"),this.setAttribute("role","application"),this.setAttribute("aria-label","Audio Player"),this.setAttribute("aria-describedby","title")}},{key:"disconnectedCallback",value:function(){g(f(s.prototype),"disconnectedCallback",this).call(this),this.shadowRoot.querySelector("#audio").removeEventListener("loadedmetadata",this._onCanPlay.bind(this)),this.shadowRoot.querySelector("#audio").removeEventListener("playing",this._onPlaying.bind(this)),this.shadowRoot.querySelector("#audio").removeEventListener("pause",this._onPause.bind(this)),this.shadowRoot.querySelector("#audio").removeEventListener("ended",this._onEnd.bind(this)),this.shadowRoot.querySelector("#audio").removeEventListener("error",this._onError.bind(this))}},{key:"ready",value:function(){g(f(s.prototype),"ready",this).call(this);this.canBePlayed=!1,this.isPlaying=!1,this.ended=!1,this.error=!1,this.shadowRoot.querySelector("#audio").currentTime=this.timeOffset}},{key:"playPause",value:function(e){e&&e.preventDefault();this.canBePlayed?this.isPlaying?this._pause():this._play():"none"===this.preload&&(this.shadowRoot.querySelector("#audio").load(),this._play())}},{key:"_play",value:function(){this.shadowRoot.querySelector("#audio").play()}},{key:"_pause",value:function(){this.shadowRoot.querySelector("#audio").pause()}},{key:"restart",value:function(e){e&&e.preventDefault();this.shadowRoot.querySelector("#audio").currentTime=0,this.isPlaying||this._play()}},{key:"_onCanPlay",value:function(){if(this.canBePlayed=!0,this.timeLeft=this.shadowRoot.querySelector("#audio").duration,this.timeOffset>0){var e=this.timeOffset/this.shadowRoot.querySelector("#audio").duration;this._updateVisualProgress(e)}this.autoPlay&&this._play()}},{key:"_onPlaying",value:function(){this.ended=!1,this.isPlaying=!0,this.shadowRoot.querySelector("#replay").style="",this._startProgressTimer()}},{key:"_skipReverseByInterval",value:function(e){e&&e.preventDefault();var t=0;switch(e.detail.key){case"up":this.largeSkip<this.timeLeft&&(t=this.currentTime+this.largeSkip);break;case"down":this.currentTime-this.largeSkip>0&&(t=this.currentTime-this.largeSkip);break;case"right":this.smallSkip<this.timeLeft&&(t=this.currentTime+this.smallSkip);break;default:this.currentTime-this.smallSkip>0&&(t=this.currentTime-this.smallSkip)}this._updatePlayPosition(t),this.isPlaying||this._play()}},{key:"_startProgressTimer",value:function(){var e=this;e.timer={},e.timer.sliderUpdateInterval&&clearInterval(e.timer.sliderUpdateInterval),e.timer.sliderUpdateInterval=setInterval(function(){if(e.isPlaying){e.currentTime=e.shadowRoot.querySelector("#audio").currentTime,e.timeLeft=e.shadowRoot.querySelector("#audio").duration-e.currentTime;var t=e.currentTime/e.shadowRoot.querySelector("#audio").duration;e._updateVisualProgress(t)}else clearInterval(e.timer.sliderUpdateInterval)},60)}},{key:"_onPause",value:function(){this.isPlaying=!1}},{key:"_onEnd",value:function(){this.ended=!0,this.isPlaying=!1,this.shadowRoot.querySelector("#replay").style.opacity=1}},{key:"_onError",value:function(){this.classList.add("cantplay"),this.title="Sorry, can't play track: "+this.title,this.error=!0,this.setAttribute("aria-invalid","true")}},{key:"_convertSecToMin",value:function(e){if(0===e)return"";var t=Math.floor(e/60),o=Math.floor(e%60)+"";return t+":"+(o.length<2?"0"+o:o)}},{key:"_onDown",value:function(e){e.preventDefault();var t=this;t.canBePlayed?(t._updateProgressBar(e),t.isPlaying||t._play()):"none"===t.preload&&(t.shadowRoot.querySelector("#audio").load(),t.shadowRoot.querySelector("#audio").addEventListener("loadedmetadata",function(){t._updateProgressBar(e),t.isPlaying||t._play()},!1))}},{key:"_updateProgressBar",value:function(e){var t=(e.detail.x-this.shadowRoot.querySelector("#center").getBoundingClientRect().left)/this.shadowRoot.querySelector("#center").getBoundingClientRect().width*this.shadowRoot.querySelector("#audio").duration;this._updatePlayPosition(t)}},{key:"_updatePlayPosition",value:function(e){this.currentTime=this.shadowRoot.querySelector("#audio").currentTime=e;var t=this.currentTime/this.shadowRoot.querySelector("#audio").duration;this._updateVisualProgress(t)}},{key:"_updateVisualProgress",value:function(e){this.shadowRoot.querySelector("#progress").style.transform="scaleX("+e+")",this.shadowRoot.querySelector("#progress2").style.width=100*e+"%",this.shadowRoot.querySelector("#title2").style.width=1/e*100+"%"}},{key:"_srcChanged",value:function(e,t){this.isPlaying&&(this._pause(),this._play())}},{key:"_changeColor",value:function(e){this.shadowRoot.querySelector("#left").style.backgroundColor=e,this.shadowRoot.querySelector("#title").style.color=e,this.shadowRoot.querySelector("#duration").style.color=e,this.shadowRoot.querySelector("#progress").style.backgroundColor=e,this.shadowRoot.querySelector("#replay").style.color=e}},{key:"_hidePlayIcon",value:function(e,t){return!!e||!(t||"none"===this.preload)}},{key:"_setPreload",value:function(e,t){return e?"auto":t}}])&&p(r.prototype,i),a&&p(r,a),s}();window.customElements.define(k.tag,k),e.PaperAudioPlayer=k,Object.defineProperty(e,"__esModule",{value:!0})});
