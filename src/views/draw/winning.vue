<template>
	<section>
		<logoheader></logoheader>

		<div class="content2">
			<div class="flex clearfloat">
				<img style="width: 65%;" class="fl" src="../../assets/images/draw/one2.png" />
				<div class="fl oneperiods">
					第1期
				</div>
			</div>
			
            <div class="tc mt20">
                <img src="../../assets/images/draw/one-5000.png" alt="" width="30%">
            </div>
            <div class="num20">
                共计20个
            </div>

           	<div class="table3 tc">
               <div class="ov">
                   <li v-for="item in 20">
                       <div class="number">159****7669</div>
                       <div class="shop">上海如家超市浦东店</div>
                   </li>
               </div>
           	</div>   

            <div class="tc">
                <div class="mt20"><img src="../../assets/images/draw/yi_05.png" alt="" width="30%"></div>
            </div>
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
				myBarOption:{
				  	barColor:"white",
				  	barWidth:6
				}
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
		.num20 {
			color:#e80b1a;
			text-align:right;
			font-size:.5rem;
			font-weight:bold;
			margin-right:3rem;
		}
		.table3 {
			width:80%;
			padding:0 .1rem;
			height:8.3rem;
		    overflow:hidden;
		    margin: 0.1rem auto 0 auto;
		    .ov {
	    		height:8.3rem;
	    	    overflow-y:scroll;
	    	    scrollbar-highlight-color:rgba(253,208,3,0.5);
	    		scrollbar-arrow-color:rgba(253,208,3,0.5);
	    		scrollbar-base-color:rgba(253,208,3,0.5);
	    		scrollbar-face-color:#fff;
	    		scrollbar-shadow-color:#fff;
	    	}
	    	li {
    			width:30%;
    			height:2.1rem;
    			float:left;
    			background-color:#fff;
    			border-radius:.2rem;
    			margin:0rem .1rem .7rem .4rem;
    			padding:.05rem;
    			box-shadow:-0.15rem .15rem .25rem .05rem rgba(115,115,113,0.3);
    			.number {
					height:1.3rem;
					line-height:1.3rem;
					font-size:0.9rem;
					margin:.05rem 0 .03rem .4rem;
					font-weight:500;
					text-align: left;
				}
				.shop {
					height:0.2rem;
					line-height:0.2rem;
					font-size:.55rem;
					font-weight:600;
					margin:0.05rem 0 .03rem .4rem;
					text-align: left;
				}
    		}
		}

	}

	.table3 .ov::-webkit-scrollbar {
		width:.15rem
	}
	.table3 .ov::-webkit-scrollbar-track {
		border-radius:.15rem
	}
	.table3 .ov::-webkit-scrollbar-thumb {
		background-color:#fff;
		border-radius:.15rem
	}
</style>