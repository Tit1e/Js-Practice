import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: []
  },
  mutations: {
    setMenu(state, list) {
      state.menuList = list
    },
  },
  actions: {

  },
  getters,
})
