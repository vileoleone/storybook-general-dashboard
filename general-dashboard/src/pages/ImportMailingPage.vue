<template>
  <div type="span" class="mailing-page" :class="classes" @click="onClick" :style="style">
    <HeaderComponent id="header-in-page" />

    <NextSection class="next-section-in-page" :routes="nextSectionList" />

    <div v-if="this.step == 0" class="import-sections">
      <StepSection label="Etapas de Importação" :dict="stepSectionDict" :step="0" />

      <MailingMainSection label="Fila" :queues="queueList" :vueComponent="QueueStep" />
    </div>

    <div v-if="this.step == 1" class="import-sections">
      <StepSection label="Etapas de Importação" :dict="stepSectionDict" :step="1" />

      <MailingMainSection label="Arquivo" :queues="queueList" :vueComponent="FileStep" />
    </div>

    <div v-if="this.step == 2" class="import-sections">
      <StepSection label="Etapas de Importação" :dict="stepSectionDict" :step="2" />

      <MailingMainSection label="Mapeamento" :queues="queueList" :vueComponent="MappingFileStep" />
    </div>
  </div>
</template>

<script>
import { default as FileStep } from '#/Sections/QueueConfigComponents/RightSectionSteps/FileStep.vue'
import { default as HeaderComponent } from '#/Header/Header.vue'
import { default as MailingMainSection } from '#/Sections/QueueConfigComponents/MailingMainSection.vue'
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
import NextSection from '#/Sections/QueueConfigComponents/NextSectionUnderHeader/NextSection.vue'
import QueueStep from '#/Sections/QueueConfigComponents/RightSectionSteps/QueueStep.vue'
import StepSection from '#/Sections/QueueConfigComponents/LeftSectionSteps/LeftSectionSteps.vue'
import MappingFileStep from '@/components/Sections/QueueConfigComponents/RightSectionSteps/MappingFileStep.vue'
export default {
  name: 'ImportMailingPage',
  components: {
    HeaderComponent,
    NextSection,
    StepSection,
    MailingMainSection
  },

  data() {
    return {
      QueueStep,
      FileStep,
      MappingFileStep,
      nextSectionList: ['Dashboards', 'Campanhas', 'Importação'],
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
    ...mapWritableState(useMailingStore, {
      isLoading: 'isLoading',
      queueToConfig: 'queueToConfig',
      step: 'globalStep',
      csvFile: 'mailingCsvFile',
      readyToProceed: 'readyToProceed',
      stepSectionDict: 'stepSectionDict'
    })
  },

  methods: {}
}
</script>
<style scoped lang="scss">
.loading-box {
  display: flex;
  z-index: 2;
  position: fixed;
}
.mailing-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
#header-in-page {
  z-index: 1;
}
.next-section-in-page {
  margin-top: 60px;
  position: fixed;
  left: 0;
}
.import-sections {
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  top: 170px;
  z-index: 1;
}
</style>
