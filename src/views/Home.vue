<template>
  <div class="home">
    <Navbar/>
    <div class="slider-contaner">
      <div class="slider">
        <div class="slider-item slider-item1">
          <div class="introduce mt-3">
            <h2 class="text-white">馬爾地夫風暴魚</h2>
            <p class="text-white">置身魚群風暴中</p>
            <router-link class="btn btn-light" to="/products">立即詢問</router-link>
          </div>
        </div>
        <div class="slider-item slider-item2">
          <div class="introduce mt-3">
            <h2 class="text-white">沖繩藍洞</h2>
            <p class="text-white">悠遊美麗的大海</p>
            <router-link class="btn btn-light" to="/products">立即詢問</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
