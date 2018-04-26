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
    
                <div class="Prizes tc">
                    <li>
                        <router-link to="/draw/click"><img src="../../assets/images/draw/yi_01.png" alt=""></router-link>
                        <div class="tc">5000元</div>
                        <div class="text_size tc">3名</div>
                    </li>
                    <li>
                        <a href=""><img src="../../assets/images/draw/yi_02.png" alt=""></a>
                        <div>1000元</div>
                        <div class="text_size">30名</div>
                    </li>
                    <li>
                        <img src="../../assets/images/draw/yi_03.png" alt="">
                        <div>500元</div>
                        <div class="text_size">100名</div>
                    </li>
                    <li>
                        <img src="../../assets/images/draw/yi_04.png" alt="">
                        <div>500元</div>
                        <div class="text_size">100名</div>
                    </li>
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
.Prizes {
	margin:0.2rem auto 0 auto;
	height:2.4rem;
	font-family:'黑体';
	color:#e80b1a;
	font-weight:bold;
	font-size:.7rem;
	li {
		list-style:none;
		width:4.5rem;
		float:left;
		margin-right:.15rem;
		margin-left:.126rem;
		text-align:center;
		margin-top:-0.1rem;
		line-height: 0.4rem;
		img {
			width:100%;
		}
		.text_size {
			font-size:.6rem;
			line-height: 1rem;
		}
		div{
			margin-top:-0.1rem;
			margin-bottom:.1rem;
			margin-left:.2rem
		}
	}
}
</style>