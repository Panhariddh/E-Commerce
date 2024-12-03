// import './assets/main.css'
<<<<<<< HEAD
=======

>>>>>>> 8cdec170729773078532663081bb809073026322
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
