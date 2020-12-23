<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="text-center">Login Screen</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form class="p-5">
          <b-input-group class="mb-3">
            <label class="d-block w-100">Username</label>
            <b-input v-model="username"></b-input>
          </b-input-group>
          <b-input-group class="mb-3">
            <label class="d-block w-100">Password</label>
            <b-input type="password" v-model="password"></b-input>
          </b-input-group>
          <b-input-group class="justify-content-center">
            <b-button class="w-25" :disabled="!username || !password" @click="login">
              Login
            </b-button>
          </b-input-group>
          <b-input-group class="justify-content-center align-items-center mt-5">
            <label class="mb-0">I dont have an account.</label>
            <router-link to="login" class="ml-2">
              <h5 class="mb-0">
                Create one!
              </h5>
            </router-link>
          </b-input-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {Decode} from "@/utils/jwt";
import ErrorHandler from "@/utils/error-handler";

export default {
  name: "login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      this.$http.post('/auth/login', {username: this.username, password: this.password})
          .then(async res => {
            const token = res.data;

            Decode(token).then(user => {
              this.$store.commit('setToken', token);
              this.$store.commit('setUser', user);

              this.$router.push('/')
            }).catch(ErrorHandler)
          })
          .catch(ErrorHandler)
    }
  }
}
</script>

<style scoped>

</style>
