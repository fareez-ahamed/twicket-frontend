<template>
  <router-view></router-view>
</template>

<script>
import store from './vuex/store'

export default {
  replace: false,

  store,

  vuex: {
    getters: {
      userHasLoggedIn: (state) => {
        return state.user !== null
      }
    }
  }
}
</script>

<style>

</style>
