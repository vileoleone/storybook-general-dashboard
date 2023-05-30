<template>
  <div
    type="span"
    class="menu-datatypes-outer-box wdmin20pr"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <div class="menu-datatype">
      <span class="fl-jcst-alcnt-fdrow fs14-fw700-cl44 mb10px">Tipos de campos</span>

      <div class="menu-datatype-field fl-jcst-alba-fdcolumn wd100">
        <div class="fl-jcsb-alba-fdrow mb15px wd90">
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
        <div
          class="menu-field wd100 htmax scroll-overlay"
          :class="{ scroll: this.show }"
          v-for="(fields, fieldIndex) in this.datatypeFields"
          :key="fieldIndex"
        >
          <ElementDraggable :list="fields.data" v-show="this.isSelected == fieldIndex" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElementDraggable from './ElementDraggable.vue'
import { useMailingStore } from '@/stores/useMailingStore'
import { mapWritableState } from 'pinia'
export default {
  name: 'MenuDragDatatypes',

  components: { ElementDraggable },

  data() {
    return {
      isSelected: 0,
      show: false
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
.menu-field.htmax {
  max-height: 450px;
  padding-right: 5%;
}

.menu-field::-webkit-scrollbar {
  width: 7px;
  background: #d9d9d9;
  border-radius: 3px;
}

.menu-field::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: #c4c4c4;
}
</style>
