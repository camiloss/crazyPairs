import Vue from 'vue'
import router from './router'
import App from './Application.vue'

import store from './gameStore'

// eslint-disable-next-line no-unused-vars
const a = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
