<template>
  <div type="span" :class="classes" @click="onClick" :style="style">
    <div class="outer-box" ref="dropzone" v-if="!file">
      <img :src="dropZoneIcon" alt="csvTable" />
      <span class="h1-text">Arraste ou Escolha o Arquivo</span>
      <span class="h2-text">O arquivo deve ser .CSV</span>
    </div>

    <div class="outer-box-file-loaded" ref="dropzone" v-if="file">
      <img :src="CsvIcon" alt="csvTable" />
      <span class="h1-text">{{ fileName }}</span>
      <span class="h2-text">{{ fileSize }}</span>
      <button class="remove-file-button" @onClick="removeFile">
        <img :src="trashIcon" alt="trash icon" />
        <span>Remover</span>
      </button>
    </div>
  </div>
</template>

<script>
import dropZoneIcon from '@/assets/icons/DropZoneIcon.svg'
import CsvIcon from '@/assets/icons/IconCsv.svg'
import trashIcon from '@/assets/icons/trashIcon.svg'
import DropZone from 'dropzone'
import superbytes from '/Users/victoroliveira/Desktop/front-end/general-dashboard/node_modules/superbytes/index.js'
export default {
  name: 'DropZone',

  components: {},

  data() {
    // const value = this.value ? { ...this.value } : {}

    return {
      DropZone,
      dropZoneIcon,
      CsvIcon,
      trashIcon,

      file: undefined

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

    /* ...mapState({
      queueId: ({ attendanceStore }) => attendanceStore.queueId
    }), */

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
    onClick() {
      this.$emit('click')
    },

    createDropZone() {
      const vue = this
      if (vue.dropZone) return

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
      console.log(fileCsv)
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
    },

    onChange() {
      const vue = this

      vue.$emit('input', {
        file: vue.file,
        encoding: vue.encoding,
        hasHeader: vue.hasHeader,
        delimiter: vue.delimiter,
        quoteChar: vue.quoteChar
      })
    }
  },
  watch: {
    file() {
      this.onChange()
    },

    hasHeader() {
      this.onChange()
    },

    encoding() {
      this.onChange()
    },

    delimiter() {
      this.onChange()
    },

    quoteChar() {
      this.onChange()
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
img {
  align-self: center;
  margin-bottom: 13px;
}

.outer-box {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 303px;
  height: 450px;

  background: #e7edff;
  border: 1px dashed #3d55ae;
  border-radius: 5px;
}

.outer-box-file-loaded {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  width: 303px;
  height: 450px;

  background: #e7edff;
  border: 1px solid #12b361;
  border-radius: 5px;
}

.h1-text {
  width: 228px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;

  color: #444444;
}

.h2-text {
  height: 15px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #4a4a4a;
}

input {
  display: none;
}

.remove-file-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  margin-top: 10px;
  padding: 0px 20px;
  border: none;
  width: 125px;
  height: 24px;

  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;

  color: #495057;

  img {
    margin-right: 8px;
    margin-bottom: 0;
  }
}
</style>
