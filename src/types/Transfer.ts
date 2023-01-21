export interface Transfer {
  id?: number;
  sourceAccount?: string;
  destinationAccount?: string;
  value: number;
  fee?: number;
  transferDate: string;
  scheduleDate: string;
}

export interface ITransferProps {
  id: number;
  sourceAccount: string;
  destinationAccount: string;
  createdAt: String;
  scheduledAt: String;
  value: number;
  fee: number;
}