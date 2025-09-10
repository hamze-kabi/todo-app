<template>
  <!-- a div with to with screen width and height -->
  <div class="flex flex-col justify-center items-center h-screen w-screen">
    <!-- header comp -->
    <AppHeader />
    <FilterTasks @showCompleted="(bool) => (showCompleted = bool)" />
    <!-- main container -->
    <main class="flex flex-col justify-content items-center">
      <!-- input comp -->
      <inputField @new-task="(task) => addNewTask(task)" />
      <TodoList
        :tasksArr="allTasks"
        @delete-task-emit="(index) => deleteTaskFromArr(index)"
        @complete-task-emit="(index) => completeTask(index)"
      />
    </main>
    <AppFooter />
    <count />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import inputField from './inputField.vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import TodoList from './TodoList.vue'
import FilterTasks from './FilterTasks.vue'
import count from './count.vue'
// list of all tasks, active or completed
const allTasks = ref([])

// creates index number
// const count = ref(0)

// gets received from FilterTasks.vue and sent to TodoList.vue and then TodoItem.vue
const showCompleted = ref(false)

// adds the new task to allTasks object
const addNewTask = function (task) {
  allTasks.value.push({ index: count.value++, task: task, status: 'active' })
}

const completeTask = function (index) {
  const theTaskOnArr = allTasks.value.find((task) => task.index === index)
  theTaskOnArr.status === 'active'
    ? (theTaskOnArr.status = 'complete')
    : (theTaskOnArr.status = 'active')
}

const deleteTaskFromArr = function (index) {
  allTasks.value.splice(index, 1)
}
</script>

<!-- 
day night toggle
farsi eng
complete/delete
hide complete
sort based on time or alphabet
count of active and complete tasks
created by

suggested components:
│   ├── Header.vue
│   ├── TodoInput.vue
│   ├── TodoList.vue
│   ├── TodoItem.vue
│   ├── TodoFilters.vue
│   └── Footer.vue
-->
