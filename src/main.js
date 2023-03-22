import { createApp } from 'vue'
import App from './App.vue'
import Home from './view/Home.vue'
import { createRouter, createWebHistory } from 'vue-router';
import './assets/main.css'

const routes = [
    { path: '/', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})


const app = createApp(App);

app.use(router)
app.mount("#app");
