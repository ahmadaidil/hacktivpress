import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const actions = {
  doLogin ({ commit }, user) {
    http.post('/user/signin', {
      username: user.username,
      password: user.password
    })
    .then(result => {
      commit('setLogin', result)
    })
    .catch(err => console.error(err))
  },
  verifyUser ({ commit }) {
    http.post('auth/verify', {
    }, {
      headers: {
        token: localStorage.getItem('accesstoken')
      }
    })
    .then(user => {
      commit('setUser', user.data)
    })
    .catch(err => {
      console.error(err)
      commit('setUser', null)
    })
  }
}

export default actions
