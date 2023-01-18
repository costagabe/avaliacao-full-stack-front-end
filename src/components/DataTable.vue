<script setup lang="ts">


export interface IDataTableColProps {
  name: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: number;
  format?: (value: any) => string;
}

export interface IDataTableProps<T> {
  data: Array<Record<keyof T, unknown>>;
  cols: Array<IDataTableColProps>;
}

defineProps<IDataTableProps<unknown>>();


</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="col in cols" :key="col.name" :class="[`text-${col.align ?? 'left'}`]"
          :style="{width: col.width ? `${col.width}px` : 'auto'}"
        >
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item, i in data" :key="`row-${i}`">
        <td v-for="col, j in cols" :key="`row-${i}-col-${j}`" :class="[`text-${col.align ?? 'left'}`]">
          {{col.format ? col.format((item[col.name as keyof typeof item])) : item[col.name as keyof typeof item] }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

