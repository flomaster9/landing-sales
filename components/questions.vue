<template>
	<ul class="toggler-list">
		<li v-for="q in questions"
		:class="{active: q.opened}">
			<h5>
				<i class="fa"
				:class="
						{'fa-minus-square': (q.opened),
						'fa-plus-square': !q.opened}"></i>
				<a href="#"
				@click.prevent="toggler(q)">{{q.h}}</a>
			</h5>
			<transition name="answer">
				<p v-show="q.opened">{{q.p}}</p>
			</transition>
		</li>
	</ul>
</template>

<script>
	module.exports = {
		data: function() {
			return{
				questions: [
					{
						h: 'Lorem ipsum dolor.',
						p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse obcaecati veniam maiores, incidunt earum ipsam numquam est porro neque eveniet, quisquam culpa tempore repudiandae.',
						opened: true,
					},
					{
						h: 'Lorem ipsum dolor sit amet.',
						p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quis.',
						opened: false,
					},
					{
						h: 'Lorem ipsum dolor.',
						p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo esse obcaecati veniam maiores, incidunt earum ipsam numquam est porro neque eveniet, quisquam culpa tempore repudiandae.',
						opened: false,
					},
				]
			}
		},
		methods: {
			toggler: function(item) {
				item.opened = !item.opened;
			}
		}
	}
</script>

<style lang="sass">
	@import "../sass/helpers/variables";
	.toggler-list{
		$lighten-color: #F0F0F0;
		li{
			border-radius: 5px;
			background-color: $lighten-color;
			margin: 15px 0;
			padding: 10px;
			h5{
				display: flex;
				align-items: baseline;
			}
			i{
				margin-right: 10px;
				font-size: 1.4em;
				color: $check-ok-color;
			}
			a{
				display: inline-block;
				padding: 10px 0;
				width: 100%;
				color: rgba($headline-main-color,0.9);
				font-size: 1.05em;
				font-weight: bold;
				text-decoration: none;
			}
			p{
				font-size: 0.9em;
			}
		}
		.answer-enter, .answer-leave-to{
			opacity: 0;
		}

		.answer-enter-active, .answer-leave-active{
			transition: all .3s;
		}

		.answer-enter-to, .answer-leave{
			opacity: 1;
		}
	}
</style>