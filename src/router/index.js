import {createRouter, createWebHistory} from 'vue-router';
import CourseView from '@/views/CourseView.vue';
import DashboardView from '@/views/DashboardView.vue';
import DetailView from '@/views/DetailView.vue';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/courses',
            name: 'course',
            component: CourseView,
        },
        {
            path: '/details/:id',
            name: 'detail',
            component: DetailView,
        },
        {
            path: '/login/',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/dashboard/',
            name: 'dashboard',
            component: DashboardView,
        },
    ],
});

export default router;
