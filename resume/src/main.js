import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.less'
import './assets/css/tablet.css'
import './assets/css/mobile.css'
import './assets/css/print.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
