import Vue from 'vue';
import VueRouter from 'vue-router';


//注册 vue-router
Vue.use(VueRouter);

//引入组件
import whead from '../components/whead.vue';
import wfoot from '../components/wfoot.vue';


//创建一个路由实例
//并且配置路由规则
const router = new VueRouter ({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/first',
			component: wfoot
		},
		{
			path: '/second',
			component: whead
		}
	]
})

export default router;