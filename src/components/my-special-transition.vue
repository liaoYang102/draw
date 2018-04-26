<template>
	<section>
	    <transition-group class="list"
	      tag="div"
	      mode="in-out"
	      v-bind:css="false"
	      v-on:before-appear="customBeforeAppearHook"
		  v-on:appear="customAppearHook"
	      v-on:enter="enter"
	      v-on:before-enter="beforeEnter"
	      v-on:leave="leave">
	      <slot></slot>
	    </transition-group>
	</section>
</template>

<script>
	export default {
		created: function () {},
		methods: {
			customBeforeAppearHook: function(el) {
				el.style.height = 0
				el.style.opacity = 0
				el.style.marginLeft = '-100%'
			},
			customAppearHook: function(el) {
				var delay = el.dataset.index * 250;
				Velocity(el, {
					opacity: 1,
					height: '0.85rem',
					marginLeft: '0px'
				}, {
					complete: function(el) {},
					delay: delay,
					easing: "linear",
				})
			},
			beforeEnter: function(el) {
				el.style.height = 0
				el.style.opacity = 0
			},
			enter: function(el, done) {
				var delay = el.dataset.index * 250;
				Velocity(el, {
					opacity: 1,
					height: '0.85rem',
				}, {
					complete: function(el) {},
					delay: delay,
					easing: "swing",
				})
			},
			leave: function(el, done) {
				var delay = 200;
				Velocity(
					el, {
						opacity: 0,
						height: 0
					}, {
						complete: function() {},
						delay: delay,
						easing: "swing",
					}
				)
			}
		}
	}
</script>