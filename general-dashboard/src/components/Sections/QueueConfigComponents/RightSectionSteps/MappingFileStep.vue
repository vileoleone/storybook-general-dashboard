<template>
  <div type="span" class="mapping-file-step-outer-box" :class="classes" :style="style">
    <span class="mapping-file-header">
      <span class="h1">Sua Planilha</span>
      <span class="header-span">
        <span class="p">{{ this.file.name }}</span>
        <span>
          <span class="h2">{{ this.file.data.length }} contatos a serem importados</span>
        </span>
      </span>
    </span>
    <div class="mapping-container">
      <span class="header-mapping-container row-direction">
        <span class="h2">Colunas a mapear</span>
        <span class="right-header-span row-direction">
          <span class="p">{{ this.file.name }}</span>
          <div class="button-container">
            <div @mousedown="scrollLeft" class="queue-table-scroll-button">
              <img :src="ChevronLeftIcon" alt="scroll left" />
            </div>
            <span class="h3"> 2 - 3 </span>
            <div @mousedown="scrollRight" class="queue-table-scroll-button">
              <img :src="ChevronRightIcon" alt="scroll Right" />
            </div>
          </div>
        </span>
      </span>
    </div>
    <!--  <ButtonBottom label="Ir para a próxima etapa" /> -->
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useMailingStore } from '@/stores/useMailingStore'
import ButtonBottom from '#/Sections/QueueConfigComponents/AtomicComponents/ButtonBottom.vue'
import TriangleDown from '@/assets/icons/TriangleDown.svg'
import TriangleUp from '@/assets/icons/TriangleUp.svg'
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.svg'
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.svg'
export default {
  name: 'FileStep',

  components: { ButtonBottom },

  data() {
    return {
      TriangleDown,
      TriangleUp,
      active: false,
      isLoading: true,
      ChevronLeftIcon,
      ChevronRightIcon
    }
  },

  mounted() {
    console.log(this.file)
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
    },

    ...mapWritableState(useMailingStore, {
      readyToProceed: 'readyToProceed',
      file: 'mailingCsvFile',
      isLoading: 'isLoading'
    })
  },
  methods: {
    onClick() {
      this.active = !this.active
    },
    changeBodyOpacity() {
      document.body.style.opacity = '0.4'
      document.body.style.backgroundColor = 'black'
    }
  }
}
</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-left: 20px;
  margin-right: 0;
}

.queue-table-scroll-button {
  height: 24px;
  width: 24px;
  border-radius: 3px;
  border: 1px solid #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.h1 {
  font-weight: 700;
  font-size: 14px;
  color: #444444;
  margin-bottom: 5px;
}
.h2 {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #616161;
}

.h3 {
  font-weight: 500;
  font-size: 12px;
  color: #616161;
}
.p {
  font-weight: 400;
  font-size: 12px;
  color: #8b8b8b;
}

.row-direction {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}

.mapping-file-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-family: 'Work Sans';
  font-style: normal;

  margin-bottom: 20px;
  width: 100%;

  .header-span {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

.header-mapping-container {
  display: flex;
  height: 35px;
  padding: 0;
}

.mapping-file-step-outer-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0;
  width: 100%;
}
</style>
