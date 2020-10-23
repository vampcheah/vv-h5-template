<template>
  <div>
    <van-nav-bar
      title="测试中"
      left-text="返回"
      :border="false"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-row class="vv-mt-10">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </van-row>
    <van-row class="vv-mt-10">
      <van-swipe-cell>
        <template #left>
          <van-button square type="primary" text="选择" />
        </template>
        <van-cell :border="false" title="特殊格式" value="左右滑动" />
        <template #right>
          <van-button square type="danger" text="删除" />
          <van-button square type="primary" text="收藏" />
        </template>
      </van-swipe-cell>
    </van-row>
    <van-row class="vv-mt-10 zone-container">
      <van-dropdown-menu>
        <van-dropdown-item v-model="selectedLocale" :options="$languages" @change="onChangeLocale" />
      </van-dropdown-menu>
    </van-row>
    <van-row class="vv-mt-10">
      <van-cell-group>
        <van-cell title="点击显示 Notify" @click="showNotify" />
      </van-cell-group>
    </van-row>
    <van-row class="vv-mt-10">
      <van-cell-group title="主题风格">
        <van-cell v-for="theme in list" :key="theme.name" :title="$t('theme.t-' + theme.name)" @click="handleSelectTheme(theme.name)" />
      </van-cell-group>
    </van-row>

  </div>
</template>

<script>
import './plugin'
import { mapState, mapActions } from 'vuex'
import localeMixin from '@/views/locales/mixin.js'

export default {
  mixins: [
    localeMixin
  ],
  data() {
    return {
      selectedLocale: this.$i18n.locale || 'en-US'
    }
  },
  computed: {
    ...mapState('theme', [
      'list',
      'activeName'
    ])
  },
  methods: {
    ...mapActions('theme', [
      'set'
    ]),
    handleSelectTheme(name) {
      this.set(name)
    },
    onClickLeft() {
      this.$router.go(-1)
    },
    showNotify() {
      this.$notify({ type: 'primary', message: '通知内容' })
    }
  }
}
</script>
