/**
 * error route
 * @type { *[] }
 */
export const errorPage = [
  {
    path: '*',
    name: '404',
    component: () => import('@/views/layouts/pageBlank'),
    redirect: {
      name: '/notfound'
    },
    children: [
      {
        path: '/notfound',
        name: '/notfound',
        meta: {
          title: 'NotFound'
        },
        component: () => import('@/views/pages/system/error/404')
      }
    ]
  }
]
