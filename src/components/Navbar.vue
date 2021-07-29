<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid d-inline">
      <a class="navbar-brand" href="#">小林賣包</a>
    </div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fas fa-cart-arrow-down"></i>
      </button>
      <form class="dropdown-menu dropdown-menu-right p-4">
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
              <td><i class="fas fa-trash-alt"></i></td>
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
      })
    }
  }
}
</script>
