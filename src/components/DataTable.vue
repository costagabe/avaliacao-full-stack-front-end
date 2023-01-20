<script setup lang="ts">


export interface IDataTableColProps {
  name: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: number;
  format?: (value: any) => string;
}

export interface IDataTableEmits {
  (e: 'delete', item: any): void
}

export interface IDataTableProps<T> {
  data: Array<Record<keyof T, any>>;
  cols: Array<IDataTableColProps>;
}

defineProps<IDataTableProps<any>>();

const emit = defineEmits<IDataTableEmits>();
  const deleteItem = (item: any) => {
    emit("delete", item);
  };

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
        <th >
          Ações
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item, i in data" :key="`row-${i}`">
        <td v-for="col, j in cols" :key="`row-${i}-col-${j}`" :class="[`text-${col.align ?? 'left'}`]">
          {{col.format ? col.format((item[col.name as keyof typeof item])) : item[col.name as keyof typeof item] }}
        </td>
        <td>
          <v-row justify="center">
          <v-btn icon size="sm" class="pa-1" color="error" @click="deleteItem(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          </v-row>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

