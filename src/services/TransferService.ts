import { ITransferProps, Transfer } from '@/types/Transfer';
import { TransferFeeFactory } from '@/utils/TransferFeeFactory';
import axios from 'axios';
import moment from 'moment';
export class TransferService {

  static calculateFee(transfer: Transfer): number {
    return TransferFeeFactory.createTransferFee(transfer).calculateFee(transfer);
  }

  async createTransfer(transfer: Transfer): Promise<ITransferProps | null> {
    const res = await axios.post("http://localhost:8000/transfer", this.mapToServer(transfer));
    if (res.status === 201) {
      return this.mapFromServer(res.data);
    }
    return null;
  }

  async listAll(): Promise<ITransferProps[]> {
    const res = await axios.get("http://localhost:8000/transfer")

    return res.data.content.map(this.mapFromServer);
  }

  private mapToServer(transfer: Transfer) {
    return {
      scheduleDate: transfer.scheduleDate,
      transferValue: transfer.value,
      sourceAccount: transfer.sourceAccount,
      destinationAccount: transfer.destinationAccount,
    }
  }

  private mapFromServer(transfer: any): ITransferProps {
    return {
      id: transfer.id,
      destinationAccount: transfer.destinationAccount,
      sourceAccount: transfer.sourceAccount,
      createdAt: moment(transfer.createdAt).format("DD/MM/YYYY"),
      scheduledAt: moment(transfer.scheduleDate).format("DD/MM/YYYY"),
      value: transfer.transferValue,
      fee: transfer.fee,
    }
  }

  async deleteItem(id: number) {
    const res = await axios.delete(`http://localhost:8000/transfer/${id}`);
    if (res.status === 204) {
      return true;
    }
    return false;
  }
}
