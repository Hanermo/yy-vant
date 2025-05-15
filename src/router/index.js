import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index.vue');
const Home = () => import('@/views/home/index.vue');
const Login = () => import('@/views/login/index.vue');
const Mine = () => import('@/views/mine/index.vue');
const Channel = () => import('@/views/channel/index.vue');
const Dynamics = () => import('@/views/dynamics/index.vue');
const Messages = () => import('@/views/messages/index.vue');

// 创建事项
const ScheduleList = () => import('@/views/channel/group/schedules-list/index.vue')
const AddSchedule = () => import('@/views/create-items/components/add-schedule.vue')

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
            redirect:'/index',
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            children: [
                {
                    path: 'index',
                    name: 'Home',
                    component: Home,
                    meta: { keepAlive: true },
                },
                {
                    path: 'channel',
                    name: 'Channel',
                    component: Channel
                },
                {
                    path: 'messages',
                    name: 'Messages',
                    component: Messages
                },
                {
                    path: 'dynamics',
                    name: 'Dynamics',
                    component: Dynamics
                }
            ]
        },
        {
            path: '/schedule',
            name: 'Schedule',
            component: ScheduleList,
            children: [
                
            ]
        },
        {
            path: '/schedule/schedule-add',
            name: 'ScheduleAdd',
            component: AddSchedule,
        }
    ]
})
export default router