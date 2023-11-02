import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import HomePage from '@/views/homePage/index.vue'
import Recommend from '@/views/recommend/index.vue'
import UserPage from '@/views/userPage/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', component: Recommend },
      { path: 'home', component: HomePage },
      { path: 'my', component: UserPage },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router