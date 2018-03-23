<template>
    <router-link class='nav-item' v-bind:to='name' v-bind:name='name' v-on:click='goToPage'>
        {{label}}
    </router-link>
</template>

<script>
    export default {
        id: 'nav-item',
        name: 'nav-item',
        props: {
            label: String,
            name: String
        },
        methods: {
            goToPage: function goToPage (e) {
                console.log('clicked', e.target.name)
            }
        }
    }
</script>

<style scoped>
    .nav-item {
        background-color: dodgerblue;
        display: flex;
        padding: 10px;
    }

    button {
        color: white;
        border: 0;
        font-size: 16px;
        &:active,
        &:focus {
            text-decoration: underline;
            border: none;
        }
    }
</style>