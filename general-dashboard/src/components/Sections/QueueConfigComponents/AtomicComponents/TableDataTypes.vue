<template>
  <div type="span" class="wdmin180" :class="classes" @click="onClick" :style="style">
    <div class="not-mapped-header wd100">
      <span class="fl-jcsb-alba-fdrow mb15">
        <span class="fs12-fw600-cl61">Colunas mapeadas</span>
        <span class="fl-jcsb-alcnt-fdrow">
          <span class="fs11-fw400-cl61 mr20">csvfilenameexample</span>
          <ButtonTopTable />
        </span>
      </span>
    </div>

    <div class="mapped-tables fl-jccnt-alcnt-fdcolumn wd100 mb10">
      <div class="fl-jcsb-alst-fdrow wd100">
        <div class="mapped-column fl-jccnt-alcnt-fdcolumn">
          <ButtonTriangleDown class="borderE3 borderBottonNone" label="Nome da Coluna" />
          <div class="not-mapped-column-itens fl-jcsb-alst-fdcolumn fs12-fw400-cl85 wd100">
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
          </div>
        </div>
         <div class="mapped-column fl-jccnt-alcnt-fdcolumn">
          <ButtonTriangleDown class="borderE3 borderBottonNone" label="Nome da Coluna" />
          <div class="not-mapped-column-itens fl-jcsb-alst-fdcolumn fs12-fw400-cl85 wd100">
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
          </div>
        </div>
         <div class="mapped-column fl-jccnt-alcnt-fdcolumn">
          <ButtonTriangleDown class="borderE3 borderBottonNone" label="Nome da Coluna" />
          <div class="not-mapped-column-itens fl-jcsb-alst-fdcolumn fs12-fw400-cl85 wd100">
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
            <div class="item p10 borderE3 borderBottonNone wd100">Item da coluna</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import NotFoundIcon from '%/icons/NotFoundIcon.svg'
import ExclamationIcon from '%/icons/ExclamationIcon.svg'
import TrashIcon from '%/icons/TrashIcon.svg'
import ButtonTopTable from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonTopTable.vue'
import ButtonTriangleDown from './ButtonTriangleDown.vue'
export default {
  name: 'TableCsvQueues',

  components: { ButtonTriangleDown, ButtonTopTable },

  data() {
    return {
      ChevronLeftIcon,
      ChevronRightIcon,
      NotFoundIcon,
      TrashIcon,
      ExclamationIcon,
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

<style lang="scss"></style>
