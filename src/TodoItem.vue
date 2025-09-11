<template>
  <div :class="[task.status === 'complete' ? 'line-through' : '']">
    {{ task.task }}
  </div>
  <button @click="completeTask(task.index)">Complete</button>
  <button @click="deleteTask(task.index)">Delete</button>
</template>

<script setup>
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
