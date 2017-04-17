var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("/* line 11, stdin */\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  /* line 14, stdin */\n  .row .nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0 auto; }\n    /* line 20, stdin */\n    .row .nav li {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      text-align: center;\n      border: 1px solid #EFEFEF; }\n    /* line 26, stdin */\n    .row .nav a {\n      cursor: pointer;\n      display: block;\n      padding: 20px 60px;\n      color: #31373A;\n      font-weight: bold;\n      text-decoration: none;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      position: relative;\n      font-size: 0.9em; }\n    /* line 38, stdin */\n    .row .nav a:hover, .row .nav .active {\n      background-color: #00A8D6;\n      color: white; }\n    /* line 43, stdin */\n    .row .nav .active::before {\n      content: '';\n      position: absolute;\n      bottom: -35px;\n      left: 50%;\n      margin-left: -10px;\n      border: 20px solid transparent;\n      border-top: 20px solid #00A8D6; }\n    /* line 53, stdin */\n    .row .nav i {\n      margin-right: 10px; }\n  /* line 58, stdin */\n  .row .snippet-container {\n    padding: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  /* line 64, stdin */\n  .row .video-snippet iframe {\n    margin: auto;\n    height: 400px;\n    margin: auto;\n    width: 100%; }\n  /* line 73, stdin */\n  .row .text-snippet div {\n    padding: 10px;\n    width: 50%; }\n  /* line 77, stdin */\n  .row .text-snippet .img-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    /* line 79, stdin */\n    .row .text-snippet .img-container img {\n      height: 100%;\n      width: auto;\n      margin: auto; }\n  /* line 86, stdin */\n  .row .text-snippet h3 {\n    color: #31373A;\n    font-size: 1.5em; }\n  /* line 90, stdin */\n  .row .text-snippet p, .row .text-snippet ul {\n    color: #7E7A7A;\n    margin-top: 15px;\n    font-size: 0.9em; }\n  /* line 95, stdin */\n  .row .text-snippet li {\n    line-height: 30px;\n    list-style: disc;\n    list-style-position: inside; }\n  /* line 103, stdin */\n  .row .team-snippet {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    /* line 106, stdin */\n    .row .team-snippet .person-detail {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 31%;\n      border: 1px solid #EFEFEF;\n      border-radius: 5px;\n      padding-bottom: 20px;\n      overflow: hidden; }\n    /* line 116, stdin */\n    .row .team-snippet img {\n      width: 100%;\n      margin: 0px 0px auto; }\n    /* line 120, stdin */\n    .row .team-snippet .person-name {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      /* line 122, stdin */\n      .row .team-snippet .person-name h4 {\n        text-align: center;\n        color: #31373A;\n        padding: 10px 0;\n        margin-bottom: 10px;\n        border-bottom: 1px solid #EFEFEF;\n        display: inline-block;\n        margin: 0 auto 10px; }\n    /* line 132, stdin */\n    .row .team-snippet .person-desc {\n      text-align: center; }\n    /* line 135, stdin */\n    .row .team-snippet .person-social {\n      font-size: 1.5em;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: auto; }\n      /* line 139, stdin */\n      .row .team-snippet .person-social li {\n        margin: 10px 3px;\n        width: 40px;\n        height: 40px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        border: 1px solid #EFEFEF; }\n      /* line 146, stdin */\n      .row .team-snippet .person-social a {\n        padding: 5px;\n        margin: auto;\n        color: #00A8D6 !important; }\n        /* line 150, stdin */\n        .row .team-snippet .person-social a:hover {\n          -webkit-filter: brightness(40%);\n                  filter: brightness(40%); }\n  /* line 162, stdin */\n  .row .snippets-enter, .row .snippets-leave-to {\n    opacity: 0; }\n  /* line 166, stdin */\n  .row .snippets-enter-active, .row .snippets-leave-active {\n    -webkit-transition: opacity 0.4s;\n    transition: opacity 0.4s; }\n  /* line 170, stdin */\n  .row .snippets-enter-to, .row .snippets-leave {\n    opacity: 1; }\n\n@media (max-width: 991px) {\n  /* line 179, stdin */\n  .snippet-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    /* line 181, stdin */\n    .snippet-container.text-snippet div {\n      width: 100%; }\n    /* line 184, stdin */\n    .snippet-container img {\n      margin: auto; }\n  /* line 190, stdin */\n  .team-snippet .person-detail {\n    width: 70% !important;\n    margin: 10px auto; } }\n\n@media (max-width: 768px) {\n  /* line 200, stdin */\n  .nav a {\n    font-size: 0.8em !important; } }\n\n@media (max-width: 480px) {\n  /* line 208, stdin */\n  .text-snippet img {\n    width: 100% !important; }\n  /* line 214, stdin */\n  .team-snippet .person-detail {\n    width: 100% !important; }\n  /* line 218, stdin */\n  .team-snippet .person-social {\n    font-size: 1.1em !important; }\n    /* line 220, stdin */\n    .team-snippet .person-social li {\n      width: 25px !important;\n      height: 25px !important;\n      padding: 5px !important; }\n    /* line 225, stdin */\n    .team-snippet .person-social a {\n      padding: 0px !important; }\n  /* line 232, stdin */\n  .nav a, .nav li {\n    width: 100%; }\n  /* line 235, stdin */\n  .nav .active:before {\n    content: none !important; } }\n")
'use strict';

