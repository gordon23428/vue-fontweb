<template>
  <div>
    <Navbar/>
    <div class="web-background position-fixed top-0">
      <div class="web-img"></div>
    </div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~@/assets/aviv-perets-eLfDul2Uu8k-unsplash.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h2>馬爾地夫風暴魚</h2>
            <p>置身魚群風暴中</p>
            <router-link class="btn btn-primary" to="/products">立即詢問</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="~@/assets/diving2.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h2 class="text-dark">沖繩藍洞</h2>
            <p class="text-dark">悠遊美麗的大海</p>
            <router-link class="btn btn-primary" to="/products">立即詢問</router-link>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
