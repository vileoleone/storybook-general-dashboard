<template>
  <div type="span" class="file-step-outer-box" :class="classes" :style="style">
    <main class="main-left">
      <DropZone />
      <div class="queue-tables">
        <SearchSubHeader />
        <div v-for="(queueItens, queueName,  index) in queues" :key="index">
          <TableQueue :queueName="queueName" :queueData="queueItens" />
        </div>
      </div>
    </main>
    <ButtonBottom label="Ir para a próxima etapa" :isReady="true" />
  </div>
</template>

<script>
import TriangleDown from '@/assets/icons/TriangleDown.svg'
import TriangleUp from '@/assets/icons/TriangleUp.svg'
import DropZone from '#/Sections/QueueConfigComponents/AtomicComponents/DropZone.vue'
import TableQueue from '#/Sections/QueueConfigComponents/AtomicComponents/TableQueue.vue'
import SearchSubHeader from '#/Sections/QueueConfigComponents/AtomicComponents/SearchSubHeader.vue'
import ButtonBottom from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonBottom.vue'
import { useQueueStore } from '@/stories/assets/stores/queueStore'
import { mapWritableState } from 'pinia'
export default {
  name: 'FileStep',

  components: { DropZone, TableQueue, SearchSubHeader, ButtonBottom },

  data() {
    return {
      TriangleDown,
      TriangleUp,
      active: false,
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
    })
  },
  methods: {
    onClick() {
      this.active = !this.active
    }
  }, 

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
  padding-left: 20px;
  width: 100%;
}
</style>
