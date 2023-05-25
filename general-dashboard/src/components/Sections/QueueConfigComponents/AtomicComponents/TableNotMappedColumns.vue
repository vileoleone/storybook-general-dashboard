<template>
  <div type="span" class="wd100" :class="classes" @click="onClick" :style="style">
    <div class="not-mapped-header wd100">
      <span class="fl-jcsb-alba-fdrow mb15">
        <span class="fs12-fw600-cl61">Colunas a mapear</span>
        <span class="fl-jcsb-alcnt-fdrow">
          <span class="fs11-fw400-cl61 mr20">csvfilenameexample</span>
          <ButtonTopTable />
        </span>
      </span>
    </div>

    <div class="not-mapped-tables fl-jccnt-alcnt-fdcolumn wd100 mb10">
      <div class="fl-jccnt-alcnt-fdcolumn wd100 brt5 bcblue fs12-fw500-clFF">
        Faltam 4 colunas a serem inseridas
      </div>
      <div class="fl-jcsb-alst-fdrow wd100">
        <div class="not-mapped-column fl-jccnt-alcnt-fdcolumn wd12pr">
          <div
            :style="columnStyle"
            @dragenter="handleDragEnter"
            @dragleave="handleDragLeave"
            :class="[this.isDraggingOver ? 'state-hover-card' : columnStyle]"
            class="top-card fl-jcsb-alst-fdcolumn p10 bcpink borderRightE3 wd100"
          >
            <div class="fl-jcsb-alcnt-fdrow fs12-fw600-cl61 wd100 mb5">
              <span class="">data_ano</span>
              <img :src="TrashIcon" alt="trashIcon" class="ht12p" />
            </div>
            <span class="fs10-fw400-cl55 mb5">Esta coluna pode ser:</span>
            <div class="suggestion-cards fl-jcsb-alcnt-fdrow">
              <div
                @mouseover="onHoverState"
                @mouseout="offHoverState"
                class="suggestion-card fl-jccnt-alcnt-fdrow p5 fs10-fw400-cl85 mr5"
                :class="{ 'state-hover-card': this.focus, 'state-default': !this.focus }"
              >
                Margem_RCC
              </div>
              <div class="suggestion-card fl-jccnt-alcnt-fdrow bcwhite p5 fs10-fw400-cl85 mr5">
                Data
              </div>
              <div class="suggestion-card fl-jccnt-alcnt-fdrow bcwhite p5 fs10-fw400-cl85 mr5">
                Margem_RCC
              </div>
            </div>
          </div>
          <div
            class="not-mapped-column-itens fl-jcsb-alst-fdcolumn bclightpink fs12-fw400-cl85 wd100"
          >
            <div class="item p10 borderE3 wd100">Item da coluna</div>
            <div class="item p10 borderE3 wd100">Item da coluna</div>
            <div class="item p10 borderE3 wd100">Item da coluna</div>
          </div>
        </div>
      </div>
    </div>
    <div class="legend-container fl-jcst-alcnt-fdrow mb15">
      <FieldLegend boxColor="bcbeige" label="Colunas duplicadas" />
      <FieldLegend boxColor="bcpink" label="Colunas não mapeadas" />
    </div>
  </div>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import NotFoundIcon from '%/icons/NotFoundIcon.svg'
import ExclamationIcon from '%/icons/ExclamationIcon.svg'
import TrashIcon from '%/icons/TrashIcon.svg'
import ButtonTopTable from './ButtonTopTable.vue'
import FieldLegend from './FieldLegend.vue'

export default {
  name: 'TableCsvQueues',

  components: { ButtonTopTable, FieldLegend },

  data() {
    return {
      ChevronLeftIcon,
      ChevronRightIcon,
      NotFoundIcon,
      TrashIcon,
      ExclamationIcon,
      buttonPressed: true,
      singleClass: this.index,
      focus: false,
      isDraggingOver: false,
      counter: 0
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
    columnStyle() {
      if (this.typeOf == 'notMapped') {
        return { backgroundColor: #eacfff }
      }

      return {}
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
    },
    onHoverState() {
      this.focus = true
    },
    offHoverState() {
      this.focus = false
    },
    handleDragEnter() {
      this.counter++
      this.isDraggingOver = true
      console.log('true')
    },
    handleDragLeave() {
      this.counter--
      if (this.counter == 0) {
        console.log('false')
        this.isDraggingOver = false
      }
    }
  }
}
</script>

<style lang="scss">
.wd12pr {
  width: 34%;
}
</style>
