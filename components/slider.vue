<template>
	<div class="slider">
		<transition-group name="slide">
			<div class="slider-item"
			v-for="person in persons.length"
			v-if="curActive == (person-1)"
			:key="(person-1)">
				<img :src="persons[curActive].src" alt="">
				<p><i class="fa fa-quote-left" aria-hidden="true"></i>{{persons[curActive].quote}}</p>
				<h4>{{persons[curActive].name}}</h4>
			</div>
		</transition-group>	
		<ul class="nav">
			<li v-for="item in persons.length">
				<a :class="{active: (curActive == item - 1)}"
					@click.prevent="nextSlide(item-1)"></a>
			</li>
		</ul>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				curActive: 0,
				persons: [
					{
						src: 'images/testi1.png',
						quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
						name: 'Someone Famous',
					},
					{
						src: 'images/testi2.png',
						quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
						name: 'Someone Famous',
					},
					{
						src: 'images/testi3.png',
						quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam.',
						name: 'Someone Famous',
					},
				]
			}
		},
		methods: {
			nextSlide: function(num) {
				this.curActive = num;
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
	
	.slider{
		display: flex;
		flex-direction: column;
		
		.slider-item{
			padding: 10px 10px;
			display: flex;
			flex-direction: column;
			img, p, h4{
				margin: auto;
				padding: 5px;
				text-align:center;
			}
			i{
				font-size: 1.5em;
				padding-right: 20px;
			}
			h4{
				display:inline-block;
				border-top: 1px solid $headline-main-color;
				font-size: 0.9em;
			}
		}

		.nav{
			display: flex;
			margin: auto;
			li{
				padding: 2px;
			}
			a{
				border-radius: 50%;
				display: inline-block;
				height: 12px;
				width: 12px;
				background-color: $headline-color;
				cursor: pointer;
			}
			.active{
				background-color: $headline-main-color;
			}
		}

		.slide-enter-active{
			transition: all .5s;
		}

		.slide-enter{
			opacity: 0;
			transform:
				translateX(20px);
		}

		.slide-enter-to{
			opacity: 1;
		}

	}
	
</style>