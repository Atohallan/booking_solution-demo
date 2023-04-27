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
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        children: [
          {
            path: '/',
            name: 'DropList',
            component: () => import(/* webpackChunkName: "droplist" */ '@/components/DropList.vue')
          },
        ],
      },
      {
        path: '/sms_verifisering',
        name: 'SMS-verifisering',
        component: () => import(/* webpackChunkName: "sms_verifisering" */ '@/pages/Smsverifisering.vue'),
      },
      {
        path: '/sammendrage',
        name: 'Sammendrage',
        component: () => import(/* webpackChunkName: "Sammendrage" */ '@/pages/Sammendrage.vue'),
      },
      {
        path: '/becreftelse',
        name: 'Bekreftelse',
        component: () => import(/* webpackChunkName: "becreftelse" */ '@/pages/Becreftelse.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
