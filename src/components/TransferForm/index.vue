<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import moment from 'moment'
import { TransferService } from '@/services/TransferService';
import { useTransferFormStore } from '@/store/transfer-form';
import TransferValueInput from './components/TransferValueInput.vue';
import Rules from '@/utils/Rules';
import { VForm } from 'vuetify/lib/components/VForm/index';

export interface TransferForm {
  destinationAccount: string;
  transferValue: number;
  scheduleDate: string;
  sourceAccount: string;
}

const formRef = ref<VForm | null>(null);
const transferFormStore = useTransferFormStore();

onMounted(() => {
  transferFormStore.setFormRef(formRef.value!);
})

const fee = computed(() => {
  let value = 0;
  try {
    value = TransferService.calculateFee({
      scheduleDate: transferFormStore.form.scheduleDate,
      transferDate: moment().format('YYYY-MM-DD'),
      value: transferFormStore.form.transferValue
    });
  } catch (e: unknown) {
    return -1;
  }
  return value;
})

const accountRules = Rules.transferForm.accountRules;

</script>


<template>
  <v-container fluid style="width: 660px">
    <v-row>
      <v-col>
        <v-form ref="formRef" @submit.prevent="transferFormStore.submit">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field :loading="transferFormStore.loading" v-mask="'XXXXXX'"
                v-model="transferFormStore.form.sourceAccount" label="Conta de origem" :rules="accountRules" required />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field :loading="transferFormStore.loading" v-mask="'XXXXXX'"
                v-model="transferFormStore.form.destinationAccount" label="Conta de destino" :rules="accountRules"
                required />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <TransferValueInput :loading="transferFormStore.loading" :fee="fee"
                v-model:value="transferFormStore.form.transferValue" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field :loading="transferFormStore.loading"
                :rules="[v => moment(v).isSameOrAfter(moment(), 'days') || 'Data não pode ser anterior que a data atual']"
                v-model="transferFormStore.form.scheduleDate" label="Data da transferência" type="date" />
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<style  scoped>
:deep(.v-input__append) {
  margin: 0;
  padding-top: 0 !important;
}
</style>