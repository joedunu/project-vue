<template>
    <div id="app">
        <NavBar/>
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import NavBar from './components/common/navBar/NavBar.vue';
import Footer from './components/common/footer/Footer.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  }
};
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
