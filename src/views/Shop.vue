<template>
  <HeaderComponent/>
  <div class="container-shop">
    <div class="branch" v-for="(products, brand) in productsByBrand" :key="brand" >
      <div class="row1">
        <button type="button">{{ brand }}</button>
        <button type="button" @click="$router.push(`/viewAll/${brand}`)">View All</button>
      </div>
      <div class="row2">
        <ShopComponent
          v-for="(computer, index) in (selectedBrand === brand ? products : products.slice(0, 4))"
          :key="index"
          :image="computer.image"
          :name="computer.name"
        />
      </div>
    </div>
  </div>
    <FooterComponent/>
  </template>
  
  <script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ShopComponent from '@/components/ShopComponent.vue';
import { ref } from "vue";

const selectedBrand = ref(null);
const productsByBrand = {
  APPLE: [
        { image: 'https://i.pinimg.com/736x/32/f6/2b/32f62bcdbd573761c93bfc881225e00f.jpg', name: "MacBook Air M1" },
        { image: 'https://i.pinimg.com/736x/b7/61/6c/b7616cfc0a3cce9d6e38bbe490dcae8b.jpg', name: "Apple MacBook Pro14” M4" },
        { image: 'https://i.pinimg.com/736x/dd/92/6b/dd926ba6d1669a474969522278ff0ea3.jpg', name: "Apple MacBook Pro14” M4 Pro" },
        { image: 'https://i.pinimg.com/736x/c4/05/1a/c4051a153384d172cf9fbe4e38b826a9.jpg', name: "Apple MacBook Pro14” M4 Max" },
  ],
  MSI: [
        { image: 'https://i.pinimg.com/736x/81/42/7b/81427b0bb46cc0c8e6893730e9bd80b4.jpg', name: "MSI Katana 17" },
        { image: 'https://i.pinimg.com/736x/59/50/62/59506260421ab009c55db6680570b5c9.jpg', name: "MSI Cyborg 15" },
        { image: 'https://i.pinimg.com/736x/ab/21/6a/ab216acc7a5bc4e00e905d85091b2dbb.jpg', name: "MSI Creator Z16 HX Studio" },
        { image: 'https://i.pinimg.com/736x/ac/55/36/ac5536c9ab87b69480410618cf2a0c7b.jpg', name: "MSI Raider GE78 Gaming" },
  ], 
  ASUS: [
        {image:'https://i.pinimg.com/736x/4d/c8/94/4dc894a0ca5115219eaf83c9628c18b0.jpg',name:"Asus TUF A15 2024"},
        {image:'https://i.pinimg.com/736x/79/03/24/7903246a0017d49996ed9bda83167252.jpg',name:"Asus Zephyrus G16"},
        {image:'https://i.pinimg.com/736x/0d/91/57/0d91573ac42b4ffee05d5fc0a7e232e4.jpg',name:"Asus ROG Zephyrus Duo 16"},
        {image:'https://i.pinimg.com/736x/64/2e/66/642e66e256804b59d28a90819e4a41d4.jpg',name:"Asus ROG Strix G17"}
    ],
  ACER:[
        {image:'https://i.pinimg.com/736x/1c/53/db/1c53db184f77e5263bf58fa9c3551de1.jpg',name:"Acer Nitro 5 2021"},
        {image:'https://i.pinimg.com/736x/e7/4c/b9/e74cb918f58322b7908ffda30fca5028.jpg',name:"Acer Nitro 5 17.3 inch 2022"},
        {image:'https://i.pinimg.com/736x/fe/fe/da/fefeda96f85d80fc377d61689dacb8be.jpg',name:"Acer Predator Helios Neo 18 2024"},
        {image:'https://i.pinimg.com/736x/40/54/24/4054242537b4f5fa2d2c581b41675be3.jpg',name:"Acer Predator Helios Neo 16 2023"}
    ],
  DELL:[
        {image:'https://i.pinimg.com/736x/0b/0e/a8/0b0ea8eeddef43e8dcdd38f4664f5fd5.jpg',name:"Dell Inspiron 3511 i5-11th"},
        {image:'https://i.pinimg.com/736x/14/65/8c/14658c595f67c97d4bc0048bcba0e8c4.jpg',name:"Dell Inspiron 3501 Ci5-11th"},
        {image:'https://i.pinimg.com/736x/04/6e/63/046e635288c4a736f40676c887266ef9.jpg',name:"Dell Latitude 3510 Ci7-10th"},
        {image:'https://i.pinimg.com/736x/5b/3a/19/5b3a19118a41dee4b4a21872f71d463e.jpg',name:"Dell Latitude 5430 (2023) Ci5-12th"}
    ],
  ALIENWARE:[
        {image:'https://i.pinimg.com/736x/06/94/86/069486e17c63b2d4e15a632b767c2387.jpg',name:"Alienware M18 R2"},
        {image:'https://i.pinimg.com/736x/3f/01/00/3f010036105ea4812cb52dc14c8de2c1.jpg',name:"Alienware 15 R4"},
        {image:'https://i.pinimg.com/736x/cd/34/39/cd34399931d3ee1350a255e83782a153.jpg',name:"Alienware M15 R7"},
        {image:'https://i.pinimg.com/736x/a7/1b/2e/a71b2ed40166d2ab1ba6453229cfbd0d.jpg',name:"Alienware X16 2023"}
    ],
   LENOVO: [
        {image:'https://i.pinimg.com/736x/0a/39/af/0a39af1a2ceed291d7d165a1bedee92e.jpg',name:"Lenovo ideapad 3s i5"},
        {image:'https://i.pinimg.com/736x/2b/4b/15/2b4b15025f3f96540dc2280eddf53458.jpg',name:"Lenovo ideapad 3 15.6"},
        {image:'https://i.pinimg.com/736x/71/40/a3/7140a393fbcc83fe42c96668a4566b87.jpg',name:"Lenovo Legion 5 17.3inch"},
        {image:'https://i.pinimg.com/736x/12/41/e8/1241e86f4b277781621a61a1e8b204b2.jpg',name:"Lenovo Legion Pro 7i"}
    ]
};
</script>

<style>
.container-shop {
  width: 100%;
  padding: 1rem;
  background-color: white;
}
.branch {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.row1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #cbfbf6;
  border-radius: 8px;
}
.row1 button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: #4381f4;
  color: white;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.row1 button:hover {
  background-color: white;
  color: #4381f4;
  border: 1px solid #4381f4;
}
.row2 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
</style>


  