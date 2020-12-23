import Vue from 'vue'
import App from './App.vue'

// router imports
import VueRouter from 'vue-router'
import router from './router'

// bootstrap imports
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// axios imports
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:3000'

// vuex imports
import store from "./store";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueAxios, axios)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
