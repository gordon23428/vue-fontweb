<template>
   <div>
     <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>
        <main class="col-12 col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
   </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/staff/StaffNavbar.vue'
import Sidebar from '@/components/staff/StaffSidebar.vue'
export default {
  components: {
    Navbar,
    Sidebar
  },
  created () {
    const mycookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = mycookie
  }
}
</script>
