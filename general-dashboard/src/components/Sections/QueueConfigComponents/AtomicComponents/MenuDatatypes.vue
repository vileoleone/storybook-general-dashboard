<template>
  <div
    type="span"
    class="menu-datatypes-outer-box"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <div class="menu-datatype">
      <span class="fl-jcst-alcnt-fdrow fs14-fw700-cl44 mb15">Tipos de campos</span>

      <div class="menu-datatype-field fl-jcst-alst-fdcolumn wd100">
        <div class="fl-jcsb-alst-fdrow mb15 wd100">
          <span
            class="menu-title fs12-fw500-cl8F"
            :class="activeClasses"
            v-for="(field, fieldIndex) in datatypeFields"
            :key="fieldIndex"
          >
            <div
              @click="this.isSelected = fieldIndex"
              :class="[
                this.isSelected === fieldIndex ? 'state-field-selected' : ' fs12-fw500-cl8F'
              ]"
            >
              {{ field }}
            </div>
          </span>
        </div>

        <div
          class="datatype-card-container wd100 htmax452 scroll-y"
          v-for="(datatype, ColumnIndex) in datatypes"
          :key="ColumnIndex"
        >
          <div class="borderC5" v-show="this.isSelected == ColumnIndex">
            <CardDatatype
              v-for="(datatypeItem, datatypeName, cardIndex) in datatype"
              :key="cardIndex"
              :datatypeItem="datatypeItem"
              :datatypeName="datatypeName"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from 'vue-draggable-next'
import CardDatatype from './CardDatatype.vue'
export default {
  name: 'MenuDatatypes',

  components: { CardDatatype },

  data() {
    return {
      isSelected: 0,
      datatypeFields: Object.keys(this.datatypeObject),
      datatypes: Object.values(this.datatypeObject),
      DraggableArea: VueDraggableNext
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
    datatypeObject: {
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
    /* activeClasses() {
      return {
        active
      }
    }, */
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
.htmax452 {
  max-height: 457px;
}
</style>
