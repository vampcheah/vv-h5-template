export default {
  namespaced: true,
  state: {
    info: {}
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.info = userInfo
    }
  },
  actions: {
    async setInfo({ dispatch, commit }, userInfo) {
      await dispatch('db/set', {
        dbName: 'sys',
        path: 'user.info',
        value: userInfo,
        user: true
      }, { root: true })

      commit('SET_USER_INFO', userInfo)
    },
    async load({ dispatch, commit }) {
      const loadInfo = await dispatch('db/get', {
        dbName: 'sys',
        path: 'user.info',
        defaultValue: {},
        user: true
      }, { root: true })

      commit('SET_USER_INFO', loadInfo)
    }
  }
}
