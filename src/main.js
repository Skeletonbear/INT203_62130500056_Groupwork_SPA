import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import'./assets/tailwind.css'
import BaseButtons from './components/BaseButtons.vue'

const app = createApp(App)
app.component('base-buttons', BaseButtons)
app.use(router).mount('#app')
