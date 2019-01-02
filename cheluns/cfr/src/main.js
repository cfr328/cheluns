import Vue from 'vue'
import App from './App.vue'

//引入vuex的实例store
import store from './store/index';

new Vue({
  el: '#app',
  //把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  render: h => h(App)
})
