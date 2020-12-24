<template>
  <article class="d-flex justify-content-between align-items-center mb-3 todo-item" :class="{'done': todoItem.isDone}">
    <h3>{{ todoItem.description }}</h3>
    <div class="d-flex justify-content-end align-items-center">
      <b-icon v-if="todoItem.isDone" class="cursor-pointer" icon="shift-fill" font-scale="2"
              @click="rollBackDoneTodo(todoItem._id)"></b-icon>
      <b-icon v-else class="cursor-pointer" icon="check2" font-scale="3" @click="doneTodo(todoItem._id)"></b-icon>
      <b-icon class="cursor-pointer" icon="x" font-scale="3" @click="deleteTodo"></b-icon>
    </div>
  </article>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "TodoItem",
  props: {
    todoItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['doneTodo', 'rollBackDoneTodo']),
    deleteTodo() {
      const result = confirm('Are you sure delete this todo?');
      if (result) {
        this.$store.dispatch('deleteTodo', this.todoItem._id)
      }
    }
  }
}
</script>

<style>
.todo-item {
  border-bottom: 1px solid var(--secondary);
}

.done h3 {
  color: var(--secondary);
  text-decoration: line-through;
}
</style>
