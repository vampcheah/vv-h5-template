import LayoutPage from '@/views/layouts/pageBlank/index.vue'
/**
 * 基础路由
 * @type { *[] }
 */
export const commonPage = [
  {
    path: '/',
    name: 'Home',
    component: LayoutPage,
    redirect: 'home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home1',
        component: () => import('@/views/pages/application/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/pages/application/home/about'),
        meta: { title: '关于我', keepAlive: false }
      }
    ]
  }
]
