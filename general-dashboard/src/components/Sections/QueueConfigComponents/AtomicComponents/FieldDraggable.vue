<template>
  <div type="span"  class="field-draggable borderC5" :class="classes" @click="onClick" :style="style">
    <draggable
      v-model="listToRender"
      group="people"
      @start="drag = true"
      @end="drag = false"
      item-key="data"
    >
      <template #item="{ element }">
        <div class=" htmax452 scroll-y borderBottomC5">
          <CardDatatype  :datatypeItem="element.fieldtype" :datatypeName="element.fieldName" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardDatatype from './CardDatatype.vue'
export default {
  name: 'MenuDatatypes',

  components: { CardDatatype, draggable },

  data() {
    return {
      drag: false,
      isSelected: 0,
      listToRender: this.list
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
    list: {
      type: Array
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
  max-height: 452px;
}
</style>
