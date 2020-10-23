<template>
  <div id="page_home">
    <van-nav-bar fixed :border="false">
      <template #left>
        <van-icon name="user-o" size="18" class="circle-icon vv-fs-11" @click="gotoProfile" />
      </template>
      <template #right>
        <van-icon name="scan" class="vv-fs-16 vv-pl-10" @click="callScan" />
        <van-icon name="fire-o" class="vv-fs-16 vv-pl-10" @click="callAlert" />
      </template>
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <van-row class="zone-slider vv-mt-55">
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </van-row>
      <van-row class="zone-announcement vv-mt-5">
        <van-notice-bar class="swipe-bar" left-icon="volume-o" :scrollable="false">
          <van-swipe
            vertical
            class="swipe-notice vv-fs-9"
            :autoplay="3000"
            :show-indicators="false"
          >
            <van-swipe-item>此项目拥有基本Vant模板并且配置一些基础封装。</van-swipe-item>
            <van-swipe-item>大幅度更改原来源码风格，重新规范了开发格式和文件分布，配备了测试范例。</van-swipe-item>
            <van-swipe-item>本仓库经过某程度简化，改造,集成和文件重新分布，请慎重使用，不喜勿下。</van-swipe-item>
            <van-swipe-item>本仓库不定时更新。</van-swipe-item>
          </van-swipe>
        </van-notice-bar>
      </van-row>
      <van-row class="zone-content box-speedcall">
        <van-grid :border="false">
          <van-grid-item icon="star" text="文字" />
          <van-grid-item icon="shopping-cart" text="文字" />
          <van-grid-item icon="friends" text="文字" />
          <van-grid-item icon="gift-o" text="文字" />
          <van-grid-item icon="clock-o" text="文字" />
          <van-grid-item icon="like" text="文字" />
          <van-grid-item icon="gold-coin" text="文字" />
          <van-grid-item icon="phone-circle" text="文字" />
        </van-grid>
      </van-row>
      <van-row class="zone-content vv-ml-10 vv-mr-10">
        <van-cell-group class="cellgroup vv-pl-10 vv-pr-10" :border="false">
          <van-cell title="单元格" value="内容" />
          <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group>
      </van-row>
      <van-row class="zone-content vv-ml-10 vv-mr-10">
        <van-cell-group class="cellgroup vv-pl-10 vv-pr-10" :border="false">
          <van-cell is-link title="点击显示密码输入框" @click="showPasswordFrame=true" />
        </van-cell-group>
      </van-row>
      <div class="bottom-block" />
    </van-pull-refresh>
    <van-action-sheet v-model="showPasswordFrame" title="输入密码">
      <div class="content">
        <van-password-input
          :value="passwordEntry"
          info="密码: 123456"
          :maxlength="6"
          :error-info="errorInfo"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
          v-model="passwordEntry"
          readonly
          :show="showKeyboard"
        />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import './plugin'
export default {
  data() {
    return {
      passwordEntry: '',
      errorInfo: '',
      showKeyboard: true,
      showPasswordFrame: false,
      isLoading: false,
      images: [
        'https://www.designyourway.net/blog/wp-content/uploads/2019/11/jpg.jpg',
        'https://i.hungrygowhere.com/business/malaysia/63/31/00/00/61053.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Backstreet_Boys-_Larger_Than_Life.jpg'
      ]
    }
  },
  watch: {
    passwordEntry(value) {
      // 建议：
      // 只能在手机端里使用，在PC-Web的环境下，密码无法输入
      // 可以写入逻辑，错误时候停止输入2秒
      if (value.length === 6) {
        this.passwordEntry = ''
        if (value === '123456') {
          this.$toast({
            message: '成功',
            icon: 'smile'
          })
          this.showPasswordFrame = false
        } else {
          this.errorInfo = '密码错误'
        }
      } else if (value.length === 1) {
        this.errorInfo = ''
      }
    }
  },
  created() {
  },
  methods: {
    onInput(value) {
      this.$toast(value)
    },
    gotoProfile() {
      // this.$router.push('/page1')
      this.$toast({
        message: 'Call Profile',
        icon: 'fire-o'
      })
    },
    callScan() {
      this.$toast({
        message: 'Call Scan',
        icon: 'like-o'
      })
    },
    callAlert() {
      this.$toast({
        message: 'Call Alert',
        icon: 'like-o'
      })
    },
    onRefresh() {
      this.isLoading = false
      this.$router.push('/special/home2')
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss"></style>
