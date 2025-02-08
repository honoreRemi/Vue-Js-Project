<template>
  <input type="text" v-model="page.title">
  Temps écouler : {{ time }}
  <button @click="reset">Reset</button>
</template>

<script setup>
  import { ref, watch, watchEffect } from 'vue';
  import { useTimer } from './composable/useTimer';
  

  const {time, reset} = useTimer()

  const page = ref({
    title: ''
  })

  watchEffect(() => {
    document.title = page.value.title
  })
</script>

<style scoped>

</style>