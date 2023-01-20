export default {
  transferForm: {
    moneyRules: (fee: number) => [() => fee >= 0 || 'Valor inválido ou a data é inválida para os parametros do sistema'],
    accountRules: [(v: string) => v.length == 6 || 'Conta de origem é obrigatória e deve conter 6 digitos']
  }
}