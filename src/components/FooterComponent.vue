<script setup>
</script>

<template>
     <footer class="footer">
      <div class="footer-content">
        <div class="footer-section logo-search">
          <h3 class="footer-logo">Ember<span class="highlight">Store</span></h3>
          <div class="search-bar">
            <input type="text" placeholder="Search..." />
            <button><i class="fas fa-search"></i></button>
          </div>
          <p class="address">
            Address: Kampuchea Krom Blvd, Sangkat Teuk L’ak ti pir, Khan Toul Kork, Phnom Penh, Cambodia
          </p>
        </div>

        <div class="footer-section links">
          <h4>Information:</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section contact">
          <h4>Contact</h4>
          <p>Telegram: <a href="https://t.me/emberpcstore">https://t.me/emberpcstore</a></p>
          <p>Sale Phone Number: 012 111 111</p>
          <p>Email: <a href="mailto:emberStore@gmail.com">emberStore@gmail.com</a></p>
          <div class="social-icons">
            <a href="#" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </footer>
</template>

<style scoped>
.footer {
  background-color: #f2f2f2; /* Light gray background */
  padding: 20px 30px;
  border-top: 1px solid #ddd;
  color: #333; /* Text contrast */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  margin: 10px;
  flex: 1;
  min-width: 200px;
}

.footer-logo {
  font-size: 22px;
  font-weight: bold;
}

.footer-logo .highlight {
  color: #ff5733; /* Highlighted part of the logo */
}

.search-bar {
  display: flex;
  margin: 10px 0;
}

.search-bar input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  width: 70%;
}

.search-bar button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.address {
  font-size: 14px;
  color: #666; /* Clear and readable */
}

/* Footer Links */
.links h4,
.contact h4 {
  font-size: 18px;
  margin-bottom: 10px;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links ul li {
  margin: 5px 0;
}

.links ul li a {
  color: #007bff;
  text-decoration: none;
}

.links ul li a:hover {
  text-decoration: underline;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icons a {
  font-size: 20px;
  color: #333; /* Dark icons for contrast */
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #007bff; /* Blue hover effect */
}
</style>
