<script setup lang="ts">
import { useModal } from '@/composables/useModal';
import { createVNode } from 'vue';
import Schedule from "@/views/schedule/index.vue";



const { showComponentModal } = useModal();

function openModal() {
  showComponentModal(createVNode(Schedule, {}), "Agendar transferência");
}

</script>
<template>
  <v-app-bar app color="blue-darken-2" dark>
    <v-toolbar-title>
      <v-row justify="space-between" class="flex-nowrap" >

        <v-col cols="auto" class="pr-0">
          Transfer Scheduler
        </v-col>

        <v-col cols="auto" class="mr-4">
          <v-btn block color="secondary" variant="tonal" @click="openModal">
            <v-icon class="text-white mr-1">
              mdi-plus
            </v-icon>
            <b class="text-white">Agendar</b>
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar-title>
  </v-app-bar>
</template>