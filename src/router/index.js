import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DinoView from '../views/DinoView.vue'
import SaddleView from '../views/SaddleView.vue'
import SoundView from '../views/SoundView.vue'
import InfoView from '@/views/InfoView.vue'; 
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'; // Import the new component

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
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoView
  },
  {
    path: '/privacy', // New route for Privacy Policy
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
