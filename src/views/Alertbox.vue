<template>
    <div class="success-screen">
        <h1>Payment Successfully!</h1>
        <img src="\src\assets\images\Hand.png" alt="hands"/>
        <p>Thank you for your order.</p>
        <button class="btn" @click="goToPaymentOption">Back to Home Screen</button>
    </div>
    </template>
    <script>
    export default {
      methods: {
        goToPaymentOption(){
          // Back to the order screen
          this.$router.push('/');
        }
      }
    };
    </script>
    <style scoped>
    .success-screen {
      text-align: center;
      font-family: Arial, sans-serif;
      padding: 2rem;
      background-color: #dff0d8;
      border-radius: 8px;
      max-width: 400px;
      margin: 50px auto;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid #c3e6cb;
    }
    h1 {
      margin-bottom: 1rem;
      color: #3c763d;
    }
    p {
      margin-bottom: 1.5rem;
      color: #3c763d;
    }
    .btn {
      padding: 10px 20px;
      font-size: 16px;
      color: #fff;
      background-color: #43c411;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .btn:hover {
      background-color: #238f29;
    }
    img{
      width: 150px;
      height: 150px;
    }
    </style>