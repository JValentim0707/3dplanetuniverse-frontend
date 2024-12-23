import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import LibraryPage from '@/pages/LibraryPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/library',
    component: LibraryPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router