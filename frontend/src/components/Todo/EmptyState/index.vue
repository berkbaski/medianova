<template>
  <article class="es">
    <img src="@/assets/img/empty-state.png" class="es-img"/>
    <h3 class="es-text">Todo List is empty</h3>
  </article>
</template>

<script>
export default {
  name: "TodoEmptyState"
}
</script>

<style scoped>
.es {
  text-align: center;
}

.es-img {
  width: 30%;
}
</style>
