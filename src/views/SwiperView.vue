<template>
  <div>
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :effect="'cards'"
        :grab-cursor="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="true"
        :centered="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(item, index) in bannerItems" :key="index">
          <img :src="`https://picsum.photos/768/432?random=${index}`" fluid alt="Banner Image">
        </SwiperSlide>
        <div class="swiper-pagination"></div>
      </Swiper>
  </div>
</template>

<script>
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      bannerItems: [
        { title: '標題1', description: '描述1' },
        { title: '標題2', description: '描述2' },
        { title: '標題2', description: '描述2' },
        { title: '標題2', description: '描述2' },
        { title: '標題3', description: '描述3' }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    // onSlideChange () {
    //   console.log('Slide changed!')
    // }
  },
  setup () {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [EffectCards, Pagination, Navigation, Autoplay]
    }
  }
}
</script>

<style scoped>

/* .swiper-container {
  overflow: hidden;
} */

.swiper {
  width: 87%;
  /* height: 320px; */
}

.swiper-slide {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border-radius: 12px;
  /* font-size: 22px;
  font-weight: bold; */
  /* color: #fff; */
}
.swiper-slide img {
  aspect-ratio: 768/432 ;
}

.swiper-card-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  color: #fff;
  z-index: 10;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
