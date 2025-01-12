<template>
    <div class="featured-products">
      <h2 class="section-title">Incoming Products</h2>
      <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.imageUrl" :alt="product.name" class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">
            <span v-if="product.discount" class="original-price">${{ product.originalPrice }}</span>
            <span>${{ product.price }}</span>
          </p>
          <button class="view-button" @click="goToProducts(product.id)">View</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  export default {
    name: "ProductComponent",
    setup() {
    const router = useRouter();

    const goToProducts = (productId) => {
      router.push({ name: 'ViewProduct', params: { id: productId } });
    };

    return {
      goToProducts,
    };
  },
    data() {
      return {
        products: [
          {
            id: 1,
            name: "Clutch GM40 Elite Gaming Mouse",
            imageUrl: "https://elitehubs.com/cdn/shop/products/clutch-gm40-gaming-mouse-1-600x600-1.webp?v=1683973105&width=533",
            price: 35.99,
            originalPrice: 39.99,
            discount: true,
          },
          {
            id: 2,
            name: "AORUS FI27Q-P 27 Inch 1440P Gaming Monitor",
            imageUrl: "https://m.media-amazon.com/images/I/61ojAUVzbTL.jpg",
            price: 882,
            originalPrice: 900,
            discount: true,
          },
          {
            id: 3,
            name: "DXRACER Drifting Series Black",
            imageUrl: "https://nex-img.dxracer.cc/20001/ad48e46f-7e80-48c7-ac39-0e97de00f779-1.png",
            price: 314.1,
            originalPrice: 349,
            discount: true,
          },
          {
            id: 4,
            name: "Wacom Intuos Wireless Graphics Drawing Tablet",
            imageUrl: "https://progearcambodia.com/wp-content/uploads/2021/01/ctl-6100wlk-0_pt04-600x375.jpg",
            price: 240,
            originalPrice: null,
            discount: false,
          },
          {
            id: 5,
            name: "HyperX Cloud Flight Wireless Gaming Headset",
            imageUrl: "https://gameroom.lv/104325/hyperx-cloud-flight-wireless-headset-ps4-ps5.jpg",
            price: 120,
            originalPrice: null,
            discount: false,
          },
          {
            id: 6,
            name: "Japanese Dragon Large Gaming Mousepad XXL",
            imageUrl: "https://i5.walmartimages.com/seo/Japanese-Dragon-Large-Gaming-Mousepad-XXL-Keyboard-Gamer-Mouse-Pad-on-The-Table-Speed-Desk-Mat-Anime-900x400-1000x500-Mouse-Mat-yening_d095eb72-f173-46aa-9a2b-e7a5527a6746.177dceb98ee0f3540f0914d17f6106f8.jpeg",
            price: 29.99,
            originalPrice: null,
            discount: false,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .featured-products {
    margin: 20px auto;
    text-align: center;
  }
  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  .product-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .product-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  .product-name {
    font-size: 18px;
    margin: 10px 0;
  }
  .product-price {
    font-size: 16px;
    color: #333;
  }
  .original-price {
    text-decoration: line-through;
    color: red;
    margin-right: 10px;
  }
  .view-button {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #00c9a7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.view-button:hover {
  background-color: #0056b3;
}
  </style>
  