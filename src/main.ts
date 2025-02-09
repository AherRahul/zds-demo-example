import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// @ts-ignore
import ZDS from '@aherrahul/zema-design-system';
import '@aherrahul/zema-design-system/dist/style.css';

const app = createApp(App)

app.use(router)
app.use(ZDS)

app.mount('#app')
