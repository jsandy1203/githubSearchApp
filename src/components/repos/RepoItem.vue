<template>
    <div class="card">
        <h6>
            <a :href="html_url">{{name}}</a>
        </h6>
    </div>
</template>

<script>
    export default {
        props:['html_url', 'name']
    }
</script>

<style>

</style>