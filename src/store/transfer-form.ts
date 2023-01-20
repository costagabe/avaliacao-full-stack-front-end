import { TransferService } from "@/services/TransferService";
import { TransferForm } from "@/components/TransferForm/index.vue";
import moment from "moment";
import { defineStore } from "pinia";
import { reactive, Ref, ref } from "vue";
import { VForm } from 'vuetify/lib/components/VForm/index';
import { Transfer } from "@/types/Transfer";

export const useTransferFormStore = defineStore("schedule-form", () => {
  const form = reactive<TransferForm>({
    destinationAccount: "",
    scheduleDate: moment().format("YYYY-MM-DD"),
    sourceAccount: "",
    transferValue: 0,
  })

  const loading = ref(false);

  const formRef: Ref<VForm | null> = ref(null);

  function setFormRef(refAttr: VForm) {
    formRef.value = refAttr;
  }
  function resetForm() {
    form.destinationAccount = "";
    form.scheduleDate = moment().format("YYYY-MM-DD");
    form.sourceAccount = "";
    form.transferValue = 0;
  }

  async function submit(): Promise<boolean> {
    try {
      loading.value = true;
      const { valid } = await formRef.value!.validate();

      if (!valid) return false;

      const transferService = new TransferService();

      const transfer: Transfer = {
        value: form.transferValue,
        scheduleDate: form.scheduleDate,
        transferDate: moment().format("YYYY-MM-DD"),
        destinationAccount: form.destinationAccount,
        sourceAccount: form.sourceAccount,
      }

      transfer.fee = TransferService.calculateFee(transfer);

      await transferService.createTransfer(transfer);

      resetForm();

      return true;
    } catch (e: unknown) {
      if (e instanceof Error)
        console.log(e.message);
      return false;

    } finally {
      loading.value = false;
    }

  }

  return {
    form,
    submit,
    formRef,
    setFormRef,
    loading,
  };
});