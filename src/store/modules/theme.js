import { get } from 'lodash'
import { $setting } from '@/base/config'

export default {
  namespaced: true,
  state: {
    list: get($setting, 'theme.list', []),
    activeName: get($setting, 'theme.list[0].name', $setting.theme.default)
  },
  getters: {
    activeSetting(state) {
      return state.list.find(theme => theme.name === state.activeName)
    }
  },
  actions: {
    async set({ state, commit, dispatch }, themeName) {
      state.activeName = state.list.find(e => e.name === themeName) ? themeName : state.list[0].name
      commit('dom')

      await dispatch('db/set', {
        dbName: 'sys',
        path: 'theme.activeName',
        value: state.activeName,
        user: true
      }, { root: true })
    },
    async load({ state, commit, dispatch }) {
      const activeName = await dispatch('db/get', {
        dbName: 'sys',
        path: 'theme.activeName',
        defaultValue: state.list[0].name,
        user: true
      }, { root: true })

      if (state.list.find(e => e.name === activeName)) {
        state.activeName = activeName
      } else {
        state.activeName = state.list[0].name

        await dispatch('db/set', {
          dbName: 'sys',
          path: 'theme.activeName',
          value: state.activeName,
          user: true
        }, { root: true })
      }

      commit('dom')
    }
  },
  mutations: {
    dom(state) {
      document.body.className = `theme-${state.activeName}`
    }
  }
}
