//引入路由对象
import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/* 通用 */
const global: any = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
    },
    component: defineAsyncComponent(() => import("../pages/Login/index.vue")),
  },
];
const main: any = {
  path: "/",
  name: "layout",
  meta: {
    title: "首页",
    keepAlive: true,
    sidebar: true,
  },
  component: defineAsyncComponent(() => import("../layouts/index.vue")),
  children: [
    {
      path: "/home",
      name: "home",
      component: defineAsyncComponent(
        () => import("../components/HelloWorld.vue")
      ),
      meta: {
        keepAlive: true,
        sidebar: true,
      },
    },
    {
      path: "/home2",
      name: "首页2",
      component: defineAsyncComponent(
        () => import("../components/HelloWorld.vue")
      ),
      meta: {
        keepAlive: true,
        sidebar: true,
      },
    },
  ],
};
// const routes: Array<RouteRecordRaw> = [

// ];
const routes: Array<RouteRecordRaw> = global.concat(main);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
