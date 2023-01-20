export interface Transfer {
  id?: number;
  sourceAccount?: string;
  destinationAccount?: string;
  value: number;
  fee?: number;
  transferDate: string;
  scheduleDate: string;
}