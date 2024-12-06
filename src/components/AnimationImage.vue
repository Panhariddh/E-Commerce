<template>
  <div class="containerImage">
    <div class="boxImage1">
      <img :src="images1[currentIndex1]" alt="" class="w-100 h-100 animated-image">
    </div>
    <div class="boxImage2">
      <img :src="images2[currentIndex2]" alt="" class="w-100 h-100 animated-image">
    </div>
    <div class="boxImage3">
      <img :src="images3[currentIndex3]" alt="" class="w-100 h-100 animated-image">
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationImage",
  data() {
    return {
      images1: [
        "https://i.pinimg.com/736x/97/06/b0/9706b038a841d33b9f001e002be7bfc7.jpg",
        "https://i.pinimg.com/736x/a8/0b/2c/a80b2c69257970df9fc3fa8b7f9f1b59.jpg",
        "https://i.pinimg.com/736x/32/38/58/323858092375150e338acbaf2de0bcc1.jpg",
        "https://i.pinimg.com/736x/53/e3/16/53e3165ed52818dd70f71a952b5e18c0.jpg"
      ],
      images2: [
        "https://i.pinimg.com/736x/58/96/e9/5896e90ddd3d561dd53c483c6a01d2b9.jpg",
        "https://i.pinimg.com/736x/51/be/9d/51be9d330e9dd1e9d36a3b988bd99362.jpg",
        "https://i.pinimg.com/736x/7f/36/b4/7f36b42bd6c9395fa9c7ddb0c2022eba.jpg",
        "https://i.pinimg.com/736x/3a/99/30/3a993083df855c7113d1bb2f5fe0d32c.jpg"
      ],
      images3: [
        "https://i.pinimg.com/736x/0d/0c/ac/0d0caca63ec46f1907759166ff4ebb70.jpg",
        "https://i.pinimg.com/736x/d9/61/13/d961137ba946e1b89d748f839b0a9616.jpg",
        "https://i.pinimg.com/736x/58/96/e9/5896e90ddd3d561dd53c483c6a01d2b9.jpg",
        "https://i.pinimg.com/736x/5b/49/f1/5b49f129f307be99ff9c4b8696da2532.jpg"
      ],
      currentIndex1: 0,
      currentIndex2: 0,
      currentIndex3: 0
    };
  },
  mounted() {
    this.startImageAnimation();
  },
  methods: {
    startImageAnimation() {
      setInterval(() => {
        this.currentIndex1 = (this.currentIndex1 + 1) % this.images1.length;
        this.currentIndex2 = (this.currentIndex2 + 1) % this.images2.length;
        this.currentIndex3 = (this.currentIndex3 + 1) % this.images3.length;
      }, 2000); // Change every 3 seconds
    }
  }
};
</script>

<style scoped>
.containerImage {
  width: 100%;
  height: 35rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.boxImage1,
.boxImage2,
.boxImage3 {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.636);
  animation: rotateImage 9s linear infinite;
}

.boxImage1 {
  width: 28%;
  height: 60%;
}

.boxImage2 {
  width: 40%;
  height: 83%;
}

.boxImage3 {
  width: 28%;
  height: 60%;
}
.animated-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  animation: rotateImage 9s linear infinite; /* Rotates images seamlessly */
}

@keyframes rotateImage {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}
</style>
