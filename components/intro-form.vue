<template>
	<form action="" @submit.prevent class="intro-form-inside">
		<h2>Start Your <strong>FREE</strong> Trial</h2>
		<input type="text" v-model="Name" required placeholder="Your name">
		<input type="text" v-model="Email" required placeholder="Your e-mail">
		<input type="text" v-model="Phone" required placeholder="Your Phone">
		<div><input type="submit" @click="startPreload" value="Get Your Free Trial"></div>
		<p class="preload" v-show="sendingForm"><i class="fa fa-spinner fa-spin fa-2x"></i> Please Wait...</p>
	</form>
</template>

<script>
	module.exports = {
		data: function() {
			return{
				preload: false,
				Name: '',
				Email: '',
				Phone: '',
			}
		},
		methods:{
			startPreload: function() {
				this.preload = this.Name && this.Email && this.Phone;
			}
		},
		computed: {
			sendingForm: function() {
				return this.preload;
			},
		}
	}
</script>

<style lang="sass">
$active-color: #00A8D6;
$h-border-color: #484F5E;
$check-ok-color: #8FB73C;
$check-wrong-color: #D20707;
$main-font-color: #7E7A7A;
$section-bg-color: #FAFAFA;
$headline-main-color: #31373A;
$headline-color: #a2a2a3;
$lighten-border-color: #EFEFEF;
	.intro-form-inside{
	display: flex;
	width: 100%;
	flex-direction: column;
	background-color: rgba(black, .5);
	position: relative;
	padding-bottom: 20px;
		
		h2{
			font-weight: 100;
			background-color: rgba(black, .7);
			padding: 30px;
			text-align: center;
			font-size: 1.5em;
			strong{
				color: #fff;
				font-size: 1.1em;
			}
		}

		input{
			padding: 15px;
			margin: 8px 30px;
			background-color: rgba(black, .4);
			border: 1px solid black;
			font-size:0.9em;
			color: white;
			font-weight: 100;
		}

		input[type="submit"]{
			background-color: $active-color;
			font-weight: bold;
			color: white;
			font-size:0.9em;
			padding: 15px 15px;
			cursor: pointer;
			transition: all .3s;
			&:hover{
				 filter: brightness(90%);
			}
		}

		.preload{
			color: white;
			position: absolute;
			bottom: -50px;
			right: 0px;
			font-size: 0.9em;
			font-weight:bold;
			i{
				margin-right:10px;
				color: $active-color;
			}	
		}
	}
</style>