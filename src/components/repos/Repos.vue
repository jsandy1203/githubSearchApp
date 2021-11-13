<template>
    <div>
        <ReposItem v-for="repo in getrepos" :key="repo.id"
                    :html_url="repo.html_url"
                    :name="repo.name"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ReposItem from './RepoItem';
    export default {
        computed: mapGetters(['getrepos']),
        components: {
            ReposItem
        }
        
    }
</script>

<style >

</style>