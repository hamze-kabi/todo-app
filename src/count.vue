<template>
  <p>{count}</p>
  <button @click="count.double">double</button>
  <button @click="count.increment">increment</button>
  <button @click="count.reset">reset</button>
</template>

<script setup>
import useCountStore from '@/stores/counter.js'

const count = useCountStore()
</script>
