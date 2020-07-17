// 引入Vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引入modules
import index from './modules/index.js'

// 使用Vuex扩展库
Vue.use(Vuex)

// 创建store实例
const store = new Vuex.Store({
	modules:{
		index
	}
})

// 向外暴露store
export default store