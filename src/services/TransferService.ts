import { Transfer } from '@/types/Transfer';
import { TransferFeeFactory } from '@/utils/TransferFeeFactory';
export class TransferService {


  static calculateFee(transfer: Transfer): number {
    return TransferFeeFactory.createTransferFee(transfer).calculateFee(transfer);
  }

  async createTransfer(transfer: Transfer): Promise<Transfer> {
    try {
      transfer.id = 2;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(transfer);
        }, 1000);
      })
    } catch (e) {
      console.log(e);
    }
    return transfer;
  }
}