import { isDevice } from '@/base/libs/util.mobile.js'

// 开发环境下面使用vConsole进行调试
if (process.env.NODE_ENV === 'development' && isDevice() !== 'Web') {
  const VConsole = require('vconsole')
  new VConsole()
}
