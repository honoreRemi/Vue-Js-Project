<template>
  <label class="label">
    <input type="checkbox" v-model="model">
    {{label}}
  </label>
</template>

<script setup>

  const props = defineProps({
    label : String
  })
  const model = defineModel()
  const emits = defineEmits(['check', 'uncheck'])
  const onChange = (event) => { 
    if(event.currentTarget.checked){
      emits('check', event.currentTarget)
    }else{
      emits('uncheck', event.currentTarget)
    }

  }
</script>