import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const useCountStore = defineStore('count', () => {
  // state
  const count = ref(0)

  // getter
  const doubleCount = computed(() => count.value * 2)

  // action
  const increment = function () {
    count.value++
  }

  const reset = function () {
    count.value = 0
  }

  return { count, doubleCount, increment, reset }
})
