<template>
	<section>
		<logoheader></logoheader>

		<div class="content2">
			<div class="flex clearfloat">
				<img style="width: 65%;" class="fl" src="../../assets/images/draw/one2.png"  width="57%"/>
				<div class="fl oneperiods">
					第1期
				</div>
			</div>
			<div class="name-list">中奖名单</div>
			<div class="table2 clearfloat">
				<div class="ov">
					<div style="padding: 0rem 0.3rem;">
						<div class="clearfloat result-title">
							<img src="../../assets/images/draw/one3.png" width="20%"/>
							<div class="num">共计5个</div>
						</div>
						<div class="result-list tc">
							<div class="left">
								<div class="flex table-tr">
									<div>中奖电话</div>
									<div>联盟商家</div>
									<div>消费时间</div>
									<div>中奖次数</div>
								</div>
								<div class="flex table-td" v-for="i in 3">
									<div class="number-color">17520439845</div>
									<div>联盟商家</div>
									<div>2018-3-22 12:00:01</div>
									<div>500</div>
								</div>
							</div>
							<div class="left">
								<div class="flex table-tr">
									<div>中奖电话</div>
									<div>联盟商家</div>
									<div>消费时间</div>
									<div>中奖次数</div>
								</div>
								<div class="flex table-td" v-for="i in 3">
									<div class="number-color">17520439845</div>
									<div>联盟商家</div>
									<div>2018-3-22 12:00:01</div>
									<div>500</div>
								</div>
							</div>
						</div>
					</div>
					<div style="padding: 0 0.3rem;" class="mt30">
						<div class="clearfloat result-title">
							<img class="fl" src="../../assets/images/draw/two.png" width="20%"/>
							<div class="fr num">共计60个</div>
						</div>
						<div class="result-list tc">
							<div class="left">
								<div class="flex table-tr">
									<div>中奖电话</div>
									<div>联盟商家</div>
									<div>消费时间</div>
									<div>中奖次数</div>
								</div>
								<div class="flex table-td" v-for="i in 11">
									<div class="number-color">17520439845</div>
									<div>联盟商家</div>
									<div>2018-3-22 12:00:01</div>
									<div>500</div>
								</div>
							</div>
							<div class="left">
								<div class="flex table-tr">
									<div>中奖电话</div>
									<div>联盟商家</div>
									<div>消费时间</div>
									<div>中奖次数</div>
								</div>
								<div class="flex table-td" v-for="i in 5">
									<div class="number-color">17520439845</div>
									<div>联盟商家</div>
									<div>2018-3-22 12:00:01</div>
									<div>500</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="clearfloat content-sm">具体中奖信息以手机短信通知为主</div>
		</div>

		<bottom></bottom>
	</section>
</template>

<script>
	import logoheader from './components/header'
	import bottom from './components/footer'
	export default {
		components:{
			bottom,logoheader
		},
		data(){
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.content2 {
		padding:0 10%;
		margin-top:-1.5rem;
		.oneperiods {
			font-size:1.3rem;
			font-style:italic;
			font-weight:900;
			letter-spacing:0.07rem;
			margin-left: 0.5rem;
		}
		.name-list {
			color:#dd1835;
			font-size:.8rem;
			font-weight:bold;
			text-align:center;
			margin-top:.1rem;
		}
		.table2 {
			background:rgba(255,255,255,0.3);
			margin-top:.1rem;
			padding:.2rem;
			border-radius:.1rem;
			border:0.01rem solid rgba(254,213,17,0.7);
			height:10rem;
			overflow:hidden;
			.ov {
				height:10rem;
				overflow-y:scroll;
				scrollbar-highlight-color:rgba(252,216,64,0.7);
				scrollbar-arrow-color:rgba(252,216,64,0.7);
				scrollbar-base-color:rgba(252,216,64,0.7);
				scrollbar-face-color:#faefc1;
				scrollbar-shadow-color:#faefc1;
			}
		}
		.result-title {
			display:flex;
			justify-content:space-between;
			.num {
				font-size:.25rem;
				width:100%;
				text-align:right;
				line-height: 0.8rem;
			}
		}
		.result-list {
			display:flex;
			justify-content:space-between;
			.left {
				width:11.7rem;
				background:#fef6d6;
				border-radius:0.05rem;
				padding:.1rem;
				box-sizing:border-box;
				.table-tr {
					padding:.1rem;
					font-size:.32rem;
					font-weight:600;
				}
				.table-td {
					font-size: 0.3rem;
					border-top:0.02rem solid #bcb8a6;
					padding:.1rem;
					font-weight:600;
				}
			}
		}
		.number-color {
			color:#dd1835;
		}
	}
	
	
	.table2 .ov::-webkit-scrollbar {
		width:.15rem;
	}
	.table2 .ov::-webkit-scrollbar-track {
		border-radius:.15rem;
	}
	.table2 .ov::-webkit-scrollbar-thumb {
		background-color:#faefc1;
		border-radius:.15rem;
	}

	.left .table-tr div,.left .table-td div {
		flex:1;
	}
	.content-sm {
		height:1rem;
		line-height:1rem;
		font-weight:bold;
		font-size: 0.3rem;
		text-align: left;
		margin-left: 0.5rem;
	}
</style>