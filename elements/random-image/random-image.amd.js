define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/iron-image/iron-image.js"],function(_exports,_polymerLegacy,_ironImage){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.RandomImage=void 0;function _templateObject_52c2b82029d011e9870bf5c522e57e40(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n      .is-circle {\n        border: 1px solid grey;\n        border-radius: 50%;\n        box-shadow: 0px 5px 10px #ccc;\n      }\n    </style>\n    <iron-image\n      style=\"width:200px; height:200px;\"\n      class$=\"[[mode]]\"\n      sizing=\"contain\"\n      src$=\"[[imgSrc]]\"\n      title$=\"[[imgTitle]]\"\n    ></iron-image>\n  "]);_templateObject_52c2b82029d011e9870bf5c522e57e40=function _templateObject_52c2b82029d011e9870bf5c522e57e40(){return data};return data}var RandomImage=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_52c2b82029d011e9870bf5c522e57e40()),is:"random-image",properties:{mode:{type:String,notify:!0,value:""},imgSrc:{type:String},imgTitle:{type:String},imagesList:{type:Object,notify:!0,value:function value(){return[]}}},_pickRandomProperty:function _pickRandomProperty(obj){var result,count=0;for(var prop in obj){if(Math.random()<1/++count)result=prop}return result},ready:function ready(){var randomPos=this._pickRandomProperty(this.imagesList);this.imgSrc=this.imagesList[randomPos].path;this.imgTitle=this.imagesList[randomPos].title}});_exports.RandomImage=RandomImage});