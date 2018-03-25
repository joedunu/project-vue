<template>
    <div id="app">
        <NavBar/>
        <router-view/>
        <PageFooter />
    </div>
</template>

<script>
import NavBar from "../common/navBar/NavBar"
import PageFooter from "../common/pageFooter/PageFooter"

export default {
	name: "app",
	components: {
		NavBar,
		PageFooter
	}
}
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
