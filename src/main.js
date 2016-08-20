import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Login from './Login'
import NavbarView from './components/NavbarView'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
  '/login': {
    component: Login
  },
  '/': {
    component: NavbarView
  }
})

router.start(App, 'body')
