<template>
  <b-row class="mb-5">
    <b-card class="w-100">
      <b-card-body class="d-flex justify-content-between align-items-center">
        <b-input placeholder="New Task for eg. go to market" v-model="description" @keyup.enter="createTodo"></b-input>
        <b-icon class="cursor-pointer" icon="plus" font-scale="3" @click="createTodo"
                :class="{'disabled': !description}"></b-icon>
      </b-card-body>
    </b-card>
  </b-row>
</template>

<script>

export default {
  name: "TodoAdd",
  data() {
    return {
      description: '',
    }
  },
  methods: {
    async createTodo() {
      if (this.description) {
        await this.$store.dispatch('createTodo', this.description)
        this.description = '';
      }
    }
  }
}
</script>

<style>
.disabled {
  opacity: .3;
}
</style>
