<script setup>
defineProps({
  anchorClass: {
    type: String,
    required: true
  },
  anchorHref: {
    type: String,
    required: false
  },
  anchorTitle: {
    type: String,
    required: false,
    default: "title"
  },
  anchorTarget: {
    type: String,
    required: false,
  }

})

</script>

<template>
<a :class="anchorClass" :href="anchorHref" :title="anchorTitle" :target="anchorTarget">
  <slot />
</a>
</template>

<style scoped lang="scss">

</style>