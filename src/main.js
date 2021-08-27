import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import store from './store'
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.use(store)
app.mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    console.log('需驗證')
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response) => {
      console.log(response.data)
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
