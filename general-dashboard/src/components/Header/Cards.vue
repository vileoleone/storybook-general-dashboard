<template>
  <div class="als-center fl-jcst-alst-fdrow ">
    <component :is="leftLogo" :active="this.showList" />
    <q-btn
      no-caps
      class="fl-jccnt-alcnt-fdrow cursor-pointer borderBottomC5 min-height-60px"
      type="button"
      flat
      :square="true"
      :class="[this.showList ? 'state-header-selected' : 'state-header-default']"
      :style="{ width: this.width + 'px' }"
    >
      <span class="fl-jcsb-alcnt-fdrow">
        <div class="als-c" :style="styles">
          <img :src="icon" :alt="label" />
        </div>
        <p class="ml5px mr10px fs13-fw700-clFF mb0">{{ label }}</p>
        <img :src="ArrowDown" v-show="showList == false" alt="close Icon" />
        <img :src="ArrowUpIcon" v-show="showList == true" alt="open Icon" />
      </span>
      <q-menu
        anchor="bottom middle"
        self="top middle"
        @before-show="showList = true"
        @before-hide="showList = false"
      >
        <component :is="menuList" :width="this.width" :list="list" />
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import ArrowDown from '%/icons/ArrowDown.svg'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon.svg'

export default {
  name: 'CardLayout',

  components: {},

  data() {
    return {
      showList: false,
      ArrowUpIcon,
      ArrowDown,
      anchor: null
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
    icon: {
      type: String
    },
    width: {
      type: String
    },
    list: {
      type: Array
    },
    menuList: {},
    leftLogo: {}
  },

  mounted() {
    this.anchor = this.$refs.anchor
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
        cards: true,
        onHover: this.showList
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },

  methods: {
    ToogleMenu() {
      this.showList = !this.showList
    }
  }
}
</script>

<style scoped lang="scss">
.q-menu {
  max-height: 100%;
}
</style>
