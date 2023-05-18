<template>
  <div class="card-outer-box" >
    <q-btn
      type="span"
      :class="classes"
      :style="style"
    >
      <span class="inner-style">
        <div class="icon-left" :style="styles">
          <img :src="icon" :alt="label" />
        </div>
        <p>{{ label }}</p>
        <img :src="ArrowDown" v-if="showList == false" class="icon-right" alt="close Icon" />
        <img :src="ArrowUpIcon" v-if="showList == true" class="icon-right" alt="open Icon" />
      </span>
      <q-menu anchor="bottom middle" self="top middle" @before-show="showList = true" @before-hide="showList = false" >
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
        cards: true,
        onHover: this.showList
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        
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
  max-width: fit-content;
  max-height: fit-content;
}
.card-call.onHover {
  background-color: #fd9802;
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
