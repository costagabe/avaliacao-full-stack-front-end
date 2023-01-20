<script lang="ts">
import { moneyOptions } from '@/utils/MoneyUtils';
import { VTextField } from 'vuetify/lib/components/VTextField/index';
import { defineComponent } from 'vue';
import { toLocaleString } from '@/utils/DateUtils';
import Rules from '@/utils/Rules';

export default defineComponent({
  extends: VTextField,
  data() {
    return {
      moneyOptions,
      moneyRules: Rules.transferForm.moneyRules
    }
  },
  props: {
    fee: {
      type: Number,
      default: 0,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  emits: ['update:value'],
  computed: {
    feeText() {
      if (this.$props.fee === -1) {
        return 'Valor inválido'
      }
      return toLocaleString(this.$props.fee)
    },
    computedValue: {
      get() {
        return this.value * 100;
      },
      set(v: number) {
        const valueNumber = Number(String(v).replace(/\D+/g, '')) / 100;
        this.$emit('update:value', valueNumber);
      }
    }
  },
  inheritAttrs: false

})
</script>

<template>
  <v-text-field v-bind="$attrs" v-money="moneyOptions" v-model="computedValue" :rules="moneyRules(fee)" label="Valor">
    <template v-slot:append>
      <v-card width="120" class="full-height pt-0 mt-0 ml-2" color="grey-lighten-4">
        <v-card-title class="pa-0 ma-0 pt-2 px-2 ">
          <p class="text-grey text-caption">Taxa</p>
        </v-card-title>
        <v-card-text class="ma-0 pa-0 px-2 text-center">
          {{ feeText }}
        </v-card-text>
      </v-card>
    </template>
  </v-text-field>
</template>