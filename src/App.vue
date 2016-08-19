<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Hello from './components/Hello'
import Navbar from './components/Navbar'

export default {
  components: {
    Hello,
    Navbar
  }
}
</script>

<style>

</style>
