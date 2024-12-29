<template>
  <v-text-field :label="label" v-bind="inputOptions"></v-text-field>
</template>

<script setup>
  defineProps({
    label: String,
    inputOptions: Object
  })
</script>