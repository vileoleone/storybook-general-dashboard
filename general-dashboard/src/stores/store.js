import { defineStore } from 'pinia'

export const useMailingStore = defineStore('MailingStep', {
  state: () => ({ globalStep: 0, mailingCsvFile: undefined, isLoading:false })
})

