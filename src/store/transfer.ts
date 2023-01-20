import { TransferService } from "@/services/TransferService";
import { defineStore } from "pinia";
import { ref } from "vue";
import { ITransferTableProps, Transfer } from "@/types/Transfer";
import { useModal } from "@/composables/useModal";
import { useToast } from 'vue-toastification'

export const useTransferStore = defineStore("transfer-store", () => {
  const transfers = ref<ITransferTableProps[]>([]);

  const selectedTransfer = ref<Transfer | null>(null);

  const loading = ref(false);

  const transferService = new TransferService();

  async function listAll() {
    transfers.value = await transferService.listAll();
  }

  async function confirmDelete(id: number) {
    const { setLoading, close } = useModal();
    const toast = useToast();
    try {
      loading.value = true;
      setLoading(true)
      await transferService.deleteItem(id);
      close();
      toast.success("Transferência excluída com sucesso!");
    } catch (e: unknown) {
      toast.error("Erro ao excluir transferência! Tente novamente mais tarde.")
    } finally {
      loading.value = false;
      setLoading(false);
    }
  }

  async function deleteItem(id: number) {
    const { showTextModal, onConfirm } = useModal()
    showTextModal("Tem certeza que deseja excluir?", "Excluir")
    onConfirm(() => {
      confirmDelete(id);
    })
  }

  return {
    loading,
    listAll,
    transfers,
    deleteItem
  };
});