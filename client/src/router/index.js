import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Auth from '@/components/Auth'
import Articles from '@/components/Articles'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Articles
        }
      ]
    },
    {
      path: '/login',
      component: Auth
    },
    {
      path: '/article/:id',
      component: Article,
      props: true
    }
  ]
})
