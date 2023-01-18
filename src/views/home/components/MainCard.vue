<template>
  <v-container>
    <v-row justify="end">
      <v-col cols="auto">
        <v-btn block color="secondary">
          <v-icon class="text-white mr-1">
            mdi-plus
          </v-icon>
          <b class="text-white">Agendar</b>
        </v-btn>
      </v-col>
    </v-row>
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
            <data-table :data="data" :cols="cols" />
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
    label: "Valor",
    name: "value",
    format: (value: number) => `R$ ${value.toFixed(2)}`,
    width: 150
  }

];

const data = [{
  "destinationAccount": "XXXXXX",
  "description": "Test test",
  "createdAt": new Date(),
  "scheduledAt": new Date(),
  value: 100
}];

onMounted(() => {
  mounted.value = true;
});

</script>
