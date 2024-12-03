<template>
  <section class="hero" :style="{ backgroundImage: 'url(\'https://i.pinimg.com/736x/ec/2b/b5/ec2bb5fed0eac5753504e8bbf510df9f.jpg\')' }">
    <div class="content">
      <div class="AllText">
        <h1 class="hero-title">Brand New Laptop</h1>
        <p class="hero-subtitle">We have in stock</p>
        <button>Shop Now</button>
      </div>
    </div>
    <div class="Image">
      <transition name="fade" mode="out-in">
        <div class="ALLImage" key="image">
          <img :src="ImageAnimation" alt="New Laptop" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import picture1 from '../assets/picture1.png';
import picture2 from '../assets/picture2.png';
import picture3 from '../assets/picture3.png';
import picture4 from '../assets/picture4.png';
import picture5 from '../assets/picture5.png';
import picture6 from '../assets/picture6.png';

export default {
  data() {
    return {
      imgs: [picture1, picture2, picture3, picture4,picture5,picture6],
      indexNbr: 0,
      intervalId: null,
    };
  },
  computed: {
    ImageAnimation() {
      return this.imgs[this.indexNbr];
    },
  },
  methods: {
    changeImage() {
      this.indexNbr = (this.indexNbr + 1) % this.imgs.length; // Cycle through images
    },
    startAutoChange() {
      this.intervalId = setInterval(this.changeImage, 1500); // Change image every 1.5 seconds
    },
    stopAutoChange() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoChange(); // Start automatic image change when component is mounted
  },
  beforeDestroy() {
    this.stopAutoChange(); // Clean up interval when component is destroyed
  },
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 35rem;
  display: flex;
  border: 1px solid black;
  background-size: cover;
  background-repeat: no-repeat;
}

.content {
  width: 40%;
  height: 100%;
  position: relative;
}

.AllText {
  position: absolute;
  top: 15%;
  left: 10%;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

button {
  background-color: #00c9a7;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #00a68c;
}

.Image {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  width: 90%;
  height: 90%;
}

img {
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease; /* Add transition for smoothness */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>