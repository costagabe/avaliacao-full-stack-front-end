<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="3" md="6">
        <ChartCard title="Agendamentos do dia" :in="10" :out="5" />
      </v-col>
      <v-col cols="12" lg="3" md="6">
        <ChartCard title="Agendamentos da semana" :in="10" :out="5" />
      </v-col>
      <v-col cols="12" lg="3" md="6">
        <ChartCard title="Agendamentos do mês" :in="10" :out="5" />
      </v-col>
      <v-col cols="12" lg="3" md="6">
        <ChartCard title="Agendamentos ao total" :in="10" :out="5" />
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
            <data-table :data="transferStore.transfers" :cols="cols" @delete="transferStore.deleteItem"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ChartCard from "./ChartCard.vue";
import DataTable, { IDataTableColProps } from "@/components/DataTable.vue";
import { ITransferTableProps } from "@/types/Transfer";
import { useTransferStore } from "@/store/transfer"



const mounted = ref(false);

const cols: IDataTableColProps[] = [
  {
    label: "Conta de destino",
    name: "destinationAccount",
  },
  {
    label: "Descrição",
    name: "description",
  },
  {
    label: "Data de criação",
    name: "createdAt",
  },
  {
    label: "Data do agendamento",
    name: "scheduledAt",
  },
  {
    label: "Valor (R$)",
    name: "value",
    format: (value: number) => `${value.toFixed(2)}`,
    width: 150
  },
  {
    label: "Taxa (R$)",
    name: "fee",
    format: (value: number) => `${value.toFixed(2)}`,
    width: 150
  }
];


const deleteSchedule = (item: ITransferTableProps) => {
  console.log("delete", item.id);
};

const editSchedule = (item: ITransferTableProps) => {
  console.log("edit", item.id);
};

const transferStore = useTransferStore();

onMounted(() => {
  mounted.value = true;
});

</script>
