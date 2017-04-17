var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 12, stdin */\n.slider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  /* line 16, stdin */\n  .slider .slider-item {\n    padding: 10px 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    /* line 20, stdin */\n    .slider .slider-item img, .slider .slider-item p, .slider .slider-item h4 {\n      margin: auto;\n      padding: 5px;\n      text-align: center; }\n    /* line 25, stdin */\n    .slider .slider-item i {\n      font-size: 1.5em;\n      padding-right: 20px; }\n    /* line 29, stdin */\n    .slider .slider-item h4 {\n      display: inline-block;\n      border-top: 1px solid #31373A;\n      font-size: 0.9em; }\n  /* line 36, stdin */\n  .slider .nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: auto; }\n    /* line 39, stdin */\n    .slider .nav li {\n      padding: 2px; }\n    /* line 42, stdin */\n    .slider .nav a {\n      border-radius: 50%;\n      display: inline-block;\n      height: 12px;\n      width: 12px;\n      background-color: #a2a2a3;\n      cursor: pointer; }\n    /* line 50, stdin */\n    .slider .nav .active {\n      background-color: #31373A; }\n  /* line 55, stdin */\n  .slider .slide-enter-active {\n    -webkit-transition: all .7s;\n    transition: all .7s; }\n  /* line 59, stdin */\n  .slider .slide-enter {\n    position: absolute;\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  /* line 66, stdin */\n  .slider .slide-enter-to {\n    opacity: 1; }\n")
'use strict';

module.exports = {
	data: function data() {
		return {
			curActive: 0,
			persons: [{
				src: 'images/testi1.png',
				quote: 'Lorem ipsum dolor sit amet',
				name: 'Someone Famous'
			}, {
				src: 'images/testi2.png',
				quote: 'Lorem ipsum dolor sit amet, ',
				name: 'Someone Famous'
			}, {
				src: 'images/testi3.png',
				quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing ',
				name: 'Someone Famous'
			}]
		};
	},
	methods: {
		nextSlide: function nextSlide(num) {
			this.curActive = num;
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"slider\">\n\t<transition-group name=\"slide\">\n\t\t<div class=\"slider-item\" v-for=\"person in persons.length\" v-show=\"(curActive == (person-1))\" :key=\"(person-1)\">\n\t\t\t<img :src=\"persons[curActive].src\" alt=\"\">\n\t\t\t<p><i class=\"fa fa-quote-left\" aria-hidden=\"true\"></i>{{persons[curActive].quote}}</p>\n\t\t\t<h4>{{persons[curActive].name}}</h4>\n\t\t</div>\n\t</transition-group>\t\n\t<ul class=\"nav\">\n\t\t<li v-for=\"item in persons.length\">\n\t\t\t<a :class=\"{active: (curActive == item - 1)}\" @click.prevent=\"nextSlide(item-1)\"></a>\n\t\t</li>\n\t</ul>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 12, stdin */\n.slider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  /* line 16, stdin */\n  .slider .slider-item {\n    padding: 10px 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    /* line 20, stdin */\n    .slider .slider-item img, .slider .slider-item p, .slider .slider-item h4 {\n      margin: auto;\n      padding: 5px;\n      text-align: center; }\n    /* line 25, stdin */\n    .slider .slider-item i {\n      font-size: 1.5em;\n      padding-right: 20px; }\n    /* line 29, stdin */\n    .slider .slider-item h4 {\n      display: inline-block;\n      border-top: 1px solid #31373A;\n      font-size: 0.9em; }\n  /* line 36, stdin */\n  .slider .nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: auto; }\n    /* line 39, stdin */\n    .slider .nav li {\n      padding: 2px; }\n    /* line 42, stdin */\n    .slider .nav a {\n      border-radius: 50%;\n      display: inline-block;\n      height: 12px;\n      width: 12px;\n      background-color: #a2a2a3;\n      cursor: pointer; }\n    /* line 50, stdin */\n    .slider .nav .active {\n      background-color: #31373A; }\n  /* line 55, stdin */\n  .slider .slide-enter-active {\n    -webkit-transition: all .7s;\n    transition: all .7s; }\n  /* line 59, stdin */\n  .slider .slide-enter {\n    position: absolute;\n    opacity: 0;\n    -webkit-transform: translateX(20px);\n            transform: translateX(20px); }\n  /* line 66, stdin */\n  .slider .slide-enter-to {\n    opacity: 1; }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-75e749a6", module.exports)
  } else {
    hotAPI.update("_v-75e749a6", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}