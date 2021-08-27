<template>
  <div>
    <div class="my-5 row justify-content-center">
        <table class="table">
          <thead>
            <th>項目</th>
            <th>人數</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>
        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right" v-if="order.is_paid === false">
          <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmModal">確認付款去</button>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">確認付款</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            請確認認定單內容後再按下確認
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="payOrder">確認</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
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
      orderId: '',
      order: {
        user: { }
      },
      coupon_code: '',
      confirmModal: ''
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        vm.order = response.data.order
        console.log(vm.order)
        vm.isLoading = false
      })
    },
    payOrder () {
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.isLoading = true
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          this.$store.commit('setMod', 3)
          vm.$router.push(`/checkout/finish/${vm.orderId}`)
        }
        vm.confirmModal.hide()
        vm.isLoading = false
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  },
  mounted () {
    this.confirmModal = new Modal(document.getElementById('confirmModal'))
  }
}
</script>
