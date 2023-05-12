<template>
  <div class="card-menu">
  <span type="span" class="menu-paragraph-card" :class="classes" @click="onClick" :style="style">
    <div class="icon-left" :style="{marginTop: marginTop + 'px', marginBottom: marginBottom + 'px', marginRight: iconRightMargin + 'px'}">
        <img :src="icon" :alt="label"/>
    </div>
    <p>{{ label }}</p>
    <div class="icon-right">
        <ArrowDown/>
    </div>
  </span>
  <MenuList v-if="clicked ==true" :list = "list" />
</div>
</template>

<script>
import '../../assets/scss/DashboardCards.scss'
import ArrowDown from '../../assets/icons/ArrowDown.vue';
import MenuList from './MenuList.vue';
export default {
  name: 'CardLayout',

  components: { ArrowDown, MenuList },

  data() {
    return {
      clicked: false
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
    icon: {
      type: String,
    },
    marginTop: {
      type: Number,
    },
    marginBottom: {
      type: Number,
    },
    iconRightMargin: {
      type: Number,
    },
    list: {
      type: Array
    }
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
      this.clicked =!this.clicked
    },
  },
};
</script>
