// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueProgressbar from 'vue-progressbar'
import VueResourceProgressBarInterceptor from 'vue-resource-progressbar-interceptor'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(VueProgressbar, {
  color: 'rgb(80, 171, 86)',
  failedColor: 'red',
  height: '3px'
})

Vue.use(VueResourceProgressBarInterceptor)

Vue.use(VueAnalytics, {
  id: 'UA-108227943-1',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
