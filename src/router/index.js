import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'StaffPage',
    component: () => import('../views/StaffPage.vue'),
    children: [
      {
        path: 'staffproducts',
        name: 'StaffProducts',
        component: () => import('../components/staff/StaffProducts.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'staffcoupon',
        name: 'StaffCoupon',
        component: () => import('../components/staff/StaffCoupon.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'stafforder',
        name: 'StaffOrder',
        component: () => import('../components/staff/StaffOrder.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
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
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
