import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
import { NoticeBar } from 'vant'
import { ActionSheet, PasswordInput, NumberKeyboard } from 'vant'

Vue.use(Swipe).use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(ActionSheet).use(PasswordInput).use(NumberKeyboard)
