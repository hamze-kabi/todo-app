<template>
  <!-- each div contains a task and its buttons -->
  <div v-for="task in tasksArr" :key="task">
    <todoItem
      :task="task"
      @complete-task-emit="(index) => completeTask(index)"
      @delete-task-emit="(index) => deleteTask(index)"
    />
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'

defineProps({
  tasksArr: {
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
