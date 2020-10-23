// 根据环境引入不同配置 process.env.NODE_ENV
// 统一引入 setting 做为全局配置
const config = require('./env.' + process.env.VUE_APP_ENV)
const setting = require('./setting')
const packageJson = require('../../../package.json')

module.exports = {
  version: packageJson.version,
  $setting: setting,
  ...config
}
