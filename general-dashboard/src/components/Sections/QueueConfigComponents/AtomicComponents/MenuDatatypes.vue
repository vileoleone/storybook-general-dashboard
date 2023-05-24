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
            v-for="(field, fieldIndex) in this.datatypeFields"
            :key="fieldIndex"
          >
            <div
              @click="this.isSelected = fieldIndex"
              :class="[
                this.isSelected === fieldIndex ? 'state-field-selected' : ' fs12-fw500-cl8F'
              ]"
            >
              {{ field.fieldName }}
            </div>
          </span>
        </div>
        <div class="wd100" v-for="(fields, fieldIndex) in this.datatypeFields" :key="fieldIndex">
          <FieldDraggable :list="fields.data" v-show="this.isSelected == fieldIndex" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldDraggable from '#/Sections/QueueConfigComponents/AtomicComponents/FieldDraggable.vue'
import { useMailingStore } from '@/stores/useMailingStore'
import { mapWritableState } from 'pinia'
export default {
  name: 'MenuDatatypes',

  components: { FieldDraggable },

  data() {
    return {
      isSelected: 0
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
    },
    ...mapWritableState(useMailingStore, {
      readyToProceed: 'readyToProceed',
      file: 'mailingCsvFile',
      isLoading: 'isLoading',
      datatypeFields: 'datatypeFields'
    })
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
