<template>
  <div class="home">
    <Navbar/>
    <div class="banner">
      <div class="banner-text">
        <h1>想悠游在美麗的大海嗎</h1>
        <p>歡迎加入小林潛水</p>
        <button>立即加入</button>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <h2 class="index">
      您所想像的到的包包，都在小林賣包
    </h2>
    <div class="row">
      <Sidebar/>
      <div class="main col-9">
        <form>
          <div class="d-flex mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search">
            <button type="submit" class="btn btn-primary">search</button>
          </div>
        </form>
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  }
}
</script>
