<template>
  <div class="outer-container">
    <q-table
      id="table-queue"
      table-class="table-queue-style"
      title-class="table-title-class"
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
        {{ `${queueName} - ${createdAt} ` }}
      </template>

      <template v-slot:top-right>
        <div class="button-container">
          <div @click="scrollLeft" class="queue-table-scroll-button">
            <img :src="ChevronLeftIcon" alt="scroll left" />
          </div>
          <div @click="scrollRight" class="queue-table-scroll-button">
            <img :src="ChevronRightIcon" alt="scroll Right" />
          </div>
        </div>
      </template>
    </q-table>

    <div class="term-not-found" v-else>
      <div class="central-icon">
        <img class="icon-not-found" :src="NotFoundIcon" alt="No term Found" />
        <img :src="ExclamationIcon" class="icon-exclamation" alt="exclamation" />
      </div>
      <span class="h1-text-table-queue">Termo Não Encontrado</span>
      <span class="h2-text-table-queue"
        >Não encontramos nenhum arquivo com este nome, verifique e tente novamente</span
      >
    </div>
  </div>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import NotFoundIcon from '%/icons/NotFoundIcon.svg'
import ExclamationIcon from '%/icons/ExclamationIcon.svg'
export default {
  name: 'TableQueue',

  components: {},

  data() {
    return {
      ChevronLeftIcon,
      ChevronRightIcon,
      NotFoundIcon,
      ExclamationIcon
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
      console.log('left')
      document.getElementById('table-queue').getElementsByClassName('table-queue-style').scrollLeft += 20
    },
    scrollRight() {
      console.log('right')
      document.getElementById('table-queue').getElementsByClassName('table-queue-style').scrollLeft -= 20
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
  font-family: 'Work Sans';
  font-size: 12px;
  font-style: normal;
  overflow-x: scroll;
}

.table-title-class {
  align-items: center;
  color: #616161;
  display: flex;
  font-family: 'Work Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  height: 44px;
}

.q-table__sort-icon {
  display: none;
}

.outer-container {
  max-width: 900px;
}

#table-queue th {
  line-height: 0;
  font-weight: 600 !important;
  text-align: left;
  padding: 0 0 0 10px;
  min-width: 120px;
}

#table-queue thead tr,
#table-queue tbody td {
  height: 32px;
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  color: #616161;
  text-align: left;
  padding: 0 0 0 10px;
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
