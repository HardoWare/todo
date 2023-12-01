<script setup>
defineProps({
    btnClass: {
        type: String,
        required: true
    },
    btnTitle: {
        type: String,
        required: false
    }
})
</script>

<template>
<button :class="btnClass" :title="btnTitle">
    <slot />
</button>
</template>

<style scoped>

</style>