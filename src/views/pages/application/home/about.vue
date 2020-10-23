<!-- home -->
<template>
  <div class="about-container">
    <div class="warpper">
      <div class="list">
        <div class="demo-home__title">VUE H5开发模板</div>
        <div class="item">{{ userInfo.username !== undefined ? `${userInfo.username}test` : 'nothing' }}</div>
        <div class="item">
          <van-button v-if="userInfo.username === undefined" type="warning" size="small" @click="doDispatch">点我加载`用户名称`~</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 请求接口
// import { apiUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    // request from API
    initData() {
      // 请求接口数据，仅作为展示，需要配置src/base/config下环境文件
      // const params = { user: 'sunnie' }
      // getUserInfo(params)
      //   .then(() => { })
      //   .catch(() => { })
    },
    doDispatch() {
      this.$store.dispatch('user/setInfo', { username: '用户名称' }, { root: true })
    }
  }
}
</script>
<style lang="scss">
.about-container {
  /* 你的命名空间 */
  background: #440011;
  height: 100vh;
  box-sizing: border-box;
  .warpper {
    padding: 50px 12px 12px 12px;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      font-size: 14px;
      .demo-home__title {
        margin: 0 0 6px;
        font-size: 32px;
        color: #fffeee;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .item {
        font-size: 14px;
        line-height: 34px;
        color: #fffeee;
        a {
          text-decoration: underline;
        }
        .van-button {
          /* vant-ui 元素*/
          background: #ff5500;
        }
      }
    }
  }
}
</style>
