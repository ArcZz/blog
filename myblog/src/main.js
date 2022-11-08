import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router/dist/vue-router";

Vue.config.productionTip = false
Vue.use(VueRouter) ;


const first = {
  template: '<h1>当前是第一个页面</h1>'
}
const second = {
  template: '<h2>当前是第二个页面</h2>'
}

const routes = [
  {
    // 访问路径
    path: '/first',
    // 与路径对应的组件
    component: first
  },
  {
    path: '/second',
    component: second
  }]


const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
}).$mount('#app')


