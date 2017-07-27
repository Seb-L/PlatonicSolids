// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'
import vueSmoothScroll from 'vue-smooth-scroll'

import App from './App'
import router from './router'

import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.use(VueAxios, axios)
Vue.use(VueMoment)
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
