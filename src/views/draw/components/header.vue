<template>
	<section>
		<div class="header clearfloat">
			<img class="fl logo" src="../../../assets/images/draw/logo.png" alt="" width="12.5%" />
			<div class="fr tr right-box">
				<div v-if="this.$route.path == '/draw' || this.$route.path == '/draw/index'"><router-link to="/draw/result"><img src="../../../assets/images/draw/log.png" width="100%"/></router-link></div>

				<div @click="goBack" v-else-if="this.$route.path == '/draw/result'"><img src="../../../assets/images/draw/back.png" width="100%"/></div>
				<div v-else>
					<div @click="goBack"><img src="../../../assets/images/draw/back.png" width="56%"/></div>
					<div class="mt10"><router-link to="/draw/result"><img src="../../../assets/images/draw/log.png"  width="100%"/></router-link></div>
				</div>
				
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.right-box {
		margin:1% 1% 0 0
	}
</style>