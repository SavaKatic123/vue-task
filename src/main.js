import Vue from 'vue'
import EShop from './EShop.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(EShop),
}).$mount('#app')
