<template>
  <div class="login-container">
    <!-- Left Section with the Image -->
    <div class="left-section">
      <img src="https://account.statily.app/img/login_left_img.jpg" alt="Login Illustration" />
    </div>

    <!-- Right Section with the Form -->
    <div class="right-section">
      <h1>Welcome Back</h1>
      <p>Login to your account</p>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Username</label>
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
          <div class="password-container">
            <input
              :type="passwordVisible ? 'text' : 'password'"
              id="password"
              placeholder="Your password"
              v-model="password"
              required
            />
            <button
              type="button"
              class="toggle-password"
              @click="togglePassword"
            >
              <span v-if="passwordVisible">👁</span>
              <span v-else>👁️‍🗨️</span>
            </button>
          </div>
        </div>
        <p class="forgot-password">
          <a href="/reset-password">Forgot password?</a>
        </p>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div class="social-login">
        <p>Login with</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" /></a>
        </div>
      </div>
      <p>
        Don’t have an account? <a href="/register">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      passwordVisible: false,
    };
  },
  methods: {
    togglePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
    handleLogin() {
      alert(`Email: ${this.email}, Password: ${this.password}`);
      // Implement your login logic here
    },
  },
};
</script>

<style scoped>
/* Styling for the container */
.login-container {
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
  height: 74vh;
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

.login-button {
  background-color: #6c63ff;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
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