<script setup>

import {ref} from 'vue';

const brands = [
  { name: 'Apple', logo: '/src/assets/images/apple1.png'},
  { name: 'Acer', logo: '/src/assets/images/acer-logo.png' },
  { name: 'MSI', logo: '/src/assets/images/msi-logo.png' },
  { name: 'Lenovo', logo: '/src/assets/images/lenono-logo.png' },
  { name: 'Dell', logo: '/src/assets/images/Dell_logo.png' },
  { name: 'Alienware', logo: '/src/assets/images/Alienware-Logo.png' },
  { name: 'Asus', logo: '/src/assets/images/Asus-logo.png' },
];

const products = [
  { category: 'Apple', image: '/src/assets/images/Apple/AppleL1.png' },
  { category: 'Apple', image: '/src/assets/images/Apple/AppleL2.png' },
  { category: 'Apple', image: '/src/assets/images/Apple/AppleL5.png' },
  // { category: 'Apple', image: '/src/assets/images/Apple.png' },

  { category: 'Acer', image: '/src/assets/images/Acer/Acer2.png' },
  { category: 'Acer', image: '/src/assets/images/Acer/Acer3.png' },
  { category: 'Acer', image: '/src/assets/images/Acer/Acer4.png' },
  // { category: 'Acer', image: '/src/assets/images/acer-laptop.png' },

  { category: 'MSI', image: '/src/assets/images/MSI/MSI1.png' },
  { category: 'MSI', image: '/src/assets/images/MSI/MSI2.png' },
  { category: 'MSI', image: '/src/assets/images/MSI/MSI1.png' },
  // { category: 'MSI', image: '/src/assets/images/msi-laptop.png' },

  { category: 'Lenovo', image: '/src/assets/images/Lenovo.png' },
  { category: 'Lenovo', image: '/src/assets/images/Lenovo.png' },
  { category: 'Lenovo', image: '/src/assets/images/Lenovo.png' },
  // { category: 'Lenovo', image: '/src/assets/images/Lenovo.png' },

  { category: 'Dell', image: '/src/assets/images/Dell/dell2.png' },
  { category: 'Dell', image: '/src/assets/images/Dell/dell3.png' },
  { category: 'Dell', image: '/src/assets/images/Dell/dell4.png' },
  // { category: 'Dell', image: '/src/assets/images/Lenovo.png' },

  { category: 'Alienware', image: '/src/assets/images/alien.png' },
  { category: 'Alienware', image: '/src/assets/images/alien.png' },
  { category: 'Alienware', image: '/src/assets/images/alien.png' },
  // { category: 'Alienware', image: '/src/assets/images/alien.png' },
  
  { category: 'Asus', image: '/src/assets/images/Asus.png' },
  { category: 'Asus', image: '/src/assets/images/Asus.png' },
  { category: 'Asus', image: '/src/assets/images/Asus.png' },
  // { category: 'Asus', image: '/src/assets/images/Asus.png' },
];

const contentproducts = [
  { category: 'Apple', image: '/src/assets/images/Apple.png' },
  { category: 'Acer', image: '/src/assets/images/Acer/Acer1.png' },
  { category: 'MSI', image: '/src/assets/images/MSI/MSI2.png' },
  { category: 'Lenovo', image: '/src/assets/images/Lenovo.png' },
  { category: 'Dell', image: '/src/assets/images/Dell/dell1.png' },
  { category: 'Alienware', image: '/src/assets/images/alien.png' },
  { category: 'Asus', image: '/src/assets/images/Asus.png' },
];

const showProductByBrand = () => { }

const filteredproducts = ref([...products]);
const filteredcontentproducts = ref([...contentproducts]);

const filterbybrand = (brandName)=>{
  filteredproducts.value = products.filter(product => product.category === brandName);
  filteredcontentproducts.value = contentproducts.filter(contentproduct => contentproduct.category === brandName);
}

const showAllProducts = () => {
  filteredproducts.value = [...products];
  filteredproducts.value = [...contentproducts];
};
</script>

<template>
  <div id="app" class="app-container">

    <div class="brand-list">
      <h3>Popular Brands</h3>
      <ul>
        <li v-for="brand in brands" :key="brand.name" class="brand-item" @click="filterbybrand(brand.name)">
          <img :src="brand.logo" :alt="brand.name" />
        </li>
      </ul>
    </div>
    <div class="product-right">
      <div v-for="contentproduct in filteredcontentproducts" :key="contentproduct.name" class="product-card-right">
        <img :src="contentproduct.image" :alt="contentproduct.category" />
      </div>
    </div>

    <div class="product-display">
      <div v-for="product in filteredproducts" :key="product.name" class="product-card">
        <img :src="product.image" :alt="product.category" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.app-container{
  /* display: grid; */
  display: flex;
  grid-template-columns: 1fr 3fr;
  /* gap: 1rem; */
  background-color: antiquewhite;
  width: 100%;
  height: auto;
}
.brand-list {
  width: 20%;
  height: auto;
  padding: 1rem;
  background-color:#e2e2e2;
  justify-items: center;
  border: 1px solid black;
  border-top:0;
  /* border-left: 1px solid black; */
}

.brand-list h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

ul{
  padding: 0px;
  list-style: none;
}

.brand-item{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 200px;
  height: 25px;
  background-color: rgb(255, 255, 255);
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.brand-item:hover {
  background-color: rgb(120, 118, 118);
}

.brand-item img {
  width: 80px;
  height: auto;
}

.product-right{
  width: 55%;
  background-color: #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:1px solid black;
  border-right: 1px solid black;
}

.product-card-right img {
  width: 100%;
  height: auto;
}

.product-display {
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  background-color: aquamarine;
  width: 25%;
  height: auto;
  justify-content: center;
  align-items: center;
}

.product-card {
  border: 1px solid #000000;
  background-color: #e2e2e2;
  border-top: 0;
  display: flex;
  padding: 1.5rem;
  border-left: 0;
}

.product-card img {
  width: 100%;
  height: 15rem;
  object-fit: contain;
  border-radius: 4px;
}

</style>