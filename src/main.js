import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Login from './Login'
import NavbarView from './components/NavbarView'
import Dashboard from './components/Dashboard'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
  '/login': {
    component: Login
  },
  '/': {
    component: NavbarView,
    subRoutes: {
      '/': {
        component: Dashboard
      }
    }
  }
})

router.beforeEach(transition => {
  if (!transition.to.router.app.userHasLoggedIn &&
      transition.to.path !== '/login') {
    console.log('Hi')
    transition.redirect({
      path: '/login'
    })
  } else {
    transition.next()
  }
})

router.start(App, 'body')
