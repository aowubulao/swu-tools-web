import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from "./plugins/vuetify";
import '../src/assets/css/nprogress.css'
import '../src/assets/css/global.css'
import axios from './plugins/axios'

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    axios,
    render: h => h(App)
}).$mount('#app')
