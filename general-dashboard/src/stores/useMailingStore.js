import { defineStore } from 'pinia'

export const useMailingStore = defineStore('MailingStep', {
  state: () => ({
    globalStep: 0,
    queueToConfig: 'Escolha uma Opção',
    mailingCsvFile: {
      name: 'examplenamefile.csv',
      data: [
        ['id', 'nome', 'numero'],
        ['4000', 'francielle', '67999263831'],
        ['4001', 'Carlos', '6733206400'],
        ['4002', 'Carol', '11999263831'],
        ['4003', 'Pedro', '6733180790'],
        ['4004', 'Carmem', '6733180791']
      ]
    },
    isLoading: false,
    readyToProceed: false,
    stepSectionDict: {
      Fila: 'Escolha uma opção',
      Arquivo: 'csv file name',
      'Mapeamento do Arquivo': '1234 registros - 6 colunas',
      'Mapeamento do perfilador': '6 colunas em campo',
      'Análise dos campos do arquivo': '3 colunas ignoradas',
      Importação: ''
    },
    datatypeFields: [
      {
        fieldName: 'Perfilador',
        data: [
          { fieldName: 'UF', fieldtype: 'texto' },
          { fieldName: 'Cidade', fieldtype: 'texto' },
          { fieldName: 'Email', fieldtype: 'Email' },
          { fieldName: 'Data', fieldtype: 'Data' },
          { fieldName: 'Timestamp', fieldtype: 'Timestamp' },
          { fieldName: 'Data e HORA', fieldtype: 'Data e HORA' },
          { fieldName: 'URL', fieldtype: 'URL' },
          { fieldName: 'Verdadeiro/Falso', fieldtype: 'Verdadeiro/Falso' },
          { fieldName: 'complemento1', fieldtype: 'complemento1' },
          { fieldName: 'complemento2', fieldtype: 'complemento2' },
          { fieldName: 'complemento3', fieldtype: 'complemento3' },
          { fieldName: 'complemento4', fieldtype: 'complemento4' }
        ]
      },
      {
        fieldName: 'Sistema',
        data: [
          { fieldName: 'Telefone', fieldtype: 'texto' },
          { fieldName: 'Cidade', fieldtype: 'texto' },
          { fieldName: 'Email', fieldtype: 'Email' },
          { fieldName: 'Data', fieldtype: 'Data' },
          
        ]
      },
      {
        fieldName: 'Já utilizados',
        data: [
          { fieldName: 'Timestamp', fieldtype: 'texto' },
          { fieldName: 'Cidade', fieldtype: 'texto' },
          { fieldName: 'Email', fieldtype: 'Email' },
          { fieldName: 'Data', fieldtype: 'Data' },
          { fieldName: 'Timestamp', fieldtype: 'Timestamp' },
          { fieldName: 'Data e HORA', fieldtype: 'Data e HORA' },
          { fieldName: 'URL', fieldtype: 'URL' },
          { fieldName: 'Verdadeiro/Falso', fieldtype: 'Verdadeiro/Falso' }
        ]
      }
    ]
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
