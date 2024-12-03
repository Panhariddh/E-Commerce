<script setup>
</script>

<template>
  <section class="hero">
    <div class="content">
      <h1 class="hero-title">New Laptop</h1>
      <p class="hero-subtitle">We have in stock</p>
      <button>Shop Now</button>
    </div>
    <div class="image-container">
      <img src="https://toptechkh.com/wp-content/uploads/2024/04/3.jpg" alt="New Laptop" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #6c6767;
}

.content {
  max-width: 50%;
}

.hero-title {
  color: #000000; /* Adjust font color for the title */
  font-size: 2.5rem; /* Optional: Adjust font size */
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  color: #cccccc; /* Adjust font color for the subtitle */
  font-size: 1.25rem; /* Optional: Adjust font size */
  margin-bottom: 1rem;
}

button {
  background-color: #00c9a7;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #00a68c;
}

.image-container {
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}
</style>