<template>
	<section>
		<div class="tc pr">
		    <div class="periods">第1期</div>
		    <img src="../../../assets/images/draw/luck.png" alt=""  width="97%">

		    <!-- <img src="../../../assets/images/draw/luck.png" alt="" width="97%"> -->
		    <div v-if="this.$route.path == '/draw/smoke' ">
		    	<img src="../../../assets/images/draw/one.png" class="mt10" alt="" width="48%" />
		    </div>
		</div>
	</section>
</template>

<style lang="less" scoped>
	.periods {
		position:absolute;
		top:1.9rem;
		right:.7rem;
		font-size:1rem;
		font-style:italic;
		font-weight:bold;
	}
</style>