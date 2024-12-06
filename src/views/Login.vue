<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          placeholder="Enter your password"
          v-model="password"
        />
      </div>
      <div>
        <input type="checkbox" id="show-password" v-model="showPassword" />
        <label for="show-password">Show password</label>
      </div>
      <button type="submit" class="login-button">LOGIN</button>
    </form>

    <hr />

    <!-- Google Login Button -->
    <div class="google-login">
      <button>
        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google Logo" class="google-logo" />
        Sign in with Google
      </button>
    </div>

    <div class="additional-links">
      <p>Don’t have an account? <router-link to="/register">Register</router-link></p>
      <p>Forget Password? <router-link to="/reset-password">Reset Password</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false, // Bind showPassword to control the checkbox
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
/* Add your styles here */
.login-container {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

form {
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  background-color: #4285f4;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60%; /* Ensures the login button spans the full width */
  margin-bottom: 10px; /* Space between the login and Google button */
}

.google-login button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #4285f4;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; /* Ensures the Google button spans the full width */
}

.google-logo {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.additional-links p {
  margin: 5px 0;
}
</style>