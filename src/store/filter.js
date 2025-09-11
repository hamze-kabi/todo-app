import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterStore = defineStore('filter', () => {
  const selectedFilter = ref('All')

  const determineFilter = function (selected) {
    selectedFilter.value = selected
  }

  return { selectedFilter, determineFilter }
})
