<template>
  <v-dialog v-model="modalStore.show" persistent width="auto" min-width="300">
    <v-card>
     <v-card-title class="mb-12">
      <v-app-bar color="blue-darken-1" class="pl-4">
      {{ modalStore.title }}
     </v-app-bar>
     </v-card-title>
      <v-card-text class="pa-2">
        <component @confirm="modalStore.confirm" :key="key" v-if="modalStore.component" :is="modalStore.component" />
        <span v-else>
          {{ modalStore.text }}
        </span>
      </v-card-text>
      <v-card-actions class="justify-end px-6 pb-4">
        <v-btn variant="tonal" color="error" @click="modalStore.close()">Close</v-btn>
        <v-btn variant="tonal" color="success" @click="modalStore.confirm">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import useModalStore from '@/store/modal';
import { ref , watch} from 'vue';

const key = ref(0);

const modalStore = useModalStore();

watch(() => modalStore.show, (value) => {
  if(!value) {
    key.value++;
  }
})

</script>
