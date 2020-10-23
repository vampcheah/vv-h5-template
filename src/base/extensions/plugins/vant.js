// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Tabbar, TabbarItem } from 'vant'
import { Row, Cell, CellGroup } from 'vant'
import { NavBar, Skeleton, Empty, PullRefresh } from 'vant'
import { Grid, GridItem } from 'vant'
import { Lazyload } from 'vant'
import { Form, Field, Picker } from 'vant'
import { Notify, Toast } from 'vant'
import { Tab, Tabs } from 'vant'
import { Tag } from 'vant'
import { Popup } from 'vant'
import { DatetimePicker } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { NoticeBar } from 'vant'
import { Icon } from 'vant'
import { DropdownMenu, DropdownItem } from 'vant'
import { Dialog } from 'vant'

Vue.use(Button)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Row)
Vue.use(Cell).use(CellGroup)
Vue.use(NavBar)
Vue.use(Skeleton)
Vue.use(Empty)
Vue.use(PullRefresh)
Vue.use(Grid).use(GridItem)
Vue.use(Lazyload)
Vue.use(Form).use(Field).use(Picker)
Vue.use(Notify).use(Toast)
Vue.use(Tab).use(Tabs)
Vue.use(Tag)
Vue.use(Popup)
Vue.use(DatetimePicker)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Swipe).use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(Icon)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Dialog)
