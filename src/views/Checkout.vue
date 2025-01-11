<template>
<HeaderComponent/>
<div class="checkout">
    <div class="checkoutLeft"><CheckoutComponent/></div>
    <div class="checkoutRight"><PaymentOption /></div>

</div>
<FooterComponent/>
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import PaymentOption from '@/components/PaymentOption.vue';
import CheckoutComponent from '@/components/CheckoutComponent.vue';
</script>

<style scoped>
.checkout {
    width: 90%;
    display: flex;
    padding: 1rem;
    font-family: Arial, sans-serif;
    color: #000;
    justify-content: start;
    background-color: #ffffff;
    margin: 0 auto;
}
h2 {
    text-align: center;
    margin-bottom: 20px;
}
.checkoutLeft{
    width: 50%;
    height: auto;
}
.checkoutRight{
    width: 50%;
    height: auto;
}
</style>
