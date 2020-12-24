<template>
  <b-row>
    <b-card class="w-100">
      <b-card-body>
        <TodoItem v-for="todo in todoList" :key="todo._id" :todoItem="todo"/>
        <TodoEmptyState v-if="todoList.length == 0"/>
        <TodoFooter :disable="todoList.length == 0"/>
      </b-card-body>
    </b-card>
  </b-row>
</template>

<script>
import TodoItem from "@/components/Todo/Item";
import TodoFooter from "@/components/Todo/Footer";
import TodoEmptyState from "@/components/Todo/EmptyState";

export default {
  name: "TodoList",
  components: {TodoEmptyState, TodoFooter, TodoItem},
  props: {
    todoList: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
