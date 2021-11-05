import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/index.vue"),
    name: "index",
    children: [
      {
        path: "/demo",
        component: () => import("../views/demo.vue"),
        name: 'demo'
      },
      {
        path: "/geometryapi",
        component: () => import("../views/geometryapi.vue"),
        name: "geometryapi",
      },
      {
        path: "/material",
        component: () => import("../views/material.vue"),
        name: 'material'
      },
      {
        path: "/shadow",
        component: () => import("../views/shadow.vue"),
        name: 'shadow'
      }
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
