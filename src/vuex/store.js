import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  user: null
}

const mutations = {
  INCREMENT (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  mutations
})
