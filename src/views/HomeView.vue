<script setup>
import {ref, watch, onMounted, reactive} from "vue"
// import draggable from "vuedraggable"
import Button from "@/components/reusable/Button.vue";
import ListItem from "@/components/reusable/ListItem.vue";
import BaseCheckbox from "@/components/reusable/BaseCheckbox.vue";

const list = ref([])
const sortedList = ref([])

const sortedBy = reactive({
  date: 'asc'||'desc',
  importance: 'asc'||'desc',
  active: true
})

onMounted(async () => {
  const localList = localStorage.getItem('todoList')
  if (localList !== null) {
    list.value = JSON.parse(localList)
    sortedList.value = list.value
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

watch(sortedBy, (newVal, oldValue) => {
  console.log(newVal)
  console.log(oldValue)
  sortedList.value = [...list.value]
  if (sortedBy.active === true) {
    sortedList.value = list.value.filter((item) => item.isActive === true)
  }
  if (sortedBy.date) {
    sortedList.value = sortedList.value.sort((a, b) => {
      if (newVal.date === 'asc') {
        return new Date(a.dateTo) - new Date(b.dateTo);
      } else {
        return new Date(b.dateTo) - new Date(a.dateTo);
      }
    })
  }
  if (sortedBy.importance) {
    sortedList.value = sortedList.value.sort((a, b) => sortedBy.importance === 'asc' ? a.importance - b.importance : b.importance - a.importance)
  }
})

function deleteItem(id) {
  list.value = list.value.filter((item) => item.id !== id)
  sortedList.value = sortedList.value.filter((item) => item.id !== id)
  localStorage.setItem('todoList', JSON.stringify(list.value))
}

</script>

<template>
<div class="filter">
  <div class="options">
<!--    <Button btn-class="btn option" >-->
<!--      Default <font-awesome-icon icon="fa-solid fa-caret-up" size="sm" class="icon"/>-->
<!--    </Button>-->
    <Button btn-class="btn option" @click="sortedBy.date = !sortedBy.date">
      Date <font-awesome-icon id="icon-date" icon="fa-solid fa-caret-down" size="sm" class="icon"/>
    </Button>
    <Button btn-class="btn option" @click="sortedBy.importance = !sortedBy.importance">
      Importance <font-awesome-icon id="icon-importance" icon="fa-solid fa-caret-down" size="sm" class="icon"/>
    </Button>
    <BaseCheckbox @click="sortedBy.active = !sortedBy.active" input-div-class="option div-toggle" input-id="isActive" input-type="toggle" input-name="isActive" label="Active"></BaseCheckbox>
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
              @delete-item.stop.prevent="deleteItem(item.id)"
    />
  </div>
</div>
</template>

<style scoped lang="scss">
  @use "@/assets/view/mainView" as *;
</style>

