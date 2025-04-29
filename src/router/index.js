import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index.vue');
const Home = () => import('@/views/home/index.vue');
const Login = () => import('@/views/login/index.vue');
const Mine = () => import('@/views/mine/index.vue');
const Channel = () => import('@/views/channel/index.vue');
const Dynamics = () => import('@/views/dynamics/index.vue');
const Messages = () => import('@/views/messages/index.vue');

Vue.use(Router)
const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            redirect:'/index',
            children: [
                {
                    path: '/index',
                    name: 'Home',
                    component: Home,
                    meta: { keepAlive: true },
                },
                {
                    path: '/channel',
                    name: 'Channel',
                    component: Channel
                },
                {
                    path: '/messages',
                    name: 'Messages',
                    component: Messages
                },
                {
                    path: '/dynamics',
                    name: 'Dynamics',
                    component: Dynamics
                }
            ]
        },
    ]
})
export default router