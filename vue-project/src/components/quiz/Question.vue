<template>
  <div class="question">
    <h3>{{ question.question }}</h3>
    <ul>
      <li v-for="(choice, index) in randomChoices" :key="choice">
        <Answer
          :id="`answer${index}`"
          :disabled="hasAnswer"
          :value="choice"
          @change="onAnswer"
          v-model="answer"
          :correctAnswer="question.correct_answer"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { shuffleArray } from '@/fonctions/Array';
import { defineProps, ref, defineEmits, computed, watch, onMounted, onUnmounted } from 'vue';
import Answer from './Answer.vue';
  const props = defineProps({
    question: Object
  })

  let timer

  const onAnswer = (e) => {
    answer.value = e.currentTarget.value
    clearTimeout(timer)
    timer = setTimeout(() => {
      emits('answer', answer.value)
    }, 1_500)
  }
  const answer = ref(null)
  const emits = defineEmits(['answer'])
  const hasAnswer = computed(() => answer.value != null)
  watch(() => props.question, () => {
    answer.value = null
  })
  const randomChoices = computed(() => shuffleArray(props.question.choices))

  onMounted(() =>{
    timer = setTimeout(() => {
      emits('answer', answer.value)
    }, 3_000)
  })

  onUnmounted(() => {
    clearTimeout(timer)
  })
</script>

<style scoped>
  .question{
    padding-top: 2rem;
  }

  .question button{
    margin-left: auto;
    display: block;
  }
</style>
