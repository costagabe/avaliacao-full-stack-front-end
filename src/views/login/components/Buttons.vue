<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <v-card-text>
    <v-row>
      <v-col cols="6">
        <v-btn variant="flat" @click="router.push({name: 'Signup'})" text>Nova conta</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn variant="flat"  text>Esqueci a senha</v-btn>
      </v-col>
    </v-row>
  </v-card-text>
</template>
