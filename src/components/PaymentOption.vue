<template>
  <div class="payment-option">
    <h3>Select Payment Method</h3>
    <div class="payment-methods">
      <div
        class="payment-method"
        v-for="method in paymentMethods"
        :key="method.name"
        :class="{ selected: selectedPaymentMethod === method.name }"
        @click="selectPaymentMethod(method.name)"
      >
        <img :src="method.image" :alt="method.name" />
        <span>{{ method.name }}</span>
      </div>
    </div>

    <!-- Conditional Rendering for Payment Forms -->
    <div v-if="selectedPaymentMethod === 'Visa'">
      <h4>Add a New Card for <span>{{ selectedPaymentMethod }}</span></h4>

    <!-- Credit Card Preview -->
      <div class="card-preview">
        <div class="card">
          <div class="card-chip"></div>

            <div class="card-details">
              <div class="card-number">
                {{ cardDetails.number || "**** **** **** ****" }}
              </div>

              <div class="card-info">
                <span class="card-holder">
                  {{ cardDetails.name || "Card Holder Name" }}
                </span>
                <span class="card-expiry">
                  {{ cardDetails.expiry || "MM/YY" }}
                </span>
              </div>
            </div>

          <img
            class="card-logo"
            src="https://static-00.iconduck.com/assets.00/visa-icon-2048x1313-a4r9sbqh.png"
            alt="Visa Logo"
          />
        </div>
      </div>

      <!-- Input Form -->
      <form @submit.prevent="addCard">
        <div class="form-group">
          <label for="name">Name on Card</label>
          <input
            type="text"
            id="name"
            v-model="cardDetails.name"
            placeholder="Enter name"
          />
        </div>

        <div class="form-group">
          <label for="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            v-model="cardDetails.number"
            maxlength="19"
            placeholder="Enter card number"
            @input="formatCardNumber"
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="expiry">Expiry Date</label>
            <input
              type="text"
              id="expiry"
              v-model="cardDetails.expiry"
              maxlength="5"
              placeholder="MM/YY"
              @input="formatExpiryDate"
            />
          </div>
          
          <div class="form-group">
            <label for="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              v-model="cardDetails.cvv"
              maxlength="3"
              placeholder="CVV"
            />
          </div>
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>

    <div v-if="selectedPaymentMethod === 'ABA' || selectedPaymentMethod === 'ACLEDA'">
      <h4>Scan the QR Code for {{ selectedPaymentMethod }}</h4>

      <div class="qr-code">
        <img
          :src="qrCodeImages[selectedPaymentMethod]"
          :alt="`${selectedPaymentMethod}`"
        />
      </div>

      <div class="col">
        <button type="button" class="btnOrder" >
          <Alertbox/>
          <h4>Order</h4></button>
      </div>
    </div>

    <div v-if="selectedPaymentMethod === 'Visa'">
      <h4>Your Cards</h4>
      <div class="your-cards">
        <div class="card" v-for="card in savedCards" :key="card.number">
          <img src="https://static-00.iconduck.com/assets.00/visa-icon-2048x1313-a4r9sbqh.png" :alt="card.type" />
          <span>Card Number: **** **** **** {{ card.number.slice(-4) }}</span>
          <input type="radio" :value="card.number" v-model="selectedCard" />
        </div>

        <div class="col">
          <button type="button" class="btnOrder" @click="goToAlertbox"><h4>Order</h4></button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ABA from "@/assets/images/ABA.jpg"
import Ace from "@/assets/images/Ace.jpg"
export default {
  data() {
    return {
      paymentMethods: [
        {
          name: "Visa",
          image: "https://static-00.iconduck.com/assets.00/visa-icon-2048x1313-a4r9sbqh.png",
        },
        {
          name: "ABA",
          image: "https://cdn6.aptoide.com/imgs/2/a/6/2a6b391e2053870eac06539bd99d51a6_icon.png",
        },
        {
          name: "ACLEDA",
          image: "https://ibccambodia.com/wp-content/uploads/2021/02/ACLEDA-Logo-Existing-New-one-07-2-e1613988422171.png.webp",
        },
      ],
      qrCodeImages: {
        ABA: ABA,
        ACLEDA: Ace,
      },
      selectedPaymentMethod: "Visa",
      cardDetails: {
        name: "",
        number: "",
        expiry: "",
        cvv: "",
      },
      savedCards: [],
      selectedCard: null,
    };
  },
  methods: {
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
    goToAlertbox(){
      // Go to the alertbox
      this.$router.push('Alertbox');
    },
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
        });
        this.cardDetails = { name: "", number: "", expiry: "", cvv: "" };
      } else {
        alert("Please fill out all fields.");
      }
    },
    formatCardNumber() {
      this.cardDetails.number = this.cardDetails.number
        .replace(/\D/g, "")
        .replace(/(\d{4})(?=\d)/g, "$1 ");
    },
    formatExpiryDate() {
      this.cardDetails.expiry = this.cardDetails.expiry
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d{0,2})$/, "$1/$2");
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
    background-color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

 .payment-method:hover{
    border: 1px solid rgb(76, 76, 182);
    transform: scale(1.1); 
    background-color: rgba(76, 76, 182, 0.1);
  }

  .payment-method img {
    max-width: 60px;
    margin-bottom: 10px;
  }

  .qr-code{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .qr-code img{
    width: 350px;
    height: 450px;
    border: 2px solid black;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #124ea8;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #006eff;
  }

  .btnOrder {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  .btnOrder {
    background-color: #4caf50;  /* Green for 'Order' */
    color: white;
  }

  .btnOrder:hover {
    background-color: #388e3c;
    transform: scale(1.05);
  }

  .your-cards {
    margin-top: 20px;
  }

  .card {
    position: relative;
    width: 320px;
    height: 200px;
    background: linear-gradient(135deg, #1e5799 0%, #2989d8 50%, #207cca 100%);
    border-radius: 12px;
    padding: 20px;
    color: white;
    font-family: "Arial", sans-serif;
  }
  
  .card img {
    max-width: 40px;
    
  }
  
  .card-preview {
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }

  .card-chip {
    width: 50px;
    height: 30px;
    background: rgb(255, 238, 0);
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .card-details {
    display: flex;
    flex-direction: column;
  }

  .card-number {
    font-size: 20px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  .card-info {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .card-logo {
    position: absolute;
    bottom: 15px;
    right: 20px;
    width: 60px;
  }
</style>
