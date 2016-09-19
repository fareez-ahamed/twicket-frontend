import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export function login (store, email, password) {
  Vue.http.post('/oauth/token', {
    grant_type: 'password',
    client_id: 2,
    client_secret: 'tKueFXm70JIooM8iS6I89eZP15Ql6lCXYHxXT62O',
    username: email,
    password: password,
    scope: ''
  }).then(response => {
    console.log(response)
    store.dispatch('CLEAR_LOGIN_MSG')
  }).catch(error => {
    console.log(error)
    store.dispatch('SET_LOGIN_MSG', 'danger', 'Invalid Credentials')
  })
}
