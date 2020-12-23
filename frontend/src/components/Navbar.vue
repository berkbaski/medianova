<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="mb-5">
    <b-container>
      <b-navbar-brand to="/">Todo List</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>

            <b-nav-item to="login">Login</b-nav-item>
            <b-nav-item to="register">Register</b-nav-item>
            <b-nav-item>berkbaski</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
