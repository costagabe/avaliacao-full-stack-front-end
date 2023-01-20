<template>
  <TheAppBar />
  <v-main>
    <router-view />
  </v-main>
  <TheFooter />
</template>

<script lang="ts" setup>
import TheAppBar from '@/components/TheAppBar.vue';
import TheFooter from '@/components/TheFooter.vue';

  //
</script>
