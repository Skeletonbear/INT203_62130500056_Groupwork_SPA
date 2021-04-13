import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import'./assets/tailwind.css'
import BaseButtons from './components/BaseButtons.vue'
import BaesComment from './components/BaesComment.vue';
import TheFrom from './components/TheFrom.vue';

const app = createApp(App)
app.component('base-buttons', BaseButtons)
app.component('baes-comment', BaesComment)
app.component('the-from', TheFrom)
app.use(router).mount('#app')
