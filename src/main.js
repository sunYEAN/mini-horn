import Vue from 'vue'
import App from './App.vue'
import Horn from './packages';

Vue.use(Horn);

new Vue({
  el: '#app',
  render: h => h(App)
})
