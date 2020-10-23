export default {
  namespaced: true,
  state: {
    info: null
  },
  mutations: {
    SET_CLIENT_INFO: (state, clientInfo) => {
      state.info = clientInfo
    }
  },
  actions: {
    async set({ dispatch, commit }, clientInfo) {
      await dispatch('db/set', {
        dbName: 'sys',
        path: 'client.info',
        value: clientInfo,
        user: true
      }, { root: true })

      await commit('SET_CLIENT_INFO', clientInfo)
    },
    async load({ dispatch, commit }) {
      const loadInfo = await dispatch('db/get', {
        dbName: 'sys',
        path: 'client.info',
        defaultValue: {},
        user: true
      }, { root: true })
      console.log('loaded client info> ', loadInfo)

      await commit('SET_CLIENT_INFO', loadInfo)
    }
  }
}
