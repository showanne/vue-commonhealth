<template>
  <div class="container-fluid index">
    <div class="row align-items-center flex-column-reverse flex-md-row">
      <div class="col-12 col-md-5">
        <div class="card">
          <div class="card-body">
            <!-- 該文章資訊 -->
            <div class="card-info">
              <span class="badge badge-dark">影音</span>
              <span class="text-primary">不分癌</span>
              <span class="text-primary">常見治療問題</span>
              <span class="text-primary">常見問題</span>
            </div>
            <!-- 該文章標題 -->
            <p class="card-title">疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦？</p>
            <!-- 瞭解更多 -->
            <a href="#" class="btn btn-outline-secondary card-link card-link">立即閱讀</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <!-- <img src="https://picsum.photos/800/600" alt="news" title="news"> -->
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :effect="'cards'"
          :grab-cursor="true"
          :loop="true"
          :centered-slides="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :pagination="{
            clickable: true
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="(item, index) in bannerItems" :key="index">
            <img :src="`https://picsum.photos/768/432?random=${index}`" fluid alt="Banner Image">
          </SwiperSlide>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
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

<style scoped lang="scss">

</style>
