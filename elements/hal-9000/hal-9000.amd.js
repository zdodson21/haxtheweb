define(["exports","meta","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/es-global-bridge/es-global-bridge.js","./node_modules/@polymer/polymer/lib/utils/resolve-url.js"],function(_exports,meta,_polymerElement,_esGlobalBridge,_resolveUrl){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.Hal9000=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject_f3a4493029cf11e98c2b83fd5ff30fc3(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n[hidden] {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_f3a4493029cf11e98c2b83fd5ff30fc3=function _templateObject_f3a4493029cf11e98c2b83fd5ff30fc3(){return data};return data}var Hal9000=function(_PolymerElement){babelHelpers.inherits(Hal9000,_PolymerElement);babelHelpers.createClass(Hal9000,null,[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_f3a4493029cf11e98c2b83fd5ff30fc3())}},{key:"properties",get:function get(){return{commands:{name:"commands",type:"Object",value:{},observer:"_commandsChanged"},respondsTo:{name:"respondsTo",type:"String",value:"(hal)",observer:"_respondsToChanged"},debug:{name:"debug",type:"Boolean",value:!1,observer:"_debugChanged"},auto:{name:"auto",type:"Boolean",reflectToAttribute:!0,observer:"_autoChanged"},enabled:{name:"enabled",type:"Boolean",reflectToAttribute:!0,observer:"_enabledChanged"},pitch:{name:"pitch",type:"Number",reflectToAttribute:!0,value:.9},rate:{name:"rate",type:"Number",reflectToAttribute:!0,value:.9},language:{name:"language",type:"String",reflectToAttribute:!0,value:"en-US"}}}},{key:"tag",get:function get(){return"hal-9000"}}]);function Hal9000(){var _this;babelHelpers.classCallCheck(this,Hal9000);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Hal9000).call(this));var name="annyang",basePath=(0,_resolveUrl.pathFromUrl)(meta.url),location="".concat(basePath,"lib/annyang/annyang.min.js");window.addEventListener("es-bridge-".concat(name,"-loaded"),_this._annyangLoaded.bind(babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this))));window.ESGlobalBridge.requestAvailability();window.ESGlobalBridge.instance.load(name,location);window.Hal9000.instance=babelHelpers.assertThisInitialized(babelHelpers.assertThisInitialized(_this));if("undefined"!==typeof window.speechSynthesis){_this.synth=window.speechSynthesis;_this.voices=_this.synth.getVoices();for(var i=0;i<_this.voices.length;i++){if(_this.voices[i].default){_this.defaultVoice=_this.voices[i].name}}}return _this}babelHelpers.createClass(Hal9000,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(Hal9000.prototype),"connectedCallback",this).call(this)}},{key:"clickObject",value:function clickObject(phrase){this.__text=phrase;this.commands[phrase].object.click();this.commands[phrase].object.focus()}},{key:"_commandsChanged",value:function _commandsChanged(newValue){this.addCommands(newValue)}},{key:"addCommands",value:function addCommands(commands){if(this.annyang){this.annyang.addCommands(commands)}}},{key:"speak",value:function speak(text){this.__text=text;if(this.synth){this.utter=new SpeechSynthesisUtterance(this.__text);this.utter.pitch=this.pitch;this.utter.rate=this.rate;this.utter.lang=this.language;this.utter.voice=this.defaultVoice;this.synth.speak(this.utter)}else{console.warn("I have no voice...")}}},{key:"_annyangLoaded",value:function _annyangLoaded(){this.annyang=window.annyang;if(this.annyang){this.annyang.addCommands(this.commands);this.annyang.debug(this.debug);if(this.auto){this.annyang.start({autoRestart:!0,continuous:!0})}else if(this.enabled){this.annyang.start()}var evt=new CustomEvent("hal-9000-online",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(evt)}}},{key:"_respondsToChanged",value:function _respondsToChanged(newValue,oldValue){if(this.annyang){this.annyang.removeCommands()}var commands={};for(var i in this.commands){if(i.replace(oldValue,newValue)!==i){commands[i.replace(oldValue,newValue)]=this.commands[i]}else{commands[i]=this.commands[i]}}this.set("commands",commands)}},{key:"_autoChanged",value:function _autoChanged(newValue){this.enabled=newValue}},{key:"_enabledChanged",value:function _enabledChanged(newValue){if(this.annyang){if(newValue){if(this.auto){this.annyang.start({autoRestart:!0,continuous:!0})}else{this.annyang.start()}}else{this.annyang.abort()}}}},{key:"_debugChanged",value:function _debugChanged(newValue,oldValue){if(this.annyang){this.annyang.debug(newValue)}}}]);return Hal9000}(_polymerElement.PolymerElement);_exports.Hal9000=Hal9000;window.customElements.define(Hal9000.tag,Hal9000);window.Hal9000=window.Hal9000||{};window.Hal9000.requestAvailability=function(){if(!window.Hal9000.instance){window.Hal9000.instance=new Hal9000}}});