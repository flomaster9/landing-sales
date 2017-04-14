<template>	
	<nav class="navbar" :class="{enabled: isEnabled}">
		<div class="container">
			<div class="navbar-logo"><a href="#">Sales</a></div>
			<button class="navbar-toggle"
				@click="toggleNav($event)"><i class="fa fa-bars toggler"></i></button>
			<ul class="nav nav-none">
				<li v-for='item in navlinks.length' :key='item-1'>
					<a href="#" 
					:class="{active: (curActive == item-1 && isEnabled)}"
					@click="activeNav($event)">
						{{navlinks[item-1]}}</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>

	module.exports = {
		data: function() {
			return{
				navlinks: [
					'Home',
					'Intro',
					'Portfolio',
					'Features',
					'Snippets',
					'FAQ',
					'Price'
				],
				curActive: -1, //текущее активное меню
				isEnabled: false,
			}
		},

		created: function() {
			function scroller() {
				this.isEnabled = window.pageYOffset < 10 ? false : true;
			}
			document.addEventListener('scroll',scroller.bind(this))
		},

		methods: {
			activeNav: function(event) {
				for(a in this.navlinks){
					if (event.target.textContent.trim() != this.navlinks[a]) 
						continue;
					this.curActive = a;
					break;
				}
				event.preventDefault();
			},
			toggleNav: function(event) {
				document.querySelector('.nav').classList.toggle('nav-none');
			}
		},

		watch:{
			isEnabled: function() {
				this.curActive = this.isEnabled ? this.curActive : -1;
			}
		},
	}
</script>

<style lang="scss">
	$active-color: #00A8D6;

	.navbar{
		z-index: 2000;
		width: 100%;
		position: fixed;
		left: 0px;
		top: 0px;
		padding: 10px 0;
		background-color: transparent;
		transition: all .4s;

		&.enabled{
			background-color: white;
			padding:5px 0;
			a{
				color: black;
			}
	}
		
		.container{
			display: flex;
			justify-content: space-between;
			align-items: baseline;
		}

		.navbar-logo{
			font-weight: bold;
			font-size: 2em;
		}

		.nav{
			width:45%;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: auto 0;
			transition: all .4s;
		}

		.active{
			color: $active-color!important;
		}

		a{
			font-size:0.95em;
			color: white;
			text-decoration: none;
			padding:15px 10px;
			display:inline-block;
		}

		.navbar-toggle{
			display:none;
		}
	}

	@media (max-width:1200px) {
		.navbar{
			.nav{
				width:55%;
			}
		}
	}

	@media (max-width:991px) {
		.navbar{
			.nav{
				width:70%;
			}
		}
	}

	@media (max-width:768px) {
		.navbar{
			background: white;
			padding: 10px 0px;

			.navbar-logo:before{
				content: '';
				position: absolute;
				width:100%;
				height:100%;
				top:0px;
				left:0px;
				background-color: #fff;
				z-index:-5;
			}

			.nav-none{
				transform: 
					translateY(-100%);
			}

			.nav{
				z-index: -10;
				flex-direction: column;
				position: absolute;
				top:100%;
				left:0px;
				background: white;
				margin: 0px;
				padding:0 0 15px 0;
				width:100%;
				transition: all .3s ease-out;

				li{
					border-bottom: 1px solid #c2c2c2;
					&:first-child{
						border-top: 1px solid #c2c2c2;
					}
					&:first-child a{
						color: $active-color;
					}
					a:hover{
						color: $active-color;
					}
				}
			}

			a{
				color: black;
				width: 100%;
				transition: color .6s;
			}

			.navbar-toggle{
				cursor:pointer;
				display:block;
				color:white;
				background: black;
				border: none;
				border-radius: 5px;
				font-size: 1.5em;
				&:focus{
					outline: none;
				}
				i{
					padding:6px 8px;
				}
			}
		}
	}
</style>