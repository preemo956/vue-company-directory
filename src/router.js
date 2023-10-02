import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/components/HomePage.vue'
import loginPage from '@/components/loginPage.vue'
import NotFound from '@/components/NotFound.vue'
import SettingsPage from '@/components/SettingsPage.vue'
const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name:'Login', component: loginPage },
  { path: '/:pathMatch(.*)*', component: NotFound},
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requireAuth: true}},
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router