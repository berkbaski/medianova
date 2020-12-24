<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="text-center">Register Screen</h1>
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
          <b-input-group class="mb-3">
            <label class="d-block w-100">Password Again</label>
            <b-input type="password" v-model="passwordAgain"></b-input>
          </b-input-group>
          <b-input-group class="justify-content-center">
            <b-button class="w-25" :disabled="!username || !password || !passwordAgain || (password != passwordAgain)"
                      @click="register">
              Register
            </b-button>
          </b-input-group>
          <b-input-group class="justify-content-center align-items-center mt-5">
            <label class="mb-0">I have an account.</label>
            <router-link to="login" class="ml-2">
              <h5 class="mb-0">
                Log In!
              </h5>
            </router-link>
          </b-input-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ErrorHandler from "../utils/error-handler";
import {Decode} from "../utils/jwt";

export default {
  name: "register",
  data() {
    return {
      username: '',
      password: '',
      passwordAgain: ''
    }
  },
  methods: {
    async register() {
      this.$http.post('/auth/register', {username: this.username, password: this.password})
          .then(async res => {
            const token = res.data;

            Decode(token).then(user => {
              localStorage.setItem('user', JSON.stringify(user))
              localStorage.setItem('token', token);

              this.$router.push('/')
            }).catch(ErrorHandler)
          })
          .catch((err) => {
            alert('This username is already taken')
            ErrorHandler(err)
          })
    }
  }
}
</script>

<style scoped>

</style>
