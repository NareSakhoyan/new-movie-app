import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store";
import "reflect-metadata";
import Buefy from "buefy";
import '../style/main.css'


Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
