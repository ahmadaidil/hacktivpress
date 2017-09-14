<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="'/'">HacktivExpress</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav navbar-right">
          <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
          <!-- use the modal component, pass in the prop -->
          <!-- <modal v-if="showModal" @close="showModal = false"> -->
          <!-- <li><a role="button" data-toggle="modal" data-target="#login-modal">Login</a></li>
          <li v-if="user!=null"><a href="#">{{user.fullname}}</a></li>
          <li><a href="#" @click="logout" v-if="token!=null">Logout</a></li> -->
          <li><router-link :to="'/login'">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>

</style>
