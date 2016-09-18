<template>
  <div class="container">
    <div class="row login-box">
      <div class="col-sm-4 col-sm-offset-4">
        <div class="well well-lg">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <div class="col-sm-12">
                <input type="email" name="email" id="inputEmail" class="form-control" value="" required="required" title="">
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input type="password" name="password" id="inputPassword" class="form-control" value="" required="required" title="">
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <button type="button" @click.prevent="login" class="btn btn-block btn-primary">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from './vuex/actions'

export default {
  vuex: {
    actions: {
      login
    }
  }
}
</script>

<style>
.login-box {
  margin-top: 200px;
}
</style>
