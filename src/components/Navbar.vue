<script setup>
import Anchor from "@/components/reusable/Anchor.vue"

</script>

<template>
  <header class="header">
    <div class="logo">
      <Anchor anchor-class="nav-anchor" anchor-href="/" anchor-title="home page">
        <img class="logo-img" alt="logo" src="../assets/aaOlds/logo.svg" />
      </Anchor>
    </div>
    <nav class="navbar">
      <div class="nav-content">
        <Anchor anchor-class="nav-anchor nav-anchor-hover" anchor-href="/" anchor-title="home page">
          <font-awesome-icon icon="fa-solid fa-home" size="xl" class="icon"/>
        </Anchor>
        <Anchor anchor-class="nav-anchor nav-anchor-hover" anchor-href="/new" anchor-title="Add new Todo list">
          <font-awesome-icon icon="fa-solid fa-plus" size="xl" class="icon"/>
        </Anchor>
        <Anchor anchor-class="nav-anchor nav-anchor-hover" anchor-href="https://github.com/HardoWare" title="link my Git acc" anchor-target="_blanc">
          <font-awesome-icon icon="fa-brands fa-github" size="xl" class="icon"/>
        </Anchor>
      </div>
    </nav>
    <div class="menu">
      <Anchor anchor-class="nav-anchor nav-anchor-hover" anchor-title="menu show/hide">
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" class="icon"/>
      </Anchor>
    </div>
  </header>
</template>
<style scoped lang="scss">

</style>
