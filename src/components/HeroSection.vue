<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToShop() {
  router.push('/shop');
}
</script>

<template>
  <section class="hero">
    <div class="content">
      <!-- <h1 class="hero-title">New Laptop</h1>
      <p class="hero-subtitle">We have in stock</p> -->
      <!-- <button @click="navigateToShop">Shop Now</button> -->
    </div>
    <div class="image-container">
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #ffffff;
  position: relative;
}

.content {
  max-width: 50%;
  z-index: 1; 
  position: relative; 
}

/* .hero-title {
  color: #000000; 
  font-size: 2.5rem; 
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  color: #cccccc; 
  font-size: 1.25rem; 
  margin-bottom: 1rem;
} */

/* button {
  background-color: #00c9a7;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 170px;
}

button:hover {
  background-color: #00a68c;
} */

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/9aff7fda2d9ac467d56d473a51d3cf61/width(1200).jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0; 
  filter: brightness(0.8); 
}

.hero {
  height: 60vh; 
  overflow: hidden;
}
</style>