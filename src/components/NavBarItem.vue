<template>
  <!-- NavBarItem -->
  <div class="nav-item dropdown" v-if="item.children">
    <a class="nav-link dropdown-toggle" href="#" id="nav-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ item.text }}
    </a>
    <div class="dropdown-menu" aria-labelledby="nav-item" v-if="item.children">
      <a class="dropdown-item"
        v-for="(item, value) in item.children"
        :key="value"
        :href="item.href">
        {{ item.text }}
      </a>
    </div>
  </div>
  <a v-else class="nav-item nav-link" :href="item.href">
    {{ item.text }}
  </a>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    item: {
      type: Object,
      default () {
        return {
          text: ''
        }
      }
    }
  }
}
</script>
