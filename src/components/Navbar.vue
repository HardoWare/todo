<script setup>
defineProps({
  listsData: {
    type: Object,
    required: true
  }
})


</script>

<template>
  <header class="header">
    <div class="logo">
      <a href="/" class="logo-anchor">
        <img alt="logo" class="logo-img" src="../assets/aaOlds/logo.svg" />
        <h1 class="logo-title">TODO LIST</h1>
      </a>
    </div>
    <nav class="navbar">
<!--      <a class="toggle">-->
<!--        <i>toggle</i>-->
<!--      </a>-->
      <div class="nav-content">
        <ul class="nav-list">
          <li v-for="val in listsData" class="nav-list-item" :class="'magnitude-color-'+val.howImportant">
            <a :href="'/list/'+val.id">
              <div class="item-content">
                <div class="item-date">{{ val.createdAt}}</div>
                <div class="item-date">{{ val.toDate}}</div>
                <div class="item-title">{{ val.title }}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<style scoped lang="scss">


</style>
