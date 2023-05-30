<template>
  <div class="als-c">
    <Logo :active="this.showList" />
    <q-btn
      class="fl-jccnt-alcnt-fdrow cursor-pointer min-height-60px wd160px borderBottomC5"
      type="button"
      flat
      :square="true"
      :class="[this.showList ? 'state-header-selected' : 'state-header-default']"
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
        class="q-menu-dashboard"
        @before-show="showList = true"
        @before-hide="showList = false"
      >
        <MenuList anchor="bottom middle" self="top middle" :list="list" />
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import ArrowDown from '%/icons/ArrowDown.svg'
import MenuList from '#/Header/MenuList.vue'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon.svg'
import Logo from './Logo.vue'
export default {
  name: 'CardLayout',

  components: { MenuList, Logo },

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
    list: {
      type: Array
    }
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
    },
    print() {
      console.log('sdad')
    }
  }
}
</script>

<style lang="scss">
.q-menu {
  max-height: 100%;
}
</style>
