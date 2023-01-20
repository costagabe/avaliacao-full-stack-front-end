import moment from "moment";

export default class DateUtils {
  static daysBetween(date1: string, date2: string): number {
    return moment(date2).diff(moment(date1), 'days');
  }
}

export const toLocaleString = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}