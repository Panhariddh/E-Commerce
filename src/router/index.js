import { createRouter, createWebHistory } from 'vue-router'

// Import the components for each route
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import Shop from '@/views/Shop.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
