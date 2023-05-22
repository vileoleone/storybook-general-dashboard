<template>
  <div type="span" :class="classes" :style="style">
    <div class="outer-box" ref="dropzone" v-show="!this.file">
      <img :src="dropZoneIcon" alt="csvTable" />
      <span class="h1-text">Arraste ou Escolha o Arquivo</span>
      <span class="h2-text">O arquivo deve ser .CSV</span>
    </div>

    <div class="outer-box-file-loaded" v-if="this.file">
      <img :src="CsvIcon" alt="csvTable" />
      <span class="h1-text">{{ fileName }}</span>
      <span class="h2-text">{{ fileSize }}</span>
      <button class="remove-file-button" @click="removeFile()">
        <img :src="trashIcon" alt="trash icon" />
        <span>Remover</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
import CsvIcon from '@/assets/icons/IconCsv.svg'
import DropZone from 'dropzone'
import dropZoneIcon from '@/assets/icons/DropZoneIcon.svg'
import superbytes from 'superbytes'
import trashIcon from '@/assets/icons/trashIcon.svg'
export default {
  name: 'DropZone',

  components: {},

  data() {
    // const value = this.value ? { ...this.value } : {}

    return {
      DropZone,
      dropZoneIcon,
      CsvIcon,
      trashIcon

      /*  delimiter: value.delimiter ?? ';',
      delimiters,

      encoding: 'utf8',
      encodings,

      hasHeader: true,
      boolOptions,

      quoteChar: value.quoteChar ?? '"',
      quoteChars,
      isLoading: false */
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
      file: 'mailingCsvFile',
      readyToProceed: 'readyToProceed'
    }),

    fileName() {
      const vue = this
      if (!vue.file) return ''

      const name = vue.file.name.trim()
      if (name.length <= 255) return name

      const parts = name.split('.')
      const extension = parts.pop()
      const restName = parts.join('.').split('')
      const splice = 4 + extension.length
      const lenName = Math.floor((255 - splice) / 2)
      restName.splice(lenName, splice, '.', '.', '.')
      return restName.join('').concat(`.${extension}`)
    },

    fileSize() {
      const vue = this
      if (!vue.file) return ''
      return superbytes(vue.file.size)
    }
  },

  mounted() {
    this.createDropZone()
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
    value: Object
  },

  methods: {
    createDropZone() {
      const vue = this

      vue.dropZone = new DropZone(vue.$refs.dropzone, {
        url: '#',
        acceptedFiles: '.csv',
        autoQueue: false,
        autoProcessQueue: false,
        maxFilesize: 256, // MB
        filesizeBase: 1024,

        init() {
          this.on('addedfile', vue.onFileAdded)
        }
      })
    },

    async onFileAdded(fileCsv) {
      this.file = fileCsv
      this.readyToProceed = true
      //const dismiss = this.$q.notify({ spinner: true, message: 'Aguarde enquanto validamos o arquivo...', position: 'center' })
      //const { count } = await etlLoadData(this.mountParams(file), false)
      //dismiss()
      //if (!count) return (this.file = file)
      //this.$q.notify({ type: 'negative', message: 'Este arquivo já está cadastrado', position: 'center' })
      //this.removeFile()
    },

    mountParams(file) {
      return {
        queueId: this.queueId,
        filter: JSON.stringify({
          columns: ['mailingSources.sourceName'],
          filters: [
            {
              member: 'mailingSources.queueId',
              condition: this.queueId,
              type: 'isString'
            },
            {
              member: 'mailingSources.sourceName',
              condition: file.name,
              type: 'isString'
            }
          ],
          limit: 1
        })
      }
    },

    removeFile(file) {
      const vue = this
      vue.dropZone.removeAllFiles(true)
      vue.file = file
    }
  }
}

/* const encodings = [
  { id: 'utf8', label: 'UTF-8' },
  { id: 'latin1', label: 'Latin 1' }
]

const quoteChars = [
  { value: '"', label: '"  Aspas Duplas' },
  { value: "'", label: "'  Aspas Simples" },
  { value: '', label: 'Nenhum' }
]

const delimiters = [
  { id: ';', label: ';  Ponto Vírgula' },
  { id: ':', label: ':  Dois Pontos' },
  { id: ',', label: ',  Vírgula' },
  { id: '|', label: '|  Pipeline' },
  { id: '\t', label: 'Tab' }
]

const boolOptions = [
  { id: true, label: 'Sim' },
  { id: false, label: 'Não' }
] */
</script>

<style scoped lang="scss">
.h1-text {
  align-items: center;
  justify-content: center;
  color: #444444;
  display: flex;
  font-family: 'Work Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  width: 228px;
}

.h2-text {
  align-items: center;
  color: #4a4a4a;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  height: 15px;
  line-height: 15px;
}

input {
  display: none;
}

img {
  align-self: center;
  margin-bottom: 13px;
}

.outer-box {
  align-items: center;
  background: #e7edff;
  border-radius: 5px;
  border: 1px dashed #3d55ae;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  width: 303px;
}

.outer-box-file-loaded {
  align-items: center;
  background: #e7edff;
  border-radius: 5px;
  border: 1px solid #12b361;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  padding: 40px;
  width: 303px;
}

.remove-file-button {
  align-items: center;
  border: 1px solid red;
  color: #495057;
  display: flex;
  flex-direction: row;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  height: 24px;
  justify-content: baseline;
  line-height: 15px;
  margin-top: 10px;
  padding: 0px 20px;
  width: 125px;

  img {
    margin-right: 8px;
    margin-bottom: 0;
  }
}
</style>
