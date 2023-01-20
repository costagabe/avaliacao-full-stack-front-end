import { defineStore, } from 'pinia'
import { ref, VNode, Ref } from 'vue'

export interface ModalState {
  show: Ref<boolean>;
  component: Ref<VNode | null>;
}

const useModalStore = defineStore("modal", () => {
  const show = ref(false);
  const component = ref<VNode | null>(null);
  const title = ref<string | null>(null);
  const text = ref<string | null>(null);
  const confirm = ref<() => void>(() => { });
  const loading = ref(false);

  function setLoading(loadingAttr: boolean) {
    loading.value = loadingAttr;
  }

  function showComponentModal(componentAttr: VNode, titleAttr: string) {
    show.value = true
    component.value = componentAttr;
    title.value = titleAttr;
    text.value = null;
  }

  function showTextModal(textAttr: string, titleAttr: string) {
    show.value = true
    title.value = titleAttr;
    component.value = null;
    text.value = textAttr;
  }

  function close() {
    show.value = false
    setTimeout(() => {
      component.value = null
      title.value = null;
    }, 300);
  }

  return {
    show,
    component,
    showTextModal,
    showComponentModal,
    close,
    confirm,
    title,
    text,
    setLoading,
    loading
  }
})

export default useModalStore
