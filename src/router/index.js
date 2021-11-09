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
      },
      {
        path: "/coordinate",
        component: () => import("../views/coordinate.vue"),
        name: 'coordinate'
      },
      {
        path: "/scene7",
        component: () => import("../views/scene7.vue"),
        name: 'scene7'
      }
      // coordinate
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
