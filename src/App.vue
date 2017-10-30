<template>
	<div>
		 
		<h1>hello world</h1>
		<ul>
			<li><router-link to="/first">头部</router-link></li>
			<li><router-link to="/second">尾部</router-link></li>
		</ul>
		<whead></whead>
		<img src="./assets/wsinghai.jpg">
		<wfoot></wfoot>
		<router-view class="view"></router-view>
	</div>
</template>

<script>
	import whead from './components/whead.vue';
	import wfoot from './components/wfoot.vue';
	export default {
		data () {
			return {

			}
		},
		components: { whead, wfoot }
	}
</script>

<style>
	
</style>