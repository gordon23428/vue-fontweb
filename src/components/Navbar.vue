<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">小林潛水</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none text-light" to="/products"><i class="fas fa-swimmer"></i>預約潛水</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none text-light" to="/favorite"><i class="fas fa-heart"></i>喜愛的旅程</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-decoration-none text-light" to="/login">
              <i class="fas fa-sign-in-alt"></i>員工登入
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- cart -->
  <button class="cart btn topic-color" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <i class="fas fa-cart-arrow-down"></i>
    <span class="badge bg-danger">{{leng}}</span>
  </button>
  <div class="offcanvas text-light offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">購物車</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <hr>
    <div class="offcanvas-body">
      <div class="cart-item" v-for="item in getCart.carts" :key="item.id">
        <button @click.prevent="removeCartItem(item.id)">
          <i class="fas fa-trash-alt"></i>
        </button>
        <h5>{{ item.product.title }}</h5>
        <div>{{ item.qty }}/{{ item.product.unit }}</div>
        <div>{{ item.final_total }}$</div>
        <hr>
      </div>
      <div class="offcanvas-footer">
        <h5>購買{{leng}}項方案</h5>
        <h3>總共:{{getCart.final_total}}</h3>
        <router-link class="btn btn-primary btn-lg w-100" to="/checkout">
        結帳去
      </router-link>
      </div>
    </div>
  </div>
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
