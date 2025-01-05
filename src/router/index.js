import { createRouter, createWebHistory } from 'vue-router'

// Import the components for each route
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import Shop from '@/views/Shop.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'  // import the Login component
import ViewDetail from '@/views/ViewDetail.vue'
import Register from '@/views/Register.vue'
import ViewAll from '@/views/ViewAll.vue'
import Checkout from '@/views/Checkout.vue'
// import Notifications from '@/views/Notifications.vue'; // New notifications view
// import Cart from '@/views/Cart.vue'; // New cart view

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
    {
      path: '/login',  // Add the login route
      name: 'login',
      component: Login,
    },
    {
      path: '/register',  // Add the register route
      name: 'register',
      component: Register,
    },
    // {
    //   path: '/notifications',
    //   name: 'notifications',
    //   component: Notifications,
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: Cart,
    // },
    {
      path: '/view-detail/:id',
      name: 'ViewDetail',
      component: ViewDetail,
    },
    {
      path: '/viewAll/:brand', component: ViewAll
      
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login', // Redirects any undefined route to the login page
    },
  ],
})

export default router
