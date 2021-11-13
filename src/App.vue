<template>
<div>
<Header/>
  <div class="container">
    <!-- <Search/> -->
    <hr>
    <!-- <Users/> -->
    <router-view></router-view>
    <hr>
    </div>
    </div>
</template>

<script>
//import Users from './components/user/Users';
import Header from './components/Header';
//import Search from './components/Search';
//import Users from './components/user/Users';

  export default {
    name: 'App',
    data() {
      return {
        users: [],
        loading: false,

      }
    },
    components: {
      Header,
      //Search,
      //Users
    }
  }
</script>

<style>
@import 'App.css';
</style>