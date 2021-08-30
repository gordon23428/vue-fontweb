import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],
    leng: '',
    orderMod: 1,
    message: [],
    favoriteList: []
  },
  mutations: {
    setCart (state, getcart) {
      state.cart = getcart
    },
    setLeng (state, leng) {
      state.leng = leng
    },
    setMod (state, mod) {
      state.orderMod = mod
    },
    setMessage (state, mes) {
      state.message = mes
    },
    setFavorite (state, fav) {
      state.favoriteList = fav
    }
  },
  actions: {
    getCart (context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.get(url).then((response) => {
        // console.log(response.data)
        context.commit('setCart', response.data.data)
        context.commit('setLeng', response.data.data.carts.length)
      })
    }
  },
  moduals: {
  }
})
