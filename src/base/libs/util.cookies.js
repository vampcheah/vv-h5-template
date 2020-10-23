import Cookies from 'js-cookie'
import { title, version } from '@/base/config'

const cookies = {}

/**
 * @description sve cookie value
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function(name = 'default', value = '', cookieSetting = {}) {
  const currentCookieSetting = {
    expires: 1,
    sameSite: 'strict'
  }
  Object.assign(currentCookieSetting, cookieSetting)
  Cookies.set(`${title}-${version}-${name}`, value, currentCookieSetting)
}

/**
 * @description get cookie value
 * @param {String} name cookie name
 */
cookies.get = function(name = 'default') {
  return Cookies.get(`${title}-${version}-${name}`)
}

/**
 * @description get all cookies value
 */
cookies.getAll = function() {
  return Cookies.get()
}

/**
 * @description delete cookie
 * @param {String} name cookie name
 */
cookies.remove = function(name = 'default') {
  return Cookies.remove(`${title}-${version}-${name}`)
}

export default cookies
