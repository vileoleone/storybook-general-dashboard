<template>
  <div
    type="span"
    class="brb5 borderC5 borderTopNone cursor-pointer fl-jcst-alst-fdcolumn fs13-fw500-cl6F pl20px pt20px pb2px pb wd195px"
    :class="classes"
    :style="style"
  >
    <q-list class="ht100" v-for="(item, index) in list" :key="index">
      <template v-if="typeof item === 'object'">
        <div v-for="(value, key) in item" :key="key">
          <span class="fl-jcst-alst-fdrow" @click="this.showList = !this.showList">
            <MenuItem :label="key" />
            <img :src="ChevronUpIcon" v-if="showList == true" alt="Close Menu" />
            <img :src="ChevronDownNoBorder" v-if="showList == false" alt="open Menu" />
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
      ChevronDownIcon,
      showList: false
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
    }
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
        active: this.isActive,
        clicked: this.clicked
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
