<template>
    <div class="home">
        <ResponsiveCarousel />
    </div>
</template>

<script>
import ResponsiveCarousel from "../../common/responsiveCarousel/ResponsiveCarousel"

export default {
	name: "home",
	components: {
		ResponsiveCarousel
	}
}
</script>

<style scoped>
.home {
	height: 2000px;
	text-align: left;
}
</style>
