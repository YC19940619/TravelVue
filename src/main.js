// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from './store/index'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import axios from 'axios'
// axios.defaults.baseURL = process.env.API_ROOT

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
