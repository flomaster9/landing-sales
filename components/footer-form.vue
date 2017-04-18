<template>
	<form action="" @submit.prevent class="footer-form-inside">
		<input type="text" v-model="Name" required placeholder="Your name">
		<input type="text" v-model="Email" required placeholder="Your e-mail">
		<input type="text" v-model="Phone" required placeholder="Your Phone">
		<div>
			<textarea name="" id="" cols="30" rows="10"></textarea>
		</div>
		<div><input type="submit" @click="startPreload" value="Submit"></div>
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
	.footer-form-inside{
		display: flex;
		width: 100%;
		flex-direction: column;
		position: relative;
		padding-bottom: 20px;

		input, textarea{
			padding: 10px;
			margin: 8px 30px 8px 0;
			background-color: #111;
			font-size:0.9em;
			color: white;
			font-weight: 100;
			border: none;
			outline: none;
			&:focus{
				box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
			}
		}

		input:first-child{
			margin-top: 20px;
		}

		textarea{
			width: 100%;
		}

		input[type="submit"]{
			background-color: transparent;
			border: 3px solid white;
			font-weight: bold;
			color: white;
			font-size:0.9em;
			padding: 10px 15px;
			cursor: pointer;
			transition: all .5s;
			&:hover{
				color: black;
				background-color: white;
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

	@media (max-width:991px) {
		.footer-form-inside{
			width: 100%;
			h2{
				padding: 20px 10px;
			}
		}
	}

	@media (max-width:768px) {
		.footer-form-inside{
			width: 100%;
			h2{
				padding: 20px 10px;
			}
		}
	}

</style>