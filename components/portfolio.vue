<template>
	<div class="examples">
		<ul class="list">
			<li v-for="image in images">
				<div class="img-cover" 
					@mouseenter="imgMouseEnter(image)"
					@mouseleave="imgMouseLeave(image)">
					<img :src="image.src" alt="">
					<transition name="link">
						<a v-show="image.hover"
							@click.prevent="showOverlay(image)" href="">
							<i class="fa fa-search fa-fw"></i>
						</a>
					</transition>
					<transition name="desc">
						<p v-show="image.hover && window.innerWidth > 480">
							{{image.description}}
						</p>
					</transition>
					<span></span>
				</div>
				<transition name="overlay">
					<div v-show="overlay"
						class="overlay">
						<div class="bg-dark" @click="hideOverlay"></div>
						<div class="image-container">
							<img :src='largeImage' alt="">	
							<a @click.prevent="hideOverlay" href="" class="close">
								<i class="fa fa-window-close" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</transition>
			</li>
		</ul>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return{
				largeImage: '',
				overlay: false,
				images: [
					{
						src: 'images/thumb1.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, mollitia.', 
						hover: false
					},
					{
						src: 'images/thumb2.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, nulla?', 
						hover: false
					},
					{
						src: 'images/thumb3.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, nisi.', 
						hover: false
					},
					{
						src: 'images/thumb4.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, harum.', 
						hover: false
					},
					{
						src: 'images/thumb5.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, magni?', 
						hover: false
					},
					{
						src: 'images/thumb6.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, vel?', 
						hover: false
					},
					{
						src: 'images/thumb7.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, fugit.', 
						hover: false
					},
					{
						src: 'images/thumb8.jpg', 
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, sed?', 
						hover: false
					},
				]
			}
		},
		methods:{
			imgMouseEnter: function(item) {
				item.hover = true;
			},
			imgMouseLeave: function(item) {
				item.hover = false;
			},
			showOverlay: function(item) {
				this.largeImage = item.src;
				this.overlay = true;
			},
			hideOverlay: function(item) {
				this.overlay = false;
			}
		}
	}
</script>

<style lang="scss">
	.examples{
		$headline-color: #a2a2a3;
		$active-color: #00A8D6;
		.list{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}

		li{
			padding: 2%;
			width: 21%;

			.img-cover{
				display: flex;
				flex-direction: column;
				padding:3px;
				border-radius: 5px;
				border: 1px solid $headline-color;
				overflow: hidden;
				position: relative;
				align-items: center;

				a{
					position: absolute;
					z-index: 100;
					background-color: black;
					width: 22%;
					height: 22%;
					border-radius: 5px;
					display:flex;
					text-decoration: none;
					transition: all .3s;
					&:hover{
						background-color: #333;
					}
					i{
						font-size:1.2em;
						color: white;
						margin: auto;
					}
				}

				p{
					position: absolute;
					color: white;
					z-index: 100;
					text-align:center;
				}

				span{
					transition: background .3s;			
				}

				&:hover {
					img{
						transform: 
							scale(1.3);
					}
					span{
						position: absolute;
						left: 0px;
						top: 0px;
						width: 100%;
						height: 100%;
						background-color: rgba($active-color, .7);
					}
				}
			}

			img{
				width: 100%;
				margin: auto;
				transition: transform .1s;
			}
		}



		.link-enter, .link-leave-to{
			bottom: 100%;
		}

		.link-enter-active,.link-leave-active,
		.desc-enter-active,.desc-leave-active,
		.overlay-enter-active,.overlay-leave-active{
			transition: all .3s;
		}

		a,.link-enter-to,.link-leave{
			bottom: 55%;
		}

		.desc-enter, .desc-leave-to{
			top: 100%;
		}

		p,.desc-enter-to,.desc-leave{
			top: 45%;
		}

		.overlay-enter, .overlay-leave-to{
			opacity: 0;
		}

		.overlay-enter-to,.overlay-leave{
			opacity: 1;
		}



		.overlay{
			z-index: 2000;
			position: fixed;
				left: 0px;
				top: 0px;
				width: 100%;
				height: 100%;
				display: flex;
			.bg-dark{
				position: fixed;
				left: 0px;
				top: 0px;
				width: 100%;
				height: 100%;
				background-color: rgba(black,0.2);
			}
			.image-container{
				background-color: white;
				padding: 5px 5px 20px 5px;
				border-radius:5px;
				margin: auto;
				z-index: 100;
			}
			.close{
				display:inline-block;
				font-size: 2em;
				float: right;
				padding: 10px;
				i{
					color: #777;
					&:hover{
						color: #999;
					}
				}
			}
		}



	}

	@media (min-width:1200px) {
		
	}

	@media (max-width:1200px) {

	}

	@media (max-width:991px) {
		.examples{
			li{
				padding: 2%!important;
				width: 46%!important;
			}
		}
	}

	@media (max-width:768px) {

	}

</style>