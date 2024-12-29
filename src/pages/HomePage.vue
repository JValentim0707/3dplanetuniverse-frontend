<template>
  <div class="container-home">
    <div class="subheader-home">
      <div class="font-secundary subheader-text">
        <div>Está precisando de um modelo 3D ?</div>
        <div>De uma olhada na nossa <span class="subheader-highlight">Bliblioteca</span></div>
      </div>
      <div>
        <HLeftIcon class="h-left-icon"/>
        <HMiddleIcon class="h-middle-icon"/>
        <HRightIcon class="h-right-icon"/>
      </div>
    </div>
    <div class="font-secundary text-no-data">Nenhum Destaque Encontrado</div>
  </div>
</template>

<script setup>
import HMiddleIcon from '@/icons/HMiddleIcon.vue';
import HRightIcon from '@/icons/HRightIcon.vue';
import HLeftIcon from '@/icons/HLeftIcon.vue';

</script>

<style lang="scss">
.container-home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .subheader-home {
    display: flex;
    align-items: center;
    width: 100%;
    height: 285px;
    background-color: #020202;
    .subheader-text {
      font-weight: 100;
      max-width: 550px;
      color: white;
      font-size: 35px;
      margin-left: 80px;
      margin-right: auto;
    }
    .subheader-highlight {
      color: #00BEFD;
    }
    .h-left-icon {
      position: absolute;
      z-index: 2;
      right: 300px;
      top: 74px;
    }
    .h-middle-icon {
      position: absolute;
      z-index: 4;
      top: 74px;
      right: 25px;
    }
    .h-right-icon {
      position: relative;
      z-index: 3;
    }
  }

  .text-no-data {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-weight: 500;
    font-size: 20px;
    color: #020202;
  }
}
</style>