var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 11, stdin */\n.intro-form-inside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: relative;\n  padding-bottom: 20px; }\n  /* line 19, stdin */\n  .intro-form-inside h2 {\n    font-weight: 100;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 30px;\n    text-align: center;\n    font-size: 1.5em; }\n    /* line 25, stdin */\n    .intro-form-inside h2 strong {\n      color: #fff;\n      font-size: 1.1em; }\n  /* line 31, stdin */\n  .intro-form-inside input {\n    padding: 15px;\n    margin: 8px 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 1px solid black;\n    font-size: 0.9em;\n    color: white;\n    font-weight: 100; }\n  /* line 41, stdin */\n  .intro-form-inside input[type=\"submit\"] {\n    background-color: #00A8D6;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    padding: 15px 15px;\n    cursor: pointer;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n    /* line 49, stdin */\n    .intro-form-inside input[type=\"submit\"]:hover {\n      -webkit-filter: brightness(90%);\n              filter: brightness(90%); }\n  /* line 54, stdin */\n  .intro-form-inside .preload {\n    color: white;\n    position: absolute;\n    bottom: -50px;\n    right: 0px;\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 61, stdin */\n    .intro-form-inside .preload i {\n      margin-right: 10px;\n      color: #00A8D6; }\n")
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
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<form action=\"\" @submit.prevent=\"\" class=\"intro-form-inside\">\n\t<h2>Start Your <strong>FREE</strong> Trial</h2>\n\t<input type=\"text\" v-model=\"Name\" required=\"\" placeholder=\"Your name\">\n\t<input type=\"text\" v-model=\"Email\" required=\"\" placeholder=\"Your e-mail\">\n\t<input type=\"text\" v-model=\"Phone\" required=\"\" placeholder=\"Your Phone\">\n\t<div><input type=\"submit\" @click=\"startPreload\" value=\"Get Your Free Trial\"></div>\n\t<p class=\"preload\" v-show=\"sendingForm\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i> Please Wait...</p>\n</form>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 11, stdin */\n.intro-form-inside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: relative;\n  padding-bottom: 20px; }\n  /* line 19, stdin */\n  .intro-form-inside h2 {\n    font-weight: 100;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 30px;\n    text-align: center;\n    font-size: 1.5em; }\n    /* line 25, stdin */\n    .intro-form-inside h2 strong {\n      color: #fff;\n      font-size: 1.1em; }\n  /* line 31, stdin */\n  .intro-form-inside input {\n    padding: 15px;\n    margin: 8px 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 1px solid black;\n    font-size: 0.9em;\n    color: white;\n    font-weight: 100; }\n  /* line 41, stdin */\n  .intro-form-inside input[type=\"submit\"] {\n    background-color: #00A8D6;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    padding: 15px 15px;\n    cursor: pointer;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n    /* line 49, stdin */\n    .intro-form-inside input[type=\"submit\"]:hover {\n      -webkit-filter: brightness(90%);\n              filter: brightness(90%); }\n  /* line 54, stdin */\n  .intro-form-inside .preload {\n    color: white;\n    position: absolute;\n    bottom: -50px;\n    right: 0px;\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 61, stdin */\n    .intro-form-inside .preload i {\n      margin-right: 10px;\n      color: #00A8D6; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-83a6bc5e", module.exports)
  } else {
    hotAPI.update("_v-83a6bc5e", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}