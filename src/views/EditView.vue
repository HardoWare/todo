<script setup>
import router from "@/router";
import {ref} from "vue";

const localList = localStorage.getItem('todoList')
const id = ref(router.currentRoute.value.params.id)
const item = localList !== null ? JSON.parse(localList).find(item => item.id === Number(id.value)) : null

function saveEdit() {
  const parsedData = JSON.parse(localList)
  const index = parsedData.findIndex(item => item.id === Number(id.value))
  parsedData[index] = formData.value
  localStorage.setItem('todoList', JSON.stringify(parsedData))
  router.push({path: '/'})
}

const formData = ref({
  id: item.id,
  isActive: true,
  dateFrom: new Date().toJSON().trim().slice(0, 10),
  dateTo: item.dateTo,
  importance: item.importance,
  title: item.title,
  description: item.description,
})

</script>

<template>
  <div class="container">
    <form @submit.prevent="saveEdit">
      <div class="input-container">
        <label for="description">Title</label>
        <input v-model="formData.title" type="text" name="title" id="title" required>
      </div>
      <div class="input-container">
        <label for="description">Date to</label>
        <input v-model="formData.dateTo" type="date" name="date" id="date" required>
      </div>
      <div class="input-container">
        <label for="importance">Importance</label>
        <select v-model="formData.importance" name="importance" id="importance">
          <option value="1" selected>Not important</option>
          <option value="2">Important</option>
          <option value="3">Very important</option>
          <!--          <option value="4">Important</option>-->
          <!--          <option value="5">Very important</option>-->
        </select>
      </div>
      <div class="input-container">
        <label for="description">Description</label>
        <textarea v-model="formData.description" name="description" id="description" cols="30" rows="10"></textarea>
      </div>
      <button class="btn btn-form" type="submit">Edit this item</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/view/editView" as *;
</style>