module.exports = {
	data: function data() {
		return {
			prevActiveNav: '',
			curSelect: 0
		};
	},
	mounted: function mounted() {
		this.prevActiveNav = document.querySelector('.nav .active');
	},
	methods: {
		activateNavItem: function activateNavItem(event, select) {
			var target = event.target.closest('a');
			this.prevActiveNav.classList.remove('active');
			target.classList.add('active');
			this.prevActiveNav = target;
			this.curSelect = select;
		}
	}
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"row\">\n\t<ul class=\"nav\">\n\t\t<li><a class=\"active\" @click.prevent=\"activateNavItem($event, 0)\"><i class=\"fa fa-video-camera\"></i> Introductory Video</a></li>\n\t\t<li><a @click.prevent=\"activateNavItem($event, 1)\"><i class=\"fa fa-cube\"></i>Random Text</a></li>\n\t\t<li><a @click.prevent=\"activateNavItem($event, 2)\"><i class=\"fa fa-group\"></i>The Team</a></li>\n\t</ul>\n\t<transition name=\"snippets\" mode=\"out-in\">\n\t\t<div class=\"snippet-container video-snippet\" v-if=\"curSelect == 0\" key=\"video\">\n\t\t\t<iframe src=\"https://www.youtube.com/embed/ScMzIvxBSi4?ecver=2\" frameborder=\"0\" style=\"\" allowfullscreen=\"\"></iframe>\n\t\t</div>\n\t\t<div class=\"snippet-container text-snippet\" v-if=\"curSelect == 1\" key=\"text\">\n\t\t\t<div class=\"img-container\">\n\t\t\t\t<img src=\"images/thumb1.jpg\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"text\">\n\t\t\t\t<h3>Lorem ipsum dolor.</h3>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil optio eligendi quos vero minima error quasi sunt dolore, ullam ipsam.</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Lorem ipsum dolor sit amet, consectetur.</li>\n\t\t\t\t\t<li>Molestiae natus, voluptatibus impedit officia omnis.</li>\n\t\t\t\t\t<li>Accusantium quibusdam inventore facilis totam illum.</li>\n\t\t\t\t</ul>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos impedit repellat repellendus id, suscipit veniam fugit quasi sequi distinctio dolores.</p>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"snippet-container team-snippet\" v-if=\"curSelect == 2\" key=\"team\">\n\t\t\t<div class=\"person-detail\">\n\t\t\t\t<img src=\"http://placehold.it/600x500\" alt=\"\">\n\t\t\t\t<div class=\"person-name\">\n\t\t\t\t\t<h4 class=\"\">John Smith</h4>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"person-desc\">Founder &amp; Money Maker</h5>\n\t\t\t\t<ul class=\"person-social\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-weixin\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-telegram\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-skype\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\t\n\t\t\t<div class=\"person-detail\">\n\t\t\t\t<img src=\"http://placehold.it/600x500\" alt=\"\">\n\t\t\t\t<div class=\"person-name\">\n\t\t\t\t\t<h4 class=\"\">John Smith</h4>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"person-desc\">Founder &amp; Money Maker</h5>\n\t\t\t\t<ul class=\"person-social\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-weixin\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-telegram\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-skype\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\t\n\t\t\t<div class=\"person-detail\">\n\t\t\t\t<img src=\"http://placehold.it/600x500\" alt=\"\">\n\t\t\t\t<div class=\"person-name\">\n\t\t\t\t\t<h4 class=\"\">John Smith</h4>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"person-desc\">Founder &amp; Money Maker</h5>\n\t\t\t\t<ul class=\"person-social\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-weixin\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-telegram\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-vk\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-skype\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\t \t\n\t\t</div>\n\t</transition>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["/* line 11, stdin */\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  /* line 14, stdin */\n  .row .nav {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0 auto; }\n    /* line 20, stdin */\n    .row .nav li {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      text-align: center;\n      border: 1px solid #EFEFEF; }\n    /* line 26, stdin */\n    .row .nav a {\n      cursor: pointer;\n      display: block;\n      padding: 20px 60px;\n      color: #31373A;\n      font-weight: bold;\n      text-decoration: none;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      position: relative;\n      font-size: 0.9em; }\n    /* line 38, stdin */\n    .row .nav a:hover, .row .nav .active {\n      background-color: #00A8D6;\n      color: white; }\n    /* line 43, stdin */\n    .row .nav .active::before {\n      content: '';\n      position: absolute;\n      bottom: -35px;\n      left: 50%;\n      margin-left: -10px;\n      border: 20px solid transparent;\n      border-top: 20px solid #00A8D6; }\n    /* line 53, stdin */\n    .row .nav i {\n      margin-right: 10px; }\n  /* line 58, stdin */\n  .row .snippet-container {\n    padding: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  /* line 64, stdin */\n  .row .video-snippet iframe {\n    margin: auto;\n    height: 400px;\n    margin: auto;\n    width: 100%; }\n  /* line 73, stdin */\n  .row .text-snippet div {\n    padding: 10px;\n    width: 50%; }\n  /* line 77, stdin */\n  .row .text-snippet .img-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    /* line 79, stdin */\n    .row .text-snippet .img-container img {\n      height: 100%;\n      width: auto;\n      margin: auto; }\n  /* line 86, stdin */\n  .row .text-snippet h3 {\n    color: #31373A;\n    font-size: 1.5em; }\n  /* line 90, stdin */\n  .row .text-snippet p, .row .text-snippet ul {\n    color: #7E7A7A;\n    margin-top: 15px;\n    font-size: 0.9em; }\n  /* line 95, stdin */\n  .row .text-snippet li {\n    line-height: 30px;\n    list-style: disc;\n    list-style-position: inside; }\n  /* line 103, stdin */\n  .row .team-snippet {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    /* line 106, stdin */\n    .row .team-snippet .person-detail {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      width: 31%;\n      border: 1px solid #EFEFEF;\n      border-radius: 5px;\n      padding-bottom: 20px;\n      overflow: hidden; }\n    /* line 116, stdin */\n    .row .team-snippet img {\n      width: 100%;\n      margin: 0px 0px auto; }\n    /* line 120, stdin */\n    .row .team-snippet .person-name {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      /* line 122, stdin */\n      .row .team-snippet .person-name h4 {\n        text-align: center;\n        color: #31373A;\n        padding: 10px 0;\n        margin-bottom: 10px;\n        border-bottom: 1px solid #EFEFEF;\n        display: inline-block;\n        margin: 0 auto 10px; }\n    /* line 132, stdin */\n    .row .team-snippet .person-desc {\n      text-align: center; }\n    /* line 135, stdin */\n    .row .team-snippet .person-social {\n      font-size: 1.5em;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: auto; }\n      /* line 139, stdin */\n      .row .team-snippet .person-social li {\n        margin: 10px 3px;\n        width: 40px;\n        height: 40px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        border: 1px solid #EFEFEF; }\n      /* line 146, stdin */\n      .row .team-snippet .person-social a {\n        padding: 5px;\n        margin: auto;\n        color: #00A8D6 !important; }\n        /* line 150, stdin */\n        .row .team-snippet .person-social a:hover {\n          -webkit-filter: brightness(40%);\n                  filter: brightness(40%); }\n  /* line 162, stdin */\n  .row .snippets-enter, .row .snippets-leave-to {\n    opacity: 0; }\n  /* line 166, stdin */\n  .row .snippets-enter-active, .row .snippets-leave-active {\n    -webkit-transition: opacity 0.4s;\n    transition: opacity 0.4s; }\n  /* line 170, stdin */\n  .row .snippets-enter-to, .row .snippets-leave {\n    opacity: 1; }\n\n@media (max-width: 991px) {\n  /* line 179, stdin */\n  .snippet-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    /* line 181, stdin */\n    .snippet-container.text-snippet div {\n      width: 100%; }\n    /* line 184, stdin */\n    .snippet-container img {\n      margin: auto; }\n  /* line 190, stdin */\n  .team-snippet .person-detail {\n    width: 70% !important;\n    margin: 10px auto; } }\n\n@media (max-width: 768px) {\n  /* line 200, stdin */\n  .nav a {\n    font-size: 0.8em !important; } }\n\n@media (max-width: 480px) {\n  /* line 208, stdin */\n  .text-snippet img {\n    width: 100% !important; }\n  /* line 214, stdin */\n  .team-snippet .person-detail {\n    width: 100% !important; }\n  /* line 218, stdin */\n  .team-snippet .person-social {\n    font-size: 1.1em !important; }\n    /* line 220, stdin */\n    .team-snippet .person-social li {\n      width: 25px !important;\n      height: 25px !important;\n      padding: 5px !important; }\n    /* line 225, stdin */\n    .team-snippet .person-social a {\n      padding: 0px !important; }\n  /* line 232, stdin */\n  .nav a, .nav li {\n    width: 100%; }\n  /* line 235, stdin */\n  .nav .active:before {\n    content: none !important; } }\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0e85c5c2", module.exports)
  } else {
    hotAPI.update("_v-0e85c5c2", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}