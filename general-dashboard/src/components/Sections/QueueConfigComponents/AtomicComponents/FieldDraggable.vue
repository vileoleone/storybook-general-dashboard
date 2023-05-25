<template>
  <div
    type="span"
    class="field-draggable borderC5"
    :class="classes"
    @click="onClick"
    :style="style"
    drag-class="drag"
  >
    <draggable
      v-model="listToRender"
      group="people"
      animation="150"
      item-key="fieldName"
      :sort="true"
    >
      <template #item="{ element }">
        <div class="htmax452 scroll-y borderBottomC5 bcwhite">
          <CardDatatype :datatypeItem="element.fieldtype" :datatypeName="element.fieldName" />
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
      listToRender: this.list,
      x: 50,
      y: 50
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
    },
    rotateForward() {
      this.rotate = true
    },
    rotateBack() {
      this.rotate = false
    },
    handle(e) {
      alert(e)
    }
  }
}
</script>

<style scoped lang="scss">
.drag > div {
  background-color: blue;
  transition: transform 0.3s ease;
  transform: rotate(-15deg);
}
</style>
