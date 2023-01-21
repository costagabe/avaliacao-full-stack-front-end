<script lang="ts" setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

export interface IChartCardProips {
  title: string;
  transferValue: number;
  transferFee: number;
}
const props = defineProps<IChartCardProips>();

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Valor', 'Taxa'],
  datasets: [
    {
      backgroundColor: ['#4CAF50', '#F44336'],
      data: [props.transferValue, props.transferFee],
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>

<template>
  <v-card class="mt-4" >
    <v-card-title>
      <v-row justify="center">
        <v-col cols="auto">
          <p class="text-grey">{{ title }}</p>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <Pie v-if="transferFee && transferValue" :data="data" :options="options" height="150px"  />
      <v-row v-else justify="center">
        <v-col cols="auto">
          <h3 class="text-grey-darken-2">Sem dados para serem mostrados</h3>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>