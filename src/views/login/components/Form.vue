<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const remember = ref(false);

const router = useRouter();
const entrar = () => {
  router.push({name: 'Home'})
};

const entrarComGoogle = () => {};
</script>

<template>
  <v-card-text>
    <v-form class="mt-5">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Senha"
        type="password"
        required
      ></v-text-field>
      <v-checkbox v-model="remember" label="Lembrar-me"></v-checkbox>
      <v-btn @click="entrar" color="primary" block>Entrar</v-btn>
    </v-form>
  </v-card-text>
</template>
