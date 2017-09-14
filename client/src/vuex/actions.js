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
  },
  register ({ commit }, user) {
    http.post('/user/signup', {
      username: user.username,
      password: user.password
    })
    .then(result => {
      commit('registerMsg', 'register success')
    })
    .catch(err => console.error(err))
  },
  getArticles ({ commit }) {
    http.get('/article')
    .then(articles => {
      commit('setArticles', articles.data)
    })
    .catch(err => console.error(err))
  },
  getArticle ({ commit }, id) {
    http.get(`/article/${id}`)
    .then(article => {
      commit('setArticle', article.data)
    })
    .catch(err => console.error(err))
  },
  getCategory ({ commit }, category) {
    http.get(`/article/category/${category}`)
    .then(articles => {
      commit('setCategory', articles.data)
    })
    .catch(err => console.error(err))
  }
}

export default actions
