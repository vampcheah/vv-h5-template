<template>
  <van-tabbar fixed route v-model="active" @change="handleChange">
    <van-tabbar-item v-for="item in data" :to="item.to" :icon="item.icon" :key="item.to.name">
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'BottomMenu',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>
