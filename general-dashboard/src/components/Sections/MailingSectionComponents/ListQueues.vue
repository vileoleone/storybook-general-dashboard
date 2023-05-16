<template>
  <table class="table">
    <thead class="queue-header">
      {{
        queueDate
      }}
      -
      {{
        queueName
      }}
      <span class="paginator">
        <button class="paginator-button">
          <img :src="ChevronLeftIcon" alt="" class="chevron-left" />
        </button>

        <button class="paginator-button">
          <img :src="ChevronRightIcon" alt="" class="chevron-left" />
        </button>
      </span>
    </thead>

    <span class="column-names">
      <tr v-for="(itens, index) in queueColumns" :key="index">
        {{
          itens
        }}
      </tr>
    </span>

    <span class="column-items">
      <tr v-for="(values, index) in queueRows" :key="index">
        {{
          values
        }}
      </tr>
    </span>
  </table>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
export default {
  name: 'ListQueues',

  components: {},

  data() {
    return {
      queues: {
        name: 'nomedoaquivoimportado.csv',
        date: '08/03/2023',
        data: {
          nomedacoluna: 'itemdacoluna',
          nomedacoluna2: 'itemdacoluna',
          nomedacoluna3: 'itemdacoluna'
        }
      },
      ChevronLeftIcon,
      ChevronRightIcon,
      queueName: 'nomedoaquivoimportado.csv',
      queueDate: '08/03/2023',
      queueColumns: {
          nomedacoluna: 'itemdacoluna',
          nomedacoluna2: 'itemdacoluna',
          nomedacoluna3: 'itemdacoluna'
        },
      queueRows: {
          nomedacoluna: 'itemdacoluna',
          nomedacoluna2: 'itemdacoluna',
          nomedacoluna3: 'itemdacoluna'
        }
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
    /*   queues: {
      type: Object
    } */
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
.table {
  width: fit-content;
  margin-bottom: 30px;
}
.column-names {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  border-left: 1px solid #e3e3e3;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #626262;
}

.column-items {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  border-left: 1px solid #e3e3e3;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  color: #616161;
}

.paginator {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 48px;
  height: 20px;
}

.paginator-button {
  display: flex;
  width: 21px;
  justify-content: center;
  align-items: center;
  border: 1px solid #c5c5c5;
  border-radius: 3px;
}
.queue-header {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  height: 44px;

  border: 1px solid #e3e3e3;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;

  color: #616161;
}

tr {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;

  width: 150px;
  height: 32px;

  background: #ffffff;
  border-right: 0.5px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
}
</style>
