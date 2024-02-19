<template>
  <div class="container-fluid index">
    <div class="row align-items-center flex-column-reverse flex-md-row">
      <div class="col-12 col-md-5">
        <Swiper
          ref="swiperFade"
          :modules="modulesFade"
          :slides-per-view="1"
          :effect="fade"
          :grab-cursor="false"
          :allowTouchMove="false"
          :loop="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="(article, index) in articleData" :key="index">
            <div class="card">
              <div class="card-body">
                <!-- 該文章資訊 -->
                <div class="card-info">
                  <span v-if="article.video" class="badge badge-dark">影音</span>
                  <span
                    v-for="tag in article.tags"
                    :key="tag"
                    class="text-primary">
                    {{ tag }}
                  </span>
                </div>
                <!-- 該文章標題 -->
                <p class="card-title">
                  {{ article.title }}
                </p>
                <!-- 立即閱讀 -->
                <a :href="article.href" class="btn btn-outline-secondary card-link card-link">立即閱讀</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="col-12 col-md-7">
        <!-- <img src="https://picsum.photos/800/600" alt="news" title="news"> -->
        <Swiper
          ref="swiperCard"
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :effect="'cards'"
          :grab-cursor="false"
          :allowTouchMove="false"
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
            el: '.swiper-pagination',
            clickable: true
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="(article, index) in articleData" :key="index">
            <router-link :to="article.href" class="text-white">
              <img :src="`${article.img}?random=${index}`" fluid alt="Banner Image">
            </router-link>
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
import { EffectCards, EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      articleData: [
        {
          title: '疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦？',
          video: true,
          tags: ['不分癌', '常見治療問題', '常見問題'],
          img: 'https://picsum.photos/768/432',
          href: '/article-1'
        },
        {
          title: '容易暈車怎麼辦？3招有效自救',
          video: false,
          tags: ['預防', '暈車'],
          img: 'https://picsum.photos/768/432',
          href: '/article-2'
        },
        {
          title: '柑橘防癌、抗發炎，大吉大利養生法一次看',
          video: true,
          tags: ['防癌', '抗發炎'],
          img: 'https://picsum.photos/768/432',
          href: '/article-3'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {
    // 驗證 $refs 是否正確
    console.log('$refs', this.$refs)
    console.log('swiperCard', this.$refs.swiperCard)
  },
  methods: {

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
      modulesFade: [EffectFade, Pagination],
      modules: [EffectCards, Pagination, Navigation, Autoplay]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
