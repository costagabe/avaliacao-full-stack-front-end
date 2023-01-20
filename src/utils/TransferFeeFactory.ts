import { TransferFeeStrategy, TransferFeeAStrategy, TransferFeeBStrategy, TransferFeeCStrategy, TransferFeeDStrategy } from "@/strategies/TransferStrategy";
import { Transfer } from "@/types/Transfer";
import moment from "moment";
import DateUtils from "./DateUtils";

export class TransferFeeFactory {
  static createTransferFee({ transferDate, scheduleDate, value }: Transfer): TransferFeeStrategy {
    TransferFeeFactory.validateTransfer({ transferDate, scheduleDate, value });

    if (value > 1000)
      return new TransferFeeDStrategy();

    const diff = DateUtils.daysBetween(transferDate, scheduleDate);
    if (diff === 0)
      return new TransferFeeAStrategy();
    if (diff <= 10)
      return new TransferFeeBStrategy();
    if (diff > 10)
      return new TransferFeeCStrategy();

    throw new Error("Could not find a strategy");
  }
  private static validateTransfer({ transferDate, scheduleDate, value }: Transfer): void {
    if (value <= 0)
      throw new Error("You cant transfer less than 0 reais");
    if (moment(transferDate).isAfter(scheduleDate))
      throw new Error("You cant schedule a transfer before the transfer date");

  }
}