<template>
  <div type="span" class="menu-list" :class="classes" :style="style">
    <div v-for="(item, index) in list" :key="index">
      <template v-if="typeof item === 'object'">
        <div v-for="(value, key) in item" :key="key">
          <span class="list-object" @click="onClick">
            <MenuListComponent :label="key" :style="{ marginBottom: marginBottom + 'px' }" />
            <ChevronUpIcon v-if="clicked == false" />
            <ChevronDownIcon v-if="clicked == true" />
          </span>

          <span v-if="clicked == true">
            <MenuListComponent
              class="subitem"
              v-for="item in value"
              :label="item"
              :key="item"
              :style="{ marginBottom: marginBottom + 'px' }"
              >{{ item }}
            </MenuListComponent>
          </span>
        </div>
      </template>

      <template v-else>
        <MenuListComponent :label="item" :style="{ marginBottom: marginBottom + 'px' }" />
      </template>
    </div>
  </div>
</template>

<script>
import MenuListComponent from './MenuListComponent.vue'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon.vue'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon.vue'
export default {
  name: 'MenuLayout',

  components: { MenuListComponent, ChevronUpIcon, ChevronDownIcon },

  data() {
    return {
      isActive: false,
      clicked: false
    }
  },

  props: {
    label: {
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
    },
    marginBottom: {
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
        active: this.isActive,
        clicked: this.clicked
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
      this.clicked = !this.clicked
    }
  }
}
</script>

<style scoped lang="scss">
.active {
  box-sizing: border-box;
  color: #252525 !important;
  background-color: #f0f0f0;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  max-height: 25px;
}

.clicker {
  box-sizing: border-box;
  color: #252525 !important;
  background-color: #f0f0f0;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;

  max-height: 25px;
}

li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-height: 25px;
  width: fit-content;
  margin-right: 10px;
  margin-bottom: 14.5px;
}

.list-object {
  max-height: 25px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: max-content;
  background: #f0f0f0;
  padding: 0;
}

.menu-list {
  box-sizing: border-box;
  display: flex;
  padding: 20px 20px 20px 20px;
  width: 159px;
  flex-direction: column;
  background: #ffffff;

  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #c5c5c5;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 5px 5px;

  color: #6f6f6f;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;

  cursor: pointer;

  list-style-type: none;
}

.subitem {
  padding-left: 10px;
}

.subitem.active {
  box-sizing: border-box;
  color: #ffffff !important;
  background-color: #4b68d2;
  display: flex;

  justify-content: flex-start;
  padding-left: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;

  width: 116px;
  height: 25px;
}
</style>
