<template>
  <main class="flex gap-2">
    <input
      type="text"
      class="border border-gray-400 px-2 py-1"
      placeholder="enter your task"
      v-model="inputData"
      @keyup.enter="addNewTask"
    />
    <button @click="addNewTask" class="text-sm border p-1">Add task</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const inputData = ref('')

const emit = defineEmits(['new-task'])

const addNewTask = function () {
  if (inputData.value.trim().length > 0) {
    // emit task to parent comp
    emit('new-task', inputData.value)

    // clears input field
    inputData.value = ''
  }
}
</script>
