// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// Vue.config.productionTip = false
import MintUI from 'mint-ui'
import '../static/css/style.css'
import '../static/css/mint-style.css'
import App from './App.vue'
import router from './router'

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})