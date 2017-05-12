import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './models/orderList'

Vue.use(Vuex)

//导出实例化vuex store
export default new Vuex.Store({
	//模型里包含了状态
	modules: {
		orderList
	}
	
	
})