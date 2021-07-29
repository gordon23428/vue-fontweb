import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {}
  },
  mutations: {
    setCart (state, getcart) {
      state.cart = getcart
    }
  },
  actions: {
    getCart (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.get(url).then((response) => {
        context.commit('setCart', response.data.data)
      })
    }
  },
  moduals: {
  }
})
