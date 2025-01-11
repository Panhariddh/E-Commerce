<template>
    <HeaderComponent @add-to-cart="handleAddToCart" />
    <div class="product-detail" v-if="product">
      <div class="product-container">
        <img class="product-image" :src="product.image" :alt="product.name" />
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <ul>
            <li><strong>CPU:</strong> Ryzen 7 6800H (8-cores and 16 threads)</li>
            <li><strong>RAM:</strong> 16GB DDR5</li>
            <li><strong>Storage:</strong> 1TB NVMe SSD</li>
            <li><strong>OS:</strong> Windows 11 Pro</li>
            <li><strong>GPU:</strong> RTX 3060 6GB (with Ray Tracing)</li>
            <li><strong>Display:</strong> QHD 165Hz (2560 × 1440 pixels)</li>
            <li><strong>Warranty:</strong> 1-year limited warranty</li>
            <li><strong>Color:</strong> Gray, Black, and Red</li>
          </ul>
          <div class="price-section">
            <p><strong>Total Price:</strong> <span class="price">{{ product.price }}</span></p>
          </div>
          <div class="action-buttons">
            <button class="add-to-cart" @click="addToCart">Add To Cart</button>
            <button class="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </template>
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import { eventCart } from '@/stores/eventCart';
  import { products, productsByBrand } from '@/stores/ProductStore';
  
  export default {
    name:"ViewDetail",
    components: {
      HeaderComponent,
      FooterComponent,
    },
    setup() {
      const route = useRoute(); // Access route parameters
      const product = ref(null); // Reactive product state
  
      onMounted(() => {
        const productId = parseInt(route.params.id, 10);
        const allProducts = [...products, ...Object.values(productsByBrand).flat()];
        product.value = allProducts.find((p) => p.id === productId);
      });
  
      const addToCart = () => {
        eventCart.value.cartItems.push(product.value);
        eventCart.value.cartCount = eventCart.value.cartItems.length;
      };
      
      return { product, addToCart };
    },
  };
  </script>
  <style scoped>
  .product-detail {
      display: flex;
      justify-content: center;
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
      border: 1px solid #ddd;
      border-radius: 10px;
      background-color: #f9f9f9;
  }
  
  .product-container {
      display: flex;
      flex-direction: row;
      gap: 40px;
  }
  
  .product-image {
      max-width: 700px;
      height: auto;
      border: 1px solid #ddd;
      border-radius: 10px;
  }
  
  .product-info {
      display: flex;
      flex-direction: column;
  }
  
  h1 {
      font-size: 28px;
      color: #0056b3;
      margin-bottom: 20px;
  }
  
  ul {
      list-style: none;
      padding: 0;
      margin: 0 0 20px 0;
  }
  
  ul li {
      margin-bottom: 10px;
  }
  
  .price-section {
      margin-bottom: 20px;
  }
  
  .price {
      color: red;
      font-weight: bold;
  }
  
  .action-buttons {
      display: flex;
      gap: 20px;
  }
  
  .add-to-cart,
  .buy-now {
      padding: 15px 30px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
  }
  
  .add-to-cart {
      background-color: #28a745;
      color: white;
  }
  
  .buy-now {
      background-color: #007bff;
      color: white;
  }
  </style>