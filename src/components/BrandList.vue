<script setup>
const brands = [
  { name: 'Apple', logo: '/src/assets/images/Apple.png'},
  { name: 'Acer', logo: '/src/assets/images/Apple.png' },
  { name: 'MSI', logo: '/src/assets/images/Apple.png' },
  { name: 'Lenovo', logo: '/src/assets/images/Apple.png' },
  { name: 'Dell', logo: '/src/assets/images/Apple.png' },
  { name: 'Asus', logo: '/src/assets/images/Apple.png' },
];

const products =[
  { name: 'Asus-Zephyrus G16', image: '/src/assets/images/Asus-zephyrusG16.jpg'},
  // { name: 'Apple Pro Max', image: '/src/assets/images/AppleProMax.jpg'},
  // { name: 'Apple Pro Max', image: '/src/assets/images/AppleProMax.jpg'},
  // { name: 'Apple Pro Max', image: '/src/assets/images/AppleProMax.jpg'},
];
</script>

<template>
  <div id="app" class="app-container">
    <div class="brand-list">
      <h3>Popular Brands</h3>
        <ul>
          <li v-for="brand in brands" :key="brand.name" class="brand-item">
            <img :src="brand.logo" :alt="brand.name"/>
            <p>{{ brand.name }}</p>
          </li>
        </ul>
    </div>

    <main class="product-display">
      <div v-for="product in products" :key="product.name" class="product-card">
        <img :src="product.image" :alt="product.name" />
      </div>
    </main>
  </div>

</template>

<style scoped>
.app-container{
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  padding: 1rem;
  background-color:aquamarine;
  

}

.brand-list{
  background-color: bisque;
  width: 250px;
  height: auto;
}

.brand-list h3{
  margin: 10px 1rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

ul{
  padding: 0;
  list-style: none;
}

.brand-item{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  border: 2px solid blue;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.brand-item img{
  width: 50px;
  height: auto;
}

.brand-item p{
  font-family: Arial, Helvetica, sans-serif;
  font-size:20px;
}
</style>
