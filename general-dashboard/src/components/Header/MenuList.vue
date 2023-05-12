<template>
  <div type="span" class="menu-list" :class="classes" :style="style">
    <div v-for="(item, index) in list" :key="index">
      <template v-if="typeof item === 'object'">
        <div v-for="(value, key) in item" :key="key">
          
          <span class="list-object" @click="onClick" >
            <MenuListComponent :label="key" :style="{ marginBottom: marginBottom + 'px' }" />
            <ChevronUpIcon v-if="clicked ==false"/>
            <ChevronDownIcon v-if="clicked ==true"/>
          </span>
          
          <span v-if="clicked ==true">
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
import '../../assets/scss/MenuList.scss'
import MenuListComponent from './MenuListComponent.vue'
import ChevronUpIcon from '../../assets/icons/ChevronUpIcon.vue'
import ChevronDownIcon from '../../assets/icons/ChevronDownIcon.vue'
export default {
  name: 'MenuLayout',

  components: { MenuListComponent, ChevronUpIcon, ChevronDownIcon },

  data() {
    return {
      isActive: false,
      clicked:false
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
