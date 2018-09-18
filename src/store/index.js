import vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters
})
export default store
