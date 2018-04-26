<template>
	<section>
		<logoheader></logoheader>

		<div class="content2">
			<div class="tc">
				<img src="../../assets/images/draw/one2.png" width="57%"/>
				<div class="tc c-text">
					<span class="mr20">参与抽奖人数共计<strong class="red">1205</strong>人</span>
					<span>参与抽奖消费记录<strong class="red">120000</strong>次</span>
				</div>
			</div>
			<div class="table-bg" id="draw">
				<div class="table tc">
					<div class="flex table-tr">
						<div>手机号码</div>
						<div>消费时间</div>
						<div>联盟商家</div>
						<div>中奖次数</div>
					</div>
					<mySpecialTransition>
						<li class="flex table-td" v-for="(item, index) in list" v-bind:key="item.time" v-bind:data-index="index">
							<div class="red">{{item.number}}</div>
							<div>{{item.date}}</div>
							<div>{{item.store}}</div>
							<div>{{item.num}}</div>
						</li>
					</mySpecialTransition>

				</div>
			</div>
			<div class="clearfloat content-sm flex">
				<div class="fl">具体中奖信息以手机短信通知为主</div>
				<div class="fl tc btn-box">
					<button class="in-btn af" @click="show1"><span>开始</span><img src="../../assets/images/draw/in-start.png" alt="" /></button>
					<button class="in-btn af" @click="stop"><span>暂停</span><img src="../../assets/images/draw/in-stop.png" alt="" /></button>
				</div>
			</div>
			<audio id="start">
				<source src="../../../static/audio/start.mp3" type="audio/mp3" />
			</audio>
			<audio id="end">
				<source src="../../../static/audio/end.mp3" type="audio/mp3" />
			</audio>
		</div>

		<bottom></bottom>
	</section>
</template>

<script>
	import logoheader from './components/header'
	import bottom from './components/footer'
	import mySpecialTransition from '../../components/my-special-transition'
	export default {
		components:{
			bottom,logoheader,mySpecialTransition
		},
		data(){
			return {
				inner: '',
				value: 1,
				list: [{
						number: '175****9845',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****0845',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					}, {
						number: '175****9845',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****0845',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****0845',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****8045',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****8045',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****8405',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****8045',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****8045',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					},
					{
						number: '135****8045',
						date: '2018-3-22 12:00:01',
						store: '联盟商家',
						num: 40,
						time: Math.random() * 10 + Date.parse(new Date())
					}

				],
				list2: [{
						number: 1,
						date: 1,
						store: '联盟商家',
						num: 1,
						time: 7
					},
					{
						number: 2,
						date: 2,
						store: '联盟商家',
						num: 2,
						time: 6
					}, {
						number: 3,
						date: 3,
						store: '联盟商家',
						num: 3,
						time: 5
					},
					{
						number: 4,
						date: 4,
						store: '联盟商家',
						num: 4,
						time: 0
					},
					{
						number: 5,
						date: 5,
						store: '联盟商家',
						num: 5,
						time: 3
					}, {
						number: 6,
						date: 6,
						store: '联盟商家',
						num: 6,
						time: 2
					},
					{
						number: 7,
						date: 7,
						store: '联盟商家',
						num: 7,
						time: 1
					},
					{
						number: 8,
						date: 8,
						store: '联盟商家',
						num: 8,
						time: 10
					},
					{
						number: 9,
						date: 9,
						store: '联盟商家',
						num: 9,
						time: 11
					},
					{
						number: 10,
						date: 10,
						store: '联盟商家',
						num: 10,
						time: 12
					},
					{
						number: 11,
						date: 11,
						store: '联盟商家',
						num: 11,
						time: 13
					}
				]
			}
		},
		methods:{
			show1: function() {
				let vm = this;
				if(vm.value === 1){
					vm.inner = setInterval(function() {
						var player = document.getElementById('start');
						var playerEnd = document.getElementById('end');
						player.play();
						playerEnd.pause();
						playerEnd.currentTime = 0; //让歌曲从头开始播放
						var arr = vm.list
						// 生成6位随机数
						var rnd = "";
						for (var i = 0; i < 6; i++) {
							rnd += Math.floor(Math.random() * 10);
						}
						var h = {
							number: '1'+rnd.substring(0,2)+'****'+rnd.substring(2,6),
							date: '2018-3-22 12:00:01',
							store: '联盟商家',
							num: 40,
							time: Math.random() * 10 + Date.parse(new Date())
						}
						arr.unshift(h)
						if(arr.length > 8) {
							arr.pop()
						}
						vm.value = 2;
					}, 50)
				}
				
			},
			stop: function() {
				let vm = this;
				clearInterval(vm.inner)
				var audioEnd = document.getElementById('end');
				var player = document.getElementById('start');
				audioEnd.play();
				player.pause();
				vm.value = 1;
				player.currentTime = 0;
				for(var i = 0;i<vm.list2.length;i++){
					var j = vm.list
					var h = vm.list2[i]
					j.unshift(h)
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.content2 {
		padding:0 10%;
		margin-top:-1.5rem;
		.c-text {
			font-size: 0.5rem;
			margin-top:0.2rem;
			font-weight:bold;
		}
		.table-bg {
			background:rgba(255,255,255,0.2);
			margin-top:.1rem;
			padding:.2rem 0.3rem;
			border-radius:.05rem;
			height:10.4rem;
			overflow: hidden;
		}
		.table {
			background:#fef6d6;
			padding: 0 0.2rem;
			overflow:hidden;
			.flex {
				
			}
			.table-tr {
				font-size:.35rem;
				font-weight:bold;
				div {
					flex:1;
					height:1rem;
					line-height:1rem;
				}
			}
			.table-td {
				font-size:.35rem;
				font-weight:bold;
				border-top:0.02rem solid #b5ae9b;
				div {
					flex:1;
					height:.83rem;
					line-height:.83rem;
				}
			}
		}

	}
	
	.content-sm {
		height:1rem;
		line-height:1rem;
		font-weight:bold;
		font-size: 0.3rem;
		text-align: left;
		margin-left: 0.5rem;
		.btn-box {
			display:flex;
			flex:1;
			justify-content:center;
		}
		.in-btn {
			border:0.03rem solid #dd1835;
			background:white;
			height:.8rem;
			padding:0 .4rem;
			border-radius:.8rem;
			display:flex;
			align-items:center;
			font-size:.4rem;
			color:#dd1835;
			float:left;
			margin:0 .1rem;
			outline:0;
		}
		.in-btn img {
			width:32%;
			margin-left:.1rem;
			cursor:pointer;
		}
	}
</style>