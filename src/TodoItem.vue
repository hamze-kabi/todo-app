<template>
  <div v-show="determineVShow(task.status)" class="flex gap-5">
    <!-- <p>task.status: {{ task.status }}</p>
    <p>selectedFilter: {{ filter.selectedFilter }}</p>
    <p>{{ determineVShow(task.status) }}</p> -->
    <p :class="[task.status === 'complete' ? 'line-through' : '']">
      {{ task.task }}
    </p>
    <button @click="completeTask(task.index)">Complete</button>
    <button @click="deleteTask(task.index)">Delete</button>
  </div>
</template>

<script setup>
import { useFilterStore } from './store/filter'

// to show only completed tasks,
const filter = useFilterStore()

const determineVShow = function (taskStatus) {
  if (
    filter.selectedFilter === 'All' ||
    (filter.selectedFilter === 'active' && taskStatus === 'active') ||
    (filter.selectedFilter === 'completed' && taskStatus === 'complete')
  ) {
    return true
  }
  return false
  // if (
  //   taskStatus === 'All' ||
  //   (taskStatus === 'complete' && filter.selectedFilter === 'completed') ||
  //   (taskStatus === 'active' && filter.selectedFilter === 'active')
  // ) {
  //   return true
  // }
  // return false
}

defineProps({
  task: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['complete-task-emit', 'delete-task-emit'])

const completeTask = function (index) {
  emit('complete-task-emit', index)
}

const deleteTask = function (index) {
  emit('delete-task-emit', index)
}
</script>
