import { Transfer } from '@/types/Transfer';
import DateUtils from '@/utils/DateUtils';



export interface TransferFeeStrategy {
  calculateFee(transfer: Transfer): number;
}

export class TransferFeeAStrategy implements TransferFeeStrategy {
  calculateFee(transfer: Transfer): number {
    return 3 + (transfer.value * 0.03);
  }
}

export class TransferFeeBStrategy implements TransferFeeStrategy {
  calculateFee(transfer: Transfer): number {
    return 12;
  }
}

export class TransferFeeCStrategy implements TransferFeeStrategy {
  calculateFee(transfer: Transfer): number {
    const diff = DateUtils.daysBetween(transfer.transferDate, transfer.scheduleDate);
    if (diff > 10 && diff <= 20)
      return transfer.value * 0.082;
    else if (diff > 20 && diff <= 30)
      return transfer.value * 0.069;
    else if (diff > 30 && diff <= 40)
      return transfer.value * 0.047;
    else if (diff > 40)
      return transfer.value * 0.017;

    throw new Error(`Error diff = ${diff}`);
  }
}

export class TransferFeeDStrategy implements TransferFeeStrategy {

  calculateFee(transfer: Transfer): number {
    if (transfer.value > 2000)
      return new TransferFeeCStrategy().calculateFee(transfer);
    if (transfer.value > 1000 && transfer.value <= 2000)
      return new TransferFeeBStrategy().calculateFee(transfer);
    if (transfer.value <= 1000)
      return new TransferFeeAStrategy().calculateFee(transfer);

    throw new Error("You cant transfer more than 2000 reais before 10 days");
  }
}






