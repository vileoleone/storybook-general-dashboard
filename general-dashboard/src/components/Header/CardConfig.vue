<template>
  <div class="card-outer-box">
    <q-btn flat :square="true"  type="span" :class="classes" :style="style" @click="showList = true">
      <span class="inner-style">
        <div class="icon-left" :style="styles">
          <img :src="icon" :alt="label" />
        </div>
        <p class="card-button-label"> {{ label }}</p>
        <img :src="ArrowDown" v-if="showList == false" class="icon-right" alt="close Icon" />
        <img :src="ArrowUpIcon" v-if="showList == true" class="icon-right" alt="open Icon" />
      </span>
      <q-menu  anchor="bottom middle" self="top middle" class="q-menu" @before-hide="showList = false">
        <MenuListConfig :list="list" />
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import ArrowDown from '%/icons/ArrowDown.svg'
import MenuListConfig from '#/Header/MenuListConfig.vue'
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon.svg'
export default {
  name: 'CardLayout',

  components: { MenuListConfig},

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
  }
}
</script>

<style scoped lang="scss">

.card-outer-box {
  display: flex;
  min-width: fit-content;
}

.cards {
  align-items: center;
  align-self: flex-start;
  background-color: #3d55ae;
  border-bottom: 1px solid #c5c5c5;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
}

.cards.onHover {
  background-color: #fd9802;
}

.icon-left {
  height: 18px;
  width: 18px;
}

.icon-right {
  border-radius: 0px;
  display: flex;
  height: 7.12px;
  justify-content: center;
  width: 11.41px;
}
.inner-style {
  display: flex;
  align-items: center;
  align-self: center;
}

.card-button-label {
  color: #ffffff;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0;
}
.q-btn {
  box-sizing: border-box;
  padding: 0 10px 0 10px;
  min-width: max-content;
}

.q-menu {
  max-width: fit-content;
  position: absolute;
}
</style>
