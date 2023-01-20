export interface Transfer {
  id?: number;
  sourceAccount?: string;
  destinationAccount?: string;
  value: number;
  fee?: number;
  transferDate: string;
  scheduleDate: string;
}

export interface ITransferTableProps {
  id: number;
  destinationAccount: string;
  description: string;
  createdAt: String;
  scheduledAt: String;
  value: number;
  fee: number;
}