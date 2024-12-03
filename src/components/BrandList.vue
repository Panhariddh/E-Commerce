<script setup>
const brands = [
  { name: 'Apple', logo: '/src/assets/images/apple-logo.png'},
  { name: 'Acer', logo: '/src/assets/images/acer-logo.png' },
  { name: 'MSI', logo: '/src/assets/images/msi-logo.png' },
  { name: 'Lenovo', logo: '/src/assets/images/lenovo-logo.png' },
  { name: 'Dell', logo: '/src/assets/images/Dell_logo.png' },
  { name: 'Asus', logo: '/src/assets/images/Asus-logo.png' },
]
</script>

<template>
  <aside class="brand-list">
    <h3>Popular Brands</h3>
    <ul>
      <li v-for="brand in brands" :key="brand.name" class="brand-item">
        <img :src="brand.logo" :alt="brand.name" />
        <p>{{ brand.name }}</p>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.brand-list {
  padding: 1rem;
  background-color: rgb(242, 161, 129);
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
}
li img {
  width: 50px;
}
</style>
