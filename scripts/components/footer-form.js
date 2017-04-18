var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 11, stdin */\n.footer-form-inside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  padding-bottom: 20px; }\n  /* line 18, stdin */\n  .footer-form-inside input, .footer-form-inside textarea {\n    padding: 10px;\n    margin: 8px 30px 8px 0;\n    background-color: #111;\n    font-size: 0.9em;\n    color: white;\n    font-weight: 100;\n    border: none;\n    outline: none; }\n    /* line 27, stdin */\n    .footer-form-inside input:focus, .footer-form-inside textarea:focus {\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  /* line 32, stdin */\n  .footer-form-inside input:first-child {\n    margin-top: 20px; }\n  /* line 36, stdin */\n  .footer-form-inside textarea {\n    width: 100%; }\n  /* line 40, stdin */\n  .footer-form-inside input[type=\"submit\"] {\n    background-color: transparent;\n    border: 3px solid white;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    padding: 10px 15px;\n    cursor: pointer;\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n    /* line 49, stdin */\n    .footer-form-inside input[type=\"submit\"]:hover {\n      color: black;\n      background-color: white; }\n  /* line 55, stdin */\n  .footer-form-inside .preload {\n    color: white;\n    position: absolute;\n    bottom: -50px;\n    right: 0px;\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 62, stdin */\n    .footer-form-inside .preload i {\n      margin-right: 10px;\n      color: #00A8D6; }\n\n@media (max-width: 991px) {\n  /* line 70, stdin */\n  .footer-form-inside {\n    width: 100%; }\n    /* line 72, stdin */\n    .footer-form-inside h2 {\n      padding: 20px 10px; } }\n\n@media (max-width: 768px) {\n  /* line 79, stdin */\n  .footer-form-inside {\n    width: 100%; }\n    /* line 81, stdin */\n    .footer-form-inside h2 {\n      padding: 20px 10px; } }\n")
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
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<form action=\"\" @submit.prevent=\"\" class=\"footer-form-inside\">\n\t<input type=\"text\" v-model=\"Name\" required=\"\" placeholder=\"Your name\">\n\t<input type=\"text\" v-model=\"Email\" required=\"\" placeholder=\"Your e-mail\">\n\t<input type=\"text\" v-model=\"Phone\" required=\"\" placeholder=\"Your Phone\">\n\t<div>\n\t\t<textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n\t</div>\n\t<div><input type=\"submit\" @click=\"startPreload\" value=\"Submit\"></div>\n\t<p class=\"preload\" v-show=\"sendingForm\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i> Please Wait...</p>\n</form>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 11, stdin */\n.footer-form-inside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  padding-bottom: 20px; }\n  /* line 18, stdin */\n  .footer-form-inside input, .footer-form-inside textarea {\n    padding: 10px;\n    margin: 8px 30px 8px 0;\n    background-color: #111;\n    font-size: 0.9em;\n    color: white;\n    font-weight: 100;\n    border: none;\n    outline: none; }\n    /* line 27, stdin */\n    .footer-form-inside input:focus, .footer-form-inside textarea:focus {\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  /* line 32, stdin */\n  .footer-form-inside input:first-child {\n    margin-top: 20px; }\n  /* line 36, stdin */\n  .footer-form-inside textarea {\n    width: 100%; }\n  /* line 40, stdin */\n  .footer-form-inside input[type=\"submit\"] {\n    background-color: transparent;\n    border: 3px solid white;\n    font-weight: bold;\n    color: white;\n    font-size: 0.9em;\n    padding: 10px 15px;\n    cursor: pointer;\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n    /* line 49, stdin */\n    .footer-form-inside input[type=\"submit\"]:hover {\n      color: black;\n      background-color: white; }\n  /* line 55, stdin */\n  .footer-form-inside .preload {\n    color: white;\n    position: absolute;\n    bottom: -50px;\n    right: 0px;\n    font-size: 0.9em;\n    font-weight: bold; }\n    /* line 62, stdin */\n    .footer-form-inside .preload i {\n      margin-right: 10px;\n      color: #00A8D6; }\n\n@media (max-width: 991px) {\n  /* line 70, stdin */\n  .footer-form-inside {\n    width: 100%; }\n    /* line 72, stdin */\n    .footer-form-inside h2 {\n      padding: 20px 10px; } }\n\n@media (max-width: 768px) {\n  /* line 79, stdin */\n  .footer-form-inside {\n    width: 100%; }\n    /* line 81, stdin */\n    .footer-form-inside h2 {\n      padding: 20px 10px; } }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0c69219a", module.exports)
  } else {
    hotAPI.update("_v-0c69219a", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}