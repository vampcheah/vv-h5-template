
/**
 * 脱敏手机号
 *
 * @param number mobileNumber
 * @returns string mobileNumber
 */
export function maskMobileNumber(mobileNumber = '') {
  return mobileNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * 判断是否是微信
 *
 * @returns boolean
 */
export function isWeixin() {
  var ua = navigator.userAgent.toLowerCase()
  return ua.search(/MicroMessenger/i) !== -1
}

/**
 * 判断是移动设备还是还是web
 *
 * @returns boolean
 */
export function isDevice() {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.search(/iPhone\sOS/i) !== -1 || ua.search(/iPad/i) !== -1) { // ios
    return 'iOS'
  }
  if (ua.search(/Android/i) !== -1) {
    return 'Android'
  }
  return 'Web'
}
