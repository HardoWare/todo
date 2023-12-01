<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from '@/components/Navbar.vue'

</script>

<template>
  <Navbar />
  <main class="main">
  <RouterView />
  </main>
</template>

<style scoped lang="scss">

</style>

<!--<header>-->
<!--<div class="wrapper">-->
<!--  <HelloWorld msg="You did it!" />-->
<!--  <nav>-->
<!--    <RouterLink to="/">Home</RouterLink>-->
<!--    <RouterLink to="/list">About</RouterLink>-->
<!--    <RouterLink to="/new">New</RouterLink>-->
<!--  </nav>-->
<!--</div>-->
<!--</header>-->