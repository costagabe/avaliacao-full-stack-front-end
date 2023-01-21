// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import Charts from '@/types/Charts'
import { ChartsService } from '@/services/ChartsService'

export const useChartsStore = defineStore('charts-store', () =>  {
  const charts = ref<Charts>()
  const key = ref(0);

  const chartsService = new ChartsService();

  async function fetch() {
    charts.value = await chartsService.fetch();
    key.value ++;
  }

  return {
    charts, 
    fetch
  }
})
