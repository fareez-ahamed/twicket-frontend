import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export function login (store, email, password) {
  Vue.http.post('/oauth/login')
    .then(response => console.log(response))
    .error(error => console.log(error))
}
