import util from '@/base/libs/util.js'
import { title, version } from '@/base/config'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state state
     */
    versionShow() {
      util.log.capsule(title, `v${version}`)
    }
  }
}
