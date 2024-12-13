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
          <router-link to="/notifications" title="Notifications">
            <i class="fas fa-bell"></i>
          </router-link>
          <router-link to="/cart" title="Cart">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
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
</style>
