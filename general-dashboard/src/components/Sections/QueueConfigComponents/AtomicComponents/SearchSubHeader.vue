<template>
  <div type="span" class="search-field-outer-box" :class="classes" @click="onClick" :style="style">
    <h1 class="h1-text">Outras importações nessa fila</h1>
    <div class="search-field-input">
      <img :src="SearchIcon" alt="search icon" />
      <input type="text" placeholder="Pesquisar por arquivo" />
    </div>
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/SearchIcon.svg'
export default {
  name: 'SearchSubHeader',

  components: {},

  data() {
    return {
      SearchIcon
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
  
  .h1-text {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #444444;
  }

  input {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;

    color: #8f8f8f;
    border-style: none;

    width: 100%;
    height: 100%;
  }

  .search-field-outer-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    min-width: 750px;
    margin-bottom: 15px;
  }

  .search-field-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;

    width: 255px;


    background: #ffffff;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    color: #c5c5c5;

    img {
      margin-right: 8.3px;
    }

  }

  textarea:focus, input:focus{
      outline: none;
  }


</style>
