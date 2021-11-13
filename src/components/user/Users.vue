<template>
    <div>
        <Search/>
        <div class="grid-3" v-if="!loading">
        <UserItem
        v-for="user in allusers" :key="user.login"
        :avatar_url="user.avatar_url"
        :login="user.login" />
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
    
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import UserItem from './UserItem';
import Spinner from './Spinner';
import Search from '../Search';
    export default {
        // data() {
        //     return {
        //         loading: false
        //     }
        // },
        components:{
            UserItem,
            Spinner,
            Search
        },
        methods: {
            ...mapActions(['fetchUsers'])
        },
        computed: mapGetters(['allusers', 'loading']),
        mounted() {
            this.fetchUsers();
        }
    }
</script>

<style>
    /* .user{
        display: grid;
        grid-template-columns: 'repeat(3, 1fr)';
        grid-gap: 1rem;
    } */
   
</style>