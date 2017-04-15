<template>
	<div class="row">
		<ul class="nav">
			<li><a @click.prevent="activateNavItem($event, 0)"><i class="fa fa-video-camera"></i> Introductory Video</a></li>
			<li><a @click.prevent="activateNavItem($event, 1)"><i class="fa fa-cube"></i>Random Text</a></li>
			<li><a class="active" @click.prevent="activateNavItem($event, 2)"><i class="fa fa-group"></i>The Team</a></li>
		</ul>
		<transition name="snippets" mode="out-in">
			<div class="snippet-container video-snippet"
				 v-if="curSelect == 0"
				 key="video">
				<iframe src="https://www.youtube.com/embed/ScMzIvxBSi4?ecver=2" frameborder="0" style="" allowfullscreen></iframe>
			</div>
			<div class="snippet-container text-snippet"
				 v-if="curSelect == 1"
				 key="text">
				<div class="img-container">
					<img src="images/thumb1.jpg" alt="">
				</div>
				<div class="text">
					<h3>Lorem ipsum dolor.</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil optio eligendi quos vero minima error quasi sunt dolore, ullam ipsam.</p>
					<ul>
						<li>Lorem ipsum dolor sit amet, consectetur.</li>
						<li>Molestiae natus, voluptatibus impedit officia omnis.</li>
						<li>Accusantium quibusdam inventore facilis totam illum.</li>
					</ul>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos impedit repellat repellendus id, suscipit veniam fugit quasi sequi distinctio dolores.</p>
				</div>

			</div>
			<div class="snippet-container team-snippet"
				 v-if="curSelect == 2"
				 key="team">
				<div class="person-detail">
					<img src="http://placehold.it/600x500" alt="">
					<div class="person-name">
						<h4 class="">John Smith</h4>
					</div>
					<h5 class="person-desc">Founder & Money Maker</h5>
					<ul class="person-social">
						<li>
							<a href="#"><i class="fa fa-weixin" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-vk" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
						</li>
					</ul>
				</div>	
				<div class="person-detail">
					<img src="http://placehold.it/600x500" alt="">
					<div class="person-name">
						<h4 class="">John Smith</h4>
					</div>
					<h5 class="person-desc">Founder & Money Maker</h5>
					<ul class="person-social">
						<li>
							<a href="#"><i class="fa fa-weixin" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-vk" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
						</li>
					</ul>
				</div>	
				<div class="person-detail">
					<img src="http://placehold.it/600x500" alt="">
					<div class="person-name">
						<h4 class="">John Smith</h4>
					</div>
					<h5 class="person-desc">Founder & Money Maker</h5>
					<ul class="person-social">
						<li>
							<a href="#"><i class="fa fa-weixin" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-vk" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
						</li>
					</ul>
				</div>	 	
			</div>
		</transition>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return{
				prevActiveNav: '',
				curSelect: 2,
			}
		},
		mounted: function() {
			this.prevActiveNav = document.querySelector('.nav .active');
		},
		methods: {
			activateNavItem: function(event,select) {
				var target = event.target.closest('a');
				this.prevActiveNav.classList.remove('active');
				target.classList.add('active');
				this.prevActiveNav = target;
				this.curSelect = select;
			}
		}
	}
</script>

<style lang="scss">
	$active-color: #00A8D6;
	$h-border-color: #484F5E;
	$check-ok-color: #8FB73C;
	$main-font-color: #7E7A7A;
	$section-bg-color: #FAFAFA;
	$headline-main-color: #31373A;
	$headline-color: #a2a2a3;
	$lighten-border-color: #EFEFEF;

	.row{
		display: flex;
		flex-direction: column;
		.nav{
			display: flex;
			flex-wrap: wrap;
			justify-content:center;
			margin: 0 auto;

			li{
				display: flex;
				text-align: center;
				border: 1px solid $lighten-border-color;
			}

			a{
				cursor:pointer;
				display: block;
				padding: 20px 60px;
				color: $headline-main-color;
				font-weight: bold;
				text-decoration: none;
				transition: all .3s;
				position: relative;
				font-size: 0.9em;
			}

			a:hover, .active{
				background-color: $active-color;
				color: white;
			}

			.active::before{
				content: ''; 
			    position: absolute; 
			    bottom: -35px; 
			    left: 50%;
			    margin-left: -10px;
			    border: 20px solid transparent; 
			    border-top: 20px solid $active-color;
			}

			i{
				margin-right: 10px;
			}
		}		

		.snippet-container{
			padding: 40px;
			display: flex;
		}

		.video-snippet{
			iframe{
				margin: auto;
				height: 400px;
				margin: auto;
				width: 100%;
			}
		}

		.text-snippet{
			div{
				padding: 10px;
				width: 50%;
			}
			.img-container{
				display: flex;
				img{
					height: 100%;
					width: auto;
					margin: auto;
				}
			}

			h3{
				color: $headline-main-color;
				font-size: 1.5em;
			}
			p,ul{
				color: $main-font-color;
				margin-top: 15px;
				font-size: 0.9em;
			}
			li{
				line-height: 30px;
				list-style: disc;
				list-style-position: inside;
			}
		}


		.team-snippet{
			display: flex;
			justify-content: space-between;
			.person-detail{
				display: flex;
				flex-direction: column;
				width: 31%;
				border: 1px solid $lighten-border-color;
				border-radius: 5px;
				padding-bottom: 20px;
				overflow: hidden;
			}
		
			img{
				width: 100%;
				margin: 0px 0px auto;
			}
			.person-name{
				display:flex;
				h4{
					text-align: center;	
					color: $headline-main-color;
					padding: 10px 0;
					margin-bottom: 10px;
					border-bottom: 1px solid $lighten-border-color;
					display: inline-block;
					margin: 0 auto 10px;
				}
			}
			.person-desc{
				text-align:center;
			}
			.person-social{
				font-size: 1.5em;
				display: flex;
				margin: auto;
				li{
					margin: 10px 3px;
					width: 40px;
					height:40px;
					display: flex;
					border: 1px solid $lighten-border-color;
				}
				a{
					margin: auto;
					color:$active-color!important;
					&:hover{
						filter: 
							brightness(40%);
					}
				}

			}

		}
		
		

		.snippets-enter, .snippets-leave-to{
			opacity: 0;
		}

		.snippets-enter-active, .snippets-leave-active{
			transition: opacity 0.4s;
		}

		.snippets-enter-to, .snippets-leave{
			opacity: 1;
		}

	}



	@media (max-width:991px) {
		.snippet-container{
			flex-direction: column;
			&.text-snippet div{
				width: 100%;
			}
			img{
				margin: auto;
			}
		}

		.team-snippet{
			.person-detail{
				width: 70%!important;
				margin: 10px auto;
			}
		}
	}


	@media (max-width:768px) {
		.nav{
			a{
				font-size: 0.8em!important;
			}
		}
	}

	@media (max-width: 480px) {
		.text-snippet {
			img{
				width: 100%!important;
			}
		}

		.team-snippet{
			.person-detail{
				width: 100%!important;
			}

			.person-social{
				font-size: 1.1em!important;
				li{
					width: 25px!important;
					height: 25px!important;
					padding:5px!important;
				}
			}
		}

		.nav{
			a,li{
				width: 100%;
			}
			.active:before{
				content: none!important;
			}
		}
	}
	
</style>