<template>
  <div class="container">
    <input type="text" placeholder="Username" v-model="username"><br>
    <input type="text" placeholder="Password" v-model="password"><br>
    <button class="btn btn-primary">Login</button><br>
    <router-link :to="'/register'">Register</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>

</style>
