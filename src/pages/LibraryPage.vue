<template>
  <div class="contaniner-login">
    <h3>Comming Soon</h3>
    <v-btn @click="router.go(-1)">Back</v-btn>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style lang="scss">
.contaniner-login {
  background-color: white;
  flex-direction: column;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>