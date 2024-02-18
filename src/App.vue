<template>
  <NavLink />
  <NavBar />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <div class="container bg-dark vh-100"></div>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
