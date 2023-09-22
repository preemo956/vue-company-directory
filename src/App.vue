<script setup>
import NavMenu from '@/components/NavMenu.vue'
import MainCards from './components/MainCards.vue';
import MainSearch from '@/./views/HomePage.vue';
import MainPagination from './components/MainPagination.vue';
</script>

<template>
  <NavMenu />
  <RouterView />
    <div class = "wrapper">
    <MainCards/>
    <MainPagination/>



    </div>
</template>

<style scoped lang="postcss">

.wrapper {
  @apply container mx-auto flex flex-col gap-4 py-4;
}

</style>
