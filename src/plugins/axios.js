import axios from "axios";
import NProgress from "nprogress";
import Vue from "vue";

Vue.prototype.$nprogress = NProgress;

const baseUrl = 'http://127.0.0.1:5867'

axios.interceptors.request.use(config => {
        config.url = baseUrl + config.url;
        console.log(config.url);
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

export default {
}