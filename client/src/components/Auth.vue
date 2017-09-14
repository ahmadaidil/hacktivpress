<template>
  <div class="container">
    <form class="form-horizontal">
      <fieldset>
        <legend>Login / Register</legend>
        <div class="form-group">
          <label for="inputEmail" class="col-lg-2 control-label">Username</label>
          <div class="col-lg-10">
            <input v-model="user.username" class="form-control" id="inputEmail" placeholder="Username" type="text">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="col-lg-2 control-label">Password</label>
          <div class="col-lg-10">
            <input v-model="user.password" class="form-control" id="inputPassword" placeholder="Password" type="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-10 col-lg-offset-2">
            <button type="reset" class="btn btn-primary" @click="login">Login</button>
            <button type="submit" class="btn btn-default" @click="register">Register</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'token',
      'loginMsgErr'
    ])
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'doLogin',
      'verifyUser'
    ]),
    login () {
      if (this.username === '' || this.password === '') {
        alert('username / password field can\'t null')
      } else {
        this.doLogin(this.user)
        this.user.username = ''
        this.user.password = ''
      }
    },
    register () {
      if (this.username === '' || this.password === '') {
        alert('username / password field can\'t null')
      } else {
        this.register(this.user)
        this.user.username = ''
        this.user.password = ''
      }
    }
  }
}
</script>

<style>
.container {
  width: 30%;
}
</style>
