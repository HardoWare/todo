<script setup>
import { ref, computed, reactive } from "vue"

</script>
<template>
  <div class="container">
    <form action="">
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title">
      </div>
      <div>
        <label for="Date to">Date to</label>
        <input type="date" name="To date" id="toDate">
        <input type="time" name="To time" id="toTime">
      </div>
      <div>
        <label for="importance">Importance</label>
        <select name="importance" id="importance" >

          <option value="1" selected>1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">Add new item</button>
    </form>
  </div>
</template>
  
<style scoped lang="scss">
  @use "@/assets/view/newView" as *;
</style>
  