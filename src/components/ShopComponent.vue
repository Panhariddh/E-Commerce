<template>
<div class="model-pc">
    <div class="model-pc-top">
    <img :src="image" :alt="name" />
    </div>
    <div class="model-pc-up">{{ name }}</div>
</div>
</template>

<script>
export default {
    name: "ShopComponent",
    props: {
        image: {
        type: String,
        required: true,
        },
        name: {
        type: String,
        required: true,
        },
    },
};
</script>

<style scoped>
.model-pc {
    width: 23%;
    padding-top: 2rem;
}

.model-pc-top {
    width: 100%;
    height: 80%;
    box-shadow: 1px 2px 5px rgb(19, 230, 245), inset 1px 2px 5px rgb(3, 225, 18);
    border-radius: 20px;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.model-pc-top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: all 0.5s;
    cursor: pointer;
}

.model-pc-top img:hover {
    transform: scale(1.1);
    box-shadow: 1px 2px 5px #4381f4;
}

.model-pc-up {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 2rem; /* Adjusted for better spacing */
}

.model-pc-up:hover {
    color: blue;
    transform: scale(1.1);
    transition: all 0.5s;
}
</style>
