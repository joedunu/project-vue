<template>
    <div class='nav-bar'>
        <nav-item label='Home' name='home' to='/home' />
        <nav-item label='About Us' name='about-us' to='/about-us' />
        <nav-item label='Contact Us' name='contact-us' to='/contact-us' />
    </div>
</template>

<script>
    import NavItem from '../navItem/NavItem.vue'

    export default {
        name: "nav-bar",
        components: {
            NavItem
        }
    }
</script>

<style scoped>
    .nav-bar {
        top: 0;
        padding: 10px;
        position: sticky;
        background-color: dodgerblue;
        display: flex;
        z-index: 10;
    }
</style>