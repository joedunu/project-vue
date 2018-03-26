import Vue from "vue"
import VueRouter from "vue-router"
import App from "./components/app/App"

import Home from "./components/pages/home/Home"
import AboutUs from "./components/pages/aboutUs/AboutUs"
import ContactUs from "./components/pages/contactUs/ContactUs"

Vue.config.productionTip = false

const routes = [
	{ path: "/", component: Home },
	{ path: "/home", component: Home },
	{ path: "/about-us", component: AboutUs },
	{ path: "/contact-us", component: ContactUs }
]

Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
