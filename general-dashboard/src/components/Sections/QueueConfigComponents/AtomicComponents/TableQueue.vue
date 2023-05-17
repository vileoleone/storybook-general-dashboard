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
  name: 'TableQueue',

  components: {},

  data() {
    return {
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
  .column-names {
    
    border-left: 1px solid #e3e3e3;
    box-sizing: border-box;
    color: #626262;
    display: flex;
    flex-direction: row;
    font-family: 'Work Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px;
  }

  .column-items {

    border-left: 1px solid #e3e3e3;
    box-sizing: border-box;
    color: #616161;
    display: flex;
    flex-direction: row;
    font-family: 'Work Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }

  .paginator {

    display: flex;
    flex-direction: row;
    height: 20px;
    justify-content: space-between;
    width: 48px;
  }

  .paginator-button {

    align-items: center;
    border-radius: 3px;
    border: 1px solid #c5c5c5;
    display: flex;
    justify-content: center;
    width: 21px;
  }
  .queue-header {

    align-items: center;
    border: 1px solid #e3e3e3;
    box-sizing: border-box;
    color: #616161;
    display: flex;
    flex-direction: row;
    font-family: 'Work Sans';
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    height: 44px;
    justify-content: space-between;
    line-height: 12px;
    padding: 10px;
  }
   .table {
    margin-bottom: 30px;
    width: fit-content;
  }

  tr {

    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid #e3e3e3;
    border-right: 0.5px solid #e3e3e3;
    box-sizing: border-box;
    display: flex;
    height: 32px;
    justify-content: flex-start;
    padding: 10px;
    width: 150px;
  }
</style>
