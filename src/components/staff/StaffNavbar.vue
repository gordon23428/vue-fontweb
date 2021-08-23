<template>
  <div class="sticky-top">
    <header class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">小林潛水員工頁</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent= "signout">Sign out</a>
      </li>
    </ul>
  </header>
  <div id="sidebarMobileMenu" class="d-md-none bg-dark d-flex shadow">
      <div>
        <router-link class="nav-link" to="/admin/staffproducts">
            產品列表
          </router-link>
      </div>
      <div>
        <router-link class="nav-link" to="/admin/stafforder">
        訂單列表
      </router-link>
      </div>
      <div>
        <router-link class="nav-link" to="/admin/staffcoupon">
          優惠卷
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signout () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      this.$http.post(api).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
