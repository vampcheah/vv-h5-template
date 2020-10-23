<template>
  <div class="AppLayout">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view :key="key"></router-view>
      </keep-alive>
      <router-view :key="key" v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from './components/TabBar'
export default {
  name: 'AppLayout',
  computed: {
    key() {
      return this.$route.path
    }
  },
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home1'
          },
          icon: 'home-o'
        },
        {
          title: '关于我',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        },
        {
          title: '去测试',
          to: {
            name: 'SpecialHome2'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      // console.log('tab value:', v)
    }
  }
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/css/themes/launcher.scss';

</style>
