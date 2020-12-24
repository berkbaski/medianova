<template>
  <article class="d-flex justify-content-end align-items-center">
    <b-button variant="light" :disabled="disable" @click="allDone">
      <b>
        ALL DONE
      </b>
    </b-button>
  </article>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['disable'],
  methods: {
    allDone() {
      const result = confirm("Do you want all todos to done?");
      if (result) {
        this.$store.dispatch('doneAll')
      }
    }
  }
}
</script>

<style scoped>

</style>
