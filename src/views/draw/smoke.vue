<template>
	<section class="pc_draw">
		
		<logoheader></logoheader>

		<div class="content">
			<div>
				<periods></periods>

				<div class="po">
					<div class="show-box">
						<div class="show-box-left fl">
							<div class="num" v-model="obj">
								{{ obj.number }}
							</div>
							<div class="store" v-model="obj">
									{{ obj.store }}
							</div>
						</div>
						<div class="show-box-right fr">
							<img @click="start" src="../../assets/images/draw/start.png"/>
						</div>
					</div>
					<div class="show-box-bottom">
						还剩4位幸运儿
					</div>
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
				obj: {
					number:'175 **** 4831',
					store: '上海如家超市浦东店'
				}
			}
		},
		methods: {
			start() {
				this.obj = {
					number:'182 **** 4831',
					store: '上海如家超市浦东店'
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.content {
	padding:0 18%;
	margin-top:-0.3rem
}
.po {
	margin-top:.11rem;
	.show-box {
		height:2.8rem;
		width:12rem;
		margin-left:4rem;
		background:white;
		border:0.1rem solid #dd1835;
		border-radius:2.2rem;
		overflow:hidden;
		padding:0 .182rem;
		box-shadow:-0.1rem .1rem .4rem .05rem rgba(115,115,113,0.5);
		.show-box-left {
			width:90%;
			height:100%;
			border-right:.1rem solid #dd1835;
			box-sizing:border-box;
			text-align: left;
			.num {
				height:1.5rem;
				line-height:1.5rem;
				font-size:1.3rem;
				color:#dd1633;
				font-weight:bold;
				margin-left:1rem;
				margin-top: 0.2rem;
				li {
					width:.342rem;
					height:100%;
					float:left;
					margin-right:.032rem;
					color:white;
					background:url(../../assets/images/draw/num1.png) top center repeat;
				}
			}
			.store {
				height:1rem;
				line-height:0.9rem;
				font-size:.6rem;
				font-weight:bold;
				margin-left:1rem;
			}
		}
		.show-box-right {
			width:10%;
			height:100%;
			position:relative;
			img {
				width:54%;
				position:absolute;
				top:50%;
				left:60%;
				transform:translate(-50%,-50%);
				cursor:pointer;
			}
		}
	}
	.show-box-bottom {
		text-align:right;
		height:.22rem;
		line-height:.22rem;
		font-size:.5rem;
		margin-top:.4rem;
		margin-right:2.9rem;
		font-weight:bold;
	}
}

</style>