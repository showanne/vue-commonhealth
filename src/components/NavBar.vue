<template>
  <!-- header -->
  <nav id="header"  ref="header" class="navbar navbar-light bg-info" :class="{ 'hide': isHidden ,'fixed-top': isActive }" @click="headerToggle">
    <div class="container fluid-xl">
      <!-- 選單 -->
      <button type="button" class="navbar-toggler collapsed" :class="{ 'hide': isHidden }" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
        <div class="menu">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </div>
      </button>
      <div class="collapse navbar-collapse justify-content-end" :class="{ 'hide': isHidden }" id="nav">
        <div class="navbar-nav">
          <router-link to="/ad" class="d-md-block d-none">
            <img src="https://fakeimg.pl/327x82/CCC?text=Nav_AD" class="img-fluid m-auto rounded-sm" alt="Nav_AD">
          </router-link>
          <NavBarItem
            v-for="(item, value) in menuData"
            :key="value"
            :item="item"
            />
        </div>
      </div>

      <!-- logo -->
      <div class="navbar-logo mr-auto" :class="{ 'hide': isHidden }">
        <router-link to="/" class="navbar-brand ml-4">
          <img src="https://fakeimg.pl/136x29/CCC?text=logo" class="d-md-none d-block" alt="logo">
          <img src="https://fakeimg.pl/200x48/CCC?text=logo" class="d-md-block d-none" alt="logo">
        </router-link>
        <router-link to="/ad" class="navbar-brand ml-4 d-md-block d-none">
          <img src="https://fakeimg.pl/327x82/CCC?text=Nav_AD" class="rounded-sm" alt="Nav_AD">
        </router-link>
      </div>

      <!-- 搜尋 -->
      <form class="form-inline navbar-search" :class="{ 'active': isSearch }" v-show="isHidden" action="/search">
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
          <input type="search" class="form-control" aria-label="請輸入關鍵字" placeholder="請輸入關鍵字" name="key">
          <!-- v-show="isSearch" -->
          <div class="input-group-append">
            <button
              class="btn btn-outline-light"
              :type="isSearch ? 'submit' : 'button'"
              @click="searchBarToggle"
            >
              <img src="../assets/image/Union.svg" alt="search">
            </button>
          </div>
        </div>
      </form>

      <!-- 按鈕 -->
      <div class="navbar-btn">
        <p class="d-md-block d-none ml-5 mr-3 pt-3">會員限定</p>
        <button type="button" class="btn btn-outline-secondary" :class="{ 'hide': isHidden }">登入</button>
        <button type="button" class="btn btn-secondary ml-2 d-md-block d-none">加入會員</button>
        <button type="button" class="btn btn-success d-md-none" v-show="isHidden" v-if="!isSearch">加入 Line</button>
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
      windowWidth: window.innerWidth,
      lastScrollTop: 0,
      isHidden: false, // 手機版 header 切換效果
      isActive: true, // menu 展開
      isSearch: false, // 手機版 Search 點擊切換輸入框
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
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.windowWidth = window.innerWidth
    },
    // NOTE: header 手機版 2種狀態
    // 1. 初始：選單+logo+登入按鈕
    //          選單展開時，不能滑動頁面，並且希望 header 及選單可以占滿視窗
    // 2. 下滑後：篩選列+加入line按鈕
    //           篩選列點擊後，會展開輸入關鍵字的輸入框
    headerToggle () {
      // if (this.windowWidth > 768) {
      //   // header 選單展開時背景不滑動
      //   this.$refs.header.classList.toggle('overflow-hidden')
      //   // header 選單 手機版收合效果
      //   document.querySelector('.navbar .dropdown-menu').classList.remove('show')
      //   // this.$refs.nav.classList.remove('show')
      // } else {
      //   // dte
      // }
    },
    searchBarToggle (event) {
      if (this.windowWidth > 768) {
        // search 正常狀態
      } else {
        console.log(this.isSearch)
        if (this.isSearch === false) {
          event.preventDefault()
          this.isSearch = true
        }
      }
    },
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop

      if (this.windowWidth > 768) {
        this.isHidden = true
      } else {
        if (scrollTop > this.lastScrollTop) {
          this.isHidden = true
        } else if (scrollTop < this.lastScrollTop) {
          this.isHidden = false
        }

        this.lastScrollTop = scrollTop
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
