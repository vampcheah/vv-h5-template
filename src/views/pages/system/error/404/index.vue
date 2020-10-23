<template>
  <div>
    <van-nav-bar
      title="错误 404"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-row>
      <van-empty description="页面丢失了" />
    </van-row>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>
