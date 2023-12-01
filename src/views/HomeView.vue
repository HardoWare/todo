<script setup>
import { ref, computed, reactive } from "vue"
import draggable from "vuedraggable"
import data from "@/data/data.json"
import Button from "@/components/reusable/Button.vue";

let trim = data.filter((val) => {
  return val.isActive === true
});

const list = reactive( trim )
const date = new Date()

function sortByDate(status) {
  if (status === "up") {
    return data.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt)
    })
  } else if (status === "down") {
    return data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
  }
}




console.log(list)
</script>

<template>
<div class="filter">
  <div class="options">
    <Button btn-class="btn option">
      Default <font-awesome-icon icon="fa-solid fa-caret-up" size="sm" class="icon"/>
    </Button>
    <Button btn-class="btn option">
      Created At <font-awesome-icon icon="fa-solid fa-caret-down" size="sm" class="icon"/>
    </Button>
    <Button btn-class="btn option">
      Todo <font-awesome-icon icon="fa-solid fa-caret-down" size="sm" class="icon"/>
    </Button>
    <Button btn-class="btn option">
      Importance <font-awesome-icon icon="fa-solid fa-caret-down" size="sm" class="icon"/>
    </Button>
  </div>
</div>
<div class="container">
          <ul class="nav-list">
            <li v-for="val in list" class="nav-list-item" :class="'magnitude-color-'+val.howImportant">
              <a class="nav" :href="'/list/'+val.id">
                <div class="item-content">
                  <div class="item-date">{{ val.createdAt}}</div>
                  <div class="item-date">{{ val.toDate}}</div>
                  <div class="item-title">{{ val.title }}</div>
                </div>
              </a>
            </li>
          </ul>
</div>
</template>

<style scoped lang="scss">
  @use "@/assets/view/mainView" as *;
</style>

