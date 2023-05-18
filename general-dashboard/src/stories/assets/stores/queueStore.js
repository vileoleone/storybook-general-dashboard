import { defineStore } from 'pinia'

export const useQueueStore = defineStore('queue', {
  state: () => ({ queueExample: queue })
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
        bairro: 'tiradentes'
      },
      {
        id: 1,
        nome: 'Carlos',
        numero: 9423984732,
        cep: '47238472',
        rua: '',
        bairro: 'tiradentes'
      },
      {
        id: 1,
        nome: 'Pedro',
        numero: 9423984732,
        cidade: 'campo grande',
        cep: '47238472',
        rua: 'loiaolaa,',
        
      }
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
      {
        id: 1,
        nome: 'Carlos',
        numero: 9423984732,
        cidade: 'campo grande',
        cep: '47238472',
        rua: '',
        bairro: 'tiradentes'
      },
      {
        id: 1,
        nome: 'Pedro',
        numero: 9423984732,
        cidade: 'campo grande',
        cep: '47238472',
        rua: 'loiaolaa,',
        bairro: ''
      }
    ]
  }
}
