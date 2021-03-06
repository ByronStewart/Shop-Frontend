import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';
Vue.prototype.$axios = axios;
const token = localStorage.getItem('token');

if (token) {
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
