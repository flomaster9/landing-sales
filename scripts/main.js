var Vue = require('../node_modules/vue/dist/vue.min.js');
var navbar = require('./components/navbar.js');



var vm = new Vue({
	el: '.container',
	components:{
		navbar: navbar
	}
})

