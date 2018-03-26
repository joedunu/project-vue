<template>
    <h1>{{titleText}}</h1>
</template>

<script>
export default {
	name: "page-title",
	props: {
		titleText: String
	}
}
</script>

<style scoped>
h1 {
	padding: 20px 0;
}
</style>
