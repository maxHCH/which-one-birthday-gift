<script setup>
import { ref } from 'vue'
import Machine from './Machine.vue'

</script>

<template>
  <section class="title">
    <h1>なつちゃん !</h1>
    <h1>お誕生日おめでとう</h1>
    <Machine />
  </section>
</template>

<style scoped>
h1 {
  color: #fff;
  margin: 0;
}
.title {
  padding-top: 1rem;
}
</style>
