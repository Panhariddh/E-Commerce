<template>
    <div class="register-container">
      <div class="left-section">
        <img src="https://img.freepik.com/premium-vector/mobile-online-shopping-people-buy-dresses-shirts-pants-online-shops-shoppers-buying-internet-sale-flat-illustration-online-clothing-store-discount-total-sale-concept_229548-60.jpg?semt=ais_hybrid" alt="Register Illustration" />
      </div>
  
      <div class="right-section">
        <h1>Create an Account</h1>
        <p>Register to get started</p>
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Your username"
              v-model="username"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="register-button">Register</button>
        </form>
        <div class="social-login">
        <p>Login with</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" /></a>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      handleRegister() {
        this.$router.push("/"); // Navigate to home
      },
    },
  };
  </script>
<style scoped>
/* Styling for the container */
.register-container {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}
.left-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
}
.left-section img {
  width: 100%;
  height: 82vh;
}
.right-section {
  flex: 1;
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 24px;
  margin-bottom: 8px;
}
p {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}
form {
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 16px;
  text-align: left;
}
input {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.password-container {
  position: relative;
}
.toggle-password {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}
.forgot-password {
  margin-top: -10px;
  text-align: right;
  margin-bottom: 20px;
}
.register-button {
  background-color: #6c63ff;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 35%;
  margin-bottom: 20px;
}
.social-login {
  text-align: center;
  margin-bottom: 10px;
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.social-icons img {
  width: 24px;
  height: 24px;
}
a {
  color: #6c63ff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style> 