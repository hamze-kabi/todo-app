<template>
  <div class="flex">
    <label for="show">Show:</label>
    <select class="border" name="show" id="show" v-model="show">
      <option value="All">All</option>
      <option value="completed">Completed</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const show = ref('All')

const emit = defineEmits(['showCompleted'])

watch(show, (newVal) => {
  newVal === 'completed' ? emit('showCompleted', true) : emit('showCompleted', false)
})
</script>
