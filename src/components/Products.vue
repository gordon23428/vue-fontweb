<template>
  <div class="container mx-auto row mt-5">
    <loading v-model:active="isLoading"/>
    <!-- sidebar -->
    <div class="col-3">
      <ul class="sidebar list-group">
          <li class="list list-group-item text-center" @click="getAll">
            <div class="text-decoration-none text-align-center">全部種類</div>
          </li>
          <li class="list list-group-item text-center" @click="getTravel">
            <div class="text-decoration-none">潛水旅遊</div>
          </li>
          <li class="list list-group-item text-center" @click="getTest">
            <div class="text-decoration-none">潛水考照</div>
          </li>
          <li class="list list-group-item text-center" @click="getNovice">
            <div class="text-decoration-none">體驗潛水</div>
          </li>
        </ul>
    </div>
    <div class="row col-9 mt-4">
    <!-- product card -->
    <div class="col-lg-4 col-md-6 col-12 mb-4" v-for="item in filterList" :key="item.id">
      <div class="card-product card border-0 position-relative">
        <span class="favor-icon position-absolute" @click="addFavorite(item.id)">
          <i class="fas fa-heart"></i>
        </span>
        <div style="height: 150px; background-size: cover; background-position: center"
          :style="{backgroundImage: `url(${item.imageUrl})`}">
        </div>
        <div class="card-body">
          <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
          <h5 class="card-title text-light">
            {{ item.title }}
          </h5>
          <p class="card-text ">{{ item.content }}</p>
          <div class="d-flex justify-content-between align-items-baseline">
            <div class="h5 text-light" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h6 text-light" v-if="item.price">原價 {{ item.origin_price }} 元</del>
            <div class="h5 text-light" v-if="item.price">現在只要 {{ item.price }} 元</div>
          </div>
        </div>
        <div class="card-footer d-flex">
          <button type="button" class="btn btn-outline-light btn-sm" @click="getProduct(item.id)">
            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
            查看更多
          </button>
          <button type="button" class="btn btn-outline-warning btn-sm ml-auto" @click="addToCart(item.id)">
            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
            加到購物車
          </button>
        </div>
      </div>
    </div>
    <!-- productModal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content topic-bg text-light">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                報名 {{num}} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn topic-color" @click="addToCart(product.id, product.num)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === product.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  data () {
    return {
      products: [],
      filterList: [],
      product: {},
      isLoading: false,
      productModal: '',
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.products = response.data.products
        vm.filterList = response.data.products
        vm.isLoading = false
        // vm.pagination = response.data.pagination
      })
    },
    getProduct (id) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      vm.status.loadingItem = id
      this.$http.get(url).then((response) => {
        vm.product = response.data.product
        console.log(response.data)
        vm.status.loadingItem = ''
        vm.productModal = new Modal(document.getElementById('productModal'))
        vm.productModal.show()
      })
    },
    addToCart (id, qty = 1) {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      vm.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response.data)
        vm.$store.commit('setMessage', [
          response.data.message,
          'success'
        ])
        vm.status.loadingItem = ''
        this.$store.dispatch('getCart')
        vm.productModal.hide()
      })
    },
    getTravel () {
      const vm = this
      const filter = vm.products.filter(item => item.category === 'travel')
      console.log(filter)
      vm.filterList = filter
    },
    getNovice () {
      const vm = this
      const filter = vm.products.filter(item => item.category === 'novice')
      console.log(filter)
      vm.filterList = filter
    },
    getTest () {
      const vm = this
      const filter = vm.products.filter(item => item.category === 'license-test')
      console.log(filter)
      vm.filterList = filter
    },
    getAll () {
      const vm = this
      vm.filterList = vm.products
    },
    closeModal () {
      this.productModal.hide()
    },
    addFavorite (id) {
      const vm = this
      const list = JSON.parse(localStorage.getItem('favoriteList')) || []
      const tour = vm.products.find((item) => item.id === id)
      if (list.some((item) => item.id === id)) {
        vm.$store.commit('setMessage', [
          '此行程已在喜愛的旅程中^^',
          'danger'
        ])
      } else {
        vm.$store.commit('setMessage', [
          '您已設定喜愛的旅程',
          'success'
        ])
        list.push(tour)
        localStorage.setItem('favoriteList', JSON.stringify(list))
      }
    }
  },
  created () {
    this.getProducts()
    this.$store.dispatch('getCart')
  }
}
</script>
