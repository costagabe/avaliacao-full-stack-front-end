<script lang="ts" setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

export interface IChartCardProips {
  title: string;
  in: number;
  out: number;
}
const props = defineProps<IChartCardProips>();

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Entrada', 'Saída'],
  datasets: [
    {
      backgroundColor: ['#4CAF50', '#F44336'],
      data: [props.in, props.out],
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>

<template>
  <v-card class="mt-4">
    <v-card-title>
      <v-row justify="center">
        <v-col cols="auto">
          <p class="text-grey">{{ title }}</p>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <Pie :data="data" :options="options" height="150px"  />
    </v-card-text>
  </v-card>
</template>