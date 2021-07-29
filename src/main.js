import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import store from './store'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.use(store)
app.mount('#app')
