<script setup>
const brands = [
  { name: 'Apple', logo: 'apple-logo.png' },
  { name: 'Acer', logo: 'acer-logo.png' },
  { name: 'MSI', logo: 'msi-logo.png' },
  { name: 'Lenovo', logo: 'lenovo-logo.png' },
  { name: 'Dell', logo: 'dell-logo.png' },
  { name: 'Asus', logo: 'asus-logo.png' },
]
</script>

<template>
  <aside class="brand-list">
    <h3>Popular Brands</h3>
    <ul>
      <li v-for="brand in brands" :key="brand.name">
        <img :src="``" :alt="brand.name" />
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
