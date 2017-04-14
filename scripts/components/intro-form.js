var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 6, stdin */\n.form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.5); }\n  /* line 12, stdin */\n  .form h2 {\n    font-weight: 100;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 30px;\n    text-align: center;\n    font-size: 1.5em; }\n    /* line 18, stdin */\n    .form h2 strong {\n      color: #fff;\n      font-size: 1.1em; }\n  /* line 24, stdin */\n  .form input {\n    padding: 15px;\n    margin: 8px 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 1px solid black;\n    font-size: 0.9em;\n    color: #E7E7E7;\n    font-weight: 100; }\n  /* line 34, stdin */\n  .form input[type=\"submit\"] {\n    background-color: #00A8D6;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    width: 45%;\n    padding: 15px 10px;\n    cursor: pointer; }\n    /* line 42, stdin */\n    .form input[type=\"submit\"]:hover {\n      -webkit-filter: brightness(90%);\n              filter: brightness(90%); }\n  /* line 47, stdin */\n  .form p {\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 50, stdin */\n    .form p i {\n      margin-right: 10px;\n      color: #00A8D6; }\n")
'use strict';

module.exports = {
	data: function data() {
		return {
			name: '',
			email: '',
			phone: ''
		};
	},
	methods: {
		send: function send() {
			return false;
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<form action=\"\" @submit.prevent=\"\" class=\"form\">\n\t<h2>Start Your <strong>FREE</strong> Trial</h2>\n\t<input type=\"text\" v-model=\"name\" required=\"\" placeholder=\"Your Name\">\n\t<input type=\"text\" v-model=\"email\" required=\"\" placeholder=\"Your e-mail\">\n\t<input type=\"text\" v-model=\"phone\" required=\"\" placeholder=\"Your Phone\">\n\t<input type=\"submit\" @click=\"send\" value=\"Get Your Free Trial\">\n\t<p><i class=\"fa fa-spinner fa-spin fa-2x\"></i> Please Wait...</p>\n</form>\t\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 6, stdin */\n.form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.5); }\n  /* line 12, stdin */\n  .form h2 {\n    font-weight: 100;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 30px;\n    text-align: center;\n    font-size: 1.5em; }\n    /* line 18, stdin */\n    .form h2 strong {\n      color: #fff;\n      font-size: 1.1em; }\n  /* line 24, stdin */\n  .form input {\n    padding: 15px;\n    margin: 8px 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 1px solid black;\n    font-size: 0.9em;\n    color: #E7E7E7;\n    font-weight: 100; }\n  /* line 34, stdin */\n  .form input[type=\"submit\"] {\n    background-color: #00A8D6;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    width: 45%;\n    padding: 15px 10px;\n    cursor: pointer; }\n    /* line 42, stdin */\n    .form input[type=\"submit\"]:hover {\n      -webkit-filter: brightness(90%);\n              filter: brightness(90%); }\n  /* line 47, stdin */\n  .form p {\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 50, stdin */\n    .form p i {\n      margin-right: 10px;\n      color: #00A8D6; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-83a6bc5e", module.exports)
  } else {
    hotAPI.update("_v-83a6bc5e", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}