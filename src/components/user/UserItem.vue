<template>
    <div class="row">
        <div class="card text-center">
       <img :src="avatar_url" alt="image" class="round-img" width="80px">
       <h3>{{login}}</h3>
       <div>
           <router-link 
           :to="{name:'user', params:{login:login}}" 
           class="btn btn-primary"

           >View Profile</router-link>
       </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['login', 'avatar_url']
    }
</script>

<style>
</style>