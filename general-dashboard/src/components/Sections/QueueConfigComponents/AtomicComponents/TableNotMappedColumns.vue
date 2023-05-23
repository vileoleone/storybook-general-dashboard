<template>
  <div type="span" class="wdmin180" :class="classes" @click="onClick" :style="style">
    <div class="not-mapped-header wd100">
      <span class="fl-jcsb-alba-fdrow mb15">
        <span class="fs12-fw600-cl61">Colunas a mapear</span>
        <span class="fl-jcsb-alcnt-fdrow">
          <span class="fs11-fw400-cl61 mr20">csvfilenameexample</span>
          <div class="button-pagination-left-right">
            <div class="button">
              <img :src="ChevronLeftIcon" alt="scroll left" />
            </div>
            <span class="als-c mr10 ml10 fs12-fw500-cl61"> 2 - 3 </span>
            <div class="button">
              <img :src="ChevronRightIcon" alt="scroll Right" />
            </div>
          </div>
        </span>
      </span>
    </div>

    <div class="not-mapped-tables fl-jccnt-alcnt-fdcolumn wd100 mb10">
      <div class="fl-jccnt-alcnt-fdcolumn wd100 brt5 bcblue fs12-fw500-clFF">
        Faltam 4 colunas a serem inseridas
      </div>
      <div class="fl-jcsb-alst-fdrow wd100">
        <div class="not-mapped-column fl-jccnt-alcnt-fdcolumn">
          <div class="top-card fl-jcsb-alst-fdcolumn bcbeige p10 borderRightE3">
            <div class="fl-jcsb-alcnt-fdrow fs12-fw600-cl61 wd100 mb5">
              <span class="">data_ano</span>
              <img :src="TrashIcon" alt="trashIcon" class="wd11p ht12p" />
            </div>
            <span class="fs10-fw400-cl55 mb5">Esta coluna pode ser:</span>
            <div class="suggestion-cards fl-jcsb-alcnt-fdrow">
              <div class="suggestion-card fl-jccnt-alcnt-fdrow bcwhite p5 fs10-fw400-cl85 mr5">
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
          <div class="not-mapped-column-itens fl-jcsb-alst-fdcolumn fs12-fw400-cl85 bclightbeige wd100 borderE3">
            <div class="item p10 borderBottomE3 wd100">Item da coluna</div>
            <div class="item p10 borderBottomE3 wd100">Item da coluna</div>
            <div class="item p10 borderBottomE3 wd100">Item da coluna</div>
          </div>
        </div>

        <div class="not-mapped-column fl-jccnt-alcnt-fdcolumn">
          <div class="top-card fl-jcsb-alst-fdcolumn bcpink p10 borderRightE3">
            <div class="fl-jcsb-alcnt-fdrow fs12-fw600-cl61 wd100 mb5">
              <span class="">data_ano</span>
              <img :src="TrashIcon" alt="trashIcon" class="wd11p ht12p" />
            </div>
            <span class="fs10-fw400-cl55 mb5">Esta coluna pode ser:</span>
            <div class="suggestion-cards fl-jcsb-alcnt-fdrow">
              <div class="suggestion-card fl-jccnt-alcnt-fdrow bcwhite p5 fs10-fw400-cl85 mr5">
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
          <div class="not-mapped-column-itens fl-jcsb-alst-fdcolumn  bclightpink fs12-fw400-cl85 wd100">
            <div class="item p10 borderE3  wd100">Item da coluna</div>
            <div class="item p10 borderE3  wd100">Item da coluna</div>
            <div class="item p10 borderE3  wd100">Item da coluna</div>
          </div>
        </div>
      </div>
    </div>
    <div class="legend-container fl-jcst-alcnt-fdrow">
      <div class="legend-block fl-jcst-alcnt-fdrow mr15">
        <div class="color wd10 ht10 bcbeige mr10"></div>
        <div class="legend fs12-fw400-cl8B">Colunas Duplicadas no sistema</div>
      </div>
      <div class="legend-block fl-jcst-alcnt-fdrow">
        <div class="color wd10 ht10 bcpink mr10"></div>
        <div class="legend fs12-fw400-cl8B">Colunas não mapeadas no sistema</div>
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

export default {
  name: 'TableCsvQueues',

  components: {},

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

<style lang="scss">

</style>
