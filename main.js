import Vue from 'vue'
import App from './App'
import store from 'store/index.js'//引入store

Vue.config.productionTip = false//关闭生产提示

// 用来声明当前组件代表整个应用
App.mpType = 'app'

const app = new Vue({
    ...App,
		store//全局注册，所有组件都可以用
})
app.$mount()
