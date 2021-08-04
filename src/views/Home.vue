<template>
  <div class="home">
    <Navbar/>
    <div class="slider-contaner">
      <div class="slider">
        <div class="slider-item slider-item1">
          <div class="introduce mt-3">
            <h2 class="text-white">馬爾地夫風暴魚</h2>
            <p class="text-white">置身魚群風暴中</p>
            <button class="btn btn-light">立即詢問</button>
          </div>
        </div>
        <div class="slider-item slider-item2">
          <div class="introduce mt-3">
            <h2 class="text-white">沖繩藍洞</h2>
            <p class="text-white">悠遊美麗的大海</p>
            <button class="btn btn-light">立即詢問</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <div class="footer text-center bg-dark py-5">
      <div class="text-white mb-3">個人作品非商業用途用</div>
      <div class="icon">
        <i class="fab fa-facebook fa-lg text-white mx-3"></i>
        <i class="fab fa-line fa-lg text-white mx-3"></i>
        <i class="fab fa-instagram fa-lg text-white mx-3"></i>
        <i class="fas fa-phone-alt fa-lg text-white mx-3">0911-XXX-XXX</i>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
// import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
