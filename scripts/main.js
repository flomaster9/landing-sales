var Vue = require('../node_modules/vue/dist/vue.min.js');
var navbar = require('./components/navbar.js');
var offers = require('./components/offers-list.js');
var portfolio = require('./components/portfolio.js');
var snippets = require('./components/snippets.js');
var slider = require('./components/slider.js');


var vm = new Vue({
	el: '.body',
	components:{
		navbar: navbar,
		portfolio: portfolio,
		snippets: snippets,
		slider: slider
	},
	data:{
		offersList: offers.items,
		introName: '',
		introEmail: '',
		introPhone: '',
		preload: false,
	},
	methods:{
		startIntroPreload: function() {
			this.preload = this.introName && this.introEmail && this.introPhone;
		}
	},
	computed: {
		sendingIntroForm: function() {
			return this.preload;
		},
	}
})


