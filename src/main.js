// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome CSS
import '@fortawesome/fontawesome-free/js/all.js';  // Font Awesome JS

import 'bootstrap/dist/css/bootstrap.css'
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
