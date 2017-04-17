<template>
	<form action="" @submit.prevent class="middle-form-inside">
		<input type="text" v-model="Name" required placeholder="Your name">
		<input type="text" v-model="Email" required placeholder="Your e-mail">
		<input type="text" v-model="Phone" required placeholder="Your Phone">
		<input type="submit" @click="startPreload" value="Subscribe Now!">
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
	.middle-form-inside{
	display: flex;
	width: 100%;
	background-color: white;
	position: relative;
	padding: 20px 0;
		
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
			margin:0px 20px;
			padding: 15px;
			background-color: #F8F8F8;
			font-size:0.9em;
			color: white;
			font-weight: 100;
		}
		input:not(:last-child){
			border: 1px solid $lighten-border-color;
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
				color: black;
			}	
		}
	}


	@media (min-width:1200px) {
		.middle-form-inside{
			flex-direction: row!important;
			justify-content: space-between;
			input{
				width: 24%;
			}
		}
	}

	@media (max-width:1200px) {
		.middle-form-inside{
			flex-direction: column;
		}	
	}

	@media (max-width:991px) {
		.middle-form-inside{
			input{
				margin: 8px 20px;
			}
		}	
	}
</style>