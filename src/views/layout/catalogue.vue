<template>
  <div class="catalogue">
    <div class="list">
      <header>目录</header>
      <div class="item" v-for="item of array" :key="item.name">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from '../../router'
export default {
  data() {
    return {
      // konva 目录
      catalogueArr: [
        {
          name: '首页',
          path: '/indexPage',
          component: () => import('../konva/index.vue')
        },
        {
          name: '矩形',
          path: '/rect',
          component: () => import('../konva/rect.vue')
        },
        {
          name: '线',
          path: '/line',
          component: () => import('../konva/line.vue')
        },
        {
          name: '获取Element属性',
          path: '/getElement',
          component: () => import('../konva/getElement.vue')
        }
      ],
      // three 目录
      catalogueArrT: [
        {
          name: 'DEMO',
          path: '/demo',
          component: () => import('../three/demo.vue')
        },
        {
          name: 'coordinate',
          path: '/coordinate',
          component: () => import('../three/coordinate.vue')
        },
        {
          name: 'geometryapi',
          path: '/geometryapi',
          component: () => import('../three/geometryapi.vue')
        },
        {
          name: 'material',
          path: '/material',
          component: () => import('../three/material.vue')
        },
        {
          name: 'scene7',
          path: '/scene7',
          component: () => import('../three/scene7.vue')
        },
        {
          name: 'shadow',
          path: '/shadow',
          component: () => import('../three/shadow.vue')
        }
      ],
      array: []
    }
  },
  mounted() {
     
    console.log('meta>>', this.$route.meta)
    if (this.$route.meta.name === 'three') {
      this.array = this.catalogueArrT
      this.catalogueArrT.forEach((item) => {
        router.addRoute('three', item)
      })
    }
    if (this.$route.meta.name === 'konva') {
      this.array = this.catalogueArr
      this.catalogueArr.forEach((item) => {
        router.addRoute('konva', item)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.catalogue {
  display: flex;
  height: 100vh;
  .list {
    background-color: rgb(238, 243, 238);
    width: 300px;
    header {
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid rgb(224, 224, 224);
    }
    .item {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgb(224, 224, 224);
      a {
        text-decoration: none;
        &:visited {
          color: black;
        }
      }
    }
  }
  .content {
    width: calc(100vw - 300px);
  }
}
</style>
