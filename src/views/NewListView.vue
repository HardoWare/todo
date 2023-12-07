<script setup>
import {ref} from "vue"
import router from "@/router";

const localList = localStorage.getItem('todoList')
const saveList = async () => {
  try {
    formData.value.importance = Number(formData.value.importance)
  } catch (e) {
    console.log('Error:', e)
    return
  }
  if(formData.value.dateTo === "" ||
      formData.value.title === "" ||
      formData.value.description === "" ||
      formData.value.importance === 0)
  {
    alert("Please fill all fields")
  }
  else {
    if (localList === null) {
      localStorage.setItem('todoList', JSON.stringify([formData.value]));
    } else {
      const parsedData = JSON.parse(localList);
      parsedData.push(formData.value);
      localStorage.setItem('todoList', JSON.stringify(parsedData));
    }
    await router.push({path: '/'})
  }
}
const getLastId = () => {
  if (localList === null) {
    return 1
  }
  else {
    const parsedData = JSON.parse(localList)
    const maxId = Math.max(...parsedData.map(item => item.id))
    return maxId + 1
  }
}
const formData = ref({
  id: getLastId(),
  isActive: true,
  dateFrom: new Date().toJSON().trim().slice(0, 10),
  dateTo: "",
  importance: 0,
  title: "",
  description: "",
})

</script>
<template>
  <div class="container">
    <form @submit.prevent="saveList">
      <div class="input-container">
        <label for="description">Title</label>
        <input v-model="formData.title" type="text" name="title" id="title" placeholder="Title" required>
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
      <button class="btn btn-form" type="submit">Add new item</button>
    </form>
  </div>
</template>
  
<style scoped lang="scss">
  @use "@/assets/view/newView" as *;
</style>
  