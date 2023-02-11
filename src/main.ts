import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'

import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
