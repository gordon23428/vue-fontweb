<template>
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
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
