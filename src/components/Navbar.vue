<template>
  <nav class="navbar navbar-light bg-light flex-nowrap">
    <div class="d-inline">
      <a class="navbar-brand" href="/login">小林潛水</a>
    </div>
    <div class="d-flex align-items-center">
      <div class="mx-3">
        <i class="fas fa-sign-in-alt"></i>
        <router-link class="" to="/login">
          員工登入
        </router-link>
      </div>
      <!-- cart -->
      <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" data-bs-display="static" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        購物車
        <i class="fas fa-cart-arrow-down"></i>
        <span class="badge bg-danger">{{leng}}</span>
      </button>
      <form class="dropdown-menu p-4 dropdown-menu-end">
        <table class="table mb-3">
          <thead>
            <tr>
              <th scope="col">項目</th>
              <th scope="col">數量</th>
              <th scope="col">價錢</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getCart.carts" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}/{{ item.product.unit }}</td>
              <td>{{ item.final_total }}$</td>
              <td>
                <button @click.prevent="removeCartItem(item.id)">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link class="btn btn-primary" to="/checkout">
          結帳去
        </router-link>
      </form>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    getCart () {
      return this.$store.state.cart
    },
    leng () {
      return this.$store.state.leng
    }
  },
  methods: {
    removeCartItem (id) {
      console.log(this.len)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      this.$http.delete(url).then((response) => {
        console.log(response.data)
        this.$store.dispatch('getCart')
      })
    }
  },
  created () {
    this.$store.dispatch('getCart')
  }
}
</script>
