<template>
  <HeaderComponent/>
  <div class="brand-view">
    <div class="viewTop">
      <div class="colTop1">
        <router-link to="/shop" class="backBtn">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </router-link>
      </div>
      <div class="colTop2">
        <ul>
          <li><i class="fa fa-shopping-cart" aria-hidden="true"></i></li>
          <li>{{ brand }}</li>
        </ul>
      </div>
    </div>
    <!-- animation transition -->
    <div class="viewUp">
      <div class="cardPC" v-for="product in products" :key="product.name" data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
        <div class="PCTop">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="PCUp">
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">{{ product.price }}</p>
          <div class="btnBuy">
            <button type="button" class="add-to-cart" @click="addToCart(product)">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart
          </button>
            <button type="button" class="view-detail" @click="goToDetails(product.id)">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>
<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { eventCart } from '@/stores/eventCart';
import { productsByBrand } from '@/stores/ProductStore.js';
const route = useRoute();
const router = useRouter();
const brand = ref(route.params.brand || '');
const products = ref([]);

onMounted(() => {
  products.value = productsByBrand[brand.value.toUpperCase()] || [];
});

const addToCart = (product) => {
eventCart.value.cartItems.push(product);
eventCart.value.cartCount = eventCart.value.cartItems.length;
};
const goToDetails = (productId) => {
router.push({ name: 'ViewDetail', params: { id: productId } });
};


</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
}
.brand-view {
  width: 100%;
  background-color: white;
  padding: 1rem;
}
.viewTop {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
}
.colTop1 .backBtn {
  padding: 10px 15px;
  border: none;
  font-size: 18px;
  background: #f4f4f9;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.colTop1 button:hover {
  background: #ddd;
}
.colTop2 ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}
.colTop2 li {
  font-size: 20px;
  color: #333;
}
.viewUp {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}
.cardPC {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.cardPC:hover {
  transform: scale(1.03);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}
.PCTop img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.PCUp {
  padding: 1rem;
  text-align: center;
}
.product-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}
.product-price {
  font-size: 16px;
  color: #888;
  margin-bottom: 1rem;
}
.btnBuy {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}
.btnBuy button {
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.add-to-cart {
  background: #38b000;
  color: white;
}
.add-to-cart:hover {
  background: #2a7e00;
  transform: scale(1.05);
}
.view-detail {
  background: #4361ee;
  color: white;
}
.view-detail:hover {
  background: #3648bb;
  transform: scale(1.05);
}
</style>