<template>
  <div type="span" class="wd100" :class="classes" @click="onClick" :style="style">
    <div class="not-mapped-header wd100">
      <span class="fl-jcsb-alba-fdrow mb15">
        <span class="fs12-fw600-cl61">Colunas a mapear</span>
        <span class="fl-jcsb-alcnt-fdrow">
          <span class="fs11-fw400-cl61 mr20">{{ this.file.name }}</span>
          <ButtonTopTable />
        </span>
      </span>
    </div>

    <div class="not-mapped-tables fl-jccnt-alcnt-fdcolumn wd100 mb10">
      <div
        class="fl-jccnt-alcnt-fdcolumn wd100 brt5 bcblue fs12-fw500-clFF"
        v-if="this.columnsToMap > 0"
      >
        Faltam {{ this.columnsToMap }} colunas a serem inseridas
      </div>
      <div class="fl-jcsb-alst-fdrow wd100">
        <CardNotMapped :column="column" v-for="column in this.cards" :key="column.header" />
      </div>
    </div>
    <div class="legend-container fl-jcst-alcnt-fdrow mb15">
      <FieldLegend boxColor="bcbeige" label="Colunas duplicadas" />
      <FieldLegend boxColor="bcpink" label="Colunas não mapeadas" />
    </div>
  </div>
  <div>{{ this.data }}</div>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import NotFoundIcon from '%/icons/NotFoundIcon.svg'
import ExclamationIcon from '%/icons/ExclamationIcon.svg'
import CardNotMapped from '#/Sections/QueueConfigComponents/AtomicComponents/CardNotMapped.vue'
import ButtonTopTable from './ButtonTopTable.vue'
import FieldLegend from './FieldLegend.vue'
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
export default {
  name: 'TableCsvQueues',

  components: { ButtonTopTable, FieldLegend, CardNotMapped },

  data() {
    return {
      ChevronLeftIcon,
      ChevronRightIcon,
      NotFoundIcon,
      ExclamationIcon,
      columnsToMap: this.cards.length
    }
  },

  mounted() {},

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
    index: {
      type: Number
    },
    cards: {
      type: Object
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': false,
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
    ...mapWritableState(useMailingStore, {
      file: 'mailingCsvFile'
    })
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
