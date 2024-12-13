<template>
  <HeaderComponent/>
  <div class="contact-page">
    <p class="breadcrumb">Home › <b>Contact Us</b></p>
    <h1 class="contact-title">Contact Us</h1>
    <h2 class="store-name">PC X Ember Store</h2><br>
    <ul>
      <li><strong>Address:</strong> Kampuchea Krom Blvd, Sangkat Teuk L’ak ti pir, Khan Toul Kork, Phnom Penh, Cambodia</li>
      <li><strong>Sales Phone Number:</strong> 012 111 111 / 010 112 321</li>
      <li><strong>Telegram/WhatsApp:</strong> +855 12 111 111</li><br>
      <li><strong>E-mail:</strong> panhariddh@emberpc.store</li><br>
      <li><strong>Physical Store Operation Hours:</strong>
        <ul>
          <li>9am - 8pm on Weekdays</li>
          <li>9am - 6pm on Weekends</li>
        </ul>
      </li><br>
      <li>We are closed during major public holidays such as Khmer New Year and Pchhum Ben festival.</li><br>
      <li><strong>Live Chat with Us:</strong>
        <ul><br>
          <li>សូមចុចតំណរភ្ជាប់ខាងក្រោម សម្រាប់ការផ្ញើសារដោយផ្ទាល់:</li>
          <li><strong>Telegram:</strong> <a href="https://t.me/emberpcstore" target="_blank">https://t.me/emberpcstore</a></li>
          <li><strong>WhatsApp:</strong> 012 111 111</li>
        </ul>
      </li>
    </ul>
  </div>
  <FooterComponent/>
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

</script>

<style>
.contact-page {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-family: Arial, sans-serif;
  color: #000;
  justify-content: start;
  background-color: #ffffff;
}

.breadcrumb {
    color: #7f7878; 
    font-size: 16px;
    margin-top: 0.5rem;
    z-index: 1; 
    position: relative;
  }

.contact-title {
  font-size: 28px; /* Adjust as needed */
  margin-bottom: 1rem;
  font-weight: bold;
}

.store-name {
  font-size: 24px; /* Adjust as needed */
  margin-bottom: 0.5rem;
  font-weight: bold;
}

ul {
  list-style-type: disc;
  padding: 0;
  margin-bottom: 20px;
}

li {
  margin-bottom: 0.4rem;
  
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>