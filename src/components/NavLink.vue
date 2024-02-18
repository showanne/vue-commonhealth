<template>
  <!-- NavLink -->
  <nav class="navbar navbar-dark bg-primary d-md-flex d-none">
    <div class="container">
      <!-- nav  -->
      <router-link to="/page" class="text-white">康健</router-link>
      <router-link to="/page" class="text-white">大人社團</router-link>
      <router-link to="/page" class="text-white">康健知識庫</router-link>
      <router-link to="/page" class="text-white">康健線上學習</router-link>
      <router-link to="/page" class="text-white">康健嚴選</router-link>
      <router-link to="/page" class="text-white">康健出版</router-link>
      <router-link to="/page" class="text-white">康健影音</router-link>
      <router-link to="/page" class="text-white">書香花園</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  a {}
}
</style>
