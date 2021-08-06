import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../components/Products.vue')
      },
      {
        path: '',
        name: 'Introduce',
        component: () => import('../components/Introduce.vue')
      }
    ]
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue'),
    children: [
      {
        path: '',
        name: 'CostomInfo',
        component: () => import('../components/order-page/CostomInfo.vue')
      },
      {
        path: 'custom_checkout/:orderId',
        name: 'CustomCheckout',
        component: () => import('../components/order-page/CustomCheckout.vue')
      },
      {
        path: 'finish/:orderId',
        name: 'Finish',
        component: () => import('../components/order-page/Finish.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
