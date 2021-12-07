<template>
  <div>
    <h4 v-if="authenticated">
      Authenticated!
    </h4>
    <h4 v-if="!authenticated">
      You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
    </h4>
  </div>
</template>

<script>
// import App from '../../App.vue'

export default {
  name: 'home',
  props: ['auth', 'authenticated']
}
</script>

<style>
  a {
    cursor: pointer;
  }
</style>