<template>
    <div class="payment-option">
      <h3>Select Payment Method</h3>
      <div class="payment-methods">
        <div class="payment-method" v-for="method in paymentMethods" :key="method.name">
          <img :src="method.image" :alt="method.name" />
          <span>{{ method.name }}</span>
        </div>
      </div>
  
      <h4>Add a New Card for <span>{{ selectedPaymentMethod }}</span></h4>
      <form @submit.prevent="addCard">
        <div class="form-group">
          <label for="name">Name on Card</label>
          <input type="text" id="name" v-model="cardDetails.name" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            v-model="cardDetails.number"
            placeholder="Enter card number"
          />
        </div>
        <div class="form-group">
          <label for="expiry">Expiry Date</label>
          <input type="text" id="expiry" v-model="cardDetails.expiry" placeholder="MM/YY" />
        </div>
        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" v-model="cardDetails.cvv" placeholder="CVV" />
        </div>
        <button type="submit">Add Card</button>
      </form>
  
      <h4>Your Cards</h4>
      <div class="your-cards">
        <div class="card" v-for="card in savedCards" :key="card.number">
          <img :src="card.image" :alt="card.type" />
          <span>Card Number: {{ card.number }}</span>
          <input type="radio" :value="card.number" v-model="selectedCard" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentMethods: [
          { name: "Visa", image: "https://static-00.iconduck.com/assets.00/visa-icon-2048x1313-a4r9sbqh.png" },
          { name: "MasterCard", image: "https://pngimg.com/d/mastercard_PNG23.png" },
          { name: "ABA", image: "https://cdn6.aptoide.com/imgs/2/a/6/2a6b391e2053870eac06539bd99d51a6_icon.png" },
          { name: "ACLEDA", image: "https://ibccambodia.com/wp-content/uploads/2021/02/ACLEDA-Logo-Existing-New-one-07-2-e1613988422171.png.webp" },
        ],
        selectedPaymentMethod: "Visa",
        cardDetails: {
          name: "",
          number: "",
          expiry: "",
          cvv: "",
        },
        savedCards: [
          { type: "Visa", number: "2314", image: "https://static-00.iconduck.com/assets.00/visa-icon-2048x1313-a4r9sbqh.png" },
        ],
        selectedCard: null,
      };
    },
    methods: {
      addCard() {
        if (
          this.cardDetails.name &&
          this.cardDetails.number &&
          this.cardDetails.expiry &&
          this.cardDetails.cvv
        ) {
          this.savedCards.push({
            type: this.selectedPaymentMethod,
            number: this.cardDetails.number,
            image: `${this.selectedPaymentMethod.toLowerCase()}.png`,
          });
          this.cardDetails = { name: "", number: "", expiry: "", cvv: "" };
        } else {
          alert("Please fill out all fields.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-option {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    margin: auto;
  }
  
  .payment-methods {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .payment-method {
    text-align: center;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100px;
  }
  
  .payment-method img {
    max-width: 60px;
    margin-bottom: 10px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #444;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #666;
  }
  
  .your-cards {
    margin-top: 20px;
  }
  
  .card {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .card img {
    max-width: 40px;
  }
  </style>
  