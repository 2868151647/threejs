<template>
  <div>THREE.Geometry()已经废弃了</div>
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      scene: null
    }
  },
  setup() {
    const a = ref({
      a: 2
    })
    return { a }
  },
  methods: {
    geometry() {
      // this.scene = new THREE.Scene();
      this.scene = {
        a: 1
      }
      console.log(this.scene);
      // var geometry = new THREE.Geometry();
      // console.log(geometry)

    }
  },
  mounted() {
    console.log(this.a)
    this.geometry()
  },
}
</script>

<style>
</style>