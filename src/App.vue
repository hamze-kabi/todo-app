<template>
  <!-- a div with width and height of screen to center the main container -->
  <div class="flex flex-col justify-center items-center h-screen w-screen">
    <!-- header comp -->
    <AppHeader />
    <!-- the main container, contains FilterTasks, inputField and todo list -->
    <main
      class="flex flex-col justify-center items-center gap-4 border p-4 w-70 md:w-80 lg:w-96 xl:w-[32rem]"
    >
      <FilterTasks />
      <!-- contains input and todolist -->
      <section class="flex flex-col gap-2 justify-content items-center">
        <!-- input comp -->
        <inputField @new-task="(task) => addNewTask(task)" />
        <TodoList
          :tasksArr="allTasks"
          @delete-task-emit="(index) => deleteTaskFromArr(index)"
          @complete-task-emit="(index) => completeTask(index)"
        />
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import inputField from './inputField.vue'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import TodoList from './TodoList.vue'
import FilterTasks from './FilterTasks.vue'

// list of all tasks, active or completed
const allTasks = ref([])

// creates index number
const count = ref(0)

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
.
-->
