<script setup>
import Anchor from "@/components/reusable/Anchor.vue"
import router from "@/router"

defineProps({
  item: {
    type: Object,
    default: () => {},
    required: true
  },
  itemId: {
    type: Number,
    required: true
  },
  itemTitle: {
    type: String,
    default: "",
    required: false
  },
  itemContent: {
    type: String,
    default: "",
    required: false
  },
  itemDateTo: {
    type: String,
    default: "",
    required: false
  },
  itemDateFrom: {
    type: String,
    default: "",
    required: false
  },
  itemImportance: {
    type: Number,
    default: "",
    required: false
  },
  itemActive: {
    type: Boolean,
    required: false
  },
})

</script>

<template>
  <div class="item" :class="'importance-'+itemImportance">
    <Anchor anchorClass="item__link item-grid" :anchor-href="'/list/'+itemId" :anchor-title="'Item '+itemId">
      <div class="item-title">{{ itemTitle }}</div>
      <div class="item-date">{{ itemDateFrom }}</div>
      <div class="item-date">{{ itemDateTo }}</div>
      <div class="item-content">{{ itemContent }}</div>
      <div class="item-active">
        <button class="btn btn-item" @click.prevent="$emit('active-item')">{{ itemActive === true ? 'active' : 'inactive'  }}</button>
       <button class="btn btn-item" @click.prevent="$emit('delete-item')">Delete</button>
      </div>
    </Anchor>
  </div>
</template>

<style scoped lang="scss">
  @use "@/assets/components/listItem" as *;
</style>