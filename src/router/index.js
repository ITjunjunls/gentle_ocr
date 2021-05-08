import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'DefaultHome',
        component: Home,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
