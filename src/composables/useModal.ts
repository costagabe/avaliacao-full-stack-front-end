import useModalStore from "@/store/modal"

export const useModal = () => {
  const modalStore = useModalStore();

  function onConfirm(cb: () => void) {
    modalStore.confirm = cb;
  }

  return {
    onConfirm,
    setLoading: modalStore.setLoading,
    close: modalStore.close,
    showComponentModal: modalStore.showComponentModal,
    showTextModal: modalStore.showTextModal,
  }
}