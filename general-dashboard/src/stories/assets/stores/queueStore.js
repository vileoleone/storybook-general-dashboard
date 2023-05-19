import { defineStore } from 'pinia'

export const useQueueStore = defineStore('queue', {
  state: () => ({ queueExample: queue, queueExample2: {} })
})

const queue = {
  'nomedoarquivo.csv': {
    createdAt: '08/03/2022',
    data: [
      {
        id: 1,
        nome: 'francielle',
        numero: 9423984732,
        cidade: 'campo grande',
        cep: '47238472',
        rua: 'loiaola,',
        bairro: 'tiradentes', 
        complemento: '3345',
        telefone: '334545544',
        situacao:'pago', 
      },
    ]
  },
  'nomedoarquivo2.csv': {
    createdAt: '03/03/2022',
    data: [
      {
        id: 1,
        nome: 'francielle',
        numero: 9423984732,
        cidade: 'campo grande',
        cep: '47238472',
        rua: 'loiaola,',
        bairro: 'tiradentes'
      },
    ]
  },
  'nomedoarquivo3.csv': {
    createdAt: '03/03/2022',
    data: [
      {
        id: 1,
        nome: 'Carlos',
        numero: 9423984732,
        cidade: 'campo grande',
        cep: '47238472',
        rua: '',
        bairro: 'tiradentes'
      }
    ]
  }
}
