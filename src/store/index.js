import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
//import user from './modules/user';
//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
	modules: {
		users,
		//user
	},
});
