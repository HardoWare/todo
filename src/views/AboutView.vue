<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  components: {DatePick},
  data: () => ({
    date: '2019-01-01'
  })
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <date-pick v-model="date"></date-pick>
  </div>
</template>

<style scoped lang="scss">

</style>
