<template>
  <div type="span" class="dropzone-outerbox" :class="classes" @click="onClick" :style="style">
    <label for="dropZoneFile">
      <img :src="dropZoneIcon" alt="csvTable">
      <h1 class="h1-text">Arraste ou Escolha o Arquivo</h1>
      <h2 class="h2-text">O arquivo deve ser .CSV</h2>
    </label>

    <input class="dropzone" type="file">
    
  </input>
    
  </div>
</template>

<script>
import '../../assets/scss/MenuList.scss'
import dropZoneIcon from '../../../../src/assets/icons/DropZoneIcon.svg'
export default {
  name: 'DropZone',

  components: { },

  data() {
    return {
      dropZoneIcon
    }
  },

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size || 'medium'}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
