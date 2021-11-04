import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    name: 'index'
  },
  {
    path: '/geometryapi',
    component: () => import('../views/geometryapi.vue'),
    name: 'geometryapi'
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
  
})