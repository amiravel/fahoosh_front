<script setup lang="ts">

const props = defineProps({
  text: String,
})

const emit = defineEmits();

function handleClick() {
  emit('buttonClick');
}

</script>

<template>
  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
    {{text}}
  </button>
</template>

<style scoped>

</style>