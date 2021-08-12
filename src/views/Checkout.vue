<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="mt-5 text-center">
        <h1>小林潛水 結帳</h1>
        <div class="row mt-5">
          <div class="col-4 alert" :class="{'alert-success': mod === 1}" role="alert">
            1.輸入訂單資料
          </div>
          <div class="col-4 alert" :class="{'alert-success': mod === 2}" role="alert">
            2.金流付款
          </div>
          <div class="col-4 alert" :class="{'alert-success': mod === 3}" role="alert">
            3.完成訂單
          </div>
        </div>
      </div>
    <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Checkout',
  components: {
    Navbar,
    Footer
  },
  computed: {
    mod () {
      return this.$store.state.orderMod
    }
  },
  created () {
    this.$store.commit('setMod', 1)
  }
}
</script>
