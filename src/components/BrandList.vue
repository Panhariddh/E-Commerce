<script setup>
import {ref, onMounted} from 'vue';

const brands = [
{ name: 'Apple', logo: '/src/assets/images/logo.png'},
{ name: 'Acer', logo: '/src/assets/images/acer-logo.png' },
{ name: 'MSI', logo: '/src/assets/images/msi-logo.png' },
{ name: 'Lenovo', logo: '/src/assets/images/lenono-logo.png' },
{ name: 'Dell', logo: '/src/assets/images/Dell_logo.png' },
{ name: 'Alienware', logo: '/src/assets/images/Alienware-Logo.png' },
{ name: 'Asus', logo: '/src/assets/images/Asus-logo.png' },
];

const products = [
  { category: 'Apple', image: 'https://i.pinimg.com/736x/0d/1a/3f/0d1a3fe737517194b8b1866232ecd5fb.jpg' },
  { category: 'Apple', image: 'https://i.pinimg.com/736x/6c/65/a3/6c65a3a9b1693f04c000604d57e8fd03.jpg' },
  { category: 'Apple', image: 'https://i.pinimg.com/736x/ad/5e/56/ad5e56aee0dc34d73ccc18d0c306d807.jpg' },

  { category: 'Acer', image: 'https://i.pinimg.com/736x/e7/5c/dc/e75cdccab0393a5e8b23f9b601f5cc81.jpg' },
  { category: 'Acer', image: 'https://i.pinimg.com/736x/a7/fd/88/a7fd884dfb55156231e94e4eeecf32ac.jpg' },
  { category: 'Acer', image: 'https://i.pinimg.com/736x/34/35/c8/3435c8a4dfb6f0e7af43d4da57ae92cb.jpg' },

  { category: 'MSI', image: 'https://i.pinimg.com/736x/17/c9/35/17c935d64572d85bf2f1544660a7e340.jpg' },
  { category: 'MSI', image: 'https://i.pinimg.com/736x/76/6d/38/766d386483f0b5f261761bea8bf332b9.jpg' },
  { category: 'MSI', image: 'https://i.pinimg.com/736x/73/c2/64/73c2648d9f88cf094fd2b57b6c177554.jpg' },

  { category: 'Lenovo', image: 'https://i.pinimg.com/736x/45/9e/49/459e49d7db445cc31bf8b1bc4d0f739c.jpg' },
  { category: 'Lenovo', image: 'https://i.pinimg.com/736x/4f/47/21/4f47212ce5433c1f87c05ab0b1035911.jpg' },
  { category: 'Lenovo', image: 'https://i.pinimg.com/736x/4b/4f/be/4b4fbe339beca8742eddc8132bea3c59.jpg' },

  { category: 'Dell', image: 'https://i.pinimg.com/736x/bd/a9/a1/bda9a18d10bba6785520b0b99fd6f87f.jpg' },
  { category: 'Dell', image: 'https://i.pinimg.com/736x/a9/c8/a0/a9c8a04a579522d6e5ff3382e6f25edf.jpg' },
  { category: 'Dell', image: 'https://i.pinimg.com/736x/9a/cb/e8/9acbe8e472de8fe26ccee11fea729897.jpg' },

  { category: 'Alienware', image: 'https://i.pinimg.com/736x/ca/8e/ce/ca8ece207d43ab3903ee285db17c0105.jpg' },
  { category: 'Alienware', image: 'https://i.pinimg.com/736x/cd/34/39/cd34399931d3ee1350a255e83782a153.jpg' },
  { category: 'Alienware', image: 'https://i.pinimg.com/736x/13/97/a0/1397a0f38100b1fc706a4c1741dbf673.jpg' },
  
  { category: 'Asus', image: 'https://i.pinimg.com/736x/28/d2/8c/28d28cd2ed11798665ada93e87bfd9b0.jpg' },
  { category: 'Asus', image: 'https://i.pinimg.com/736x/82/bc/91/82bc9176de92ddede3f088954fe17a61.jpg' },
  { category: 'Asus', image: 'https://i.pinimg.com/736x/9e/39/16/9e39168e05cb7e887e44fd68ff3d8529.jpg' },
];

