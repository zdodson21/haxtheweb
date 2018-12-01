define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/paper-icon-button/paper-icon-button.js",
  "../node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "../node_modules/@lrnwebcomponents/materializecss-styles/lib/colors.js"
], function(_polymerLegacy, _paperIconButton, _paperTooltip, _colors) {
  "use strict";
  function _templateObject_e60c4a00f51a11e8a8e7334679f4d101() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles-colors">\n      :host {\n        display: flex;\n        --hax-item-color: #e5e5e5;\n        --hax-item-background: #2e2e2e;\n        box-sizing: border-box;\n      }\n      :host([menu]) {\n        width: 100%;\n        position: relative;\n        height: 32px;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n        font-family: \'Roboto\', \'Noto\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n        --hax-item-color: #2e2e2e;\n        --hax-item-background: #FFFFFF;\n      }\n      :host([menu]) paper-button {\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      }\n      #label {\n        padding-left: 5px;\n      }\n      paper-button {\n        display: flex;\n        align-items: center;\n        background-color: var(--hax-item-background);\n        color: var(--hax-item-color);\n        min-width: 0;\n        margin: 0;\n        text-transform: none;\n        padding: 8px;\n        border-radius: 0;\n        font-size: 12px;\n        height: 32px;\n        transition: .1s all;\n        @apply --hax-toolbar-item-container;\n      }\n      paper-button:hover {\n        background-color: var(--hax-item-color);\n        color: var(--hax-item-background);\n      }\n      paper-button:active {\n        background: var(--hax-item-color);\n        color: var(--hax-item-background);\n      }\n      :host([default]) paper-button {\n        background: black;\n      }\n      :host([light]) paper-button {\n        background-color: var(--hax-item-color);\n        color: var(--hax-item-background);\n      }\n      :host([light]) paper-button:hover {\n        background-color: var(--hax-item-background);\n        color: var(--hax-item-color);\n      }\n      :host([light]) paper-button:active {\n        background: var(--hax-item-background);\n        color: var(--hax-item-color);\n      }\n      :host([mini]) iron-icon {\n        width: 16px;\n        height: 16px;\n      }\n      :host([mini]) paper-button {\n        border-radius: 50%;\n        width: 18px;\n        height: 18px;\n        padding: 2px;\n      }\n      :host([menu]) paper-button {\n        padding: 0 8px;\n        width: 100%;\n        height: 32px;\n      }\n      :host([menu]) paper-button:hover {\n        background-color: #d3d3d3;\n        color: #000000;\n      }\n      :host([corner="left"]) paper-button {\n        border-top-left-radius: 25%;\n      }\n      :host([corner="right"]) paper-button {\n        border-top-right-radius: 25%;\n      }\n      .flip-icon {\n        transform: rotateY(180deg);\n      }\n    </style>\n\n    <paper-button disabled="[[disabled]]" id="buttoncontainer" tabindex="0" title$="[[tooltip]]">\n      <iron-icon id="button" icon="[[icon]]" class$="[[iconClass]]"></iron-icon> <span id="label" hidden$="[[!label]]">[[label]]</span>\n      <slot></slot>\n    </paper-button>\n    <paper-tooltip id="tooltip" for$="[[this]]" offset="14" position="[[tooltipDirection]]" animation-delay="100">\n      [[tooltip]]\n    </paper-tooltip>\n'
      ],
      [
        '\n    <style include="materializecss-styles-colors">\n      :host {\n        display: flex;\n        --hax-item-color: #e5e5e5;\n        --hax-item-background: #2e2e2e;\n        box-sizing: border-box;\n      }\n      :host([menu]) {\n        width: 100%;\n        position: relative;\n        height: 32px;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n        font-family: \'Roboto\', \'Noto\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 24px;\n        --hax-item-color: #2e2e2e;\n        --hax-item-background: #FFFFFF;\n      }\n      :host([menu]) paper-button {\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      }\n      #label {\n        padding-left: 5px;\n      }\n      paper-button {\n        display: flex;\n        align-items: center;\n        background-color: var(--hax-item-background);\n        color: var(--hax-item-color);\n        min-width: 0;\n        margin: 0;\n        text-transform: none;\n        padding: 8px;\n        border-radius: 0;\n        font-size: 12px;\n        height: 32px;\n        transition: .1s all;\n        @apply --hax-toolbar-item-container;\n      }\n      paper-button:hover {\n        background-color: var(--hax-item-color);\n        color: var(--hax-item-background);\n      }\n      paper-button:active {\n        background: var(--hax-item-color);\n        color: var(--hax-item-background);\n      }\n      :host([default]) paper-button {\n        background: black;\n      }\n      :host([light]) paper-button {\n        background-color: var(--hax-item-color);\n        color: var(--hax-item-background);\n      }\n      :host([light]) paper-button:hover {\n        background-color: var(--hax-item-background);\n        color: var(--hax-item-color);\n      }\n      :host([light]) paper-button:active {\n        background: var(--hax-item-background);\n        color: var(--hax-item-color);\n      }\n      :host([mini]) iron-icon {\n        width: 16px;\n        height: 16px;\n      }\n      :host([mini]) paper-button {\n        border-radius: 50%;\n        width: 18px;\n        height: 18px;\n        padding: 2px;\n      }\n      :host([menu]) paper-button {\n        padding: 0 8px;\n        width: 100%;\n        height: 32px;\n      }\n      :host([menu]) paper-button:hover {\n        background-color: #d3d3d3;\n        color: #000000;\n      }\n      :host([corner="left"]) paper-button {\n        border-top-left-radius: 25%;\n      }\n      :host([corner="right"]) paper-button {\n        border-top-right-radius: 25%;\n      }\n      .flip-icon {\n        transform: rotateY(180deg);\n      }\n    </style>\n\n    <paper-button disabled="[[disabled]]" id="buttoncontainer" tabindex="0" title\\$="[[tooltip]]">\n      <iron-icon id="button" icon="[[icon]]" class\\$="[[iconClass]]"></iron-icon> <span id="label" hidden\\$="[[!label]]">[[label]]</span>\n      <slot></slot>\n    </paper-button>\n    <paper-tooltip id="tooltip" for\\$="[[this]]" offset="14" position="[[tooltipDirection]]" animation-delay="100">\n      [[tooltip]]\n    </paper-tooltip>\n'
      ]
    );
    _templateObject_e60c4a00f51a11e8a8e7334679f4d101 = function _templateObject_e60c4a00f51a11e8a8e7334679f4d101() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e60c4a00f51a11e8a8e7334679f4d101()
    ),
    is: "hax-toolbar-item",
    properties: {
      corner: { type: String, reflectToAttribute: !0, value: "" },
      disabled: { type: Boolean, value: !1, reflectToAttribute: !0 },
      light: { type: Boolean, reflectToAttribute: !0, value: !1 },
      menu: { type: Boolean, value: !1, reflectToAttribute: !0 },
      mini: { type: Boolean, reflectToAttribute: !0, value: !1 },
      icon: { type: String, value: "" },
      label: { type: String, value: "" },
      tooltip: { type: String, value: "", observer: "_tooltipChanged" },
      tooltipDirection: { type: String, value: "top" },
      default: { type: Boolean, value: !1, reflectToAttribute: !0 },
      iconClass: { type: String, value: "", reflectToAttribute: !0 }
    },
    _tooltipChanged: function _tooltipChanged(newValue, oldValue) {
      if ("" == newValue || null == newValue) {
        this.$.tooltip.setAttribute("aria-hidden", "true");
      } else {
        this.$.tooltip.setAttribute("aria-hidden", "false");
      }
    }
  });
});
