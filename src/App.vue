<template>
  <v-app>
    <v-main class="main-container">
      <NavbarUserComponent v-if="route.path !== '/login'"></NavbarUserComponent>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>

import NavbarUserComponent from './components/UserPageComponents/NavbarUserComponent.vue';

import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<style lang="scss">
.main-container {
  background-color: white;
}
</style>
