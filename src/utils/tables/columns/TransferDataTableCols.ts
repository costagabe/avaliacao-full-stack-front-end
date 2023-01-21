import { IDataTableColProps } from "@/components/DataTable.vue";

export default  [
  {
    label: "Conta de origem",
    name: "sourceAccount",
  },
  {
    label: "Conta de destino",
    name: "destinationAccount",
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
] as IDataTableColProps[];