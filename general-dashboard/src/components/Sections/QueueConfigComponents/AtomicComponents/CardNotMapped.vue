<template>
  <div type="span" class="outer-box wd33pr" :class="classes" @click="onClick" :style="style">
    <div class="not-mapped-column fl-jccnt-alcnt-fdcolumn wd100"></div>
    <div class="fl-jcsb-alst-fdrow wd100">
      <div class="not-mapped-column fl-jccnt-alcnt-fdcolumn wd100">
        <div
          :style="columnStyle"
          @dragenter="handleDragEnter"
          @dragleave="handleDragLeave"
          :class="[this.isDraggingOver ? 'state-hover-card' : columnStyle]"
          class="top-card fl-jcsb-alst-fdcolumn p10 borderRightE3 wd100"
        >
          <div class="fl-jcsb-alcnt-fdrow fs12-fw600-cl61 wd100 mb5">
            <span class="">{{ this.column.header }}</span>
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
          </div>
        </div>
        <div
          class="not-mapped-column-itens fl-jcsb-alst-fdcolumn bclightpink fs12-fw400-cl85 wd100"
          v-for="(item, index) in this.column.data"
          :key="index"
        >
          <div class="item p10 borderE3 wd100">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrashIcon from '%/icons/TrashIcon.svg'
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
    }
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
    }
  }
}
</script>

<style scoped lang="scss">
.wd33pr {
  width: 33%;
}
</style>
