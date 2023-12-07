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
  <div v-if="inputType === 'text' || 'number' || 'date'" :class="inputDivClass" class="input-container">
    <label class="label" :for="inputName">{{ label }}</label>
    <input class="input" :type="inputType" :name="inputName" :id="inputId" :value="inputValue" :placeholder="inputPlaceholder" :pattern="inputPattern" >
  </div>
</template>

<style scoped lang="scss">

</style>