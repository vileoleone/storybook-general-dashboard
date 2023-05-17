<template>
  <div type="div" class="title-outer-box" :class="classes" @click="onClick" :style="style">
    <h1>{{ label }}</h1>
    <span class="routes-outer-box">
      <span v-for="(route, index) in list" :key="index" class="routes">
        <h2>{{ route }}</h2>
        <img :src="ChevronRight" :alt="label" class="chevron-right" />
      </span>
    </span>
  </div>
</template>

<script>
import ChevronRight from '%/icons/ChevronRight.svg'

export default {
  name: 'NextSectionTitle',

  components: {},

  data() {
    return {
      ChevronRight
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
  .chevron-right {
    margin-left: 12px;
    margin-right: 12px;
  }
  .routes {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
  }
  .routes-outer-box {
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
  }

  h1 {
    color: #444444;
    display: flex;
    font-family: 'Work Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 5px;
    margin-top: 0;
    width: 213px;
  }

  h2 {
    color: #afafaf;
    font-family: 'Work Sans';
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    height: 13px;
  }
  .title-outer-box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
</style>
