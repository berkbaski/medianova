<template>
  <b-container>

    <TodoHeader/>
    <TodoAdd/>
    <TodoList/>

  </b-container>
</template>

<script>
import TodoList from "@/components/Todo/List";
import TodoAdd from "@/components/Todo/Add";
import TodoHeader from "@/components/Todo/Header";

export default {
  name: "index",
  components: {TodoHeader, TodoAdd, TodoList}
}
</script>

<style scoped>

</style>
