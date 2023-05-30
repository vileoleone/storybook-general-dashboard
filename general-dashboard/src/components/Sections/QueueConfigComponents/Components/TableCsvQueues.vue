<template>
  <div class="outer-container">
    <q-table
      id="table-queue"
      table-class="table-queue-style"
      table-header-class="table-header-class"
      flat
      bordered
      separator="cell"
      :title="`${queueName} - ${createdAt} `"
      :rows="rows"
      :columns="keys"
      v-if="queueName && queueData"
      :hide-pagination="true"
      :pagination="pagination"
    >
      <template v-slot:top-left>
        <span class="table-title-class">{{ `${queueName} - ${createdAt} ` }}</span>
      </template>

      <template v-slot:top-right>
        <div class="button-container">
          <div @mousedown="scrollLeft" class="queue-table-scroll-button">
            <img :src="ChevronLeftIcon" alt="scroll left" />
          </div>
          <div @mousedown="scrollRight" class="queue-table-scroll-button">
            <img :src="ChevronRightIcon" alt="scroll Right" />
          </div>
        </div>
      </template>
    </q-table>
    <Alert
      v-else
      :icon="AlertNoQueueIcon"
      text="Termo não encontrado"
      subtext="Não encontramos nenhum
    arquivo com este nome, verifique e tente novamente"
    />
  </div>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import Alert from './Alert.vue'
import AlertNoQueueIcon from '%/icons/AlertNoQueueIcon.svg'
export default {
  name: 'TableCsvQueues',

  components: { Alert },

  data() {
    return {
      ChevronLeftIcon,
      ChevronRightIcon,
      AlertNoQueueIcon,
      buttonPressed: true,
      singleClass: this.index
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
    queueName: {
      type: String
    },
    queueData: {
      type: Object
    },
    index: {
      type: Number
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
    rows() {
      return Object.values(this.queueData.data)
    },
    columns() {
      return Object.keys(this.queueData.data[0])
    },
    createdAt() {
      return this.queueData.createdAt
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    },
    scrollLeft() {
      document
        .querySelectorAll('#table-queue')
        [this.index].querySelector('.q-table__middle.scroll.table-queue-style').scrollLeft -= 150
    },
    scrollRight() {
      document
        .querySelectorAll('#table-queue')
        [this.index].querySelector('.q-table__middle.scroll.table-queue-style').scrollLeft += 150
    }
  }
}
</script>

<style lang="scss">
.button-container {
  display: flex;
  flex-direction: row;
  width: 55px;
  justify-content: space-between;
  margin-right: 10px;
}
.central-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.h1-text-table-queue {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #444444;
}

.h2-text-table-queue {
  width: 210px;
  text-align: center;
  height: 28px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #444444;
}

.icon-not-found {
  z-index: 1;
}

.icon-exclamation {
  position: absolute;
  z-index: 0;
}

.queue-table-scroll-button {
  height: 24px;
  width: 24px;
  border-radius: 3px;
  border: 1px solid #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.table-queue-style {
  box-sizing: border-box;
  font-family: 'Work Sans';
  font-size: 12px;
  font-style: normal;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.table-queue-style::-webkit-scrollbar {
  display: none;
}

.table-title-class {
  align-items: center;
  color: #616161;
  display: flex;
  font-family: 'Work Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.q-table__sort-icon {
  display: none;
}

.outer-container {
  max-width: 750px;
}

#table-queue th {
  line-height: 0;
  font-weight: 600 !important;
  text-align: left;
  padding: 0 0 0 10px;
}

#table-queue thead tr,
#table-queue tbody td {
  box-sizing: border-box;
  height: 30px;
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  color: #616161;
  text-align: left;
  padding: 0 10px 0 10px;
  min-width: 150px;
  max-width: 150px;
}

.q-table__top {
  padding: 0;
  height: 40px;
  padding: 0 0 0 10px;
}

.term-not-found {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 180px;
  padding-top: 50px;
}
</style>
