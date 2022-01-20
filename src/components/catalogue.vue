<template>
  <div class="catalogue">
      <div v-for="item,index of array" :key="index">
          <router-link :to='item.url'>{{item.name}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            array:[
                {
                    name:'demo',
                    url:'/demo'
                },
                {
                    name:'geometry',
                    url:'/geometryapi'
                },
                {
                    name:'material',
                    url:'/material'
                },
                {
                    name:'shadow',
                    url:'/shadow'
                },
                {
                    name:'coordinate',
                    url:'/coordinate'
                }
            ]
        }
    },
}
</script>

<style>

</style>