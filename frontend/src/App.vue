<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>
<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar},
  beforeCreate() {
    this.$store.commit('setToken', this.$store.getters.tokenFromLocalStorage);
    this.$store.commit('setUser', this.$store.getters.userFromLocalStorage)
  }
}
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
