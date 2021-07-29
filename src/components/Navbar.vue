<template>
  <nav class="navbar navbar-light bg-light flex-nowrap">
    <div class="container-fluid d-inline">
      <a class="navbar-brand" href="#">小林賣包</a>
    </div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle " data-bs-display="static" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        購物車
        <i class="fas fa-cart-arrow-down"></i>
      </button>
      <form class="dropdown-menu p-4 dropdown-menu-end">
        <table class="table mb-3">
          <thead>
            <tr>
              <th scope="col">項目</th>
              <th scope="col">數量</th>
              <th scope="col">價錢</th>
              <th scope="col"></th>
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
        <button type="submit" class="btn btn-primary">結帳去</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      cart: {}
    }
  },
  computed: {
    getCart () {
      return this.$store.state.cart
    }
  },
  methods: {
    removeCartItem (id) {
      // const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      this.$http.delete(url).then((response) => {
        console.log(response.data)
        this.$store.dispatch('getCart')
      })
    }
  }
}
</script>
