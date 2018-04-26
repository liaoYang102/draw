<template>
	<section class="pc_draw">
		
		<logoheader></logoheader>

		<div class="content">
			<div>
				<periods></periods>

				<div class="DrawWay tc">
                    <span>买单报手机号赢</span>
                    <img src="../../assets/images/draw/5000.png" alt="">
                    <span>大奖</span>
                </div>
    
                <div class="tc mt10">
                    <div class="mt20"><img src="../../assets/images/draw/one.png" width="40%" alt="" /></div>
                    <div class="mt20"><router-link to="/draw/in"><img src="../../assets/images/draw/yi_06.png" alt="" width="45%"></router-link></div>
                </div>
			</div>
		</div>
		<bottom></bottom>
	</section>
</template>

<script>
	import logoheader from './components/header'
	import bottom from './components/footer'
	import periods from './components/middle_periods'
	export default {
		components:{
			bottom,periods,logoheader
		},
		data(){
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
.content {
	padding:0 18%;
	margin-top:-0.3rem
}

.DrawWay {
	margin-top:.2rem;
	font-size:1.1rem;
	font-family:'黑体';
	font-weight:bolder;
	img {
		margin-bottom:-0.1rem;
		width:22%;
		height:22%;
	}
}
</style>