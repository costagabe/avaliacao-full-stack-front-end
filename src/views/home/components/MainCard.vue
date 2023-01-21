<template>
  <v-container>
    <v-row>
      <template v-if="chartsStore.charts" :key="chartsStore.key">
        <v-col cols="12" lg="4" sm="6">
          <ChartCard title="Agendamentos do dia" :transfer-value="chartsStore.charts.dayValue" :transfer-fee="chartsStore.charts.dayFee" />
        </v-col>
        <v-col cols="12" lg="4" sm="6">
          <ChartCard title="Agendamentos da semana" :transfer-value="chartsStore.charts.weekValue" :transfer-fee="chartsStore.charts.weekFee" />
        </v-col>
        <v-col cols="12" lg="4" sm="6">
          <ChartCard title="Agendamentos do mês" :transfer-value="chartsStore.charts.monthValue" :transfer-fee="chartsStore.charts.monthFee" />
        </v-col>
        <v-col cols="12">
          <v-divider class="mt-4" />
        </v-col>
      </template>
      <v-col cols="12">
        <v-card class="mt-4">
          <v-card-title>
            <v-row justify="center">
              <v-col cols="auto">
                <p class="text-grey">Detalhes</p>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <data-table v-if="transferStore.transfers.length" :loading="transferStore.loading" :data="transferStore.transfers" :cols="cols"
              @delete="transferStore.deleteItem" />
            <v-row v-else justify="center">
              <v-col cols="auto">
                <h3 class="text-grey-darken-2">Sem dados para serem mostrados</h3>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ChartCard from "./ChartCard.vue";
import DataTable from "@/components/DataTable.vue";
import { useTransferStore } from "@/store/transfer"
import TransferDataTableCols from "@/utils/tables/columns/TransferDataTableCols";
import { onMounted } from "vue";
import {useChartsStore} from "@/store/charts"

const transferStore = useTransferStore();

const cols = TransferDataTableCols;


const chartsStore = useChartsStore();

onMounted(async () => {
    chartsStore.fetch();
})

</script>
