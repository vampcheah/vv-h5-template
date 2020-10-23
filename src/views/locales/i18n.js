import Vue from 'vue'
import VueI18n from 'vue-i18n'
import util from '@/base/libs/util'

Vue.use(VueI18n)

/**
 * get from local-locale language files
 * merge with vant language files
 * @type {Object}
 */
function loadLocaleMessages() {
  const locales = require.context('@/views/locales/languages/', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  for (const key of locales.keys()) {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      const localeUI = require(`vant/es/locale/lang/${locales(key)._element}`)
      messages[locale] = {
        ...locales(key),
        ...localeUI ? localeUI.default : {}
      }
    }
  }
  return messages
}

const messages = loadLocaleMessages()

Vue.prototype.$languages = Object.keys(messages).map(language => ({
  text: messages[language]._name,
  value: language
}))

const i18n = new VueI18n({
  locale: util.cookies.get('lang') || process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages
})

export default i18n
