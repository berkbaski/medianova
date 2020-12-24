<template>
  <b-container>

    <TodoHeader/>
    <TodoAdd/>
    <TodoList :todoList="todoList"/>

  </b-container>
</template>

<script>
import TodoList from "@/components/Todo/List";
import TodoAdd from "@/components/Todo/Add";
import TodoHeader from "@/components/Todo/Header";

import {mapState} from 'vuex'

export default {
  name: "index",
  components: {
    TodoHeader,
    TodoAdd,
    TodoList
  },
  computed: {
    ...mapState(['todoList'])
  },
  beforeCreate() {
    if (!this.$store.getters.isAuth) {
      this.$router.push('/login')
    } else {
      this.$store.dispatch('getTodoList')
    }
  },
}
</script>
