<template>
    <div class="payment-container bg-white rounded-md shadow-md p-6 max-w-md mx-auto">
      <!-- Header -->
      <div class="header flex justify-between items-center">
        <h1 class="text-lg font-bold">Payment</h1>
        <button @click="closePayment" class="text-red-500 font-bold text-lg">✖️</button>
      </div>
  
      <!-- Payment Methods -->
      <div class="payment-methods my-4">
        <div class="payment-method flex items-center justify-between border p-4 rounded-md mb-4">
          <div>
            <p class="font-medium">ABA PAY</p>
            <p class="text-sm text-gray-500">Scan to pay with ABA Mobile</p>
          </div>
        </div>
        <div class="payment-method flex items-center justify-between border p-4 rounded-md">
          <div>
            <p class="font-medium">KHQR</p>
            <p class="text-sm text-gray-500">Scan to pay with member bank app</p>
          </div>
        </div>
      </div>
  
      <!-- Terms and Conditions -->
      <div class="terms my-4 text-sm">
        <p class="text-red-600 font-bold">
          ជ្រើសរើសវិធីសាស្រ្តបង់ប្រាក់សូមប្រើប្រាស់ QR CODE ខាងលើសម្រាប់បង់ប្រាក់
        </p>
        <p class="text-gray-700 my-2">
          QR CODE គឺជាលក្ខណៈបង់ប្រាក់មិនអាចបង្វិលកិច្ចការជូនវិញបានទេ។
        </p>
        <div class="flex items-center">
          <input type="checkbox" id="agree" v-model="agreeToTerms" />
          <label for="agree" class="ml-2">
            <span>ខ្ញុំយល់ព្រម</span> I agree to all orders and there is no cancellation or refund
          </label>
        </div>
      </div>
  
      <!-- Footer -->
      <div class="footer flex justify-between items-center mt-6">
        <p class="font-bold text-lg">Total: ${{ totalPrice }}</p>
        <button
          :disabled="!agreeToTerms"
          @click="submitPayment"
          class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 disabled:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalPrice: 2784, // Replace with dynamic calculation if needed
        agreeToTerms: false,
      };
    },
    methods: {
      closePayment() {
        alert("Close Payment Screen");
      },
      submitPayment() {
        if (this.agreeToTerms) {
          alert("Payment Submitted!");
        } else {
          alert("Please agree to the terms and conditions.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>.payment-method:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

button:disabled {
  cursor: not-allowed;
}

input[type="checkbox"]:checked {
  background-color: #fbbf24;
  border-color: #fbbf24;
}

/* Enhanced button styling */
.payment-btn {
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 600;
  border-width: 2px;
  border-color: transparent;
  transition: all 0.3s ease;
}

.payment-btn:hover {
  transform: scale(1.05);
}

.payment-btn:disabled {
  background-color: #f48888;
  border-color: #e9dede;
  color: #010101;
  cursor: not-allowed;
}

.payment-btn:not(:disabled):active {
  transform: scale(1.1);
}

button {
  font-size: 20px;
  font-weight: bold;
  color: #4a4a4a;
  transition: color 0.3s ease;
}

/* Styling for header */
.header h1 {
  background-color: #3b82f6; /* Blue */
  color: white;
  padding: 12px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  margin-left: 550px;
  font-size: 32px;
}
</style>