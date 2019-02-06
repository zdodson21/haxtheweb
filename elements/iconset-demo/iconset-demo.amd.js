define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/iron-meta/iron-meta.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/marked-element/marked-element.js"],function(_exports,_polymerElement,_ironMeta,_ironIcon,_markedElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.IconsetDemo=void 0;function _templateObject_021e573029d011e9844a57e18ea72c2c(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  margin-bottom: 40px;\n  padding: 20px 40px;\n}\n:host .iconset:not(:first-of-type) {\n  border-top: 1px solid #ddd;\n}\n:host ul {\n  list-style-type: none;\n  padding: 0;\n}\n:host li {\n  display: inline-block;\n  width: 160px;\n  margin: 16px 8px;\n  text-align: center;\n  font-size: 10px;\n}\n:host iron-icon {\n  font-size: 14px;\n  color: rgb(97,97,97);\n  display: inline-block;\n}\n:host .iconset:nth-of-type(9n+2) iron-icon {\n  color: #BE3300;\n}\n:host .iconset:nth-of-type(9n+3) iron-icon {\n  color: #0000B5;\n}\n:host .iconset:nth-of-type(9n+4) iron-icon {\n  color: #750075;\n}\n:host .iconset:nth-of-type(9n+5) iron-icon {\n  color: #AA5D00;\n}\n:host .iconset:nth-of-type(9n+6) iron-icon {\n  color: #DB0A5B;\n}\n:host .iconset:nth-of-type(9n+7) iron-icon {\n  color: #005500;\n}\n:host .iconset:nth-of-type(9n+8) iron-icon {\n  color: #CF000F;\n}\n:host .iconset:nth-of-type(9n) iron-icon {\n  color: #005f8b;\n}</style>\n<template is=\"dom-repeat\" items=\"[[__iconList]]\" as=\"iconset\">\n  <div class=\"iconset\">\n      <p><strong>[[iconset.name]]</strong></p>\n      <ul>\n          <template is=\"dom-repeat\" items=\"[[iconset.icons]]\" as=\"icon\">\n              <li>\n              <div id=\"icon\">\n                  <iron-icon icon$=\"[[icon]]\"></iron-icon>\n                  <div id=\"icon-text\">[[icon]]</div>\n              </div>\n              </li>\n          </template>\n      </ul>\n  </div>\n</template>"],["\n<style>:host {\n  display: block;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  margin-bottom: 40px;\n  padding: 20px 40px;\n}\n:host .iconset:not(:first-of-type) {\n  border-top: 1px solid #ddd;\n}\n:host ul {\n  list-style-type: none;\n  padding: 0;\n}\n:host li {\n  display: inline-block;\n  width: 160px;\n  margin: 16px 8px;\n  text-align: center;\n  font-size: 10px;\n}\n:host iron-icon {\n  font-size: 14px;\n  color: rgb(97,97,97);\n  display: inline-block;\n}\n:host .iconset:nth-of-type(9n+2) iron-icon {\n  color: #BE3300;\n}\n:host .iconset:nth-of-type(9n+3) iron-icon {\n  color: #0000B5;\n}\n:host .iconset:nth-of-type(9n+4) iron-icon {\n  color: #750075;\n}\n:host .iconset:nth-of-type(9n+5) iron-icon {\n  color: #AA5D00;\n}\n:host .iconset:nth-of-type(9n+6) iron-icon {\n  color: #DB0A5B;\n}\n:host .iconset:nth-of-type(9n+7) iron-icon {\n  color: #005500;\n}\n:host .iconset:nth-of-type(9n+8) iron-icon {\n  color: #CF000F;\n}\n:host .iconset:nth-of-type(9n) iron-icon {\n  color: #005f8b;\n}</style>\n<template is=\"dom-repeat\" items=\"[[__iconList]]\" as=\"iconset\">\n  <div class=\"iconset\">\n      <p><strong>[[iconset.name]]</strong></p>\n      <ul>\n          <template is=\"dom-repeat\" items=\"[[iconset.icons]]\" as=\"icon\">\n              <li>\n              <div id=\"icon\">\n                  <iron-icon icon\\$=\"[[icon]]\"></iron-icon>\n                  <div id=\"icon-text\">[[icon]]</div>\n              </div>\n              </li>\n          </template>\n      </ul>\n  </div>\n</template>"]);_templateObject_021e573029d011e9844a57e18ea72c2c=function _templateObject_021e573029d011e9844a57e18ea72c2c(){return data};return data}var IconsetDemo=function(_PolymerElement){babelHelpers.inherits(IconsetDemo,_PolymerElement);function IconsetDemo(){babelHelpers.classCallCheck(this,IconsetDemo);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(IconsetDemo).apply(this,arguments))}babelHelpers.createClass(IconsetDemo,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(IconsetDemo.prototype),"connectedCallback",this).call(this);var iconSets=new _ironMeta.IronMeta({type:"iconset"}),temp=[];if(babelHelpers.typeof(iconSets)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&iconSets.list&&iconSets.list.length){var index=0;iconSets.list.forEach(function(item){var name=item.name;temp.push({name:name,icons:[]});item.getIconNames().forEach(function(icon){temp[index].icons.push(icon)});index++})}this.__iconList=temp}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_021e573029d011e9844a57e18ea72c2c())}},{key:"properties",get:function get(){return{__iconList:{name:"__iconList",type:"Array",value:[]}}}},{key:"tag",get:function get(){return"iconset-demo"}}]);return IconsetDemo}(_polymerElement.PolymerElement);_exports.IconsetDemo=IconsetDemo;window.customElements.define(IconsetDemo.tag,IconsetDemo)});