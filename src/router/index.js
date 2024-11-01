import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DinoView from '../views/DinoView.vue'
import SaddleView from '../views/SaddleView.vue'
import SoundView from '../views/SoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dino',
    name: 'dino',
    component: DinoView
  },
  {
    path: '/saddle',
    name: 'saddle',
    component: SaddleView
  },
  {
    path: '/sound',
    name: 'sound',
    component: SoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
