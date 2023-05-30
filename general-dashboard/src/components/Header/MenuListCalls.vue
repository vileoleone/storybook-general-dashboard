<template>
  <div
    type="span"
    class="brb5 borderC5 borderTopNone cursor-pointer fl-jcst-alst-fdcolumn fs13-fw500-cl6F pl20px pt10px pb2px pb"
    :class="classes"
    :style="style"
  >
    <span class="menu-list-call-header">
      <h1 class="calls-h1 fl-jccnt-alcnt-fdrow fs13-fw500-cl6F pb20px lh0">Todas as chamadas</h1>
      <h2 class="fl-jcst-alcnt-fdrow fs10-fw500-cl9F lh0">Chamadas por:</h2>
    </span>
    <q-list v-for="(item, index) in list" :key="index">
      <template v-if="typeof item === 'object'">
        <div v-for="(value, key) in item" :key="key">
          <span
            class="menu-list-object fl-jcst-alcnt-fdrow"
            @click="this.showList = !this.showList"
          >
            <MenuItem :label="key" />
            <img :src="ChevronUpIcon" v-if="showList == true" alt="Close Menu" />
            <img :src="ChevronDownIcon" v-if="showList == false" alt="open Menu" />
          </span>
          <span v-if="showList == true">
            <MenuItem class="state-subitem pl10px" v-for="item in value" :label="item" :key="item"
              >{{ item }}
            </MenuItem>
          </span>
        </div>
      </template>

      <template v-else>
        <MenuItem :label="item" />
      </template>
    </q-list>
  </div>
</template>

<script>
import MenuItem from '#/Header/MenuItem.vue'
import ChevronUpIcon from '%/icons/ChevronUpIcon.svg'
import ChevronDownIcon from '%/icons/ChevronDownIcon.svg'
export default {
  name: 'MenuLayout',

  components: { MenuItem },

  data() {
    return {
      isActive: false,
      clicked: false,
      ChevronUpIcon,
      ChevronDownIcon
    }
  },

  props: {
    label: {
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
    },
    width: {
      type: String
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,

        clicked: this.clicked
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        width: this.width + 'px'
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
      this.clicked = !this.clicked
    }
  }
}
</script>

<style scoped lang="scss">
.q-menu {
  max-height: 100%;
}
</style>
