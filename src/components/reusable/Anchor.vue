<script setup>
defineProps({
  anchorClass: {
    type: String,
    default: "",
    required: false
  },
  anchorHref: {
    type: String,
    default: "",
    required: false
  },
  anchorTitle: {
    type: String,
    default: "title",
    required: false,
  },
  anchorTarget: {
    type: String,
    default: "",
    required: false,
  },
})

</script>

<template>
<a :class="anchorClass" :href="anchorHref" :title="anchorTitle" :target="anchorTarget">
  <slot />
</a>
</template>

<style scoped lang="scss">

</style>