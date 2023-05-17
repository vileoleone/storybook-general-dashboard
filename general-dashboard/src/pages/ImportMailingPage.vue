<template>
  <div type="span" class="mailing-page" :class="classes" @click="onClick" :style="style">
    <HeaderComponent />
    <NextSection :routes="nextSectionList" />

    <div v-if="this.step == 0" class="import-sections">
      <StepSection label="Etapas de Importação" :dict="stepSectionDict" :step="0" />

      <MailingMainSection label="Fila" :queues="queueList" :vueComponent="QueueStep" />
    </div>

    <div v-if="this.step == 1" class="import-sections">
      <StepSection label="Etapas de Importação" :dict="stepSectionDict" :step="1" />

      <MailingMainSection label="Arquivo" :queues="queueList" :vueComponent="FileStep" />
    </div>
  </div>
</template>

<script>
import { default as HeaderComponent } from '#/Header/Header.vue'
import NextSection from '#/Sections/QueueConfigComponents/NextSectionUnderHeader/NextSection.vue'
import StepSection from '#/Sections/QueueConfigComponents/LeftSectionSteps/LeftSectionSteps.vue'
import { default as MailingMainSection } from '#/Sections/QueueConfigComponents/Main.vue'
import QueueStep from '#/Sections/QueueConfigComponents/RightSectionSteps/QueueStep.vue'
import { default as FileStep } from '#/Sections/QueueConfigComponents/RightSectionSteps/FileStep.vue'
import { mapState } from 'pinia'
import { useMailingStore } from '@/stores/store'
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
    }, 
     ...mapState(useMailingStore, {
      step: 'globalStep',
      }),
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
