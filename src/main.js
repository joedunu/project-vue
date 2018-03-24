import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/pages/home/Home.vue'
import AboutUs from './components/pages/aboutUs/AboutUs.vue'
import ContactUs from './components/pages/contactUs/ContactUs.vue'

Vue.config.productionTip = false;

const routes = [
    { path: '/home', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/contact-us', component: ContactUs }
];

Vue.use(VueRouter)

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
