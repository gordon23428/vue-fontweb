<template>
  <div>
    <Navbar/>
    <Alert/>
    <div class="web-background position-fixed top-0">
      <div class="web-img"></div>
    </div>
    <div class=" container row col-9 mt-4">
      <!-- product card -->
      <div class="col-md-4 mb-4" v-for="item in favorProducts" :key="item.id">
      <div class="card-product card border-0 position-relative">
        <span class="position-absolute" data-bs-toggle="modal" data-bs-target="#confirmModal" @click="getId(item.id)" style="font-size: 1.5em; color: pink;">
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
    <!-- confirmModal -->
    <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">移除</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            確定要移除喜愛的旅程嗎?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="removeFavorite" data-bs-dismiss="modal">確定</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          </div>
        </div>
      </div>
    </div>
    <!-- productModal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
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
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
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
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary" @click="addToCart(product.id, product.num)">
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
import Navbar from '@/components/Navbar.vue'
import Alert from '@/components/AlertMessage.vue'
import { Modal } from 'bootstrap'
export default {
  components: {
    Navbar,
    Alert
  },
  data () {
    return {
      favorProducts: [],
      isLoading: false,
      product: {},
      productModal: '',
      delId: '',
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
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
    getId (id) {
      const vm = this
      vm.getId = id
    },
    removeFavorite () {
      const vm = this
      const index = vm.favorProducts.findIndex(item => item.id === vm.delId)
      vm.favorProducts.splice(index, 1)
      localStorage.setItem('favoriteList', JSON.stringify(vm.favorProducts))
    }
  },
  created () {
    this.favorProducts = JSON.parse(localStorage.getItem('favoriteList')) || []
  }
}
</script>
