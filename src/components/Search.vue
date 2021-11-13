<template>
    <div>
        <form @submit="onSubmit"> 
        <input type="text"
                v-model="text"
                placeholder="Search Users"
                required>
        <button type="submit" class="btn btn-dark btn-block">Search </button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        data() {
            return{
                text : ''
            }
        },
        methods:{
           ...mapActions(['searchUsers']),
           onSubmit(e) {
               e.preventDefault();
               this.searchUsers(this.text);
               this.text ='';
           }
        }
    }
</script>