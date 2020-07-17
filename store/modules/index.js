// 引入request函数
import request from '../../utils/request.js'

// state
const state = {
	indexData:{}//首页数据
}

// mutations 直接更新state数据
const mutations = {
	changeIndexData(state,indexData){
		//直接更新state数据
		state.indexData = indexData
	}
}

// actions 间接更新state数据
const actions = {
	async getIndexData({commit}){
		// 1.发送异步请求获取数据
		let indexDataResult = await request('/getIndexData')
		// 2.将异步数据交给mutations
		indexDataResult.code === 200 && commit('changeIndexData',indexDataResult.data)
	}
}

export default {
	state,
	mutations,
	actions
}