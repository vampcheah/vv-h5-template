import { errorPage } from './routelist/error'
import { commonPage } from './routelist/default'
import { specialPage } from './routelist/special'

// 重新组织后导出
export default [
  ...errorPage,
  ...commonPage,
  ...specialPage
]
