import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import App from './App.vue'
const myApp = createApp(App)

myApp.use(createPinia())
myApp.use(router)
myApp.use(Quasar, {
    plugins: {}, 
  })

  myApp.mount('#app')
  
