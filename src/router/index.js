import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/three',
    meta: { name: 'three' }
  },
  {
    path: '/three',
    component: () => import('../views/layout/catalogue.vue'),
    name: 'three',
    meta: { name: 'three' }
  },
  {
    path: '/konva',
    component: () => import('../views/layout/catalogue.vue'),
    name: 'konva',
    meta: { name: 'konva' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
