<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  inputType: {
    type: String,
    default: "text",
  },
  inputName: {
    type: String,
    default: "",
  },
  inputId: {
    type: String,
    default: "",
  },
  inputValue: {
    type: String,
    default: "",
  },
  inputPlaceholder: {
    type: String,
    default: "",
  },
  inputPattern: {
    type: String,
    default: "",
  },
  inputRequired: {
    type: Boolean,
    default: false,
    required: false
  },
  inputDisabled: {
    type: Boolean,
    default: false,
  },
  inputDivClass: {
    type: String,
    default: "",
  },
})



</script>

<template>
  <div :class="inputDivClass">
    {{ label }}
    <label class="toggle" :for="inputId">
      <input @click.stop class="display-none" type="checkbox" :id="inputId" checked>
      <span class="slider" ></span>
    </label>
  </div>
</template>

<style scoped lang="scss">

</style>