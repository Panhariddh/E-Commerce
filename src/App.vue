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
  </div>
</template>

<style>
/* Add global styles or container-level styles here */
.app {
  background-color: #F1F1F1;
  width: 100%;
  height: 120vh;
}
main {
  padding: 0 1rem;
}
</style>
