<template>
<button id="counter" @click="increment">{{ count }}</button>
</template>

<script setup>
import { nextTick, ref } from 'vue';

  const count = ref(0)

  async function increment() {
    count.value++

    console.log(document.getElementById('counter').textContent)

    await nextTick()
    console.log(document.getElementById('counter').textContent)
  }
</script>
