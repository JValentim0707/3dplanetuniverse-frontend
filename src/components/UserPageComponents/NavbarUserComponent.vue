<template>
  <div class="container-navigation">
    <div class="content-navigation">
      <div class="main-content-navigation">
        <div class="font-primary font-highlight">3D Planet Universe</div>
        <div class="sidemenu-container">
          <div class="font-secundary sidemenu-item" v-for="item in userItems" @click="router.push(item.url)">{{ item.label }}</div>
        </div>
      </div>
      <div class="font-secundary text-login" @click="router.push('/login')">Login</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const userItems = ref([
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Biblioteca',
    url: '/library'
  }
])

</script>

<style lang="scss" scoped>
.container-navigation {
  min-width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  background-color: #020202;

  .content-navigation {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    .main-content-navigation {
      display: flex;
      align-items: baseline;
    }
  }

  .font-highlight {
    font-weight: bold;
    font-size: 18px;
  }

  .text-login {
    font-size: 14px;
    display: flex;
    width: 50px;
    height: 25px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #ffffff48;
      cursor: pointer;
    }
  }

  .sidemenu-container {
    display: flex;
    margin-left: 25px;

    .sidemenu-item {
      font-size: 14px;
      margin-left: 10px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  
}
</style>