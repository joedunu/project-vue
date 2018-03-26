<template>
    <div class="responsive-carousel">
        <carousel :perPageCustom="[[360, 1], [768, 2], [1024, 3]]">
            <slide>
                <h1>Vue.js</h1>
                <img class="carousel-image" src="../../../assets/logo.png" />
            </slide>
            <slide>
                <h1>React.js</h1>
                <img class="carousel-image" src="../../../assets/react.png" />
            </slide>
            <slide>
                <h1>Angular.js</h1>
                <img class="carousel-image" src="../../../assets/angular.png" />
            </slide>
            <slide>
                <h1>Node.js</h1>
                <img class="carousel-image" src="../../../assets/node.png" />
            </slide>
            <slide>
                <h1>JavaScript</h1>
                <img class="carousel-image" src="../../../assets/JavaScript.png" />
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"

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
    padding: 30px;
	height: 300px;
	background-color: #f9cf00;
	text-align: center;
}

    .carousel-image {
        height: 220px;
        padding: 25px;
    }
</style>
