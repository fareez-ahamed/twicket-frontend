import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  user: null,
  token: null
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },

  LOGIN (state, token) {
    state.token = token
  }
}

export default new Vuex.Store({
  state,
  mutations
})
