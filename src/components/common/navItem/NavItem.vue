<template>
  <router-link
    :to="to"
    class="nav-item"
    active-class="active">
    {{ label }}
  </router-link>
</template>

<script>
export default {
	id: "nav-item",
	name: "NavItem",
	props: {
		label: String,
		to: String
	}
}
</script>

<style scoped>
.nav-item {
	padding: 10px 20px;
	color: white;
	font-size: 18px;
	font-weight: 500;
	text-decoration: none;
}

.active {
	text-decoration: underline;
	font-weight: 600;
}
</style>
