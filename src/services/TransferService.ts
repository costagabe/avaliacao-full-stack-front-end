import { ITransferTableProps, Transfer } from '@/types/Transfer';
import { TransferFeeFactory } from '@/utils/TransferFeeFactory';
import axios from 'axios';
import moment from 'moment';
export class TransferService {

  static calculateFee(transfer: Transfer): number {
    return TransferFeeFactory.createTransferFee(transfer).calculateFee(transfer);
  }

  async createTransfer(transfer: Transfer): Promise<Transfer | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(transfer);
      }, 1000);
    })
  }

  listAll(query?: any): Promise<ITransferTableProps[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data: Array<ITransferTableProps> = [{
          id: 1,
          "destinationAccount": "XXXXXX",
          "description": "Test test",
          "createdAt": moment().format("DD/MM/YYYY"),
          "scheduledAt": moment().format("DD/MM/YYYY"),
          value: 1000,
          fee: 3
        }];
        resolve(data)
      }, 1000)
    });
  }

  async deleteItem(id: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id)
      }, 1000)
    });
  }
}
