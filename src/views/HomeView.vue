<template>
  <div class="container-fluid">
    <div class="row align-items-center flex-column-reverse">
      <div class="col-12 col-md-6">
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
            <p class="card-title">花天酒地撒錢錢</p>
            <!-- 瞭解更多 -->
            <a href="#" class="btn btn-outline-secondary card-link card-link">立即閱讀</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
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
          <button class="swiper-button-prev"></button>
          <button class="swiper-button-next"></button>
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

.container-fluid {
  background-color: #F9F8F7;
}

.card {
  &-info {
    .badge {
      &::before {
          content: url('../assets/image/badge-arrow.svg');
        }
      & ~ span {
        padding: 6px;
        &::before {
          content: '#';
        }
      }
    }
  }
  &-body {}
}

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
