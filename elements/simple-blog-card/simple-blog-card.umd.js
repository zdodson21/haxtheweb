!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-popover/simple-popover.js"),require("@lrnwebcomponents/paper-avatar/paper-avatar.js"),require("time-elements/dist/time-elements.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-popover/simple-popover.js","@lrnwebcomponents/paper-avatar/paper-avatar.js","time-elements/dist/time-elements.js"],n):n((e=e||self).SimpleBlogCard={},e.litElement_js)}(this,function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(n){i(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r,i,o=l(e);if(n){var a=l(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return r=this,!(i=t)||"object"!=typeof i&&"function"!=typeof i?c(r):i}}function u(e,n,t){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=l(e)););return e}(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function A(){var e=d(['\n:host {\n  display: inline-flex;\n  --simple-blog-card-author-link: #03a87c;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host *[hidden] {\n  display: none;\n}\n\nsimple-popover {\n  position: absolute;\n  display: flex;\n}\n\ndiv.card {\n  height: auto !important;\n}\n\n.card-content a{\n  display: block;\n}\n\n.card-micro {\n  width: 100px;\n  --simple-blog-card-heading-font-size: 16px;\n  --simple-blog-card-content-font-size: 14px;\n}\n\n.card-small {\n  width: 200px;\n  --simple-blog-card-heading-font-size: 16px;\n}\n\n.card-medium {\n  width: 300px;\n}\n\n.card-large {\n  width: 400px;\n}\n\n.card-xlarge {\n  width: 600px;\n}\n\na {\n  text-decoration: none;\n}\n\n.teaser {\n  overflow: hidden;\n}\n\n.teaser,\n.teaser ::slotted(*) {\n  font-size: var(--simple-blog-card-content-font-size, 18px);\n  word-break: all;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n}\n\n.card-content {\n  height: 120px;\n  padding: 0;\n  overflow: hidden;\n}\n\n.card-micro {\n  height: 50px;\n}\n\n.card-small {\n  height: 100px;\n}\n\n.card-medium {\n  height: 150px;\n}\n\n.card-large {\n  height: 200px;\n}\n\n.card-micro .card-content {\n  height: 50px;\n}\n\n.card-small .card-content {\n  height: 50px;\n}\n\n.card-medium .card-content {\n  height: 125px;\n}\n\n.card-large .card-content {\n  height: 150px;\n}\n\ndiv.card h3 {\n  font-size: var(--simple-blog-card-heading-font-size, 22px);\n  color: var(--simple-blog-card-header, black);\n  text-decoration: none;\n  padding: 0;\n  margin: 8px 0;\n  font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",\n  Geneva, Arial, sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  word-break: break-word;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n}\n\npaper-avatar {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  display: inline-block;\n}\n\n.reading-time:after {\n  content: attr(title);\n}\n\n.author-block {\n  display: flex;\n  align-items: center;\n}\n\n.author-info {\n  font-size: 14px;\n  padding-left: 10px;\n  text-rendering: auto;\n}\n\n.author-info a {\n  color: var(--simple-blog-card-author-link);\n}\n\n.post-details {\n  font-size: 14px;\n  color: var(--simple-blog-card-text, rgba(0, 0, 0, 0.54));\n}\n\n.post-details .dot {\n  padding-right: 0.3em;\n  padding-left: 0.3em;\n}\n\n.box {\n  outline: 1px solid black;\n}\n\nsimple-popover:not([for]) {\n  display: none;\n}\n      ']);return A=function(){return e},e}function f(){var e=d(['\n\n<div class="card-',' card">\n  <img .alt="','" .src="','" loading="lazy"/>\n  <div class="card-content">\n    <a href="','">\n      <h3>','</h3>\n      <div class="teaser">\n        <slot></slot>\n      </div>\n    </a>\n  </div>\n  <div class="card-actions">\n    <div id="author" class="author-block">\n      <paper-avatar\n        .label="','"\n        .src="','">\n      </paper-avatar>\n      <div class="author-info">\n        <a .href="','">','</a>\n        <div class="post-details">\n          <simple-datetime format="M jS" .timestamp="','" unix>\n          </simple-datetime>\n          <span class="dot">&#183</span>\n          <span class="reading-time" .title="',' min read"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>']);return f=function(){return e},e}var m=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(i,n.LitElement);var t=p(i);function i(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(e=t.call(this)).placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAqADAAQAAAABAAAAAgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAAgACAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAHBwcHBwcMBwcMEQwMDBEXERERERcdFxcXFxcdIx0dHR0dHSMjIyMjIyMjKioqKioqMTExMTE3Nzc3Nzc3Nzc3P/bAEMBIiQkODQ4YDQ0YOacgJzm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v/dAAQAAf/aAAwDAQACEQMRAD8AiooooA//2Q==",e.size="medium",e.shadow=0,setTimeout(function(){e.addEventListener("mouseover",e.hoverState.bind(c(e))),e.addEventListener("mouseout",e.hoverStateOff.bind(c(e)))},0),e}return r(i,[{key:"render",value:function(){return n.html(f(),this.size,this.alt,this.image,this.link,this.title,this.author,this.authorimage,this.authorlink,this.author,this.timestamp,this.readtime)}}],[{key:"styles",get:function(){return[n.css(A())]}},{key:"properties",get:function(){return a(a({},u(l(i),"properties",this)),{},{title:{name:"title",type:String},author:{name:"author",type:String},authorimage:{name:"authorimage",type:String},authorlink:{name:"authorlink",type:String},readtime:{name:"readtime",type:Number},timestamp:{name:"timestamp",type:Number},image:{name:"image",type:String},link:{name:"link",type:String},shadow:{name:"shadow",type:Number},size:{name:"size",type:String},placeholder:{name:"placeholder",type:String},alt:{name:"alt",type:String}})}},{key:"tag",get:function(){return"simple-blog-card"}}]),r(i,[{key:"update",value:function(e){var n=this;u(l(i.prototype),"update",this).call(this),e.forEach(function(e,t){"image"==t&&(n.image||(n.image=n.placeholder))})}},{key:"showDetails",value:function(e){this.shadowRoot.querySelector("simple-popover").setAttribute("for","author"),this.shadowRoot.querySelector("simple-popover").setPosition()}},{key:"hideDetails",value:function(e){this.shadowRoot.querySelector("simple-popover").removeAttribute("for"),this.shadowRoot.querySelector("simple-popover").unsetPosition()}},{key:"hoverState",value:function(e){this.shadow=1}},{key:"hoverStateOff",value:function(e){this.shadow=0}}]),i}();customElements.define(m.tag,m),e.SimpleBlogCard=m,Object.defineProperty(e,"__esModule",{value:!0})});
