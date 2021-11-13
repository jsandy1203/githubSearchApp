// import axios from 'axios';

// const state = {
//     user:{},
//     loadingg: false
// }

// const getters = {
//     userdata: (state) => state.user
// }

// const actions = {
//     async userDetails({commit}, login) {
//         state.loadingg = true;

//         const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.VUE_APP_GITHUB_CLIENT_ID}
//         &client_secret=${process.env.VUE_APP_GITHUB_CLIENT_SECRET}`);

//         commit('USER_DETAILS', res.data)
//         state.loadingg = false;
//         console.log(res.data)
//     }
// }

// const mutations = {
//     USER_DETAILS: (state, user) => state.user = user
// }


// export default {
//     state,
//     getters,
//     actions,
//     mutations
// }