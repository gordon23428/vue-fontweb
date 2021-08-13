<template>
  <div>
    <loading v-model:active="isLoading"/>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="150">Email</th>
          <th>購買款項</th>
          <th width="120">應付金額</th>
          <th width="100">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>
            <div>
              {{unix(item.create_at)[0]}}
            </div>
            <div>
              {{unix(item.create_at)[1]}}
            </div>
          </td>
          <td>
            {{item.user.email}}
          </td>
          <td>
            <li v-for="(thing, index) in item.products" :key="index">
              <ul>
                項目:{{thing.product.title}}
              </ul>
              <ul>
                人數:{{thing.product.num}}{{thing.product.unit}}
              </ul>
              <ul v-if="thing.coupon">
                使用優惠卷:{{thing.coupon.title}}
              </ul>
              <ul>
                價錢:{{thing.final_total}}
              </ul>
            </li>
          </td>
          <td>
            {{item.total}}
          </td>
          <td>
            {{item.is_paid}}
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination='pagination' @getPage='getOrders'></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      isLoading: false,
      orders: [],
      pagination: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${page}`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.orders = response.data.orders
        vm.isLoading = false
        vm.pagination = response.data.pagination
      })
    },
    unix (item) {
      const dateAndTime = new Date(item * 1000).toISOString().split('T')
      return dateAndTime
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
