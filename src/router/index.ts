// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
      },
      {
        path: '/phone',
        name: 'Phone',
        component: () => import(/* webpackChunkName: "sms_verifisering" */ '@/pages/Phone.vue'),
      },
      {
        path: '/sms_verifisering/:id',
        name: 'SMS-verifisering',
        component: () => import(/* webpackChunkName: "sms_verifisering" */ '@/pages/Smsverifisering.vue'),
      },
      {
        path: '/services',
        name: 'services',
        component: () => import(/* webpackChunkName: "Sammendrage" */ '@/components/DropList.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
