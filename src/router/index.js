import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    name: 'index'
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
  
})