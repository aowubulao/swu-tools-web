import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import vuetify from "./plugins/vuetify";
import '../src/assets/css/nprogress.css'
import '../src/assets/css/global.css'
import axios from 'axios'

Vue.prototype.$nprogress = NProgress;

Vue.config.productionTip = false

axios.interceptors.request.use(config => {
      NProgress.inc();
      return config;
    }, error => {
      NProgress.done();
      return Promise.reject(error)
    }
)
axios.interceptors.response.use(res => {
      NProgress.done();
      return res;
    }, error => {
        NProgress.done();
        return Promise.reject(error)
    }
)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
