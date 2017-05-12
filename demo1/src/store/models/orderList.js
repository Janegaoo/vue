import Vue from 'vue'
//存放数据的 state状态
const state = {
	orderList: [],
	params: {}
}
//用于页面调用state值的，页面不能直接获取state,只能通过getters获取
const getters = {
	/*orderList: function(state){
		return state.orderList
	}*/
	getOrderList: state => state.orderList
}
//action必须是异步的操作 动作
//commit用来获取mutation的，state用来获取状态集里的数据的
const actions = {
	fetchOrderList ({commit, state}) {
		Vue.http.post('/api/getOrderList', state.params)
		.then((res) => {
			commit('updateOrderList', JSON.parse(res.bodyText).list)
		}, (err) => {

		})
	}
}
//mutantion必须是同步的操作，对状态的更改
//vue中严格来说state只能在mutation中更改，不能再action中更改
const mutations = {
	updateOrderList (state, payLoad) {
		state.orderList = payLoad
	},
	//参数更改放在mutation中
	updateParams (state, {key, val}) {
		state.params[key] = val
		console.log(state.params)
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}