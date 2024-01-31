<script setup>
  import {ref} from 'vue'
  const count = ref(0)
</script>

<template>
  <div>
    <h1>Counter Vue.js</h1>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>