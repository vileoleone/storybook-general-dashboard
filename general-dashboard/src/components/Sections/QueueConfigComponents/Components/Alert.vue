<template>
  <div type="span" :class="classes" @click="onClick" :style="style">
    <div class="fl-jcsb-alcnt-fdcolumn p100px pt50px">
      <div class="fl-jccnt-alcnt-fdcolumn mb15px">
        <img :src="icon" alt="no-column-sign" />
      </div>
      <span class="fs14-fw700-cl44 mb10px">{{ text }}</span>
      <span class="fl-jcst-alcnt-fdcolumn fs12-fw400-cl44 mb10px wd210px txt-al-cnt">{{
        subtext
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'componentName',

  components: {},

  data() {
    return {}
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
      type: Image
    },

    text: {
      type: String
    },

    subtext: {
      type: String
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

<style scoped lang="scss"></style>
