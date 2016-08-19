import Vue from 'vue'
import router from 'vue-router'
import App from './App'
import Login from './Login'

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'

Vue.use(router)

Vue({
  el: 'body',
  components: { App }
})

router.map({
  '/login': {
    component: Login
  }
})

router.start(App, 'body')
