import { createRouter, createWebHistory } from 'vue-router';
import homePage from '@/components/Home-p.vue';

const router = [
  {
    path: '/',
    name: 'home',
    component: homePage,      
    children: [],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/components/About-p.vue'),
    children: [],
  },
];

const Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default Router;