import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import loginPage from '@/components/loginPage.vue'
import NotFound from '@/components/NotFound.vue'
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', component: loginPage },
  { path: '/:pathMatch(.*)*', component: NotFound},
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
