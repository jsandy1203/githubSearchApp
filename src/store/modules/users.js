import axios from 'axios';

const state = {
	users: [],
	loading: false,
	user: {},
	repos: [],
};

const getters = {
	allusers: (state) => state.users,
	loading: (state) => state.loading,
	userdata: (state) => state.user,
	getrepos: (state) => state.repos,
};

const actions = {
	async fetchUsers({ commit }) {
		state.loading = true;

		const res = await axios.get(`https://api.github.com/users?client_id=
        ${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);

		commit('FETCH_USERS', res.data);
		state.loading = false;
	},

	async searchUsers({ commit }, text) {
		state.loading = true;

		const res = await axios.get(`https://api.github.com/search/users?q=${text}
        &client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);

		commit('SEARCH_USERS', res.data.items);
		state.loading = false;
	},

	async userDetails({ commit }, login) {
		state.loading = true;

		const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);

		commit('USER_DETAILS', res.data);
		state.loading = false;
		console.log(res.data);
	},

	async userRepos({ commit }, login) {
		state.loading = true;

		const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);

		commit('USER_REPOS', res.data);
		state.loading = false;
	},
};

const mutations = {
	FETCH_USERS: (state, users) => (state.users = users),
	SEARCH_USERS: (state, users) => (state.users = users),
	USER_DETAILS: (state, user) => (state.user = user),
	USER_REPOS: (state, repos) => (state.repos = repos),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
