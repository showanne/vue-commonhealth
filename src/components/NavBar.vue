<template>
  <!-- header -->
  <nav id="header" class="navbar navbar-expand-xl navbar-light bg-white fixed-top" :class="{ 'hide': isHidden }">
    <div class="container">
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
          <!-- nav-link + active 一般選單的當前頁面效果 -->
          <!-- nav-link、dropdown-item + active 下拉選單的當前頁面效果 -->
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="nav-aboutUs" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              關於
            </a>
            <div class="dropdown-menu" aria-labelledby="nav-aboutUs">
              <a class="dropdown-item" href="./about">公司介紹</a>
              <a class="dropdown-item" href="./news_list">最新消息</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="nav-productList" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              產品項目
            </a>
            <div class="dropdown-menu" aria-labelledby="nav-productList">
              <a class="dropdown-item" href="./product_1">產品1</a>
              <a class="dropdown-item" href="./product_2">產品2</a>
              <a class="dropdown-item" href="./product_3">產品3</a>
              <a class="dropdown-item" href="./product_4">產品4</a>
              <a class="dropdown-item" href="./product_5">產品5</a>
            </div>
          </div>
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="nav-brandProductList" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              品牌專區
            </a>
            <div class="dropdown-menu" aria-labelledby="nav-brandProductList">
              <a class="dropdown-item" href="./brandProduct_1">品牌1</a>
              <a class="dropdown-item" href="./brandProduct_2">品牌2</a>
              <a class="dropdown-item" href="./brandProduct_3">品牌3</a>
              <a class="dropdown-item" href="./brandProduct_4">品牌4</a>
              <a class="dropdown-item" href="./brandProduct_5">品牌5</a>
            </div>
          </div>
          <a class="nav-item nav-link" href="./vendors">品牌代理</a>
          <a class="nav-item nav-link" href="./download">下載專區</a>
          <a class="nav-item nav-link" href="./contact">聯絡我們</a>
        </div>
      </div>

      <!-- logo -->
      <div class="d-flex mr-auto">
        <router-link to="/" class="navbar-brand" :class="{ 'hide': isHidden }">
          <img src="../assets/image/logo-1@3x.webp" alt="commonhealth">
        </router-link>
        <router-link to="/page" class="navbar-brand d-md-block d-none">
          <img src="../assets/image/logo-2@2x.png" alt="commonhealth">
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
            <button class="btn btn-outline-light" type="submit">搜尋</button>
          </div>
        </div>
      </form>

      <!-- 按鈕 -->
      <div class="d-flex align-items-center">
        <p class="d-md-block d-none">會員限定</p>
        <button type="button" class="btn btn-outline-secondary" :class="{ 'hide': isHidden }">登入</button>
        <button type="button" class="btn btn-secondary d-md-block d-none">加入會員</button>
        <button type="button" class="btn btn-success" v-show="isHidden">加入 Line</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    // msg: String
  },
  data () {
    return {
      isHidden: false
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
      if (window.pageYOffset > 50) {
        this.isHidden = true
      } else {
        this.isHidden = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
