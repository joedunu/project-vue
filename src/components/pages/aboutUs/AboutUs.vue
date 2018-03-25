<template>
    <div class="about-us">
        <h1>About Us</h1>
        <ResponsiveCarousel />
    </div>
</template>

<script>
    import ResponsiveCarousel from '../../common/responsiveCarousel/ResponsiveCarousel'

    export default {
	name: "about-us",
    components: {
        ResponsiveCarousel
    }
}
</script>

<style scoped>
    .about-us {
        height: 2000px;
        align-content: center;
    }
</style>
