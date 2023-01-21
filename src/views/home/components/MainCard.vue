<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="3" sm="6">
        <ChartCard title="Agendamentos do dia" :in="10" :out="5" />
      </v-col>
      <v-col cols="12" lg="3" sm="6">
        <ChartCard title="Agendamentos da semana" :in="10" :out="5" />
      </v-col>
      <v-col cols="12" lg="3" sm="6">
        <ChartCard title="Agendamentos do mês" :in="10" :out="5" />
      </v-col>
      <v-col cols="12" lg="3" sm="6">
        <ChartCard title="Agendamentos ao total" :in="10" :out="5" />
      </v-col>
      <v-col cols="12">
        <v-divider class="mt-4" />
      </v-col>
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
            <data-table :loading="transferStore.loading" :data="transferStore.transfers" :cols="cols" @delete="transferStore.deleteItem"/>
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

const transferStore = useTransferStore();

const cols = TransferDataTableCols;

</script>
