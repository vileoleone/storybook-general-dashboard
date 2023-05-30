<template>
  <div type="span" class="mailing-page" :class="classes" @click="onClick" :style="style">
    <HeaderComponent id="header-in-page" />

    <RoutePathSection class="next-section-in-page" :routes="RoutePathSectionList" />

    <div v-if="this.step == 0" class="import-sections">
      <LeftSection label="Etapas de Importação" :dict="stepSectionDict" :step="0" />

      <RightSection label="Fila" :queues="queueList" :vueComponent="StepQueueChoice" />
    </div>

    <div v-if="this.step == 1" class="import-sections">
      <LeftSection label="Etapas de Importação" :dict="stepSectionDict" :step="1" />

      <RightSection label="Arquivo" :queues="queueList" :vueComponent="StepFileImport" />
    </div>

    <div v-if="this.step == 2" class="import-sections">
      <LeftSection label="Etapas de Importação" :dict="stepSectionDict" :step="2" />

      <RightSection label="Mapeamento" :queues="queueList" :vueComponent="StepMappingFile" />
    </div>
  </div>
</template>

<script>
import StepFileImport from '#/Sections/QueueConfigComponents/CompositeComponents/StepFileImport.vue'
import { default as HeaderComponent } from '#/Header/Header.vue'
import RightSection from '#/Sections/QueueConfigComponents/CompositeComponents/RightSection.vue'
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
import RoutePathSection from '#/Sections/QueueConfigComponents/CompositeComponents/RoutePathSection.vue'
import StepQueueChoice from '#/Sections/QueueConfigComponents/CompositeComponents/StepQueueChoice.vue'
import LeftSection from '#/Sections/QueueConfigComponents/CompositeComponents/LeftSection.vue'
import StepMappingFile from '#/Sections/QueueConfigComponents/CompositeComponents/StepMappingFile.vue'
export default {
  name: 'ImportMailingPage',
  components: {
    HeaderComponent,
    RoutePathSection,
    LeftSection,
    RightSection
  },

  data() {
    return {
      StepQueueChoice,
      StepFileImport,
      StepMappingFile,
      RoutePathSectionList: ['Dashboards', 'Campanhas', 'Importação'],
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
  margin-top: 44px;
  position: fixed;
  left: 0;
}
.import-sections {
  display: flex;
  width: 100%;

  position: fixed;
  left: 0;
  top: 153px;
}
</style>
