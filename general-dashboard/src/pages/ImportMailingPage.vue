<template>
  <div type="span" class="mailing-page" :class="classes" @click="onClick" :style="style">
    <HeaderComponent />
    <NextSection :routes="nextSectionList" />

    <div v-if="step == 0" class="import-sections">
      <StepSection label="Etapas de Importação" :dict="stepSectionDict" :step="0" />

      <MailingMainSection label="Fila" :queues="queueList" :vueComponent="QueueStep" />
    </div>

    <div v-if="step == 1" class="import-sections">
      <StepSection label="Etapas de Importação" :dict="stepSectionDict" :step="1" />

      <MailingMainSection label="Arquivo" :queues="queueList" :vueComponent="FileStep" />
    </div>
  </div>
</template>

<script>
import { default as HeaderComponent } from '../components/Header/Header.vue'
import NextSection from '@/components/Sections/NextSection.vue'
import StepSection from '../components/Sections/StepSection.vue'
import MailingMainSection from '../components/Sections/MailingMainSection.vue'
import QueueStep from '../components/Sections/MailingSectionComponents/QueueStep.vue'
import FileStep from '@/components/Sections/MailingSectionComponents/FileStep.vue'
export default {
  name: 'ImportMailingPage',

  components: { HeaderComponent, NextSection, StepSection, MailingMainSection, FileStep },

  data() {
    return {
      QueueStep,
      FileStep,
      nextSectionList: ['Dashboards', 'Campanhas', 'Importação'],
      stepSectionDict: {
        Fila: 'Nome da fila escolhida',
        Arquivo: 'nome_do_arquivo.csv',
        'Mapeamento do Arquivo': '1234 registros - 6 colunas',
        'Mapeamento do perfilador': '6 colunas em campo',
        'Análise dos campos do arquivo': '3 colunas ignoradas',
        Importação: ''
      },
      queueList: ['filafonacao', 'filaatendimento']
    }
  },

  props: {
    label: {
      type: String,
      required: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    backgroundColor: {
      type: String
    },
    step: {
      type: Number
    },
    queuesObject: {
      type: Object
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
<style scoped lang="scss">
.mailing-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
}

.import-sections {
  display: flex;
  width: 100%;
}
</style>
