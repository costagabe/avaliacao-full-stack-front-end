<template>
  <div class="container">
    <MainCard />
  </div>
</template>

<script setup lang="ts">
import MainCard from "./components/MainCard.vue";
import { useModal } from "@/composables/useModal";
import { useTransferFormStore } from "@/store/transfer-form";
import { onMounted } from "vue";
import { useTransferStore } from "@/store/transfer";

const { onConfirm, close, setLoading } = useModal();
const transferForm = useTransferFormStore();
const transferStore = useTransferStore();

onMounted(() => {
  transferStore.listAll();
})

onConfirm(async () => {
  setLoading(true);
  const isSubmitted = await transferForm.submit();
  if (isSubmitted) {
    close();
    transferForm.resetForm();
  }
  setLoading(false);

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