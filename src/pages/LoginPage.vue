<template>
  <div class="contaniner-login">
    <div class="contaniner-image">
      <v-img
        class="image-setup"
        width="100%"
        min-heigth="100%"
        cover
        src="../assets/background-image2.jpg"
      ></v-img>
    </div>
    <div class="contaniner-box-login">
      <div class="font-primary box-login-title">3D Planet Universe</div>
      <v-form class="box-form">
        <CustomInput label="Email" :inputOptions="inputEmailOptions"></CustomInput>
        <CustomInput label="Senha" :inputOptions="inputPasswordOptions"></CustomInput>
        <CustomButton label="Entrar" :buttonOptions="buttonOptions"></CustomButton>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import CustomInput from '@/components/CustomComponents/CustomInput.vue'
import CustomButton from '@/components/CustomComponents/CustomButton.vue'

const router = useRouter()

const inputEmailOptions = ref({
  color: '#00BEFD',
  'base-color': '#020202',
  variant: 'underlined',
  type: 'email'
})

const inputPasswordOptions = ref({
  color: '#00BEFD',
  'base-color': '#020202',
  variant: 'underlined',
  type: 'password'
})

const buttonOptions = ref({

})


</script>

<style lang="scss" scoped>
.contaniner-login {
  width: 100%;
  height: 100%;
  display: flex;
  .contaniner-image {
    width: 100%;
    height: 100%;
    .image-setup {
      height: 100%;
    }
  }
  .contaniner-box-login {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    min-width: 350px;
    height: 100%;
    background-color: #ffffff;
    .box-login-title {
      color: #020202;
      font-size: 24px;
      font-weight: bold;
    }
    .box-form ::v-deep() {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 10px 35px;

      label {
        color: #777777;
      }

      input {
        color: #020202;
      }
    }
  }
}
</style>