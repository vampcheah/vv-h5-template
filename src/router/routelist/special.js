import LayoutPage from '@/views/layouts/pageWithTabbar/index.vue'
//
/**
 * 基础路由
 * @type { *[] }
 */
export const specialPage = [
  {
    path: '/special',
    name: 'SpecialHome',
    component: LayoutPage,
    redirect: '/special/home2',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: 'home2',
        name: 'SpecialHome2',
        component: () => import('@/views/pages/application/home2/index'),
        meta: { title: '测试主框架', keepAlive: false }
      },
      {
        path: 'page1',
        name: 'SpecialPage1',
        component: () => import('@/views/pages/application/page1/index'),
        meta: { title: '展示1', keepAlive: false }
      },
      {
        path: 'page2',
        name: 'SpecialPage2',
        component: () => import('@/views/pages/application/page2/index'),
        meta: { title: '展示2', keepAlive: false }
      }
    ]
  }
]
