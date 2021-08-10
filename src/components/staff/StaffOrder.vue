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
            {{unix(item.create_at)}}
          </td>
          <td>
            {{item.user.email}}
          </td>
          <td>
            {{item.products}}
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      orders: []
    }
  },
  methods: {
    getOrders () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data.orders)
        vm.orders = response.data.orders
        vm.isLoading = false
        // qvm.pagination = response.data.pagination
      })
    },
    unix (item) {
      const dateAndTime = new Date(item * 1000).toISOString().split('T')
      return dateAndTime[0]
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
