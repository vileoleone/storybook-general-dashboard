<template>
  <main type="span" class="wd100 ht100 lh0" :class="classes" :style="style">
    <section class="fl-jcsb-alst-fdrow">
      <section class="fl-jcsb-alst-fdcolumn wd70">
        <span class="fl-jcsb-alst-fdcolumn wd100 mb20px">
          <span class="mb5 fs14-fw700-cl44">Sua Planilha</span>

          <span class="fl-jcsb-alcnt-fdrow wd100">
            <span class="fs12-fw400-cl8B"
              >Faça o mapeamento das colunas do arquivo com os tipos de campos do sistema.</span
            >
            <span>
              <span class="fs12-fw600-cl61"
                >{{ this.file.data.length }} contatos a serem importados</span
              >
            </span>
          </span>
        </span>
        <TableNotMappedColumns
          @update-table="updateTable"
          :cards="this.notMappedObj"
          v-if="this.notMappedObj.length > 0"
        />
        <TableMappedColumns :cards="this.mappedObj" v-if="this.mappedObj" />
        <FormMappingFile v-if="this.notMappedObj.length === 0" />
        <ButtonBottom
          class="wd100"
          label="Ir para a próxima etapa"
          v-if="this.notMappedObj.length === 0"
        />
      </section>
      <section class="wd30 pl2 ht100">
        <MenuDragDatatypes />
      </section>
    </section>
  </main>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
import ButtonBottom from '../Components/ButtonBottom.vue'
import TriangleDown from '@/assets/icons/TriangleDown.svg'
import TriangleUp from '@/assets/icons/TriangleUp.svg'
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
import Papa from 'papaparse'
import TableNotMappedColumns from '../Components/TableNotMappedColumns.vue'
import TableMappedColumns from '../Components/TableMappedColumns.vue'
import FormMappingFile from '../Components/FormMappingFile.vue'
import MenuDragDatatypes from '../Components/MenuDragDatatypes.vue'
import { mapActions } from 'pinia'
export default {
  name: 'FileStep',

  components: {
    TableNotMappedColumns,
    TableMappedColumns,
    MenuDragDatatypes,
    FormMappingFile,
    ButtonBottom
  },

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

  beforeMount() {
    this.sortOutColumns()
    console.log(this.sortOutColumns())
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
      isLoading: 'isLoading',
      notMappedObj: 'notMappedColumns',
      mappedObj: 'mappedColumns',
      mapColumnsArray: 'mapColumnsArray'
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
    },
    updateTable() {},
    ...mapActions(useMailingStore, { sortOutColumns: 'sortOutColumns' })
  }
}
</script>

<style scoped lang="scss">
.wd60pr {
  width: 97%;
}

.p6pr {
  padding: 0 0 0 4%;
}

.wd40pr {
  width: 40%;
}
</style>
