<template>
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
    <div class="viewUp">
      <div class="cardPC" v-for="product in products" :key="product.name">
        <div class="PCTop">
          <img :src="product.image" :alt="product.name" />
        </div>
        <div class="PCUp">
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">1750.00$</p>
          <div class="btnBuy">
            <button type="button" class="add-to-cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i> Add To Cart
            </button>
            <button type="button" class="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const brand = ref(route.params.brand || '');
const products = ref([]);

const productsByBrand = {
  APPLE: [
      {image:'https://i.pinimg.com/736x/32/f6/2b/32f62bcdbd573761c93bfc881225e00f.jpg',name:"MacBook Air M1"},
      {image:'https://i.pinimg.com/736x/b7/61/6c/b7616cfc0a3cce9d6e38bbe490dcae8b.jpg',name:"Apple MacBook Pro14” M4"},
      {image:'https://i.pinimg.com/736x/dd/92/6b/dd926ba6d1669a474969522278ff0ea3.jpg',name:"Apple MacBook Pro14” M4 Pro"},
      {image:'https://i.pinimg.com/736x/c4/05/1a/c4051a153384d172cf9fbe4e38b826a9.jpg',name:"Apple MacBook Pro14” M4 Max"},
      {image:'https://i.pinimg.com/736x/6a/7a/9f/6a7a9fa50d65dc4677133dd87220718e.jpg',name:"Apple MacBook Pro 14-inch M1 Pro,"},
      {image:'https://i.pinimg.com/736x/32/3c/89/323c89f120ac034a9eeddfb94e97d0b7.jpg',name:"Apple MacBook Pro 16"},
      {image:'https://i.pinimg.com/736x/82/e2/bd/82e2bd6dca1e2dcc65fecaa3dbebed22.jpg',name:"MacBook Air 2022 Mockups"},
      {image:'https://i.pinimg.com/736x/b6/ec/c6/b6ecc61af23c38c7c906b1efe808e993.jpg',name:"Apple MacBook Pro 13"}
      
  ],
  MSI: [
        {image:'https://i.pinimg.com/736x/81/42/7b/81427b0bb46cc0c8e6893730e9bd80b4.jpg',name:"MSI Katana 17"},
        {image:'https://i.pinimg.com/736x/59/50/62/59506260421ab009c55db6680570b5c9.jpg',name:"MSI Cyborg 15"},
        {image:'https://i.pinimg.com/736x/ab/21/6a/ab216acc7a5bc4e00e905d85091b2dbb.jpg',name:"MSI Creator Z16 HX Studio"},
        {image:'https://i.pinimg.com/736x/ac/55/36/ac5536c9ab87b69480410618cf2a0c7b.jpg',name:"MSI Raider GE78 Gaming"},
        {image:'https://i.pinimg.com/736x/72/83/6f/72836f00913e1c4ac5e1b9ef3a426f3f.jpg',name:"MSI Cyborg 15 AI at CES 2024"},
        {image:'https://i.pinimg.com/736x/c3/aa/83/c3aa8387f25c04e1b9d6729a3a60ad6a.jpg',name:"MSI Raider GE78 "},
        {image:'https://i.pinimg.com/736x/28/28/2b/28282b7ac01c6529021aa7c52f59a892.jpg',name:"MSI GE66 Raider"},
        {image:'https://i.pinimg.com/736x/81/42/7b/81427b0bb46cc0c8e6893730e9bd80b4.jpg',name:"MSI Raider GE78"},
  ],
  ASUS: [
        {image:'https://i.pinimg.com/736x/4d/c8/94/4dc894a0ca5115219eaf83c9628c18b0.jpg',name:"Asus TUF A15 2024"},
        {image:'https://i.pinimg.com/736x/79/03/24/7903246a0017d49996ed9bda83167252.jpg',name:"Asus Zephyrus G16"},
        {image:'https://i.pinimg.com/736x/0d/91/57/0d91573ac42b4ffee05d5fc0a7e232e4.jpg',name:"Asus ROG Zephyrus Duo 16"},
        {image:'https://i.pinimg.com/736x/64/2e/66/642e66e256804b59d28a90819e4a41d4.jpg',name:"Asus ROG Strix G17"},
        {image:'https://i.pinimg.com/736x/4d/c8/94/4dc894a0ca5115219eaf83c9628c18b0.jpg',name:"ASUS TUF A15 2024 Gaming Laptop 15.6"},
        {image:'https://i.pinimg.com/736x/fc/31/3a/fc313a629763fdd3c4fd0162a69d1f1b.jpg',name:"ASUS ZenBook 14"},
        {image:'https://i.pinimg.com/736x/d9/06/bf/d906bfe56b526573376a4c9fa7193e52.jpg',name:"ASUS ZenBook 13"},
        {image:'https://i.pinimg.com/736x/ef/fd/89/effd897be99966850cfb1b09f9681a8a.jpg',name:"ASUS Zenbook S 13"},
  ],
  ACER: [
        {image:'https://i.pinimg.com/736x/1c/53/db/1c53db184f77e5263bf58fa9c3551de1.jpg',name:"Acer Nitro 5 2021"},
        {image:'https://i.pinimg.com/736x/e7/4c/b9/e74cb918f58322b7908ffda30fca5028.jpg',name:"Acer Nitro 5 17.3 inch 2022"},
        {image:'https://i.pinimg.com/736x/fe/fe/da/fefeda96f85d80fc377d61689dacb8be.jpg',name:"Acer Predator Helios Neo 18 2024"},
        {image:'https://i.pinimg.com/736x/40/54/24/4054242537b4f5fa2d2c581b41675be3.jpg',name:"Acer Predator Helios Neo 16 2023"},
        {image:'https://i.pinimg.com/736x/77/50/9d/77509d2252578ead5b0e59485da4195d.jpg',name:"Acer Aspire 3"},
        {image:'https://i.pinimg.com/736x/a7/fd/88/a7fd884dfb55156231e94e4eeecf32ac.jpg',name:"Acer Nitro 5 17.3 inch 2022"},
        {image:'https://i.pinimg.com/736x/67/fa/d5/67fad5374e00f7134adb2c1737e6a0d9.jpg',name:"Acer Nitro 5 17.3 inch 2022"},
        {image:'https://i.pinimg.com/736x/40/54/24/4054242537b4f5fa2d2c581b41675be3.jpg',name:"Acer Nitro 5 17.3 inch 2022"},
  ],
  DELL: [
        {image:'https://i.pinimg.com/736x/0b/0e/a8/0b0ea8eeddef43e8dcdd38f4664f5fd5.jpg',name:"Dell Inspiron 3511 i5-11th"},
        {image:'https://i.pinimg.com/736x/14/65/8c/14658c595f67c97d4bc0048bcba0e8c4.jpg',name:"Dell Inspiron 3501 Ci5-11th"},
        {image:'https://i.pinimg.com/736x/04/6e/63/046e635288c4a736f40676c887266ef9.jpg',name:"Dell Latitude 3510 Ci7-10th"},
        {image:'https://i.pinimg.com/736x/5b/3a/19/5b3a19118a41dee4b4a21872f71d463e.jpg',name:"Dell Latitude 5430 (2023) Ci5-12th"},
        {image:'https://i.pinimg.com/736x/d0/4d/27/d04d274556850489e06769402cbd3809.jpg',name:"Dell XPS 13 Plus"},
        {image:'https://i.pinimg.com/736x/dd/3a/d7/dd3ad788712314cfc31525ab46f4aa15.jpg',name:"Dell XPS 17 9710"},
        {image:'https://i.pinimg.com/736x/b7/99/e5/b799e57859ca518b7810455b32783b2d.jpg',name:"Dell refreshes XPS 13"},
        {image:'https://i.pinimg.com/736x/76/1e/d3/761ed3f968fc5f90fb56215266de2e6e.jpg',name:"DELL XPS 13 PLUS 9320"},
  ],
  ALIEWARE: [
        {image:'https://i.pinimg.com/736x/06/94/86/069486e17c63b2d4e15a632b767c2387.jpg',name:"Alienware M18 R2"},
        {image:'https://i.pinimg.com/736x/3f/01/00/3f010036105ea4812cb52dc14c8de2c1.jpg',name:"Alienware 15 R4"},
        {image:'https://i.pinimg.com/736x/cd/34/39/cd34399931d3ee1350a255e83782a153.jpg',name:"Alienware M15 R7"},
        {image:'https://i.pinimg.com/736x/a7/1b/2e/a71b2ed40166d2ab1ba6453229cfbd0d.jpg',name:"Alienware X16 2023"},
        {image:'https://i.pinimg.com/736x/40/4c/44/404c447109e90508f934d08892cf0cba.jpg',name:"Alienware M18 R1"},
        {image:'https://i.pinimg.com/736x/28/85/83/28858390ff52c76d85da99341981758e.jpg',name:"Alienware's X14"},
        {image:'https://i.pinimg.com/736x/06/94/86/069486e17c63b2d4e15a632b767c2387.jpg',name:"Alienware M18 R2"},
        {image:'https://i.pinimg.com/736x/cd/34/39/cd34399931d3ee1350a255e83782a153.jpg',name:"Alienware M15 R7"},
  ],
  LENOVO: [
        {image:'https://i.pinimg.com/736x/0a/39/af/0a39af1a2ceed291d7d165a1bedee92e.jpg',name:"Lenovo ideapad 3s i5"},
        {image:'https://i.pinimg.com/736x/2b/4b/15/2b4b15025f3f96540dc2280eddf53458.jpg',name:"Lenovo ideapad 3 15.6"},
        {image:'https://i.pinimg.com/736x/71/40/a3/7140a393fbcc83fe42c96668a4566b87.jpg',name:"Lenovo Legion 5 17.3inch"},
        {image:'https://i.pinimg.com/736x/12/41/e8/1241e86f4b277781621a61a1e8b204b2.jpg',name:"Lenovo Legion Pro 7i"},
        {image:'https://i.pinimg.com/736x/86/7a/aa/867aaa93c3a882de042750d0c0bfed00.jpg',name:"Lenovo LOQ 15AHP9 "},
        {image:'https://i.pinimg.com/736x/3b/81/02/3b8102d216f167657b0101dc9e5dd5df.jpg',name:"Lenovo ThinkBook 16p G5 IRX"},
        {image:'https://i.pinimg.com/736x/f4/c2/de/f4c2de66d9281419db182d60ab3c7c10.jpg',name:"Lenovo Legion 5 16IRX9 "},
        {image:'https://i.pinimg.com/736x/ce/ce/30/cece30da08c8a9b160d14bd6ba681f56.jpg',name:"Lenovo Legion Slim 7i"},
  ]

};

onMounted(() => {
  products.value = productsByBrand[brand.value.toUpperCase()] || [];
});
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

.buy-now {
  background: #4361ee;
  color: white;
}

.buy-now:hover {
  background: #3648bb;
  transform: scale(1.05);
}
</style>
