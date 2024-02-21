<template>
  <router-link to="/ad">
    <img src="https://fakeimg.pl/300x250/CCC?text=AD_Block" class="img-fluid m-auto d-md-none d-block" alt="AD_Block">
    <img src="https://fakeimg.pl/970x250/CCC?text=AD_Block" class="img-fluid m-auto d-md-block d-none" alt="AD_Block">
  </router-link>
  <NavLink />
  <NavBar />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <div class="container bg-dark"></div>
</template>

<script>
// @ is an alias to /src
import NavLink from '@/components/NavLink.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavLink,
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  &.bg-dark {
    height: 300vh;
  }
}
</style>
