var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 4, stdin */\n.navbar {\n  z-index: 1000;\n  width: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  padding: 10px 0;\n  background-color: transparent;\n  -webkit-transition: all .4s;\n  transition: all .4s; }\n  /* line 14, stdin */\n  .navbar.enabled {\n    background-color: white;\n    padding: 5px 0; }\n    /* line 17, stdin */\n    .navbar.enabled a {\n      color: black; }\n  /* line 22, stdin */\n  .navbar .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline; }\n  /* line 28, stdin */\n  .navbar .navbar-logo {\n    font-weight: bold;\n    font-size: 2em; }\n  /* line 33, stdin */\n  .navbar .nav {\n    width: 45%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: auto 0;\n    -webkit-transition: all .4s;\n    transition: all .4s; }\n  /* line 42, stdin */\n  .navbar .active {\n    color: #00A8D6 !important; }\n  /* line 46, stdin */\n  .navbar a {\n    font-size: 0.95em;\n    color: white;\n    text-decoration: none;\n    padding: 15px 10px;\n    display: inline-block; }\n  /* line 54, stdin */\n  .navbar .navbar-toggle {\n    display: none; }\n\n@media (max-width: 1200px) {\n  /* line 61, stdin */\n  .navbar .nav {\n    width: 55%; } }\n\n@media (max-width: 991px) {\n  /* line 69, stdin */\n  .navbar .nav {\n    width: 70%; } }\n\n@media (max-width: 768px) {\n  /* line 76, stdin */\n  .navbar {\n    background: white;\n    padding: 10px 0px; }\n    /* line 80, stdin */\n    .navbar .navbar-logo:before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0px;\n      left: 0px;\n      background-color: #fff;\n      z-index: -5; }\n    /* line 91, stdin */\n    .navbar .nav-none {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n    /* line 96, stdin */\n    .navbar .nav {\n      z-index: -10;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      position: absolute;\n      top: 100%;\n      left: 0px;\n      background: white;\n      margin: 0px;\n      padding: 0 0 15px 0;\n      width: 100%;\n      -webkit-transition: all .3s ease-out;\n      transition: all .3s ease-out; }\n      /* line 108, stdin */\n      .navbar .nav li {\n        border-bottom: 1px solid #c2c2c2; }\n        /* line 110, stdin */\n        .navbar .nav li:first-child {\n          border-top: 1px solid #c2c2c2; }\n        /* line 113, stdin */\n        .navbar .nav li:first-child a {\n          color: #00A8D6; }\n        /* line 116, stdin */\n        .navbar .nav li a:hover {\n          color: #00A8D6; }\n    /* line 122, stdin */\n    .navbar a {\n      color: black;\n      width: 100%;\n      -webkit-transition: color .6s;\n      transition: color .6s; }\n    /* line 128, stdin */\n    .navbar .navbar-toggle {\n      cursor: pointer;\n      display: block;\n      color: white;\n      background: black;\n      border: none;\n      border-radius: 5px;\n      font-size: 1.5em; }\n      /* line 136, stdin */\n      .navbar .navbar-toggle:focus {\n        outline: none; }\n      /* line 139, stdin */\n      .navbar .navbar-toggle i {\n        padding: 6px 8px; } }\n")
'use strict';

module.exports = {
	data: function data() {
		return {
			navlinks: ['Home', 'Intro', 'Portfolio', 'Features', 'Snippets', 'FAQ', 'Price'],
			curActive: -1, //текущее активное меню
			isEnabled: false
		};
	},

	created: function created() {
		function scroller() {
			this.isEnabled = window.pageYOffset < 10 ? false : true;
		}
		document.addEventListener('scroll', scroller.bind(this));
	},

	methods: {
		activeNav: function activeNav(item) {
			this.curActive = item;
		},
		toggleNav: function toggleNav() {
			document.querySelector('.nav').classList.toggle('nav-none');
		}
	},

	watch: {
		isEnabled: function isEnabled() {
			this.curActive = this.isEnabled ? this.curActive : -1;
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<nav class=\"navbar\" :class=\"{enabled: isEnabled}\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-logo\"><a href=\"#\">Sales</a></div>\n\t\t<button class=\"navbar-toggle\" @click=\"toggleNav\"><i class=\"fa fa-bars toggler\"></i></button>\n\t\t<ul class=\"nav nav-none\">\n\t\t\t<li v-for=\"item in navlinks.length\" :key=\"item-1\">\n\t\t\t\t<a href=\"#\" :class=\"{active: (curActive == item-1 &amp;&amp; isEnabled)}\" @click=\"activeNav(item-1)\">\n\t\t\t\t\t{{navlinks[item-1]}}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 4, stdin */\n.navbar {\n  z-index: 1000;\n  width: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  padding: 10px 0;\n  background-color: transparent;\n  -webkit-transition: all .4s;\n  transition: all .4s; }\n  /* line 14, stdin */\n  .navbar.enabled {\n    background-color: white;\n    padding: 5px 0; }\n    /* line 17, stdin */\n    .navbar.enabled a {\n      color: black; }\n  /* line 22, stdin */\n  .navbar .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline; }\n  /* line 28, stdin */\n  .navbar .navbar-logo {\n    font-weight: bold;\n    font-size: 2em; }\n  /* line 33, stdin */\n  .navbar .nav {\n    width: 45%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: auto 0;\n    -webkit-transition: all .4s;\n    transition: all .4s; }\n  /* line 42, stdin */\n  .navbar .active {\n    color: #00A8D6 !important; }\n  /* line 46, stdin */\n  .navbar a {\n    font-size: 0.95em;\n    color: white;\n    text-decoration: none;\n    padding: 15px 10px;\n    display: inline-block; }\n  /* line 54, stdin */\n  .navbar .navbar-toggle {\n    display: none; }\n\n@media (max-width: 1200px) {\n  /* line 61, stdin */\n  .navbar .nav {\n    width: 55%; } }\n\n@media (max-width: 991px) {\n  /* line 69, stdin */\n  .navbar .nav {\n    width: 70%; } }\n\n@media (max-width: 768px) {\n  /* line 76, stdin */\n  .navbar {\n    background: white;\n    padding: 10px 0px; }\n    /* line 80, stdin */\n    .navbar .navbar-logo:before {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0px;\n      left: 0px;\n      background-color: #fff;\n      z-index: -5; }\n    /* line 91, stdin */\n    .navbar .nav-none {\n      -webkit-transform: translateY(-100%);\n              transform: translateY(-100%); }\n    /* line 96, stdin */\n    .navbar .nav {\n      z-index: -10;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      position: absolute;\n      top: 100%;\n      left: 0px;\n      background: white;\n      margin: 0px;\n      padding: 0 0 15px 0;\n      width: 100%;\n      -webkit-transition: all .3s ease-out;\n      transition: all .3s ease-out; }\n      /* line 108, stdin */\n      .navbar .nav li {\n        border-bottom: 1px solid #c2c2c2; }\n        /* line 110, stdin */\n        .navbar .nav li:first-child {\n          border-top: 1px solid #c2c2c2; }\n        /* line 113, stdin */\n        .navbar .nav li:first-child a {\n          color: #00A8D6; }\n        /* line 116, stdin */\n        .navbar .nav li a:hover {\n          color: #00A8D6; }\n    /* line 122, stdin */\n    .navbar a {\n      color: black;\n      width: 100%;\n      -webkit-transition: color .6s;\n      transition: color .6s; }\n    /* line 128, stdin */\n    .navbar .navbar-toggle {\n      cursor: pointer;\n      display: block;\n      color: white;\n      background: black;\n      border: none;\n      border-radius: 5px;\n      font-size: 1.5em; }\n      /* line 136, stdin */\n      .navbar .navbar-toggle:focus {\n        outline: none; }\n      /* line 139, stdin */\n      .navbar .navbar-toggle i {\n        padding: 6px 8px; } }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-767bcedc", module.exports)
  } else {
    hotAPI.update("_v-767bcedc", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}