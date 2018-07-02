import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import jQuery from 'jQuery'
window.$ = jQuery
Vue.use(BootstrapVue);

Vue.config.productionTip = false


// create a store for vuex


new Vue({
    store,
  render: h => h(App),

}).$mount('#app')
