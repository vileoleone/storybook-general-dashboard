<template>
  <div>
    <q-btn
      flat
      :square="true"
      :id="label"
      type="span"
      :style="style"
      class="fl-jccnt-alcnt-fdrow cursor-pointer ht60px borderBottomC5"
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
        anchor="bottom middle"
        self="top middle"
        @before-show="showList = true"
        @before-hide="showList = false"
      >
        <MenuListUser :list="list" />
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import ArrowDown from '%/icons/ArrowDown.svg'
import MenuListUser from '#/Header/MenuListUser.vue'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon.svg'

export default {
  name: 'CardLayout',

  components: { MenuListUser },

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
    }
  }
}
</script>

<style scoped lang="scss">
.q-menu {
  max-height: 100%;
}
</style>
