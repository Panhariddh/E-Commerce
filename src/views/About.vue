<template>
  <div class="about-us-page">
    <div class="about-us">
      <nav class="breadcrumb">
        <a href="#">Home</a> > <span>About Us</span>
      </nav>
      <h1>About PC Ember Store</h1>
      <p class="welcome-message">
        Welcome to PC Ember Store, your trusted destination for all things PC!
        At PC Ember Store, we’re passionate about bringing the heat to your computing experience,
        whether you're a hardcore gamer, a creative professional, or just getting started
        with your first custom build. Our mission is to provide top-quality hardware,
        expert guidance, and reliable support, all tailored to meet the needs of our diverse customers.
      </p>
      <p class="mission">
        Founded with a commitment to excellence, PC Ember Store blends cutting-edge technology
        with personalized service. Our team of tech enthusiasts is always ready to help you
        find the perfect components, upgrade your setup, or troubleshoot any PC issues.
        We pride ourselves on creating a community where customers feel valued and empowered
        to build their dream systems.
      </p>
      <p class="tagline">
        At PC Ember Store, we don’t just sell PCs — we ignite your passion for technology.
      </p>
    </div>

    <!-- Footer Section -->
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
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>
/* General Page Styles */
.about-us-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #ffffff; /* Light background for better contrast */
}

/* About Us Section */
.about-us {
  font-family: Arial, sans-serif;
  margin: 20px;
  line-height: 1.6;
  color: #333; /* Darker text for clarity */
}

.breadcrumb {
  font-size: 14px;
  margin-bottom: 10px;
  color: #007bff; /* Clear link color */
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #222; /* Clear header color */
}

.welcome-message,
.mission,
.tagline {
  margin-bottom: 20px;
  font-size: 16px;
}

.tagline {
  font-style: italic;
}

/* Footer Section */
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
