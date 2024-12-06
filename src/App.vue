<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="app">

    <div>
      <HeaderComponent />

      <main>
        <router-view />
      </main>
      
      <FooterComponent />
    </div>


    <div>
      <HeaderComponent />
    </div>

    <div>
      <HeroSection />
    </div>
    
    <div>
      <BrandList />
    </div>

    <div>
      <ProductGallery />
    </div>

    <div>
      <FooterComponent />
    </div>

  </div>
</template>

<style scoped>
/* Add global styles or container-level styles here */
.app {
  /* background-color: #e6e3e3;
  width: 100vw;
  height: 100vw;

  padding: 0 1rem; */
}
main {
  padding: 0 1rem;
}
</style>
