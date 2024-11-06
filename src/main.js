import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from "@primevue/themes/aura";
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
      theme: Aura,
  },
})
app.mount('#app')
