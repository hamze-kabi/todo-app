<template>
  <div v-show="determineVShow(task.status)" class="flex gap-2 border p-1">
    <p
      class="truncate w-30 md:w-40 lg:w-54 xl:w-[21rem]"
      :class="[task.status === 'complete' ? 'line-through' : '']"
    >
      {{ task.task }}
    </p>
    <button class="text-sm border p-1" @click="completeTask(task.index)">Complete</button>
    <button class="text-sm border p-1" @click="deleteTask(task.index)">Delete</button>
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
