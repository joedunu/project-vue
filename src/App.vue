<template>
    <div id="app">
        <NavBar/>
        <Home />
    </div>
</template>

<script>
    import NavBar from './components/common/navBar/NavBar.vue'
    import Home from './components/pages/home/Home.vue'

    export default {
        name: 'app',
        components: {
            NavBar,
            Home
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
