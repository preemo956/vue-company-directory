<script setup>
import { ref } from 'vue';
const brand = ref ('A.J.s AV Company Directory')
</script>

<template>
  <nav class="bg-blue-900">
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title">{{ brand }}</span>
    </div>
      <div class="menu">
          <a href="#" class="menu-item"> Departments </a>
          <a href="#" class="menu-item"> Settings </a>
          <a href="#" class="menu-login"> Logout </a>
      </div>  
    </div>

  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex h-20 bg-blue-900 text-slate-200 justify-between space-x-4;

  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
  }
  & .router-link-active {
    @apply underline underline-offset-4;
  }
  .brand {
    &-title{
      @apply text-2xl font-bold text-red-600;
    }
  }
  .menu{
    @apply flex gap-2;
    &-item{
    @apply hover:bg-slate-200 hover:text-black flex gap-1 text-lg font-bold text-red-600 rounded-md;
    }
    &-login{
      @apply hover:bg-slate-200 hover:text-black flex gap-1 text-lg font-bold text-red-600 bg-black;
    }
  }
}
</style>
