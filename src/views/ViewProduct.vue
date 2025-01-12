<template>
    <HeaderComponent/>
    <div class="product-view" v-if="product">
      <p class="breadcrumb">Home › <b>Product</b> › <b>ProductDetail</b></p>
      <div class="product-container">
        <div class="product-image">
          <img :src="product.imageUrl" :alt="product.name" />
        </div>
        <div class="product-details">
          <h1>{{ product.name }}</h1>
          <p class="price">${{ product.price }}</p>
          <p class="original-price" v-if="product.discount">${{ product.originalPrice }}</p>
          <p class="description">{{ product.description }}</p>
          <button class="out-of-stock">OUT OF STOCK</button><br>
          <!-- <button class="add-to-wishlist">Add to Wishlist</button> -->
          <!-- <button class="add-to-compare">Add to Compare</button> -->
          <p class="estimated-delivery">Estimated Delivery: 13 January 2025 - 17 January 2025</p>
          <p class="availability">Availability: <span class="status">Unavailable</span></p>
        </div>
      </div>
    </div>
    <FooterComponent/>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  export default {
    name: 'ViewProduct',
    components: {
      HeaderComponent,
      FooterComponent,
    },
    data() {
      return {
        product: null,
        products: [
          {
            id: 1,
            name: "Clutch GM40 Elite Gaming Mouse",
            imageUrl: "https://elitehubs.com/cdn/shop/products/clutch-gm40-gaming-mouse-1-600x600-1.webp?v=1683973105&width=533",
            price: 35.99,
            originalPrice: 39.99,
            discount: true,
            description: "High-performance gaming mouse with 5000 DPI sensor and 9 customizable macro buttons."
          },
          {
            id: 2,
            name: "AORUS FI27Q-P 27 Inch 1440P Gaming Monitor",
            imageUrl: "https://m.media-amazon.com/images/I/61ojAUVzbTL.jpg",
            price: 882,
            originalPrice: 900,
            discount: true,
            description: "27-inch 1440p 165hz gaming monitor with high refresh rate and vibrant colors."
          },
          {
            id: 3,
            name: "DXRACER Drifting Series Black",
            imageUrl: "https://nex-img.dxracer.cc/20001/ad48e46f-7e80-48c7-ac39-0e97de00f779-1.png",
            price: 314.1,
            originalPrice: 349,
            discount: true,
            description: "Ergonomic gaming chair with superior comfort and style."
          },
          {
            id: 4,
            name: "Wacom Intuos Wireless Graphics Drawing Tablet",
            imageUrl: "https://progearcambodia.com/wp-content/uploads/2021/01/ctl-6100wlk-0_pt04-600x375.jpg",
            price: 240,
            originalPrice: null,
            discount: false,
            description: "Wireless graphics tablet for digital art and design."
          },
          {
            id: 5,
            name: "HyperX Cloud Flight Wireless Gaming Headset",
            imageUrl: "https://gameroom.lv/104325/hyperx-cloud-flight-wireless-headset-ps4-ps5.jpg",
            price: 120,
            originalPrice: null,
            discount: false,
            description: "Wireless gaming headset with immersive sound and long battery life."
          },
          {
            id: 6,
            name: "Japanese Dragon Large Gaming Mousepad XXL",
            imageUrl: "https://i5.walmartimages.com/seo/Japanese-Dragon-Large-Gaming-Mousepad-XXL-Keyboard-Gamer-Mouse-Pad-on-The-Table-Speed-Desk-Mat-Anime-900x400-1000x500-Mouse-Mat-yening_d095eb72-f173-46aa-9a2b-e7a5527a6746.177dceb98ee0f3540f0914d17f6106f8.jpeg",
            price: 29.99,
            originalPrice: null,
            discount: false,
            description: "Extra-large gaming mousepad with Japanese dragon design."
          },
        ],
      };
    },
    created() {
      const productId = Number(this.$route.params.id);
      this.product = this.products.find(product => product.id === productId);
    },
  };
  </script>
  
<style scoped>
.product-view {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: Arial, sans-serif;
  color: #000;
  justify-content: start;
  background-color: #ffffff;
}

.breadcrumb {
    color: #7f7878; 
    font-size: 16px;
    margin-top: 0.5rem;
    z-index: 1; 
    position: relative;
    gap: 10px;
  }

.product-container {
  display: flex;
  width: 100%;
}

.product-image {
  flex: 1;
  max-width: 50%;
  padding-right: 1rem;
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-details {
  flex: 1;
  max-width: 50%;
  padding-left: 1rem;
  text-align: left;
}

.price {
  font-size: 1.5em;
  color: #333;
}

.description {
  margin: 20px 0;
  font-size: 1em;
}

.out-of-stock {
  margin: 10px;
  padding: 15px 120px;
  background-color: #f0c040;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  margin-left: 120px ;
  color: white;
  gap: 20px;
}

.out-of-stock:hover {
  background-color: red;
  cursor: not-allowed;
}
/* .add-to-wishlist,
.add-to-compare {
  margin: 10px;
  padding: 10px 20px;
  background-color: #f0c040;
  border: none;
  cursor: pointer;
} */

.original-price {
  text-decoration: line-through;
  color: red;
  margin-right: 10px;
}

.estimated-delivery, .availability {
  margin-top: 20px;
}
.status {
  font-weight: bold;
  color: red;
}
</style>