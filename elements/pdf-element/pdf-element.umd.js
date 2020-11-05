!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/paper-spinner/paper-spinner.js"),require("@polymer/app-layout/app-toolbar/app-toolbar.js"),require("@polymer/polymer/polymer-element.js"),require("@polymer/paper-input/paper-input.js"),require("@polymer/iron-input/iron-input.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("pdfjs-dist/build/pdf.js"),require("pdfjs-dist/build/pdf.worker.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/paper-spinner/paper-spinner.js","@polymer/app-layout/app-toolbar/app-toolbar.js","@polymer/polymer/polymer-element.js","@polymer/paper-input/paper-input.js","@polymer/iron-input/iron-input.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","pdfjs-dist/build/pdf.js","pdfjs-dist/build/pdf.worker.js"],t):t((e=e||self).PdfElement={},null,null,e.polymerElement_js,null,null,null,null,null,e.schemaBehaviors_js)}(this,function(e,t,n,i,o,r,a,s,l,c){"use strict";function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return m(this,n)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var b=Math.round,w=function(e){this.element=e,this.reader=e.root.querySelector(".pdf-viewer"),this.viewportOut=this.reader.querySelector(".pdf-viewport-out"),this.element=this.reader.querySelector(".pdf-element"),this.container=this.reader.querySelector(".sidebar"),this.toolbar=this.reader.querySelector(".pdf-toolbar"),this.card=e.root.querySelector(".style-scope"),this.toolbarHeight=0,this.title=this.toolbar.querySelector(".title"),this.enableTextSelection=e.enableTextSelection,this.fitWidth=e.fitWidth,this.HEIGHT=e.getAttribute("height"),this.WIDTH=e.getAttribute("width"),this.viewport=this.reader.querySelector(".pdf-viewport"),this.enableTextSelection&&(this.textLayerDiv=this.reader.querySelector(".textLayer"),this.textLayerDivStyle=this.textLayerDiv.style),this.spinner=this.reader.querySelector(".spinner"),this.totalPages=this.reader.querySelector("#totalPages"),this.viewportStyle=this.viewport.style,this.viewportOutStyle=this.viewportOut.style,this.ctx=this.viewport.getContext("2d"),this.SRC=e.src,this.pageRendering=!1,this.pageNumPending=null};function P(){var e,t,n=(e=['\n      <style>\n        :host {\n          display: block;\n          width: 100%;\n          height: 100%;\n        }\n\n        app-toolbar.pdf-toolbar {\n          --app-toolbar-background: #323639;\n        }\n\n        .pdf-viewer {\n          text-align: center;\n          border: 1px solid #4d4d4d;\n        }\n\n        .pdf-viewport-out {\n          overflow: auto;\n          background-color: #525659;\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .pdf-viewport {\n          display: block;\n          position: relative;\n          border: 1px solid #eeeeee;\n          transition: all 200ms ease-in-out;\n          width: 100%;\n          height: 100%;\n        }\n\n        .sidebar {\n          background-color: gray;\n          float: left;\n          height: 0px;\n          overflow: scroll;\n          margin-left: -25%;\n          visibility: hidden;\n        }\n\n        .main {\n          margin-left: 0%;\n        }\n\n        .pageselector {\n          width: 3ch;\n          background-color: black;\n          font-size: 17px;\n          background-color: transparent;\n          border: 0px solid;\n        }\n\n        .pageselector:focus {\n          outline: none;\n        }\n\n        #input {\n          -webkit-margin-start: -3px;\n          color: #fff;\n          line-height: 18px;\n          padding: 3px;\n          text-align: end;\n        }\n\n        #input:focus,\n        #input:hover {\n          background-color: rgba(0, 0, 0, 0.5);\n          border-radius: 2px;\n        }\n\n        #slash {\n          padding: 0 3px;\n        }\n\n        paper-spinner {\n          position: absolute;\n          left: 50%;\n        }\n\n        .textLayer {\n          transition: all 200ms ease-in-out;\n        }\n\n        .positionRelative {\n          position: relative;\n        }\n      </style>\n\n      <paper-material elevation="{{elevation}}">\n        <div class="card-content" style="width: {{width}}px">\n          <div class="card paperCard" style="width: {{width}}px">\n            <div class="pdf-viewer">\n              <app-toolbar class="pdf-toolbar">\n                <simple-icon-button\n                  icon="menu"\n                  on-click="sideBar"\n                ></simple-icon-button>\n                <simple-icon-button\n                  icon="arrow-back"\n                  on-click="showPrev"\n                ></simple-icon-button>\n                <input\n                  class="pageselector"\n                  id="input"\n                  is="iron-input"\n                  value="{{currentPage}}"\n                  prevent-invalid-input=""\n                  allowed-pattern="\\d"\n                  on-change="pageNumSearch"\n                />\n                <span id="slash">/</span><span id="totalPages"></span>\n                <simple-icon-button\n                  icon="arrow-forward"\n                  on-click="showNext"\n                ></simple-icon-button>\n                <span class="title" hidden="{{!showFileName}}">Testing</span>\n                <span class="title" hidden="{{showFileName}}"></span>\n                <span class="pageRendering"></span>\n                <simple-icon-button\n                  icon="zoom-in"\n                  on-click="zoomIn"\n                ></simple-icon-button>\n                <simple-icon-button\n                  icon="zoom-out"\n                  on-click="zoomOut"\n                ></simple-icon-button>\n                <simple-icon-button\n                  id="zoomIcon"\n                  icon="fullscreen"\n                  on-click="zoomFit"\n                ></simple-icon-button>\n                <simple-icon-button\n                  icon="file-download"\n                  hidden$="{{!downloadable}}"\n                  on-click="download"\n                ></simple-icon-button>\n              </app-toolbar>\n              <div id="container" class="sidebar" style="width:25%"></div>\n              <div id="main">\n                <div id="test" class="pdf-viewport-out">\n                  <canvas class="pdf-viewport"></canvas>\n                  <div\n                    id="text-layer"\n                    class="textLayer"\n                    hidden$="{{!enableTextSelection}}"\n                  ></div>\n                </div>\n                <paper-spinner\n                  class="spinner"\n                  hidden$="{{!showSpinner}}"\n                ></paper-spinner>\n              </div>\n            </div>\n          </div>\n        </div>\n      </paper-material>\n    '],(t=['\n      <style>\n        :host {\n          display: block;\n          width: 100%;\n          height: 100%;\n        }\n\n        app-toolbar.pdf-toolbar {\n          --app-toolbar-background: #323639;\n        }\n\n        .pdf-viewer {\n          text-align: center;\n          border: 1px solid #4d4d4d;\n        }\n\n        .pdf-viewport-out {\n          overflow: auto;\n          background-color: #525659;\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .pdf-viewport {\n          display: block;\n          position: relative;\n          border: 1px solid #eeeeee;\n          transition: all 200ms ease-in-out;\n          width: 100%;\n          height: 100%;\n        }\n\n        .sidebar {\n          background-color: gray;\n          float: left;\n          height: 0px;\n          overflow: scroll;\n          margin-left: -25%;\n          visibility: hidden;\n        }\n\n        .main {\n          margin-left: 0%;\n        }\n\n        .pageselector {\n          width: 3ch;\n          background-color: black;\n          font-size: 17px;\n          background-color: transparent;\n          border: 0px solid;\n        }\n\n        .pageselector:focus {\n          outline: none;\n        }\n\n        #input {\n          -webkit-margin-start: -3px;\n          color: #fff;\n          line-height: 18px;\n          padding: 3px;\n          text-align: end;\n        }\n\n        #input:focus,\n        #input:hover {\n          background-color: rgba(0, 0, 0, 0.5);\n          border-radius: 2px;\n        }\n\n        #slash {\n          padding: 0 3px;\n        }\n\n        paper-spinner {\n          position: absolute;\n          left: 50%;\n        }\n\n        .textLayer {\n          transition: all 200ms ease-in-out;\n        }\n\n        .positionRelative {\n          position: relative;\n        }\n      </style>\n\n      <paper-material elevation="{{elevation}}">\n        <div class="card-content" style="width: {{width}}px">\n          <div class="card paperCard" style="width: {{width}}px">\n            <div class="pdf-viewer">\n              <app-toolbar class="pdf-toolbar">\n                <simple-icon-button\n                  icon="menu"\n                  on-click="sideBar"\n                ></simple-icon-button>\n                <simple-icon-button\n                  icon="arrow-back"\n                  on-click="showPrev"\n                ></simple-icon-button>\n                <input\n                  class="pageselector"\n                  id="input"\n                  is="iron-input"\n                  value="{{currentPage}}"\n                  prevent-invalid-input=""\n                  allowed-pattern="\\\\d"\n                  on-change="pageNumSearch"\n                />\n                <span id="slash">/</span><span id="totalPages"></span>\n                <simple-icon-button\n                  icon="arrow-forward"\n                  on-click="showNext"\n                ></simple-icon-button>\n                <span class="title" hidden="{{!showFileName}}">Testing</span>\n                <span class="title" hidden="{{showFileName}}"></span>\n                <span class="pageRendering"></span>\n                <simple-icon-button\n                  icon="zoom-in"\n                  on-click="zoomIn"\n                ></simple-icon-button>\n                <simple-icon-button\n                  icon="zoom-out"\n                  on-click="zoomOut"\n                ></simple-icon-button>\n                <simple-icon-button\n                  id="zoomIcon"\n                  icon="fullscreen"\n                  on-click="zoomFit"\n                ></simple-icon-button>\n                <simple-icon-button\n                  icon="file-download"\n                  hidden$="{{!downloadable}}"\n                  on-click="download"\n                ></simple-icon-button>\n              </app-toolbar>\n              <div id="container" class="sidebar" style="width:25%"></div>\n              <div id="main">\n                <div id="test" class="pdf-viewport-out">\n                  <canvas class="pdf-viewport"></canvas>\n                  <div\n                    id="text-layer"\n                    class="textLayer"\n                    hidden$="{{!enableTextSelection}}"\n                  ></div>\n                </div>\n                <paper-spinner\n                  class="spinner"\n                  hidden$="{{!showSpinner}}"\n                ></paper-spinner>\n              </div>\n            </div>\n          </div>\n        </div>\n      </paper-material>\n    '])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return P=function(){return n},n}w.prototype.setSize=function(e,t){this.WIDTH||(this.WIDTH=this.viewportOut.offsetWidth),this.HEIGHT||(this.HEIGHT=this.viewportOut.offsetHeight);this.WIDTH;var n=this.HEIGHT;"height"===e&&(n=t),this.viewportOutStyle.height=n+"px",this.spinner.style.top=(n-this.toolbarHeight)/2+"px"},w.prototype.setSrc=function(e){this.SRC=e},w.prototype.setFitWidth=function(e){this.fitWidth=e},w.prototype.queueRenderPage=function(e){this.pdfExists=!0,this.pageRendering?this.pageNumPending=e:this.renderPDF(e)},w.prototype.loadPDF=function(e){var t=this;this.setSize();var n=this;PDFJS.getDocument(this.SRC).then(function(e){n.PDF=e,n.queueRenderPage(1),n.currentPage=1,n.totalPages.innerHTML=n.PDF.numPages,n.totalPagesNum=n.PDF.numPages,n.currentZoomVal=n.fitZoomVal=n.widthZoomVal=0,n.createDownloadLink()}).catch(function(){t.pdfExists=!1})},w.prototype.renderPages=function(){var e=this;e.viewportOut.innerHTML="",PDFJS.getDocument(this.SRC).then(function(t){e.PDF=t;for(var n=1;n<=e.PDF.numPages;n++)t.getPage(n).then(e.renderPDF(n,null,!0));e.currentPage=1,e.totalPages.innerHTML=e.PDF.numPages,e.totalPagesNum=e.PDF.numPages,e.currentZoomVal||(e.currentZoomVal=e.fitZoomVal=e.widthZoomVal=0),e.createDownloadLink()})},w.prototype.sidebarSetup=function(e){var t=this,n=e.src,i=1,o=0,r=null;function a(s){var l,c=t.container;l=35e-5*(e.sidebarOpen,t.WIDTH);var p=s.getViewport(l),u=document.createElement("div");(s.pageIndex+1).toString(),n.split("/").pop();u.style.backgroundColor="gray";var h=document.querySelector("pdf-element"),d=document.createElement("canvas");u.appendChild(d),c.appendChild(u),t.container.childNodes[s.pageIndex].addEventListener("click",function(){var t=s.pageIndex+1;h.sideBarClick(t,e.instance,e)});var f=d.getContext("2d");d.height=p.height,d.width=p.width,s.render({canvasContext:f,viewport:p}),i++,null!==r&&i<=o&&r.getPage(i).then(a)}0!=t.container.innerHTML.length?e.changedSideBar&&(t.container.innerHTML="",PDFJS.getDocument(this.SRC).then(function(e){o=(r=e).numPages;t.container;e.getPage(1).then(a)}),t.setViewportPos(!1)):(t.container.innerHTML="",PDFJS.getDocument(this.SRC).then(function(e){o=(r=e).numPages;t.container;e.getPage(1).then(a)}),t.setViewportPos(!0))},w.prototype.renderPDF=function(e,t,n){var i=this;i.pageRendering=!0,i.spinner.active=!0,this.PDF.getPage(e).then(function(o){var r,a,s,l,c,p=Math.abs,u=Math.sin,h=Math.cos;if(c=o.pageInfo.rotate*Math.PI/180,i.pageW=p(o.view[2]*h(c)+o.view[3]*u(c)),i.pageH=p(o.view[3]*h(c)+o.view[2]*u(c)),(0===i.currentZoomVal||t)&&(r=b(i.WIDTH/i.pageW*100)/100,a=b((i.HEIGHT-i.toolbarHeight)/i.pageH*100)/100,l=Math.min(a,r),i.fitZoomVal=l,i.widthZoomVal=i.WIDTH/i.pageW,i.currentZoomVal=i.fitWidth?i.widthZoomVal:i.fitZoomVal),t)i.zoomPage({target:i.zoomLvl});else{if(l=i.currentZoomVal,s=o.getViewport(l),i.ctx.height=s.height,i.ctx.width=s.width,i.pageW=i.pageW*l,i.pageH=i.pageH*l,i.WIDTH==i.currentWidth||null==i.currentWidth?i.setViewportPos(!1):i.setViewportPos(!0),i.viewport.width=i.pageW,i.viewport.height=i.pageH,i.viewportStyle.width=i.pageW+"px",i.viewportStyle.height=i.pageH+"px",i.enableTextSelection&&(i.textLayerDivStyle.width=i.pageW+"px",i.textLayerDivStyle.height=i.pageH+"px"),i.ctx.clearRect(0,0,i.viewport.width,i.viewport.height),n){var d=document.createElement("div");d.setAttribute("style","position: relative");var f=document.createElement("canvas"),g=document.createElement("div");g.setAttribute("style","left: "+i.viewportStyle.left),g.className="textLayer";var m=f.getContext("2d");g.height=s.height,g.width=s.width,i.viewportOut.appendChild(d),d.appendChild(f),d.appendChild(g),o.render({canvasContext:m,viewport:s}),i.enableTextSelection&&(i.textLayerDiv.innerHTML="",o.getTextContent().then(function(t){PDFJS.renderTextLayer({textContent:t,container:g,pageIndex:e,viewport:s,textDivs:[]})}))}else{o.render({canvasContext:i.ctx,viewport:s}).promise.then(function(){i.pageRendering=!1,i.spinner.active=!1,null!==i.pageNumPending&&(i.renderPDF(i.pageNumPending),i.pageNumPending=null)})}i.enableTextSelection&&(i.textLayerDiv.innerHTML="",o.getTextContent().then(function(t){PDFJS.renderTextLayer({textContent:t,container:i.textLayerDiv,pageIndex:e,viewport:s,textDivs:[]})}))}})},w.prototype.setViewportPos=function(e){var t=Math.floor;this.currentWidth=e?.75*this.WIDTH:this.WIDTH,this.pageW<this.currentWidth?this.viewportStyle.left=(this.currentWidth-this.pageW)/2+"px":this.viewportStyle.left=0,this.pageH<this.HEIGHT?(this.viewportStyle.top=(this.HEIGHT-this.pageH-this.toolbarHeight)/2+"px",this.viewportStyle.topNum=t((this.HEIGHT-this.pageH-this.toolbarHeight)/2)+this.toolbarHeight,this.enableTextSelection&&(this.textLayerDivStyle.topNum=t((this.HEIGHT-this.pageH-this.toolbarHeight)/2)+this.toolbarHeight)):this.viewportStyle.top=0,this.enableTextSelection&&(this.textLayerDivStyle.left=this.viewportStyle.left,this.textLayerDivStyle.top=this.viewportStyle.top)},w.prototype.changePDFSource=function(e){this.setSrc(e),this.loadPDF(1)},w.prototype.zoomInOut=function(e){this.currentZoomVal=b(10*(b(10*this.currentZoomVal)/10+e))/10,this.queueRenderPage(this.currentPage)},w.prototype.zoomIn=function(){this.currentZoomVal=b(10*(b(10*this.currentZoomVal)/10+.1))/10,this.queueRenderPage(this.currentPage)},w.prototype.zoomOut=function(){this.currentZoomVal=b(10*(b(10*this.currentZoomVal)/10-.1))/10,this.queueRenderPage(this.currentPage)},w.prototype.zoomPageFit=function(){this.currentZoomVal=this.fitZoomVal,this.queueRenderPage(this.currentPage)},w.prototype.zoomWidthFit=function(){this.currentZoomVal=this.widthZoomVal,this.queueRenderPage(this.currentPage)},w.prototype.getPageNum=function(){return this.PDF.numPages},w.prototype.createDownloadLink=function(){var e=this;this.PDF.getData().then(function(t){var n=PDFJS.createBlob(t,"application/pdf");e.downloadLink=URL.createObjectURL(n)})},w.prototype.download=function(){var e=document.createElement("a"),t=this.SRC.split("/");e.href=this.downloadLink,e.target="_parent","download"in e&&(e.download=decodeURIComponent(t[t.length-1])),this.reader.appendChild(e),e.click(),e.parentNode.removeChild(e)},window.Reader=w;var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,c.SchemaBehaviors(i.PolymerElement));var t,n,o,r=y(a);function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r.call(this)}return t=a,o=[{key:"template",get:function(){return i.html(P())}},{key:"tag",get:function(){return"pdf-element"}},{key:"properties",get:function(){return d(d({},v(f(a),"properties",this)),{},{src:{type:String,reflectToAttribute:!0},elevation:{type:Number,value:1},downloadable:{type:Boolean,value:!1},showFileName:{type:Boolean,value:!1},showSpinner:{type:Boolean,value:!1},enableTextSelection:{type:Boolean,value:!1},fitWidth:{type:Boolean,value:!1},width:{type:Number,value:500}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"PDF viewer",descrption:"This can nicely present a PDF in a standard inplace, cross browser way.",icon:"image:picture-as-pdf",color:"red",groups:["Presentation","PDF","Data"],handles:[{type:"pdf",url:"src",source:"src"},{type:"document",url:"src",source:"src"}],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"src",title:"File",description:"The URL for the pdf",inputMethod:"textfield",icon:"link",required:!0}],configure:[{property:"src",title:"Source",description:"The URL for this csv file",inputMethod:"textfield",icon:"link",required:!0},{property:"downloadable",title:"Downloadable",description:"User can download this",inputMethod:"boolean",icon:"file-download"},{property:"enableTextSelection",title:"Text Selection",description:"User can select text in this element.",inputMethod:"boolean",icon:"file-download"},{property:"elevation",title:"Elevation",description:"Visual elevation of the element",inputMethod:"number",icon:"flip-to-front"}],advanced:[]}}}}],(n=[{key:"connectedCallback",value:function(){v(f(a.prototype),"connectedCallback",this).call(this),this.src=this.getAttribute("src"),this._initializeReader(),this.src&&this.instance.loadPDF(),this._setFitWidth()}},{key:"loadPDF",value:function(){this.getAttribute("src")&&(this.instance.changePDFSource(this.getAttribute("src")),this.currentPage=1,this.totalPages=this.instance.totalPages,this.fileName=this.src.split("/").pop(),this._setFitWidth(),this.shadowRoot.querySelector("#zoomIcon").icon="fullscreen")}},{key:"attributeChanged",value:function(e,t){"src"===e?void 0===this.instance?this._initializeReader():(this.loadPDF(),this.changedSideBar=!0,this.fromChange=!0,this.sideBar()):"fitWidth"===e&&this._setFitWidth()}},{key:"_initializeReader",value:function(){this.instance=new Reader(this),null!=this.src&&(this.fileName=this.src.split("/").pop()),this.currentPage=1}},{key:"_setFitWidth",value:function(){this.instance.setFitWidth(this.fitWidth)}},{key:"zoomInOut",value:function(e){this.instance.currentZoomVal>=2?this.instance.currentZoomVal=2:this.instance.currentZoomVal<=.1?this.instance.currentZoomVal=.1:(this.shadowRoot.querySelector("#zoomIcon").icon="fullscreen",this.instance.zoomInOut(e))}},{key:"zoomIn",value:function(){this.instance.pdfExists&&this.zoomInOut(.1)}},{key:"zoomOut",value:function(){this.instance.pdfExists&&this.instance.zoomInOut(-.1)}},{key:"zoomFit",value:function(){this.instance.pdfExists&&(this.instance.currentZoomVal==this.instance.widthZoomVal?(this.instance.zoomPageFit(),this.shadowRoot.querySelector("#zoomIcon").icon="fullscreen"):(this.instance.zoomWidthFit(),this.shadowRoot.querySelector("#zoomIcon").icon="fullscreen-exit"))}},{key:"pageNumSearch",value:function(){var e=parseInt(this.shadowRoot.querySelector("#input").value);1<=e&&e<=this.instance.totalPagesNum?(this.instance.currentPage=e,this.instance.queueRenderPage(this.instance.currentPage),this.currentPage=e,this.shadowRoot.querySelector("#input").blur()):(this.shadowRoot.querySelector("#input").value=this.currentPage,this.shadowRoot.querySelector("#input").blur())}},{key:"sideBarClick",value:function(e,t,n){n.src.split("/").pop();var i=t;n.sidebarOpen=!0,1<=e&&e<=t.totalPagesNum?(i.currentPage=e,i.queueRenderPage(i.currentPage),t.currentPage=e,n.currentPage=e,this.shadowRoot.querySelector("#input").blur()):(this.shadowRoot.querySelector("#input").value=i.currentPage,this.shadowRoot.querySelector("#input").blur())}},{key:"showPrev",value:function(){1<this.instance.currentPage&&(this.instance.currentPage--,this.instance.queueRenderPage(this.instance.currentPage),this.currentPage--)}},{key:"showNext",value:function(){this.instance.totalPagesNum>this.instance.currentPage&&(this.instance.currentPage++,this.instance.queueRenderPage(this.instance.currentPage),this.currentPage++)}},{key:"sideBar",value:function(){this.instance.pdfExists&&(this.fromChange||(this.shadowRoot.querySelector("#container").style.height=this.shadowRoot.querySelector("#test").style.height,this.shadowRoot.querySelector("#container").style.width=this.shadowRoot.querySelector("#test").style.width,"25%"==this.shadowRoot.querySelector("#main").style.marginLeft?(this.sidebarOpen=!1,this.instance.setViewportPos(!1),this.shadowRoot.querySelector("#main").style.marginLeft="0%",this.shadowRoot.querySelector("#container").style.marginLeft="-25%",this.shadowRoot.querySelector("#container").style.visibility="hidden"):(this.sidebarOpen=!0,this.shadowRoot.querySelector("#main").style.marginLeft="25%",this.shadowRoot.querySelector("#container").style.marginLeft="0%",this.shadowRoot.querySelector("#container").style.visibility="visible",this.instance.setViewportPos(!0))),this.fromChange=!1,this.instance.sidebarSetup(this),this.changedSideBar=!1)}},{key:"download",value:function(){this.instance.pdfExists&&this.instance.download()}}])&&p(t.prototype,n),o&&p(t,o),a}();window.customElements.define(x.tag,x),e.PdfElement=x,Object.defineProperty(e,"__esModule",{value:!0})});
