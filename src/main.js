import Vue from 'vue';
import App from './App';
import router from './routes/index.js'
import './assets/head.scss';



//开启debug模式
Vue.config.debug = true;




 const app = new Vue({
 	router: router,
 	render: h => h(App)
 }).$mount('#app')


/*new Vue({
	el: '#app',
	template: '<App/>',
	components: {App}
})*/