import cookies from './util.cookies'
import db from './util.db'
import log from './util.log'

const util = {
  cookies,
  db,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = function(titleText) {
  const processTitle = process.env.VUE_APP_TITLE || 'fxbfm-dev'
  const processSubTitle = titleText
  window.document.title = `${processTitle}${titleText ? ` | ${processSubTitle}` : ''}`
}

export default util
