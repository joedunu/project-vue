<template>
    <div id="app">
        <NavBar/>
        <router-view/>
        <PageFooter />
    </div>
</template>

<script>
import NavBar from "./components/common/navBar/NavBar.vue";
import PageFooter from "./components/common/pageFooter/PageFooter.vue";

export default {
  name: "app",
  components: {
    NavBar,
    PageFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
