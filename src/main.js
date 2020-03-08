import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/filters';

Vue.config.productionTip = false;
Vue.config.performance = true;

Vue.use(VueMeta);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');