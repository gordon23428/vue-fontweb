<template>
  <div>
    <Navbar/>
    <Alert/>
    <div class="web-background position-fixed top-0">
      <div class="web-img"></div>
    </div>
  </div>
  <router-view></router-view>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Alert from '@/components/AlertMessage.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Alert
  }
}
</script>
