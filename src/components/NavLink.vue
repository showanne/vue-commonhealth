<template>
  <!-- NavLink -->
  <nav class="navbar navbar-dark bg-primary py-1 d-md-flex d-none">
    <div class="container fluid-xl justify-content-end">
      <!-- nav  -->
      <router-link to="/page" class="ml-n1 pl-3 pr-2 py-1 text-white" v-for=" (link, value) in navLink" :key="value">{{ link }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    // msg: String
  },
  data () {
    return {
      navLink: [
        '康健',
        '大人社團',
        '康健知識庫',
        '康健線上學習',
        '康健嚴選',
        '康健出版',
        '康健影音',
        '書香花園'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  a {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0em;
  }
}
</style>
