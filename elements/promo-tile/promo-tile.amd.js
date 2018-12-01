define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/hax-body-behaviors.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/iron-icon/iron-icon.js","./node_modules/@polymer/iron-icons/iron-icons.js"],function(_exports,_polymerLegacy,_materializecssStyles,_haxBodyBehaviors,_schemaBehaviors,_paperButton,_ironIcon,_ironIcons){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PromoTile=void 0;function _templateObject_08da9e20f51a11e8ab76436b20912d02(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        --tile-image: '';\n        --font-color: #fff;\n        --hover-background-color: #e2801e;\n        --hover-link: #e0e0e0;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      #container {\n        width: 100%;\n        height: auto;\n      }\n\n      .back_card {\n        background-color: var(--hover-background-color);\n        height: 460px;\n        opacity: 0;\n\n      }\n\n      :host([hover]) #container .back_card {\n        opacity: 0.9;\n        transition: all .3s ease-in-out;\n      }\n\n      :host([hover]) #container .front_card .front_title {\n        opacity: 0;\n        transition: all .3s ease-in-out;\n      }\n\n      .image {\n        background-image: var(--tile-image);\n        background-position: top center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n      }\n\n      .front_title {\n        opacity: 1;\n        float: left;\n        margin: 375px 0 0 25px;\n        font-size: 40px;\n        color: var(--font-color);\n        border-bottom: solid 5px #fff;\n        border-radius: 5px;\n        padding-bottom: 5px;\n      }\n\n      .back_title {\n        opacity: 1;\n        font-size: 40px;\n        color: var(--font-color);\n        float: left;\n        margin: -390px 0 0 25px;\n        border-bottom: solid 5px #fff;\n        border-radius: 5px;\n        padding-bottom: 5px;\n      }\n\n      .back_content {\n        color: var(--font-color);\n        font-size: 16px;\n        clear: left;\n        position: relative;\n        bottom: 334px;\n        width: 85%;\n        margin-left: auto;\n        margin-right: auto;\n        padding-top: 10px;\n      }\n      .learn_more {\n        float: right;\n        margin-top: -75px;\n        font-size: 16px;\n        color: var(--font-color);\n        margin-right: 10px;\n      }\n      :host([hover]) .learn_more paper-button {\n        color: var(--hover-link);\n      }\n    </style>\n\n    <div id=\"container\">\n      <div class=\"front_card\">\n        <div class=\"front_title\">[[title]]</div>\n        <div id=\"front_image\" class=\"image\" alt=\"[[alt]]\">\n          <div class=\"back_card\" id=\"cardBack\" on-click=\"activateBtn\">\n            <div class=\"back_title\">[[title]]</div>\n            <div class=\"back_content\">\n              <slot></slot>\n            </div>\n            <div class=\"learn_more\">\n              <a tabindex=\"-1\" href=\"[[url]]\" id=\"link\" target$=\"[[_urlTarget(url)]]\">\n                <paper-button no-ink>Learn More\n                  <iron-icon icon=\"chevron-right\"></iron-icon>\n                </paper-button>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n"]);_templateObject_08da9e20f51a11e8ab76436b20912d02=function _templateObject_08da9e20f51a11e8ab76436b20912d02(){return data};return data}var PromoTile=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_08da9e20f51a11e8ab76436b20912d02()),is:"promo-tile",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema],properties:{image:{type:String,value:"",reflectToAttribute:!0},alt:{type:String,value:"",reflectToAttribute:!0},title:{type:String,value:"",reflectToAttribute:!0},url:{type:String,value:"",reflectToAttribute:!0},hover:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["__updateStyles(image)"],listeners:{mouseover:"__hoverIn",mouseout:"__hoverOut",focusin:"__hoverIn",focusout:"__hoverOut"},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Promo-Tile",description:"A tile element for promoting content.",icon:"icons:dashboard",color:"orange",groups:["Content","Media"],handles:[{type:"content",source:"image",title:"citation",url:"source"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"}],configure:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"alt",title:"Alt",description:"The alt text for the image",inputMethod:"textfield",icon:"editor:mode-edit"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"}],advanced:[]}};this.setHaxProperties(props)},__updateStyles:function __updateStyles(image){this.updateStyles({"--tile-image":"url(".concat(image,")")})},_outsideLink:function _outsideLink(url){if(0!=url.indexOf("http"))return!1;var loc=location.href,path=location.pathname,root=loc.substring(0,loc.indexOf(path));return 0!=url.indexOf(root)},_urlTarget:function _urlTarget(url){if(url){var external=this._outsideLink(url);if(external){return"_blank"}}return!1},activateBtn:function activateBtn(){if(this.hover){var link=this.$.link;if(700<window.innerWidth){link.click()}}},__hoverIn:function __hoverIn(){this.hover=!0},__hoverOut:function __hoverOut(){this.hover=!1}});_exports.PromoTile=PromoTile});