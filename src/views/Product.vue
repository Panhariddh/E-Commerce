<template>
  <HeaderComponent/>
  <p class="breadcrumb">Home › <b>Product</b></p>
      <HeroSection/>
      <!-- <BrandList /> -->
      <ProductComponent/>
    
    <FooterComponent/>
  </template>
  
  <script setup>
import BrandList from '@/components/BrandList.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProductComponent from '@/components/ProductComponent.vue';

  </script>

  <style>
.breadcrumb {
    color: #7f7878; 
    font-size: 16px;
    margin-top: 1.5rem;
    z-index: 1; 
    position: relative;
    gap: 10px;
  }
</style>
  