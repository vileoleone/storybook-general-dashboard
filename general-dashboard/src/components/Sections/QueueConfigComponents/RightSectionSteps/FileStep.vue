<template>
  <div type="span" class="file-step-outer-box" :class="classes" :style="style">
    <main class="main-left">
      <DropZone />
      <div class="queue-tables">
        <SearchSubHeader />
        <div class="tables">
          <template v-if="Object.keys(queues).length > 0">
            <div v-for="(queueItens, queueName, index) in queues" :key="index">
              <TableQueue :index="index" :queueName="queueName" :queueData="queueItens" />
            </div>
          </template>

          <template v-if="Object.keys(queues).length == 0">
            <TableQueue />
          </template>
        </div>
      </div>
    </main>
    <ButtonBottom @click="loadAndParse" label="Continuar para a próxima etapa" />
  </div>
  <SpinnerLoader v-if="this.isLoading" class="loading-box" />
</template>

<script>
import { mapWritableState } from 'pinia'
import SpinnerLoader from '../AtomicComponents/SpinnerLoader.vue'
import { useMailingStore } from '@/stores/useMailingStore'
import { useQueueStore } from '@/stories/assets/stores/queueStore'
import ButtonBottom from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonBottom.vue'
import DropZone from '#/Sections/QueueConfigComponents/AtomicComponents/DropZone.vue'
import Papa from 'papaparse'
import SearchSubHeader from '#/Sections/QueueConfigComponents/AtomicComponents/SearchSubHeader.vue'
import TableQueue from '#/Sections/QueueConfigComponents/AtomicComponents/TableQueue.vue'
import TriangleDown from '@/assets/icons/TriangleDown.svg'
import TriangleUp from '@/assets/icons/TriangleUp.svg'

export default {
  name: 'FileStep',

  components: { DropZone, TableQueue, SearchSubHeader, ButtonBottom, SpinnerLoader },

  data() {
    return {
      TriangleDown,
      TriangleUp,
      active: false
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
    ...mapWritableState(useQueueStore, {
      queues: 'queueExample'
    }),
    ...mapWritableState(useMailingStore, {
      readyToProceed: 'readyToProceed',
      file: 'mailingCsvFile',
      isLoading: 'isLoading',
      step: 'globalStep'
    })
  },
  methods: {
    onClick() {
      this.active = !this.active
    },
    changeBodyOpacity() {
      document.body.style.opacity = '0.4'
      document.body.style.backgroundColor = 'black'
    },
    async loadAndParse() {
      this.isLoading = true
      this.readyToProceed = false
      return this.parseMailingCsv(this.file).then(() => {
        this.isLoading = false
        this.readyToProceed = true
        this.step++
      })
    },
    parseMailingCsv(file) {
      return new Promise((resolve) =>
        Papa.parse(file, {
          worker: true,
          header: false,
          skipEmptyLines: true,

          complete: (results) => {
            this.file.data = results.data
            resolve()
          }
        })
      )
    }
  }
}
</script>

<style scoped lang="scss">
.main-left {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 0;
  width: 100%;
}
.file-step-outer-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0;
  width: 100%;
}

.queue-tables {
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  width: 100%;
  align-items: flex-end;
}

.tables {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
