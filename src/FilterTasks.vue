<template>
  <div class="flex gap-2">
    <label for="show">Show:</label>
    <select class="border text-center" name="show" id="show" v-model="show">
      <option value="All">All</option>
      <option value="active">active</option>
      <option value="completed">Completed</option>
    </select>
  </div>
</template>

<script setup>
import { useFilterStore } from './store/filter'
import { ref, watch } from 'vue'

const show = ref('All')
const filter = useFilterStore()

watch(show, (newFilter) => {
  filter.determineFilter(newFilter)
})
</script>
