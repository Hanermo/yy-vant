import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible'
import store from './store'
import '@/icons'
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 全局组件
import components from '@/components/index'

Vue.use(Vant)
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
