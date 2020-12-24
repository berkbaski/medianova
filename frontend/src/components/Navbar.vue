<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-5">
    <b-container>
      <b-navbar-brand to="/">Todo List</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>

            <b-nav-item v-if="!isAuth" to="login">Login</b-nav-item>
            <b-nav-item v-if="!isAuth" to="register">Register</b-nav-item>
            <b-nav-item v-if="isAuth">{{ username }}</b-nav-item>
            <b-nav-item v-if="isAuth" @click="logout">
              Logout
              <b-icon icon="door-open"></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters([
      'isAuth',
      'username'
    ])
  }
}
</script>

<style scoped>

</style>
