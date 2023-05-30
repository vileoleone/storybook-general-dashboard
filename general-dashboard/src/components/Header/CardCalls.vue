<template>
  <div :class="classes" :style="style">
    <q-btn
      class="fl-jccnt-alcnt-fdrow cursor-pointer borderBottomC5 min-height-60px width-170px"
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
        anchor="bottom middle"
        self="top middle"
        @before-show="showList = true"
        @before-hide="showList = false"
      >
        <MenuListCalls :list="list" />
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import ArrowDown from '%/icons/ArrowDown.svg'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon.svg'
import MenuListCalls from '#/Header/MenuListCalls.vue'
export default {
  name: 'CardLayout',

  components: { MenuListCalls },

  data() {
    return {
      showList: false,
      ArrowDown,
      ArrowUpIcon
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
    marginTop: {
      type: Number
    },
    marginBottom: {
      type: Number
    },
    iconRightMargin: {
      type: Number
    },
    list: {
      type: Array
    },
    cardSelected: {
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
      this.$emit('click')
      this.showList = !this.showList
    },
    onClick() {
      this.$emit('click')
      this.showList = !this.showList
    }
  }
}
</script>

<style scoped lang="scss"></style>
