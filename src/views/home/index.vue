<template>
  <div class="container">
    <MainCard />
  </div>
</template>

<script setup lang="ts">
import MainCard from "./components/MainCard.vue";
import { useModal } from "@/composables/useModal";
import { useTransferFormStore } from "@/store/transfer-form";
import { nextTick } from "vue";

const { onConfirm, close } = useModal();
const transferForm = useTransferFormStore();

onConfirm(async () => {
  const isSubmitted = await transferForm.submit();
  if(isSubmitted) {
    close();
    transferForm.resetForm();
    
  }
});

</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>