<script setup>
const products = [
  {
    id: 1,
    name: 'Asus ROG G531',
    description: 'Sleek design with high performance.',
    image: '/src/assets/images/asus.png',
    price: '$999',
  },
  {
    id: 2,
    name: 'Lenovo V14',
    description: 'Lightweight and powerful for work.',
    image: '/src/assets/images/Lenovo.png',
    price: '$849',
  },
  {
    id: 3,
    name: 'Apple MacBook Pro',
    description: 'Ultra-slim design for portability.',
    image: '/src/assets/images/Apple.png',
    price: '$1,199',
  },
  {
    id: 4,
    name: 'Windows Laptop',
    description: 'Perfect for productivity and gaming.',
    image: '/src/assets/images/alien.png',
    price: '$1,099',
  },
];
</script>

<template>
  <section class="product-gallery">
    <h2>Featured Products</h2>
    <div class="grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span class="price">{{ product.price }}</span>
        <button>View Details</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-gallery {
  padding: 2rem;
  text-align: center;
}

.product-gallery h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  height: 500px;
}

.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-card h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.25rem;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

.product-card p {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.product-card .price {
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
  color: #00c9a7;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.product-card button {
  background-color: #00c9a7;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
}

.product-card button:hover {
  background-color: #008f7a;
}
</style>
