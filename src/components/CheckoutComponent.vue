<template>
    <div class="checkoutBox">
      <div class="BoxTop">
        <h2>Checkout</h2>
      </div>
      <div class="BoxCenter">
        <div class="row header">
          <div class="col">Image</div>
          <div class="col">Name</div>
          <div class="col">Price</div>
          <div class="col">Remove</div>
        </div>
        <div v-for="(checkoutProduct, index) in cartItems" :key="index" class="row product-row">
          <div class="col">
            <img :src="checkoutProduct.image" :alt="checkoutProduct.name" class="product-img" />
          </div>
          <div class="col">{{ checkoutProduct.name }}</div>
          <div class="col">{{ checkoutProduct.price }}</div>
          <div class="col">
            <button @click="removeProduct(index)" class="remove-btn">Remove</button>
          </div>
        </div>
        <!-- Total Row -->
        <div class="row Total">
          <div class="col"><h3>Total:</h3></div>
          <div class="col"><h3>${{ totalPrice }}</h3></div>
        </div>
      </div>
      <div class="row btnCheckout">
        <div class="col"><button type="button"  @click="cancelCheckout" class="btnCancel"><h4>Cancel</h4></button></div>
        <!-- <div class="col"><button type="button" @click="AlertOrder" class="btnOrder"><h4>Order</h4></button></div> -->
      </div>
    </div>
  </template>
  
  <script>
  // import Swal from 'sweetalert2';
  import { eventCart } from '@/stores/eventCart';
  import { ref } from 'vue';
  
  export default {
    name: "CheckoutComponent",
    data() {
      return {
        Name: ref(""), // Declare Name using ref inside data or setup
      };
    },
    computed: {
      cartCount() {
        return eventCart.value.cartCount;
      },
      cartItems() {
        return eventCart.value.cartItems;
      },
  
      totalPrice() {
        return this.cartItems
          .reduce((total, item) => {
            const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
            const quantity = item.quantity || 1; // Default quantity to 1 if not provided
            return total + numericPrice * quantity;
          }, 0)
          .toFixed(2); // Ensure the result is rounded to 2 decimal places
      },
    },
    methods: {
      removeProduct(index) {
        const removedItem = eventCart.value.cartItems.splice(index, 1);
        if (removedItem.length > 0) {
          eventCart.value.cartCount = eventCart.value.cartItems.length;
        }
      },

      cancelCheckout() {
      this.$router.push("/shop"); 
      },
    },
  };
  </script>
  
  <style scoped>
  .checkoutBox {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid black;
    overflow-y: auto;
  }
  .BoxTop {
    width: 100%;
    border-bottom: 1px solid black;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .BoxCenter {
    margin-top: 10px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 10px 0;
  }
  
  .header {
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid black;
  }
  
  .product-row {
    align-items: center;
  }
  
  .col {
    flex: 1;
    text-align: center;
  }
  .product-img {
    width: 50px;
    height: auto;
    border-radius: 5px;
    border: 1px solid black;
  }
  
  /* Remove button styling */
  .remove-btn {
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .remove-btn:hover {
    background-color: darkred;
  }
  .row.Total {
    font-weight: bold;
    font-size: 1.2rem;
    padding-top: 10px;
    border: 1px solid black;
    border-left: none;
    border-right: none;
  }
  
  .btnCheckout {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    gap: 15px; 
  }
  
  .btnCheckout .col {
    flex: 1;
    padding: 0;
  }
  
  .btnCancel {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btnCancel {
    background-color: #f44336;  /* Red for 'Cancel' */
    color: white;
  }
  
  .btnCancel:hover {
    background-color: #d32f2f;
    transform: scale(1.05);
  }
  
  .btnOrder {
    background-color: #4caf50;  /* Green for 'Order' */
    color: white;
  }
  
  .btnOrder:hover {
    background-color: #388e3c;
    transform: scale(1.05);
  }
  
  .btnCancel:focus, .btnOrder:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  </style>