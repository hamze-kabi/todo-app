<template>
  <input
    type="text"
    class="border border-gray-400"
    placeholder="enter your task"
    v-model="inputData"
    @keyup.enter="addNewTask"
  />
</template>

<script setup>
import { ref } from 'vue'

const inputData = ref('')

const emit = defineEmits(['new-task'])

const addNewTask = function () {
  if (inputData.value.length > 0) {
    // emit task to parent comp
    emit('new-task', inputData.value)

    // clears input field
    inputData.value = ''
  }
}
</script>
