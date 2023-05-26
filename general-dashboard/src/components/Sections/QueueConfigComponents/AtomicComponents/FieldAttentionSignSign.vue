<template>
  <div type="span" class="" :class="classes" @click="onClick" :style="style">
    <div class="term-not-found">
      <div class="central-icon">
        <img class="icon-not-found" :src="NotFoundIcon" alt="No term Found" />
        <img :src="ExclamationIcon" class="icon-exclamation" alt="exclamation" />
      </div>
      <span class="h1-text-table-queue">Termo Não Encontrado</span>
      <span class="h2-text-table-queue"
        >Não encontramos nenhum arquivo com este nome, verifique e tente novamente</span
      >
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
.central-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.term-not-found {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 180px;
  padding-top: 50px;
}
.icon-not-found {
  z-index: 1;
}

.icon-exclamation {
  position: absolute;
  z-index: 0;
}

.h1-text-table-queue {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #444444;
}

.h2-text-table-queue {
  width: 210px;
  text-align: center;
  height: 28px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #444444;
}
</style>
