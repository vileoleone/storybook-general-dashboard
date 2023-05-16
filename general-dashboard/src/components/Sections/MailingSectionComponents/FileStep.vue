<template>
  <div type="span" class="outer-box" :class="classes" :style="style">
  <main class="main">
    <DropZone/>
    <div class="queue-tables">
      <SearchField/>
      <ListQueues :queues="queues"/>
    </div>
  </main>
    <ButtonBottom  label = "Ir para a próxima etapa" :isReady="true"/>
  </div>
</template>

<script>
import TriangleDown from '@/assets/icons/TriangleDown.svg'
import TriangleUp from '@/assets/icons/TriangleUp.svg'
import DropZone from './DropZone.vue'
import ListQueues from './ListQueues.vue'
import SearchField from './SearchField.vue'
import ButtonBottom from '../ButtonBottom.vue'
export default {
  name: 'FileStep',

  components: { DropZone, ListQueues, SearchField, ButtonBottom },

  data() {
    return {
      TriangleDown,
      TriangleUp,
      active: false

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
    queues: {
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
    }
  },

  methods: {
    onClick() {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">

  .main {
    padding: 0;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .outer-box {
    padding: 0;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .queue-tables{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;
  }
</style>
