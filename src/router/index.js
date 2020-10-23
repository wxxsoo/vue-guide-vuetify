import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/components/layouts/DefaultLayout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/guide/dashboard"
  },
  {
    path: "/guide",
    name: "Guide",
    component: DefaultLayout,
    redirect: "/guide/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Dashboard.vue")
      },
      {
        path: "news",
        name: "News",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/News.vue")
      }
    ]
  },

  {
    path: "*",
    component: () => import("@/views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
