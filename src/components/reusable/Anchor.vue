<script setup>
defineProps({
  anchorClass: {
    type: String,
    required: true
  },
  anchorHref: {
    type: String,
    required: true
  },
  anchorContent: {
    type: String,
    required: true
  }
})

</script>

<template>
<a :class="anchorClass" :href="anchorHref">{{ anchorContent }}</a>
</template>

<style scoped>

</style>