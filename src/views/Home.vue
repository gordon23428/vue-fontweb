<template>
  <loading v-model:active="isLoading"/>
  <div class="home">
    <Navbar/>
    <div class="banner"></div>
  </div>
  <div class="container mt-5">
    <h2 class="index">
      您所想像的到的包包，都在小林賣包
    </h2>
    <div class="row">
      <ul class="list-group col-3">
        <li class="list-group-item">全部種類</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
      <div class="main col-9">
        <form>
          <div class="d-flex mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search">
            <button type="submit" class="btn btn-primary">search</button>
          </div>
        </form>
        <!-- product card -->
        <div class="row mt-4">
          <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
            <div class="card border-0 shadow-sm">
              <div style="height: 150px; background-size: cover; background-position: center"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title">
                  <a href="#" class="text-dark">{{ item.title }}</a>
                </h5>
                <p class="card-text">{{ item.content }}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                  <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                  <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                </div>
              </div>
              <div class="card-footer d-flex">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  <i class="fas fa-spinner fa-spin"></i>
                  查看更多
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm ml-auto">
                  <i class="fas fa-spinner fa-spin"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import $ from 'jquery'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  data () {
    return {
      products: [],
      product: {},
      isLoading: false
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        vm.products = response.data.products
        vm.isLoading = false
        // vm.pagination = response.data.pagination
      })
    },
    getProduct (id) {
      const vm = this
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
      vm.status.loadingItem = id
      this.$http.get(url).then((response) => {
        vm.product = response.data.product
        $('#productModal').modal('show')
        console.log(response.data)
        vm.status.loadingItem = ''
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
