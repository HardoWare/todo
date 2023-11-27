<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import NewListItem from "@/components/NewListItem.vue"
import {ref} from "vue"
import listsData from '@/data/data.json'

</script>

<template>
  <Navbar :listsData="listsData">
    <NewListItem />
  </Navbar>

<!--  <RouterView />-->

<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/list">About</RouterLink>-->
<!--        <RouterLink to="/new">New</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
</template>

<style scoped lang="scss">

</style>
