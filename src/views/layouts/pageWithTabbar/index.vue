<template>
  <div class="LayoutPageWithTabbar">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view :key="key"></router-view>
      </keep-alive>
      <router-view :key="key" v-else></router-view>
    </div>
    <div class="layout-footer">
      <BottomMenu :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import BottomMenu from '@/views/layouts/pageWithTabbar/components/bottom-menu'
export default {
  name: 'LayoutPageWithTabbar',
  computed: {
    key() {
      return this.$route.path
    }
  },
  data() {
    return {
      tabbars: [
        {
          title: '测试首页',
          to: {
            name: 'SpecialHome2'
          },
          icon: 'user-o'
        },
        {
          title: '测试1',
          to: '/special/page1',
          icon: 'fire-o'
        },
        {
          title: '测试2',
          to: '/special/page2',
          icon: 'fire-o'
        },
        {
          title: '回到首页',
          to: {
            name: 'Home1'
          },
          icon: 'home-o'
        }
      ]
    }
  },
  components: {
    BottomMenu
  },
  methods: {
    handleChange(v) {
      // console.log('Special Tab:', v)
    }
  }
}
</script>

<style lang="scss">
// 注册主题
@import '@/assets/css/themes/launcher.scss';
</style>
