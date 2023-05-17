<template>
  <div type="span" class="menu-list-call-outer-box" :class="classes" :style="style">
    
    <span class="menu-list-call-header">

      <h1 class="calls-h1">Todas as chamadas</h1>
      <h2 class="calls-h2">Chamadas por: </h2> 
      
      </span>
    <div v-for="(item, index) in list" :key="index">
      <template v-if="typeof item === 'object'">
        <div v-for="(value, key) in item" :key="key" @mouseleave="clicked = false">
          <span class="menu-list-object" @click="onClick">
            <MenuItem :label="key" :style="{ marginBottom: marginBottom + 'px' }" />
            <ChevronUpIcon v-if="clicked == false" />
            <ChevronDownIcon v-if="clicked == true" />
          </span>

          <span v-if="clicked == true">
            <MenuItem
              class="subitem"
              v-for="item in value"
              :label="item"
              :key="item"
              :style="{ marginBottom: marginBottom + 'px' }"
              >{{ item }}
            </MenuItem>
          </span>
        </div>
      </template>

      <template v-else>
        <MenuItem :label="item" :style="{ marginBottom: marginBottom + 'px' }" />
      </template>
    </div>
  </div>
</template>

<script>
import MenuItem from '#/Header/MenuItem.vue'
import ChevronUpIcon from '%/icons/ChevronUpIcon.vue'
import ChevronDownIcon from '%/icons/ChevronDownIcon.vue'
export default {
  name: 'MenuLayout',

  components: { MenuItem, ChevronUpIcon, ChevronDownIcon },

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
  background-color: #f0f0f0;
  box-sizing: border-box;
  color: #252525 !important;
  display: flex;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  justify-content: flex-start;
  line-height: 15px;
  max-height: 25px;
  padding-left: 10px;
}

.calls-h1 {

  align-items: center;
  color: #6F6F6F;
  display: flex;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  height: 15px;
  line-height: 15px;
  margin-top: 0;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #D9D9D9 ;

}
.calls-h2 {

  align-items: center;
  color: #9F9F9F;
  display: flex;
  font-family: 'Work Sans';
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  margin-top: 0;
  width: 100%;
}

.clicker {
  background-color: #f0f0f0;
  box-sizing: border-box;
  color: #252525 !important;
  display: flex;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  justify-content: flex-start;
  line-height: 15px;
  max-height: 25px;
  padding-left: 10px;
}

li {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 14.5px;
  margin-right: 10px;
  max-height: 25px;
  width: fit-content;
}

.menu-list-object {
  align-items: flex-start;
  background: #f0f0f0;
  display: flex;
  flex-direction: row;
  max-height: 25px;
  margin-bottom: 5px;
  padding: 0;
  width: max-content;
}

.menu-list-call-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.menu-list-call-outer-box {
  background: #ffffff;
  border-color: #c5c5c5;
  border-radius: 0px 0px 5px 5px;
  border-style: solid;
  border-width: 0px 1px 1px 1px;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  color: #6f6f6f;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: 'Work Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  list-style-type: none;
  padding: 20px 20px 20px 20px;
  width: 159px;
}

.subitem {
  padding-left: 10px;
}

.subitem.active {
  background-color: #4b68d2;
  box-sizing: border-box;
  color: #ffffff !important;
  display: flex;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  height: 25px;
  justify-content: flex-start;
  line-height: 15px;
  padding-left: 10px;
  width: 116px;
}
</style>
