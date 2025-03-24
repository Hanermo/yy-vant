import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index.vue');
const Home = () => import('@/views/home/index.vue');
const Login = () => import('@/views/login/index.vue')

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect:'/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/index',
                    name: 'Home',
                    component: Home,
                    meta: { keepAlive: true }
                }
            ]
        },
    ]
})
export default router