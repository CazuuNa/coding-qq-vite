import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path:'/',
    name:'index',
    component:() => import('@/view/Home/index.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
