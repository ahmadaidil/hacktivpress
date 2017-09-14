import Router from '../router/index'

const mutations = {
  setLogin (state, payload) {
    if (payload.data.err) state.loginMsgErr = payload.data.msg
    else {
      localStorage.setItem('accesstoken', payload.data.token)
      Router.push('/')
    }
  },
  setUser (state, payload) {
    state.user = payload
    state.token = localStorage.getItem('accesstoken')
  }
}

export default mutations