const contentproducts = [
  { category: 'Apple',     image: 'https://i.pinimg.com/736x/78/bf/a8/78bfa893270a0b531705b1c56f25674d.jpg' },
  { category: 'Acer',      image: 'https://i.pinimg.com/736x/66/8f/ef/668fef83ceca628294771c234139618c.jpg' },
  { category: 'MSI',       image: 'https://i.pinimg.com/736x/2e/a7/11/2ea711de7a8057d6d6c2526401132ab4.jpg' },
  { category: 'Lenovo',    image: 'https://i.pinimg.com/736x/11/27/f4/1127f4ad6014702a44c51e13fd78ccea.jpg' },
  { category: 'Dell',      image: 'https://i.pinimg.com/736x/11/63/04/116304427bd143ce9306b51bb530b734.jpg' },
  { category: 'Alienware', image: 'https://i.pinimg.com/736x/ce/84/1d/ce841dbbb42f876e0bfdd759c08c6e7b.jpg' },
  { category: 'Asus',      image: 'https://i.pinimg.com/736x/72/3f/80/723f806751f66b08901c9ca21a431541.jpg' },
];

const filteredproducts = ref([...products]);
const filteredcontentproducts = ref([...contentproducts]);

// Default brand to filter by
const selectedBrand = ref('Apple');

const filterbybrand = (brandName)=>{
  selectedBrand.value = brandName;
  filteredproducts.value = products.filter(product => product.category === brandName);
  filteredcontentproducts.value = contentproducts.filter(contentproduct => contentproduct.category === brandName);
};
//Show all products
const showAllProducts = () => {
  selectedBrand.value = '';
  filteredproducts.value = [...products];
  filteredproducts.value = [...contentproducts];
};

// Set default products on mount
onMounted(()=>{
  filterbybrand(selectedBrand.value);
}); 
</script>

<template>
 <div id="app" class="app-container">
    <div class="brand-list">
      <h3>POPULAR BRANDS</h3>
      <ul>
        <li v-for="brand in brands" :key="brand.name" class="brand-item"  :class="{ active: brand.name === selectedBrand }" @click="filterbybrand(brand.name)">
          <img :src="brand.logo" :alt="brand.name" />
        </li>
      </ul>
    </div>

    <div class="product-right">
      <div v-for="(contentproduct, index) in filteredcontentproducts" :key="index" class="product-card-right">
        <img :src="contentproduct.image" :alt="contentproduct.category" />
      </div>
    </div>

    <div class="product-display">
      <div v-for="(product,index) in filteredproducts" :key="index" class="product-card">
        <img :src="product.image" :alt="product.category" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.app-container{
  display: flex;
  width: 100%;
  height: auto;
}
.brand-list {
  width: 20%;
  height: auto;
  padding: 1rem;
  justify-items: center;
  border: 1px solid black;
  background-color: white;
}

.brand-list h3 {
  margin-top: 20px;
  font-size: 1.8rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
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
  height: 60px;
  background-color: #cbfbf6;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
.brand-item.active {
  background-color: #7FE0D5; /* Highlight color for active brand */
  color: white; /* Change text color for better contrast */
  transform: scale(1.05); /* Slightly enlarge the active brand logo */
}
.brand-item:hover {
  background-color:#7FE0D5;
}
.brand-item img {
  width: 80px;
  height: auto;
}
.product-right{
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  border:1px solid black;
  background-color: white;
}
.product-card-right img {
  width: 100%;
  height: auto;
}
.product-display {
  width: 25%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
}

.product-card {
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}
.product-card img {
  width: 100%;
  height: 17rem;
  object-fit: contain;
}

@media (max-width:768px){
  .app-container{
    flex-direction: column;
  }
  .brand-list, .product-right, .product-display{
    width: 100%;
  }
  .brand-item{
    width: 100%;
  }
}
</style>