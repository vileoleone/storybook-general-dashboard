<template>
  <div class="card-outer-box" @click="ToogleMenu">
    <q-btn type="span" :class="classes" :style="style">
      <span class="inner-style">
        <div class="icon-left" :style="styles">
          <img :src="icon" :alt="label" />
        </div>
        <p>{{ label }}</p>
        <div class="icon-right">
          <ArrowDown />
        </div>
      </span>
      <q-menu>
         <MenuList  v-show="showList" :list="list" />
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import ArrowDown from '%/icons/ArrowDown.vue'
import MenuList from '#/Header/MenuList.vue'
import ChevronUpIcon from '@/assets/icons/ChevronUpIcon.vue'

export default {
  name: 'CardLayout',

  components: { ArrowDown, MenuList },

  data() {
    return {
      showList: false
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
        cards: true
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

<style lang="scss">
.card-outer-box {
  display: flex;
  flex-direction: column;
}

.icon-left {
  height: 18px;
  margin-right: 5px;
  width: 18px;
}

.icon-right {
  border-radius: 0px;
  display: flex;
  height: 7.12px;
  justify-content: center;
  margin-left: 11.29px;
  width: 11.41px;
}
.inner-style {
  display: flex;
  align-items: center;
  align-self: center;
}

.cards {
  align-items: center;
  align-self: flex-start;
  background-color: #3d55ae;
  border-bottom: 1px solid #c5c5c5;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 60px;
  width: 159px;
}

.cards.onHover {
  background-color: #fd9802;
}

p {
  align-items: center;
  color: #ffffff;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  height: 15px;
  line-height: 15px;
}
</style>
