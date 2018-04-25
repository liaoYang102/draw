<template>
	<section class="pc_draw">
		<div class="header clearfloat">
			<img class="fl logo" src="../../assets/images/draw/logo.png" alt="" width="12.5%" />
			<div class="fr tr right-box">
				<div><a href="result.html"><img src="../../assets/images/draw/log.png" width="100%"/></a></div>
			</div>
		</div>

		<div class="content">
			<div>
                <div class="tc pr">
                    <div class="periods">第1期</div>
                    <img src="../../assets/images/draw/luck.png" alt=""  width="97%">
                </div>
				<div class="DrawWay tc">
                    <span>买单报手机号赢</span>
                    <img src="../../assets/images/draw/5000.png" alt="">
                    <span>大奖</span>
                </div>
    
                <div class="Prizes tc">
                    <li>
                        <a href="click.html"><img src="../../assets/images/draw/yi_01.png" alt=""></a>
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
		<div class="footer">
			www.cgc999.com
		</div>


	</section>
</template>

<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
.pc_draw {
	margin:0;
	padding:0;
	width:100%;
	height:100%;
	font-size:.1rem;
	font-family:"hiragino sans gb",Arial;
	-webkit-tap-highlight-color:transparent;
	position:relative;
	background:url(../../assets/images/draw/bg.jpg) no-repeat;
	background-size:100% 100%;
	overflow-x:hidden;
	overflow-y:hidden
}
li {
	list-style-type:none
}
.fr {
	float:right
}
.fl {
	float:left
}
.tc {
	text-align:center
}
.tr {
	text-align:right
}
.tl {
	text-align:left
}
.pr {
	position:relative;
	.periods {
		position:absolute;
		top:.65rem;
		right:.3rem;
		font-size:.3rem;
		font-style:italic;
		font-weight:bold;
	}
}
.flex {
	display:flex;
	align-items:center;
	justify-content:center
}
.mt10 {
	margin-top:.054rem
}
.mt20 {
	margin-top:.11rem
}
.mt30 {
	margin-top:.16rem
}
.mr20 {
	margin-right:.11rem
}
.red {
	color:#dd1835
}
.clearfloat:after {
	display:block;
	clear:both;
	content:"";
	visibility:hidden;
	height:0
}
.clearfloat {
	zoom:1
}
.header {
	cursor:pointer;
	.right-box {
		margin:1% 1% 0 0
	}
}
.content {
	padding:0 18%;
	margin-top:-0.3rem
}
.footer {
	position:absolute;
	bottom:1%;
	right:1%;
	font-size:.15rem;
	letter-spacing:2px;
	font-weight:bold;
	font-style:italic
}
.DrawWay {
	margin-top:.1rem;
	font-size:.4rem;
	font-family:'黑体';
	font-weight:bolder;
	img {
		margin-bottom:-0.054rem;
		width:25%;
		height:25%
	}
}
.Prizes {
	margin:0.2rem auto 0 auto;
	height:1.2rem;
	font-family:'黑体';
	color:#e80b1a;
	font-weight:bold;
	font-size:.22rem;
	li {
		list-style:none;
		width:1.35rem;
		float:left;
		margin-right:.15rem;
		margin-left:.126rem;
		text-align:center;
		margin-top:-0.1rem;
		img {
			width:100%;
		}
		div {
			margin-top:-0.1rem;
			margin-bottom:.1rem;
			margin-left:.15rem;
		}
		.text_size {
			font-size:.17rem;
		}
	}
}
</style>