var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 5, stdin */\n.examples .list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n/* line 11, stdin */\n.examples li {\n  padding: 2%;\n  width: 21%; }\n  /* line 15, stdin */\n  .examples li .img-cover {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 3px;\n    border-radius: 5px;\n    border: 1px solid #a2a2a3;\n    overflow: hidden;\n    position: relative;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    /* line 25, stdin */\n    .examples li .img-cover a {\n      position: absolute;\n      z-index: 100;\n      background-color: black;\n      width: 22%;\n      height: 22%;\n      border-radius: 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      text-decoration: none;\n      -webkit-transition: all .3s;\n      transition: all .3s; }\n      /* line 35, stdin */\n      .examples li .img-cover a:hover {\n        background-color: #333; }\n      /* line 38, stdin */\n      .examples li .img-cover a i {\n        font-size: 1.2em;\n        color: white;\n        margin: auto; }\n    /* line 45, stdin */\n    .examples li .img-cover p {\n      position: absolute;\n      color: white;\n      z-index: 100;\n      text-align: center; }\n    /* line 52, stdin */\n    .examples li .img-cover span {\n      -webkit-transition: background .3s;\n      transition: background .3s; }\n    /* line 57, stdin */\n    .examples li .img-cover:hover img {\n      -webkit-transform: scale(1.3);\n              transform: scale(1.3); }\n    /* line 61, stdin */\n    .examples li .img-cover:hover span {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 168, 214, 0.7); }\n  /* line 72, stdin */\n  .examples li img {\n    width: 100%;\n    margin: auto;\n    -webkit-transition: -webkit-transform .1s;\n    transition: -webkit-transform .1s;\n    transition: transform .1s;\n    transition: transform .1s, -webkit-transform .1s; }\n\n/* line 81, stdin */\n.examples .link-enter, .examples .link-leave-to {\n  bottom: 100%;\n  opacity: 0; }\n\n/* line 86, stdin */\n.examples .link-enter-active, .examples .link-leave-active,\n.examples .desc-enter-active, .examples .desc-leave-active,\n.examples .overlay-enter-active, .examples .overlay-leave-active {\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n/* line 92, stdin */\n.examples a, .examples .link-enter-to, .examples .link-leave {\n  bottom: 55%;\n  opacity: 1; }\n\n/* line 97, stdin */\n.examples .desc-enter, .examples .desc-leave-to {\n  top: 100%;\n  opacity: 0; }\n\n/* line 102, stdin */\n.examples p, .examples .desc-enter-to, .examples .desc-leave {\n  top: 45%;\n  opacity: 1; }\n\n/* line 107, stdin */\n.examples .overlay-enter, .examples .overlay-leave-to {\n  opacity: 0; }\n\n/* line 111, stdin */\n.examples .overlay-enter-to, .examples .overlay-leave {\n  opacity: 1; }\n\n/* line 117, stdin */\n.examples .overlay {\n  z-index: 2000;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  /* line 125, stdin */\n  .examples .overlay .bg-dark {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2); }\n  /* line 133, stdin */\n  .examples .overlay .image-container {\n    background-color: white;\n    padding: 5px 5px 20px 5px;\n    border-radius: 5px;\n    margin: auto;\n    z-index: 100; }\n  /* line 140, stdin */\n  .examples .overlay .close {\n    display: inline-block;\n    font-size: 2em;\n    float: right;\n    padding: 10px; }\n    /* line 145, stdin */\n    .examples .overlay .close i {\n      color: #777; }\n      /* line 147, stdin */\n      .examples .overlay .close i:hover {\n        color: #999; }\n\n@media (max-width: 991px) {\n  /* line 168, stdin */\n  .examples li {\n    padding: 2% !important;\n    width: 46% !important; } }\n")
'use strict';

module.exports = {
	data: function data() {
		return {
			largeImage: '',
			overlay: false,
			images: [{
				src: 'images/thumb1.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, mollitia.',
				hover: false
			}, {
				src: 'images/thumb2.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nulla?',
				hover: false
			}, {
				src: 'images/thumb3.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nisi.',
				hover: false
			}, {
				src: 'images/thumb4.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, harum.',
				hover: false
			}, {
				src: 'images/thumb5.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, magni?',
				hover: false
			}, {
				src: 'images/thumb6.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, vel?',
				hover: false
			}, {
				src: 'images/thumb7.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, fugit.',
				hover: false
			}, {
				src: 'images/thumb8.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sed?',
				hover: false
			}]
		};
	},
	methods: {
		imgMouseEnter: function imgMouseEnter(item) {
			item.hover = true;
		},
		imgMouseLeave: function imgMouseLeave(item) {
			item.hover = false;
		},
		showOverlay: function showOverlay(item) {
			this.largeImage = item.src;
			this.overlay = true;
		},
		hideOverlay: function hideOverlay(item) {
			this.overlay = false;
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"examples\">\n\t<ul class=\"list\">\n\t\t<li v-for=\"image in images\">\n\t\t\t<div class=\"img-cover\" @mouseenter=\"imgMouseEnter(image)\" @mouseleave=\"imgMouseLeave(image)\">\n\t\t\t\t<img :src=\"image.src\" alt=\"\">\n\t\t\t\t<transition name=\"link\">\n\t\t\t\t\t<a v-show=\"image.hover\" @click.prevent=\"showOverlay(image)\" href=\"\">\n\t\t\t\t\t\t<i class=\"fa fa-search fa-fw\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</transition>\n\t\t\t\t<transition name=\"desc\">\n\t\t\t\t\t<p v-show=\"image.hover &amp;&amp; window.innerWidth > 480\">\n\t\t\t\t\t\t{{image.description}}\n\t\t\t\t\t</p>\n\t\t\t\t</transition>\n\t\t\t\t<span></span>\n\t\t\t</div>\n\t\t\t<transition name=\"overlay\">\n\t\t\t\t<div v-show=\"overlay\" class=\"overlay\">\n\t\t\t\t\t<div class=\"bg-dark\" @click=\"hideOverlay\"></div>\n\t\t\t\t\t<div class=\"image-container\">\n\t\t\t\t\t\t<img :src=\"largeImage\" alt=\"\">\t\n\t\t\t\t\t\t<a @click.prevent=\"hideOverlay\" href=\"\" class=\"close\">\n\t\t\t\t\t\t\t<i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</transition>\n\t\t</li>\n\t</ul>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 5, stdin */\n.examples .list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n/* line 11, stdin */\n.examples li {\n  padding: 2%;\n  width: 21%; }\n  /* line 15, stdin */\n  .examples li .img-cover {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 3px;\n    border-radius: 5px;\n    border: 1px solid #a2a2a3;\n    overflow: hidden;\n    position: relative;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    /* line 25, stdin */\n    .examples li .img-cover a {\n      position: absolute;\n      z-index: 100;\n      background-color: black;\n      width: 22%;\n      height: 22%;\n      border-radius: 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      text-decoration: none;\n      -webkit-transition: all .3s;\n      transition: all .3s; }\n      /* line 35, stdin */\n      .examples li .img-cover a:hover {\n        background-color: #333; }\n      /* line 38, stdin */\n      .examples li .img-cover a i {\n        font-size: 1.2em;\n        color: white;\n        margin: auto; }\n    /* line 45, stdin */\n    .examples li .img-cover p {\n      position: absolute;\n      color: white;\n      z-index: 100;\n      text-align: center; }\n    /* line 52, stdin */\n    .examples li .img-cover span {\n      -webkit-transition: background .3s;\n      transition: background .3s; }\n    /* line 57, stdin */\n    .examples li .img-cover:hover img {\n      -webkit-transform: scale(1.3);\n              transform: scale(1.3); }\n    /* line 61, stdin */\n    .examples li .img-cover:hover span {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 168, 214, 0.7); }\n  /* line 72, stdin */\n  .examples li img {\n    width: 100%;\n    margin: auto;\n    -webkit-transition: -webkit-transform .1s;\n    transition: -webkit-transform .1s;\n    transition: transform .1s;\n    transition: transform .1s, -webkit-transform .1s; }\n\n/* line 81, stdin */\n.examples .link-enter, .examples .link-leave-to {\n  bottom: 100%;\n  opacity: 0; }\n\n/* line 86, stdin */\n.examples .link-enter-active, .examples .link-leave-active,\n.examples .desc-enter-active, .examples .desc-leave-active,\n.examples .overlay-enter-active, .examples .overlay-leave-active {\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n/* line 92, stdin */\n.examples a, .examples .link-enter-to, .examples .link-leave {\n  bottom: 55%;\n  opacity: 1; }\n\n/* line 97, stdin */\n.examples .desc-enter, .examples .desc-leave-to {\n  top: 100%;\n  opacity: 0; }\n\n/* line 102, stdin */\n.examples p, .examples .desc-enter-to, .examples .desc-leave {\n  top: 45%;\n  opacity: 1; }\n\n/* line 107, stdin */\n.examples .overlay-enter, .examples .overlay-leave-to {\n  opacity: 0; }\n\n/* line 111, stdin */\n.examples .overlay-enter-to, .examples .overlay-leave {\n  opacity: 1; }\n\n/* line 117, stdin */\n.examples .overlay {\n  z-index: 2000;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  /* line 125, stdin */\n  .examples .overlay .bg-dark {\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2); }\n  /* line 133, stdin */\n  .examples .overlay .image-container {\n    background-color: white;\n    padding: 5px 5px 20px 5px;\n    border-radius: 5px;\n    margin: auto;\n    z-index: 100; }\n  /* line 140, stdin */\n  .examples .overlay .close {\n    display: inline-block;\n    font-size: 2em;\n    float: right;\n    padding: 10px; }\n    /* line 145, stdin */\n    .examples .overlay .close i {\n      color: #777; }\n      /* line 147, stdin */\n      .examples .overlay .close i:hover {\n        color: #999; }\n\n@media (max-width: 991px) {\n  /* line 168, stdin */\n  .examples li {\n    padding: 2% !important;\n    width: 46% !important; } }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-ca4821a8", module.exports)
  } else {
    hotAPI.update("_v-ca4821a8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}