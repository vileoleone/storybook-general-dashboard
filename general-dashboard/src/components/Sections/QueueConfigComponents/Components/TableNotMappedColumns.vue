<template>
  <div type="span" class="wd100" :class="classes" @click="onClick" :style="style">
    <div class="not-mapped-header wd100">
      <span class="fl-jcsb-alba-fdrow mb15px">
        <span class="fs12-fw600-cl61">Colunas a mapear</span>
        <span class="fl-jcsb-alcnt-fdrow">
          <span class="fs11-fw400-cl61 mr20px">{{ this.file.name }}</span>
          <ButtonTopTable />
        </span>
      </span>
    </div>

    <div class="not-mapped-tables fl-jccnt-alcnt-fdcolumn wd100 mb10px">
      <div
        class="fl-jccnt-alcnt-fdcolumn wd100 brt5 bcblue fs12-fw500-clFF"
        v-if="this.columnNumber > 1"
      >
        Faltam {{ this.columnNumber }} colunas a serem inseridas
      </div>

      <div
        class="fl-jccnt-alcnt-fdcolumn wd100 brt5 bcblue fs12-fw500-clFF"
        v-if="this.columnNumber == 1"
      >
        Falta {{ this.columnNumber }} coluna a serem inseridas
      </div>
      <div class="fl-jcsb-alst-fdrow wd100">
        <CardNotMapped
          :column="column"
          v-for="column in this.cards"
          @delete-not-mapped-column="updateTable"
          :key="column.id"
          :index="column.id"
        />
      </div>
    </div>
    <div class="legend-container fl-jcst-alcnt-fdrow mb15px">
      <ElementLegend boxColor="bcbeige" label="Colunas duplicadas" />
      <ElementLegend boxColor="bcpink" label="Colunas não mapeadas" />
    </div>
  </div>
  <div>{{ this.data }}</div>
</template>

<script>
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import NotFoundIcon from '%/icons/NotFoundIcon.svg'
import ExclamationIcon from '%/icons/ExclamationIcon.svg'
import CardNotMapped from './CardNotMapped.vue'
import ButtonTopTable from './ButtonTopTable.vue'
import ElementLegend from './ElementLegend.vue'
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
export default {
  name: 'TableCsvQueues',

  components: { ButtonTopTable, ElementLegend, CardNotMapped },

  data() {
    return {
      ChevronLeftIcon,
      ChevronRightIcon,
      NotFoundIcon,
      ExclamationIcon,
      columnNumber: this.cards.length
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
    },
    updateTable(index) {
      this.$emit('update-table', index)
    }
  }
}
</script>

<style lang="scss"></style>
