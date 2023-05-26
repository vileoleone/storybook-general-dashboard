import { defineStore } from 'pinia'

export const useMailingStore = defineStore('MailingStep', {
  state: () => ({
    globalStep: 0,
    queueToConfig: 'Escolha uma Opção',
    mailingCsvFile: {
      name: 'examplenamefile.csv',
      data: [
        ['id', 'nome', 'numero', 'UF', 'Cidade', 'URL', 'Data'],
        ['4000', 'francielle', '67999263831', 'MG', 'belo Horizonte', '03', 'www'],
        ['4001', 'Carlos', '6733206400', 'MG', 'belo Horizonte', '05', 'www'],
        ['4002', 'Carol', '11999263831', 'MS', 'Campo Grande', '09', 'www'],
        ['4003', 'Pedro', '6733180790', 'SP', 'São Paulo', '08', 'www'],
        ['4004', 'Carmem', '6733180791', 'RS', 'Canela', '09', 'www']
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
          { fieldName: 'Data', fieldtype: 'Data' }
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
    ],
    mapColumnsArray: []
  }),
  getters: {
    stepSectionDictGetter(state) {
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
    },

    notMappedColumns(state) {
      if (!state.mapColumnsArray) return state.mapColumnsArray

      const result = state.mapColumnsArray.pop().filter((obj) => !obj.isMapped)

      return result
    },
    mappedColumns(state) {
      if (!state.mapColumnsArray) return state.mapColumnsArray

      const result = state.mapColumnsArray.pop().filter((obj) => obj.isMapped)

      return result
    }
  },
  actions: {
    extractCsvFileData() {
      const csvFileHeader = this.mailingCsvFile.data[0]
      const csvFileData = this.mailingCsvFile.data.slice(1, 4)

      const extractedObject = {}

      csvFileHeader.forEach((header, index) => {
        extractedObject[header] = csvFileData.map((row) => row[index])
      })

      return extractedObject
    },
    sortOutFieldTypes() {
      const fieldType = []
      this.datatypeFields.forEach((field) => {
        field.data.forEach((subField) => {
          fieldType.push(subField.fieldName)
        })
      })
      return fieldType
    },

    sortOutColumns() {
      const csvData = this.extractCsvFileData()
      const fieldType = this.sortOutFieldTypes()
      const array = []
      console.log(array)
      for (const columnHeader of Object.keys(csvData)) {
        const typeSearch = fieldType.find((typeMapped) => typeMapped === columnHeader)

        if (typeSearch !== undefined) {
          array.push({
            header: columnHeader,
            data: csvData[columnHeader],
            isMapped: true
          })
          continue
        }
        array.push({
          header: columnHeader,
          data: csvData[columnHeader],
          isMapped: false
        })
      }

      const arrayChecked = this.checkIfHasProblem(array)

      return this.mapColumnsArray.push(arrayChecked)
    },

    checkIfHasProblem(dataArray) {
      const duplicateHeaders = new Set()
      const extractedArray = dataArray
        .map((obj) => {
          if (duplicateHeaders.has(obj.header)) {
            return (obj.type = 'duplicate')
          }
          obj.type = 'notMapped'
          duplicateHeaders.add(obj.header)
          return obj
        })
        .map((obj) => {
          if (obj.isMapped == true) {
            obj.type = 'mapped'
            return obj
          }
          return obj
        })
      return extractedArray
    }
  }
})
/* [
  { header: 'id', data: [1, 2, 'ree'], isMapped: false },
  { header: 'nome', data: ['dsds', 2, 'ree'], isMapped: false },
  { header: 'dsa', data: ['dsdsds', 2, 're22e'], isMapped: false }
] */

/* const dataArray = [
  { header: 'id', data: [1, 2, 'ree'], isMapped: false },
  { header: 'nome', data: ['dsds', 2, 'ree'], isMapped: false, type: 'duplicate' },
  { header: 'dsa', data: ['dsdsds', 2, 're22e'], isMapped: false },
  { header: 'nome', data: ['dsdsds', 2, 're22e'], isMapped: false, type: 'duplicate' }
] */
