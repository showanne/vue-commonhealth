import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/style/app.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import 'swiper/css'
// import 'swiper/css/effect-cards'
import 'swiper/css/bundle'

import { register } from 'swiper/element/bundle'
const app = createApp(App)

// import 'swiper/bundle'

// import 'swiper/swiper.css'
// import 'swiper/swiper-bundle.css'

// main.js
app.use(register)

// app.component('swiper', Swiper)
// app.component('swiper-slide', SwiperSlide)

app.use(store).use(router).mount('#app')
