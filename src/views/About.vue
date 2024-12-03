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

</style>
