define([
  "exports",
  "@polymer/polymer/polymer.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js"
], function(_exports, _polymer, _polymerFn) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.IronA11yAnnouncer = void 0;
  var IronA11yAnnouncer = (0, _polymerFn.Polymer)({
    _template:
      '\n    <style>\n      :host {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0px,0px,0px,0px);\n      }\n    </style>\n    <div aria-live$="[[mode]]">[[_text]]</div>\n',
    is: "iron-a11y-announcer",
    properties: {
      mode: { type: String, value: "polite" },
      _text: { type: String, value: "" }
    },
    created: function created() {
      if (!IronA11yAnnouncer.instance) {
        IronA11yAnnouncer.instance = this;
      }
      document.body.addEventListener(
        "iron-announce",
        this._onIronAnnounce.bind(this)
      );
    },
    announce: function announce(text) {
      this._text = "";
      async.microTask.run(() => {
        this._text = text;
      }, 100);
    },
    _onIronAnnounce: function _onIronAnnounce(event) {
      if (event.detail && event.detail.text) {
        this.announce(event.detail.text);
      }
    }
  });
  _exports.IronA11yAnnouncer = IronA11yAnnouncer;
  IronA11yAnnouncer.instance = null;
  IronA11yAnnouncer.requestAvailability = function() {
    document.addEventListener("DOMContentLoaded", function() {
      if (!IronA11yAnnouncer.instance) {
        IronA11yAnnouncer.instance = document.createElement(
          "iron-a11y-announcer"
        );
      }
      document.body.appendChild(IronA11yAnnouncer.instance);
    });
  };
});
