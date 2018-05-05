// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// Vue.config.productionTip = false
import MintUI from 'mint-ui'

import '../static/css/mint-style.css'
import App from './App.vue'
import router from './router'

import Mui from 'vue-awesome-mui'
import 'vue-awesome-mui/mui/dist/css/mui.css'
import '../static/css/style.css'
import "vue-awesome-mui/mui/examples/hello-mui/css/icons-extra.css";
// mount with global
Vue.use(Mui)

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
