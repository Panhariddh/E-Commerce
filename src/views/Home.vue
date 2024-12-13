<template>
    <div>
      <HeaderComponent/>
      <HeroSection />
      <AnimationImage/>
      <BrandList />
      <ProductGallery />
      <FooterComponent/>
    </div>
  </template>
  
  <script setup>
  import HeroSection from '@/components/HeroSection.vue'
  import BrandList from '@/components/BrandList.vue'
  import ProductGallery from '@/components/ProductGallery.vue'
  import AnimationImage from '@/components/AnimationImage.vue'
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
  </script>
  