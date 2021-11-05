<template>
  <div class="home">
    <catalogue></catalogue>
    <router-view></router-view>
  </div>
</template>

<script>
import catalogue from '../components/catalogue.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    catalogue
  }
}
</script>

<style>
.home{
  display: grid;
  grid-template-columns: 150px 1fr;
}
</style>