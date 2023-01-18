<template>
  <v-app-bar app color="blue-darken-2" dark>
    <v-toolbar-title>
      <v-row justify="space-between">

        <v-col cols="auto">
          Agendador de transferências
        </v-col>

        <v-col cols="auto" class="mr-4">
          <v-btn block color="secondary" variant="tonal">
            <v-icon class="text-white mr-1">
              mdi-plus
            </v-icon>
            <b class="text-white">Agendar</b>
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar-title>
  </v-app-bar>
  <MainCard />
  <v-footer class="bg-blue-darken-2">
    <v-row justify="center" no-gutters>
      <v-col class="text-center " cols="12">
        {{ new Date().getFullYear() }} — <strong>Avaliação full stack</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import MainCard from "./components/MainCard.vue";
</script>
