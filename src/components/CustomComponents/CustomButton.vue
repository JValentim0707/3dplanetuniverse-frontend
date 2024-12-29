<template>
  <v-btn v-bind="buttonOptions">{{ label }}</v-btn>
</template>

<script setup>
  defineProps({
    label: String,
    buttonOptions: Object
  })
</script>