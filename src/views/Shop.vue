<template>
  <HeaderComponent/>
    <div>
      <h1>Welcome to EmberStore</h1>
      <p class="ps">This is the Shop page.</p>
    </div>
    <FooterComponent/>
  </template>
  
  <script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
  </script>

  <style>
  .ps{
  color: #000000; /* Adjust font color for the title */
  font-size: 24px; /* Optional: Adjust font size */
  margin-bottom: 0.5rem;
  }
</style>
  