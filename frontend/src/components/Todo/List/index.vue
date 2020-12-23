<template>
  <b-row>
    <b-card class="w-100">
      <b-card-body>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoFooter/>
      </b-card-body>
    </b-card>
  </b-row>
</template>

<script>
import TodoItem from "@/components/Todo/Item";
import TodoFooter from "@/components/Todo/Footer";

export default {
  name: "TodoList",
  components: {TodoFooter, TodoItem}
}
</script>

<style scoped>

</style>
