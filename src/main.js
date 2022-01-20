import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Konva from 'konva'

createApp(App).use(router).use(Konva).mount('#app')
