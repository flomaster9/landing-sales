var Vue = require('../node_modules/vue/dist/vue.min.js');
var navbar = require('./components/navbar.js');
var offers = require('./components/offers-list.js');
var portfolio = require('./components/portfolio.js');
var snippets = require('./components/snippets.js');
var slider = require('./components/slider.js');
var introForm = require('./components/intro-form.js');
var middleForm = require('./components/middle-form.js');


var vm = new Vue({
	el: '.body',
	components:{
		navbar: navbar,
		portfolio: portfolio,
		snippets: snippets,
		slider: slider,
		introForm: introForm,
		middleForm: middleForm,
	},
	data:{
		offersList: offers.items,
		preload: false,
	},
})


