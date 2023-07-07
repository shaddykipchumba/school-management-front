

import { createApp } from 'vue'
import './axios'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap';


const pinia = createPinia();
const app = createApp(App)

app.use(pinia);
app.use(router);


app.mount('#app')
