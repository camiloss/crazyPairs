import Vue from 'vue'
import router from './router'
import App from './Application.vue'
import store from './gameStore'
import _ from  'lodash';






new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
