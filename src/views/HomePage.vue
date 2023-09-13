<script setup>
import { ref } from 'vue'
const title = ref('Main Content!!!')
</script>

<template>
  <main class="flex min-h-screen ">
    <h1 class="text-6xl font-thin text-slate-800">{{ title }}</h1>
  </main>
</template>
