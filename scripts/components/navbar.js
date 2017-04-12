var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\nh1{\n\tcolor: red;\n}\n")
"use strict";

module.exports = {
	data: function data() {
		console.log(1);
		return {
			greeting: "hssafsi"
		};
	}

};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<h1>{{greeting}}</h1>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\nh1{\n\tcolor: red;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-767bcedc", module.exports)
  } else {
    hotAPI.update("_v-767bcedc", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}