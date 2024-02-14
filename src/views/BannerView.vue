<template>
  <div class="banner-swiper">
    <Swiper
      v-if="isDesktop"
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
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <div class="text-content">
            <p>{{ slide.category }}</p>
            <p>{{ slide.tag }}</p>
            <h2>{{ slide.title }}</h2>
            <button>立即閱讀</button>
          </div>
          <div class="image-content">
            <img :src="`https://picsum.photos/768/432?random=${index}`" fluid alt="Banner Image">
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <Swiper v-else :effect="'slide'" :slides-per-view="1">
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <div class="image-content">
            <img :src="slide.image" alt="slide image">
          </div>
          <div class="text-content">
            <p>{{ slide.category }}</p>
            <p>{{ slide.tag }}</p>
            <h2>{{ slide.title }}</h2>
            <button>立即閱讀</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      slides: [
        {
          category: '文章類別1',
          tag: '文章tag1',
          title: '標題1',
          image: 'path/to/image1.jpg'
        },
        {
          category: '文章類別2',
          tag: '文章tag2',
          title: '標題2',
          image: 'path/to/image2.jpg'
        }
        // Add more slides as needed
      ]
    }
  },
  setup () {
    const isDesktop = ref(window.innerWidth >= 768) // Assuming desktop breakpoint is 768px
    window.addEventListener('resize', () => {
      isDesktop.value = window.innerWidth >= 768
    })
    return {
      isDesktop,
      modules: [EffectCards, Pagination, Navigation, Autoplay]
    }
  }
}
</script>

<style scoped>
.banner-swiper {
  width: 100%;
  height: 100%;
}

.slide-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 100%; */
}

.text-content {
  flex-grow: 1;
}

.image-content {
  border-radius: 12px;
}

.image-content img {
  width: 50%;
  height: auto;
  aspect-ratio: 768/432 ;
}

@media screen and (max-width: 767px) {
  .text-content {
    order: 2;
  }
  .image-content {
    order: 1;
  }
}
</style>
