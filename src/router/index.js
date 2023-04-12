import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/components/Home-c.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
    children: [],
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/components/About-c.vue"),
    children: [],
  },
];

const Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default Router;
