<template>
  <main type="span" class="mapping-file-step-outer-box" :class="classes" :style="style">
    <span class="mapping-file-header">
      <span class="h1">Sua Planilha</span>
      <span class="header-span">
        <span class="p">{{ this.file.name }}</span>
        <span>
          <span class="h2">{{ this.file.data.length }} contatos a serem importados</span>
        </span>
      </span>
    </span>

    <section class="fl-jcsb-alst-fdrow bd">
      <section class="fl-jcsb-alcnt-fdcolumn">
        <TableNotMappedColumns /> <TableMappedColumns />
      </section>
      <MenuDatatypes />
    </section>

    <!--  <ButtonBottom label="Ir para a próxima etapa" /> -->
  </main>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
import ButtonBottom from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonBottom.vue'
import TriangleDown from '@/assets/icons/TriangleDown.svg'
import TriangleUp from '@/assets/icons/TriangleUp.svg'
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import Papa from 'papaparse'
import TableNotMappedColumns from '../AtomicComponents/TableNotMappedColumns.vue'
import TableMappedColumns from '../AtomicComponents/TableMappedColumns.vue'
import MenuDatatypes from '../AtomicComponents/MenuDatatypes.vue'
export default {
  name: 'FileStep',

  components: { ButtonBottom, TableNotMappedColumns, TableMappedColumns, MenuDatatypes },

  data() {
    return {
      TriangleDown,
      TriangleUp,
      active: false,
      isLoading: true,
      ChevronLeftIcon,
      ChevronRightIcon
    }
  },

  mounted() {
    console.log(this.file)
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
    },

    ...mapWritableState(useMailingStore, {
      readyToProceed: 'readyToProceed',
      file: 'mailingCsvFile',
      isLoading: 'isLoading'
    })
  },
  methods: {
    onClick() {
      this.active = !this.active
    },
    changeBodyOpacity() {
      document.body.style.opacity = '0.4'
      document.body.style.backgroundColor = 'black'
    },
    async loadAndParse() {
      this.isLoading = true
      this.readyToProceed = false
      return this.parseMailingCsv(this.file).then(() => {
        this.isLoading = false
        this.readyToProceed = true
        this.step += 1
      })
    },
    parseMailingCsv(file) {
      return new Promise((resolve) =>
        Papa.parse(file, {
          worker: true,
          header: false,
          skipEmptyLines: true,

          complete: (results) => {
            this.file.data = results.data
            console.log(this.file.data)
            resolve()
          }
        })
      )
    }
  }
}
</script>

<style scoped lang="scss">
.h1 {
  font-weight: 700;
  font-size: 14px;
  color: #444444;
  margin-bottom: 5px;
}
.h2 {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #616161;
}

.p {
  font-weight: 400;
  font-size: 12px;
  color: #8b8b8b;
}

.mapping-file-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-family: 'Work Sans';
  font-style: normal;

  margin-bottom: 20px;
  width: 100%;

  .header-span {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

.mapping-file-step-outer-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0;
  width: 100%;
}
</style>
