<script setup>
import {ref, watch, onMounted, reactive } from "vue"
// import draggable from "vuedraggable"
// import fs from "@/server/fileServer.js"
import Button from "@/components/reusable/Button.vue";
import ListItem from "@/components/reusable/ListItem.vue";
import BaseCheckbox from "@/components/reusable/BaseCheckbox.vue";

const list = ref([])
const sortedList = ref([])

const sortedByDate = ref(false)
const sortedByImportance = ref(false)
const sortedIsActive = ref(true)

const link = 'http://localhost:3001/todo'

onMounted(async () => {

  const dataaa = await fetch(link)

  console.log('Data:', dataaa)

  const localList = localStorage.getItem('todoList')
  if (localList !== null) {
    list.value = JSON.parse(localList)
    const modedItems = list.value.filter(item => item.dateTo < new Date().toJSON().trim().slice(0, 10))
    modedItems.forEach(item => {
      item.isActive = false
    })
    modedItems.forEach(updated => {
      const index = list.value.findIndex(item => item.id === updated.id)
      if(index !== -1) {
        list.value[index] = updated
      }
    })
    localStorage.setItem('todoList', JSON.stringify(list.value))
    sortedList.value = list.value.filter((item) => item.isActive === true)
  }
  else {
      // try {
      //   const response = await fetch('data.json')
      //   const data = await response.json()
      //   list.value = data //.sort((a, b) => new Date(a.date) - new Date(b.date))
      //   sortedList.value = list.value
      // } catch (e) {
      //   console.log('Read serv data error:', e)
      // }
  }
})

watch(sortedIsActive, (nV, oV) => {
  sortedList.value = [...list.value]
  if (nV === true) {
    sortedList.value = list.value.filter((item) => item.isActive === true)
  }
})

watch(sortedByDate, (nV, oV) => {
  sortedList.value = sortedList.value.sort((a, b) => {
      if (nV === true) {
        return new Date(a.dateTo) - new Date(b.dateTo);
      } else {
        return new Date(b.dateTo) - new Date(a.dateTo);
      }
    })
})

watch(sortedByImportance, (nV, oV) => {
  sortedList.value = sortedList.value.sort((a, b) => nV === true ? a.importance - b.importance : b.importance - a.importance)
})

function activeItem(id) {
  const modedItem = list.value.find((item) => item.id === id)
  modedItem.isActive = !modedItem.isActive
  list.value = list.value.filter((item) => item.id !== id)
  list.value.push(modedItem)
  sortedList.value = list.value
  localStorage.setItem('todoList', JSON.stringify(list.value))
}

function deleteItem(id) {
  list.value = list.value.filter((item) => item.id !== id)
  sortedList.value = list.value
  localStorage.setItem('todoList', JSON.stringify(list.value))
}

</script>

<template>
<div class="filter">
  <div class="options">
<!--    <Button btn-class="btn option" >-->
<!--      Default <font-awesome-icon icon="fa-solid fa-caret-up" size="sm" class="icon"/>-->
<!--    </Button>-->
    <Button btn-class="btn option" @click="sortedByDate = !sortedByDate">
      Date <font-awesome-icon id="icon-date" icon="fa-solid fa-caret-down" size="sm" class="icon"/>
    </Button>
    <Button btn-class="btn option" @click="sortedByImportance = !sortedByImportance">
      Importance <font-awesome-icon id="icon-importance" icon="fa-solid fa-caret-down" size="sm" class="icon"/>
    </Button>
    <BaseCheckbox @click="sortedIsActive = !sortedIsActive" input-div-class="option div-toggle" input-id="isActive" input-type="toggle" input-name="isActive" label="Active"></BaseCheckbox>
  </div>
</div>

<div class="container">
  <div class="list">
    <ListItem v-for="(item, index) in sortedList" :key="index"
              :item="item"
              :item-id="item.id"
              :item-title="item.title"
              :item-importance="item.importance"
              :item-date-to="item.dateFrom"
              :item-date-from="item.dateTo"
              :item-content="item.description"
              :item-active="item.isActive"
              @active-item.once="activeItem(item.id)"
              @delete-item.once="deleteItem(item.id)"
    />
  </div>
</div>
</template>

<style scoped lang="scss">
  @use "@/assets/view/mainView" as *;
</style>

