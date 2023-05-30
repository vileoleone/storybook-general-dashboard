<template>
  <div type="span" class="outer-box wd33" :class="classes" @click="onClick" :style="style">
    <div class="not-mapped-column fl-jccnt-alcnt-fdcolumn wd100"></div>
    <div class="fl-jcsb-alst-fdrow wd100">
      <div class="not-mapped-column fl-jccnt-alcnt-fdcolumn wd100">
        <div
          :style="columnStyle"
          @dragenter="handleDragEnter"
          @dragleave="handleDragLeave"
          :class="[this.isDraggingOver ? 'state-hover-card' : columnStyle]"
          class="top-card fl-jcsb-alst-fdcolumn p10px borderRightE3 wd100"
        >
          <div class="fl-jcsb-alcnt-fdrow fs12-fw600-cl61 wd100 mb5px">
            <span>{{ this.column.header }}</span>
            <img @click="deleteColumn" :src="TrashIcon" alt="trashIcon" class="ht12px" />
          </div>
          <span class="fs10-fw400-cl55 mb5px">Esta coluna pode ser:</span>
          <div class="suggestion-cards fl-jcsb-alcnt-fdrow">
            <div
              @mouseover="onHoverState"
              @mouseout="offHoverState"
              class="suggestion-card fl-jccnt-alcnt-fdrow p5px fs10-fw400-cl85 mr5px"
              :class="{ 'state-hover-card': this.focus, 'state-default': !this.focus }"
            >
              Margem_RC
            </div>
          </div>
        </div>
        <div
          class="not-mapped-column-itens fl-jcsb-alst-fdcolumn bclightpink fs12-fw400-cl85 wd100"
          v-for="(item, index) in this.column.data"
          :key="index"
        >
          <div class="item p10px borderE3 wd100">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrashIcon from '%/icons/TrashIcon.svg'
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
export default {
  name: 'componentName',

  components: {},

  data() {
    return { TrashIcon, isDraggingOver: false, counter: 0, focus: false }
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
    column: {
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
    },
    columnStyle() {
      if (this.column.type == 'notMapped') {
        return 'bcbeige'
      }

      if (this.column.type == 'duplicated') {
        return 'bcpink'
      }

      return {}
    },
    ...mapWritableState(useMailingStore, {
      mapColumnsArray: 'mapColumnsArray'
    })
  },

  methods: {
    onClick() {
      this.$emit('click')
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
    },
    deleteColumn() {
      const indexToExclude = this.mapColumnsArray.findIndex((item) => item.id === this.index)

      this.mapColumnsArray.splice(indexToExclude, 1)
      this.$emit('delete-not-mapped-column', indexToExclude)
    }
  }
}
</script>

<style scoped lang="scss">
.wd33 {
  width: 33%;
}
</style>
