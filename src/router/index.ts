//引入路由对象
import { type } from "os";
import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

interface Main {
  path: string;
  name: string;
  meta: {
    title: string;
    keepAlive: boolean;
    sidebar: boolean;
  };
  component: any;
  children: Array<RouteRecordRaw>;
}
/* 通用路由 */
const global: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
      keepAlive: true,
    },
    component: () => import("../pages/Login/index.vue"),
  },
];
const main: Main = {
  path: "/",
  name: "layout",
  meta: {
    title: "首页",
    keepAlive: true,
    sidebar: true,
  },
  component: () => import("../layouts/index.vue"),
  children: [
    {
      path: "/home",
      name: "首页",
      component: () => import("../components/HelloWorld.vue"),
      meta: {
        keepAlive: true,
        sidebar: true,
      },
    },
    {
      path: "/article",
      name: "文章",
      component: () => import("../pages/Article/index.vue"),
      meta: {
        keepAlive: true,
        sidebar: true,
      },
    },
    {
      path: "/classification",
      name: "分类",
      component: () => import("../pages/Classification/index.vue"),
      meta: {
        keepAlive: true,
        sidebar: true,
      },
    },
  ],
};
const routes: Array<RouteRecordRaw> = global.concat(main);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
