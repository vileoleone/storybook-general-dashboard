<template>
    <div class="card-outer-box" @click="ToogleMenu">
      <span type="span" class="cards" :class="classes" :style="style">
        <div
          class="icon-left"
          :style="{
            marginTop: marginTop + 'px',
            marginBottom: marginBottom + 'px',
            marginRight: iconRightMargin + 'px'
          }"
        >
          <img :src="icon" :alt="label" />
        </div>
        <p>{{ label }}</p>
        <div class="icon-right">
          <ArrowDown />
        </div>
      </span>
      <MenuListCalls v-show="showList" :list="list" />
    </div>
</template>

<script>
import ArrowDown from '%/icons/ArrowDown.vue'
import MenuListCalls from '#/Header/MenuListCalls.vue'
export default {
  name: 'CardLayout',

  components: { ArrowDown, MenuListCalls },

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
    cardSelected:{
      type:String
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

<style scoped lang="scss">
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

.cards {
  align-items: center;
  align-self: flex-start;
  background-color: #FD9802;
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
  background-color: #3D55AE;
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
