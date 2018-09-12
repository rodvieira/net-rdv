import Vue from 'vue'
//import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import Home from './pages/Home.vue';



new Vue({
  el: '#app',  
  render: h => h(Home)
})
