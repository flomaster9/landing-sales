var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 5, stdin */\n.toggler-list li {\n  border-radius: 5px;\n  background-color: #F0F0F0;\n  margin: 15px 0;\n  padding: 10px; }\n  /* line 10, stdin */\n  .toggler-list li h5 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline; }\n  /* line 14, stdin */\n  .toggler-list li i {\n    margin-right: 10px;\n    font-size: 1.4em;\n    color: #8FB73C; }\n  /* line 19, stdin */\n  .toggler-list li a {\n    display: inline-block;\n    padding: 10px 0;\n    width: 100%;\n    color: rgba(49, 55, 58, 0.9);\n    font-size: 1.05em;\n    font-weight: bold;\n    text-decoration: none; }\n  /* line 28, stdin */\n  .toggler-list li p {\n    font-size: 0.9em; }\n\n/* line 32, stdin */\n.toggler-list .answer-enter, .toggler-list .answer-leave-to {\n  opacity: 0; }\n\n/* line 36, stdin */\n.toggler-list .answer-enter-active, .toggler-list .answer-leave-active {\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n/* line 40, stdin */\n.toggler-list .answer-enter-to, .toggler-list .answer-leave {\n  opacity: 1; }\n")
'use strict';

module.exports = {
	data: function data() {
		return {
			questions: [{
				h: 'Lorem ipsum dolor.',
				p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse obcaecati veniam maiores, incidunt earum ipsam numquam est porro neque eveniet, quisquam culpa tempore repudiandae.',
				opened: true
			}, {
				h: 'Lorem ipsum dolor sit amet.',
				p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quis.',
				opened: false
			}, {
				h: 'Lorem ipsum dolor.',
				p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse obcaecati veniam maiores, incidunt earum ipsam numquam est porro neque eveniet, quisquam culpa tempore repudiandae.',
				opened: false
			}]
		};
	},
	methods: {
		toggler: function toggler(item) {
			item.opened = !item.opened;
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<ul class=\"toggler-list\">\n\t<li v-for=\"q in questions\" :class=\"{active: q.opened}\">\n\t\t<h5>\n\t\t\t<i class=\"fa\" :class=\"\n\t\t\t\t\t{'fa-minus-square': (q.opened),\n\t\t\t\t\t'fa-plus-square': !q.opened}\"></i>\n\t\t\t<a href=\"#\" @click.prevent=\"toggler(q)\">{{q.h}}</a>\n\t\t</h5>\n\t\t<transition name=\"answer\">\n\t\t\t<p v-show=\"q.opened\">{{q.p}}</p>\n\t\t</transition>\n\t</li>\n</ul>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 5, stdin */\n.toggler-list li {\n  border-radius: 5px;\n  background-color: #F0F0F0;\n  margin: 15px 0;\n  padding: 10px; }\n  /* line 10, stdin */\n  .toggler-list li h5 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline; }\n  /* line 14, stdin */\n  .toggler-list li i {\n    margin-right: 10px;\n    font-size: 1.4em;\n    color: #8FB73C; }\n  /* line 19, stdin */\n  .toggler-list li a {\n    display: inline-block;\n    padding: 10px 0;\n    width: 100%;\n    color: rgba(49, 55, 58, 0.9);\n    font-size: 1.05em;\n    font-weight: bold;\n    text-decoration: none; }\n  /* line 28, stdin */\n  .toggler-list li p {\n    font-size: 0.9em; }\n\n/* line 32, stdin */\n.toggler-list .answer-enter, .toggler-list .answer-leave-to {\n  opacity: 0; }\n\n/* line 36, stdin */\n.toggler-list .answer-enter-active, .toggler-list .answer-leave-active {\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n/* line 40, stdin */\n.toggler-list .answer-enter-to, .toggler-list .answer-leave {\n  opacity: 1; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-f0e6be9e", module.exports)
  } else {
    hotAPI.update("_v-f0e6be9e", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}