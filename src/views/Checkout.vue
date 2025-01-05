<template>
    <HeaderComponent/>
    <div class="checkout">
      <h2>Checkout</h2>
      <PaymentOption />
      <!-- Add other checkout-related components or sections here -->
    </div>
    <FooterComponent/>
  </template>
  
  <script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import PaymentOption from '@/components/PaymentOption.vue';
  </script>
  
  <style scoped>
  .checkout {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: Arial, sans-serif;
  color: #000;
  justify-content: start;
  background-color: #ffffff;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  