<template>
  <header class="header-container">
    <!-- Top Section: Logo and Actions -->
    <div class="top-section">
      <div class="logo">
        <span class="logo-text">
          <span style="color: orange;">Ember</span>
          <span style="color: purple;">Store</span>
        </span>
      </div>
      <div class="actions">
        <input type="text" placeholder="Search..." class="search-bar" />
        <div class="icons">
          <router-link to="/login" title="User">
            <i class="fas fa-user"></i>
          </router-link>
          <!-- Bell icon with dropdown -->
          <div class="notification-wrapper" @click="toggleNotifications">
            <i class="fas fa-bell"></i>
            <div v-if="isNotificationsVisible" class="notification-dropdown">
              <div class="dropdown-header">
                <span>Messages</span>
                <button class="mark-all-read">MARK ALL AS READ</button>
              </div>
              <p class="no-notifications">No notifications</p>
            </div>
          </div>
          <!-- Shopping cart icon with dropdown -->
          <div class="cart-wrapper" @click="toggleCart">
        <i class="fas fa-shopping-cart"></i>
        <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
        <div v-if="isCartVisible" class="cart-dropdown">
          <div class="dropdown-header">
            <span>Shopping Cart ({{ cartCount }})</span>
          </div>
          <div v-if="cartItems.length > 0">
            <ul>
              <li v-for="item in cartItems" :key="item.id">
                <img :src="item.image" alt="Product Image" width="50" />
                <span>{{ item.name }} - {{ item.price }}</span>
                <button @click.stop="removeFromCart(item.id)">Remove</button>
              </li>
            </ul>
            <button class="checkout-button">CHECKOUT</button>
          </div>
          <p v-else class="empty-cart">Your cart is empty.</p>
        </div>
      </div>
    </div>
   </div>
  </div>

    <!-- Bottom Section: Navigation Links -->
    <nav class="nav-links">
      <ul>
        <li><router-link to="/" class="nav-button">Home</router-link></li>
        <li><router-link to="/product" class="nav-button">Product</router-link></li>
        <li><router-link to="/shop" class="nav-button">Shop</router-link></li>
        <li><router-link to="/contact" class="nav-button">Contact Us</router-link></li>
        <li><router-link to="/about" class="nav-button">About Us</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { eventCart } from '@/stores/eventCart';

export default {
  data() {
    return {
      isNotificationsVisible: false,
      isCartVisible: false,
    };
  },
  computed: {
    cartCount() {
      return eventCart.value.cartCount;
    },
    cartItems() {
      return eventCart.value.cartItems;
    },
  },
  methods: {
    toggleNotifications() {
      this.isNotificationsVisible = !this.isNotificationsVisible;
      this.isCartVisible = false;
    },
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
      this.isNotificationsVisible = false;
    },
    removeFromCart(productId) {
      const index = eventCart.cartItems.findIndex(item => item.id === productId);
      if (index !== -1) {
        eventCart.cartItems.splice(index, 1);
        eventCart.cartCount = eventCart.cartItems.length;
      }
    },
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e0e0e0;
}

/* Top Section: Logo and Actions */
.top-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  position: relative;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Centered Actions Section */
.actions {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  position: relative;
}

.search-bar {
  padding: 0.3rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
}

.icons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: absolute;
  right: 0; /* Icons aligned to the far right */
}

.icons a {
  color: black; /* Set the icon color to black */
  text-decoration: none; /* Remove any underline */
}

.icons a:hover {
  color: teal; /* Optional: Change color on hover */
}

.icons i {
  font-size: 1.2rem;
  cursor: pointer;
  color: black;
}

/* Bottom Section: Navigation Links */
.nav-links ul {
  display: flex;
  justify-content: center;
  gap: 7.5rem; /* Increase the gap to space out buttons more */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-button {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-button:hover {
  color: teal;
}

.router-link-exact-active {
  color: orange;
  font-weight: bold;
}

.notification-wrapper {
  position: relative;
  cursor: pointer;
}

.notification-dropdown {
  position: absolute;
  top: 25px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  z-index: 1000;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.dropdown-header span {
  font-weight: bold;
  font-size: 0.9rem;
}

.mark-all-read {
  background: none;
  border: none;
  color: purple;
  font-size: 0.8rem;
  cursor: pointer;
  gap: 10px;
}

.mark-all-read:hover {
  text-decoration: underline;
}

.no-notifications {
  padding: 10px;
  text-align: center;
  color: gray;
  font-size: 0.85rem;
}

/* Cart dropdown */
.cart-wrapper {
  position: relative;
  cursor: pointer;
}

.cart-dropdown {
  position: absolute;
  top: 25px;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: auto;
  z-index: 1000;
}

.cart-dropdown .dropdown-header {
  padding: 10px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}

.cart-dropdown .empty-cart {
  padding: 10px;
  text-align: center;
  color: gray;
  font-size: 0.85rem;
}

.checkout-button {
  width: 100%;
  padding: 10px;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 0 0 5px 5px;
  margin-top: auto;
  cursor: not-allowed;
}

.checkout-button:disabled {
  cursor: not-allowed;
}

.cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 1px 6px;
  font-size: 0.8rem;
  position: absolute;
  top: 10px;
  right: -10px;
}

.cart-wrapper .cart-dropdown ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}

.cart-wrapper .cart-dropdown ul li button {
  margin-left: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.cart-wrapper .cart-dropdown ul li button:hover {
  background-color: darkred;
}
</style>