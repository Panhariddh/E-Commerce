<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <input type="checkbox" id="show-password" v-model="showPassword" />
          <label for="show-password">Show Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="extra-links">
        <p>Don't have an account? <router-link to="/register">Register</router-link></p>
        <p>Forgot Password? <router-link to="/reset-password">Reset Password</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        showPassword: false,
      };
    },
    methods: {
      handleLogin() {
        alert(`Logging in with ${this.email}`);
        // Implement login logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  .form-group {
    margin-bottom: 15px;
  }
  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .extra-links {
    margin-top: 20px;
    font-size: 14px;
  }
  .extra-links a {
    color: #007bff;
    text-decoration: none;
  }
  .extra-links a:hover {
    text-decoration: underline;
  }
  </style>