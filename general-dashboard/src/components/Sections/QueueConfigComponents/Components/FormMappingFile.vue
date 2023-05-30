<template>
  <main type="span" class="wd100 ht100 lh0 mt30px min-width-725px" :class="classes" :style="style">
    <section class="form-header fl-jcsb-alst-fdrow ">
      <section class="fl-jcsb-alst-fdcolumn wd100">
        <span class="fl-jcsb-alst-fdcolumn wd100 mb20px">
          <span class="mb5px fs14-fw700-cl44">Configurações</span>

          <span class="fl-jcsb-alcnt-fdrow wd100">
            <span class="fs12-fw400-cl8B">
              Faça o mapeamento das colunas do arquivo com os tipos de campos do sistema.
            </span>
          </span>
        </span>
      </section>
    </section>
    <form class="fl-jcsb-alst-fdrow flex-wrap">
      <FormComponent
        label="Código único"
        width="360px"
        list="['exemplo1', 'exemplo2','exemplo3']"
        placeholder="Escolha uma opção"
        :onChoice="
          (item) => {
            console.log(item)
          }
        "
      />
      <FormComponent
        label="Nome do contato"
        width="360px"
        list="['exemplo1', 'exemplo2','exemplo3']"
        placeholder="Escolha uma opção"
        :onChoice="
          (item) => {
            console.log(item)
          }
        "
      />
      <FormComponent
        label="Fuso horário"
        width="360px"
        list="['exemplo1', 'exemplo2','exemplo3']"
        placeholder="Escolha uma opção"
        :onChoice="
          (item) => {
            console.log(item)
          }
        "
      />
      <FormComponent
        label="Agendamento"
        width="360px"
        list="['exemplo1', 'exemplo2','exemplo3']"
        placeholder="Escolha uma opção"
        :onChoice="
          (item) => {
            console.log(item)
          }
        "
      />
    </form>

    <!--   <ButtonBottom label="Ir para a próxima etapa" /> -->
  </main>
</template>

<script>
import SearchIcon from '@/assets/icons/SearchIcon.svg'
import { default as FormComponent } from './Form.vue'
export default {
  name: 'SearchSubHeader',

  components: { FormComponent },

  data() {
    return {
      SearchIcon
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
.h1-text {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #444444;
}

input {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #8f8f8f;
  border-style: none;

  width: 100%;
  height: 100%;
}

.search-field-outer-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  min-width: 750px;
  margin-bottom: 15px;
}

.search-field-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;

  width: 255px;

  background: #ffffff;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  color: #c5c5c5;

  img {
    margin-right: 8.3px;
  }
}

textarea:focus,
input:focus {
  outline: none;
}
</style>
