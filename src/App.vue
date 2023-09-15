<script setup>
import NavMenu from '@/components/NavMenu.vue'
import HomePage  from './views/HomePage.vue';
</script>

<template>
  <NavMenu />
  <RouterView />
    <div class = "wrapper">


<h1>Hello There</h1>

    </div>
</template>

<style scoped lang="postcss">

.wrapper {
  @apply flex flex-col;
}

</style>
