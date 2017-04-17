var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 11, stdin */\n.middle-form-inside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  background-color: white;\n  position: relative;\n  padding: 20px 0; }\n  /* line 18, stdin */\n  .middle-form-inside h2 {\n    font-weight: 100;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 30px;\n    text-align: center;\n    font-size: 1.5em; }\n    /* line 24, stdin */\n    .middle-form-inside h2 strong {\n      color: #fff;\n      font-size: 1.1em; }\n  /* line 30, stdin */\n  .middle-form-inside input {\n    margin: 0px 20px;\n    padding: 15px;\n    background-color: #F8F8F8;\n    font-size: 0.9em;\n    color: white;\n    font-weight: 100; }\n  /* line 38, stdin */\n  .middle-form-inside input:not(:last-child) {\n    border: 1px solid #EFEFEF; }\n  /* line 42, stdin */\n  .middle-form-inside input[type=\"submit\"] {\n    background-color: #00A8D6;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    padding: 15px 15px;\n    cursor: pointer;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n    /* line 50, stdin */\n    .middle-form-inside input[type=\"submit\"]:hover {\n      -webkit-filter: brightness(90%);\n              filter: brightness(90%); }\n  /* line 55, stdin */\n  .middle-form-inside .preload {\n    color: white;\n    position: absolute;\n    bottom: -50px;\n    right: 0px;\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 62, stdin */\n    .middle-form-inside .preload i {\n      margin-right: 10px;\n      color: black; }\n\n@media (min-width: 1200px) {\n  /* line 71, stdin */\n  .middle-form-inside {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    /* line 74, stdin */\n    .middle-form-inside input {\n      width: 24%; } }\n\n@media (max-width: 1200px) {\n  /* line 81, stdin */\n  .middle-form-inside {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; } }\n\n@media (max-width: 991px) {\n  /* line 88, stdin */\n  .middle-form-inside input {\n    margin: 8px 20px; } }\n")
'use strict';

module.exports = {
	data: function data() {
		return {
			preload: false,
			Name: '',
			Email: '',
			Phone: ''
		};
	},
	methods: {
		startPreload: function startPreload() {
			this.preload = this.Name && this.Email && this.Phone;
		}
	},
	computed: {
		sendingForm: function sendingForm() {
			return this.preload;
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<form action=\"\" @submit.prevent=\"\" class=\"middle-form-inside\">\n\t<input type=\"text\" v-model=\"Name\" required=\"\" placeholder=\"Your name\">\n\t<input type=\"text\" v-model=\"Email\" required=\"\" placeholder=\"Your e-mail\">\n\t<input type=\"text\" v-model=\"Phone\" required=\"\" placeholder=\"Your Phone\">\n\t<input type=\"submit\" @click=\"startPreload\" value=\"Subscribe Now!\">\n\t<p class=\"preload\" v-show=\"sendingForm\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i> Please Wait...</p>\n</form>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 11, stdin */\n.middle-form-inside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  background-color: white;\n  position: relative;\n  padding: 20px 0; }\n  /* line 18, stdin */\n  .middle-form-inside h2 {\n    font-weight: 100;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 30px;\n    text-align: center;\n    font-size: 1.5em; }\n    /* line 24, stdin */\n    .middle-form-inside h2 strong {\n      color: #fff;\n      font-size: 1.1em; }\n  /* line 30, stdin */\n  .middle-form-inside input {\n    margin: 0px 20px;\n    padding: 15px;\n    background-color: #F8F8F8;\n    font-size: 0.9em;\n    color: white;\n    font-weight: 100; }\n  /* line 38, stdin */\n  .middle-form-inside input:not(:last-child) {\n    border: 1px solid #EFEFEF; }\n  /* line 42, stdin */\n  .middle-form-inside input[type=\"submit\"] {\n    background-color: #00A8D6;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    padding: 15px 15px;\n    cursor: pointer;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n    /* line 50, stdin */\n    .middle-form-inside input[type=\"submit\"]:hover {\n      -webkit-filter: brightness(90%);\n              filter: brightness(90%); }\n  /* line 55, stdin */\n  .middle-form-inside .preload {\n    color: white;\n    position: absolute;\n    bottom: -50px;\n    right: 0px;\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 62, stdin */\n    .middle-form-inside .preload i {\n      margin-right: 10px;\n      color: black; }\n\n@media (min-width: 1200px) {\n  /* line 71, stdin */\n  .middle-form-inside {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    /* line 74, stdin */\n    .middle-form-inside input {\n      width: 24%; } }\n\n@media (max-width: 1200px) {\n  /* line 81, stdin */\n  .middle-form-inside {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; } }\n\n@media (max-width: 991px) {\n  /* line 88, stdin */\n  .middle-form-inside input {\n    margin: 8px 20px; } }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-2600d6e0", module.exports)
  } else {
    hotAPI.update("_v-2600d6e0", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}