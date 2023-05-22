import { defineStore } from 'pinia'

export const useMailingStore = defineStore('MailingStep', {
  state: () => ({
    globalStep: 0,
    queueToConfig: 'Escolha uma Opção',
    mailingCsvFile: undefined,
    isLoading: false,
    readyToProceed: false,
    stepSectionDict: {
      Fila: 'Escolha uma opção',
      Arquivo: 'csv file name',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    }
  }),
  getters: {
    stepSectionDict(state) {
      const Arquivo = state.mailingCsvFile ? state.mailingCsvFile.name : ''
      const stepSectionDict = {
        Fila: state.queueToConfig,
        Arquivo,
        'Mapeamento do Arquivo': '1234 registros - 6 colunas',
        'Mapeamento do perfilador': '6 colunas em campo',
        'Análise dos campos do arquivo': '3 colunas ignoradas',
        Importação: ''
      }
      return stepSectionDict
    }
  }
})
