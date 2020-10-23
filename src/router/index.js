import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteList from './loadroute'

// hack router push callback
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return VueRouterPush.call(this, location, onResolve, onReject)
  return VueRouterPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const createRouter = () =>
  new VueRouter({
    mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
    // base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: RouteList
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
