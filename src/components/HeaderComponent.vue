<script setup>
</script>

<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="EmberStore Logo" />
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/product">Product</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
      </ul>
    </nav>
    <div class="actions">
      <input type="text" placeholder="Search..." />
      <i class="icon-user"></i>
      <i class="icon-cart"></i>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
