<template>
  <!-- header -->
  <nav id="header" class="navbar navbar-light bg-white" :class="{ 'hide': isHidden }">
    <div class="container fluid-xl">
      <!-- 選單 -->
      <button type="button" class="navbar-toggler collapsed" :class="{ 'hide': isHidden }" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
        <div class="menu">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </div>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="nav">
        <div class="navbar-nav">
          <router-link to="/ad">
            <img src="https://fakeimg.pl/327x82/CCC?text=Nav_AD" class="img-fluid m-auto d-md-none d-block rounded-sm" alt="Nav_AD">
          </router-link>
          <NavBarItem
            v-for="(item, value) in menuData"
            :key="value"
            :item="item"
            />
        </div>
      </div>

      <!-- logo -->
      <div class="d-flex mr-auto">
        <router-link to="/" class="navbar-brand ml-4" :class="{ 'hide': isHidden }">
          <img src="../assets/image/logo-1@3x.webp" alt="commonhealth">
        </router-link>
        <router-link to="/ad" class="navbar-brand ml-4 d-md-block d-none">
          <img src="https://fakeimg.pl/327x82/CCC?text=Nav_AD" class="d-md-none d-block rounded-sm" alt="Nav_AD">
        </router-link>
      </div>

      <!-- 搜尋 -->
      <form class="form-inline navbar-search" v-show="isHidden">
        <div class="input-group">
          <select class="custom-select" name="category">
          <option selected>全部</option>
          <option value="1">文章</option>
          <option value="2">影音</option>
          <option value="3">食譜</option>
          <option value="4">課程</option>
          <option value="5">商品</option>
          <option value="6">特色內容</option>
          <option value="7">知識庫</option>
          </select>
          <input type="search" class="form-control" aria-label="請輸入關鍵字" placeholder="請輸入關鍵字">
          <div class="input-group-append">
            <button class="btn btn-outline-light" type="submit">
              <img src="../assets/image/Union.svg" alt="">
            </button>
          </div>
        </div>
      </form>

      <!-- 按鈕 -->
      <div class="navbar-btn">
        <p class="d-md-block d-none ml-5 mr-3 pt-3">會員限定</p>
        <button type="button" class="btn btn-outline-secondary" :class="{ 'hide': isHidden }">登入</button>
        <button type="button" class="btn btn-secondary ml-2 d-md-block d-none">加入會員</button>
        <button type="button" class="btn btn-success d-md-none" v-show="isHidden">加入 Line</button>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarItem from '@/components/NavBarItem.vue'
export default {
  name: 'NavBar',
  components: {
    NavBarItem
  },
  props: {
    // msg: String
  },
  data () {
    return {
      isHidden: false,
      menuData: [
        {
          text: '健康焦點',
          children: [
            {
              text: '醫療',
              href: './medical'
            },
            {
              text: '癌症',
              href: './cancer'
            },
            {
              text: '熟齡',
              href: './age'
            },
            {
              text: '養生',
              href: './wellness'
            },
            {
              text: '營養',
              href: './nutrition'
            },
            {
              text: '運動',
              href: './exercise'
            },
            {
              text: '心靈',
              href: './spirit'
            },
            {
              text: '人物',
              href: './character'
            }
          ]
        },
        {
          text: '健康檢測',
          children: [
            {
              text: '症狀檢測',
              href: './symptom-check'
            },
            {
              text: '聰明補營養',
              href: './smart-nutrition'
            },
            {
              text: '線上測驗',
              href: './online-test'
            },
            {
              text: 'BMI 指數',
              href: './bmi'
            },
            {
              text: '症狀檢測',
              href: './symptom-check'
            },
            {
              text: '聰明補營養',
              href: './smart-nutrition'
            },
            {
              text: '線上測驗',
              href: './online-test'
            },
            {
              text: 'BMI 指數',
              href: './bmi'
            },
            {
              text: '理想體重計算',
              href: './bmi'
            },
            {
              text: '每日所需熱量',
              href: './bmi'
            },
            {
              text: '運動強度計算',
              href: './bmi'
            },
            {
              text: '安全期計算',
              href: './bmi'
            },
            {
              text: '生理期瘦身法',
              href: './bmi'
            }
            // ...省略其它次菜單項
          ]
        },
        {
          text: '特色內容',
          children: [
            {
              text: '數位專題',
              href: './topic'
            },
            {
              text: '深度報導',
              href: './report'
            },
            {
              text: 'BBC News 中文',
              href: './bbc-news'
            },
            {
              text: '真健康飲食',
              href: './diet'
            },
            {
              text: 'AA人生動起來',
              href: './aa'
            }
          ]
        },
        {
          text: '專家專欄',
          children: [
            {
              text: '專欄總覽',
              href: './columns'
            },
            {
              text: '楊定一',
              href: './author-1'
            },
            {
              text: '吳明賢',
              href: './author-2'
            },
            {
              text: '吃藥問康健',
              href: './author-2'
            },
            {
              text: '口袋熊醫師',
              href: './author-2'
            },
            {
              text: '醫生這樣說',
              href: './author-2'
            },
            {
              text: '吃對營養',
              href: './author-2'
            },
            {
              text: '心靈關係',
              href: './author-2'
            },
            {
              text: '熟齡人生',
              href: './author-2'
            },
            {
              text: '生活秒方',
              href: './author-2'
            },
            {
              text: '其他主題',
              href: './author-2'
            }
            // ...省略其它作者
          ]
        },
        {
          text: '論壇活動',
          href: './forum'
        },
        {
          text: '課程講座',
          href: './courses'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.innerWidth > 768) {
        this.isHidden = true
      } else {
        if (window.pageYOffset > 50) {
          this.isHidden = true
        } else {
          this.isHidden = false
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
