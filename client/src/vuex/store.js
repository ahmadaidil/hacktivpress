import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const initialState = {
  user: null,
  token: null,
  loginMsgErr: '',
  registerMsg: '',
  articles: [],
  article: {},
  category: []
}

export default new Vuex.Store({
  state: {
    ...initialState
  },
  mutations,
  actions
})
