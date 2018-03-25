<template>
    <div class="responsive-carousel">
        <carousel>
            <slide>
                <h1>Content 1</h1>
                <img src="../../../assets/logo.png" />
            </slide>
            <slide>
                <h1>Content 2</h1>
            </slide>
            <slide>
                <h1>Content 3</h1>
            </slide>
            <slide>
                <h1>Content 4</h1>
            </slide>
            <slide>
                <h1>Content 5</h1>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        name: "responsive-carousel",
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style scoped>
    .responsive-carousel {
        height: 300px;
        background-color: #F9CF00;
    }
</style>