<template>
    <q-table
      id="table-queue"
      table-class="table-queue-style"
      title-class = "table-title-class"
      table-header-class="table-header-class"
      flat
      bordered
     
      separator="cell"
      :title="queueName"
      :rows="rows"
      :columns="keys"
    />

  <!-- <table class="table">
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
  </table> -->
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
      ChevronRightIcon
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
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.table-queue-style {
  font-family: 'Work Sans';
  font-size: 12px;
  font-style: normal;
  padding: 0 0 0 0 !important;
}

.table-title-class {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 44px;
  color: #616161;
  font-weight: 600;
  padding: 0 0 0 0;
}

.table-header-class {
  color: #616161;
  font-weight: 600 !important;
}
.q-table__sort-icon {
  display: none;
}

#table-queue th {
 
  padding: 0;
  line-height: 0;
  font-weight: 600 !important;
  height: px;
  text-align: center;
}

.q-table td {
  padding: 0;
}

#table-queue  thead tr, #table-queue tbody td {
  height:32px;
}


</style>
