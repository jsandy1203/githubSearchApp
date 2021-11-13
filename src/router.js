import Users from './components/user/Users.vue';
import User from './components/user/User.vue';

export const routes =[
    {path: '/user/:login', component: User, name:'user', props:true},
    {path: '/', component: Users, name:'home'}


];