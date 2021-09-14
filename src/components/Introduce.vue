<template>
  <div class="banner container-fluid">
    <div class="banner-text">
      <div class="inner-text">
        <h1>想要忘卻一切憂愁煩惱嗎</h1>
        <h3>一起來探索海中的奧秘</h3>
        <div class="banner-btn">
          <i class="fas fa-angle-double-right"></i>
          <router-link class="btn topic-color text-light" to="/products">預約潛水</router-link>
          <i class="fas fa-angle-double-left"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <h1 class="index text-center animate__animated wow animate__rubberBand">
      探索台灣美麗新世界
    </h1>
  </div>
  <div class="container-fluid p-0">
    <div class="attractions d-flex">
      <div class="img-intro img1 animate__animated wow animate__fadeIn"></div>
      <div class="introduce p-3">
        <h3 class="text-light">潮境公園</h3>
        <p class="text-light animate__animated wow animate__bounceInRight">如果沒有多次潛水經驗的潛友，那麼位於基隆市的潮境公園是個不錯的初級潛點，天然的灣澳地形，讓這裡形成觀賞魚群的好地點，進入公園後再往上走到最上面，右手邊樓梯下去到海岸邊，則是較為進階的中級潛點，適合岸潛及船潛。</p>
      </div>
    </div>
    <div class="attractions d-flex">
      <div class="introduce p-3">
        <h3 class="text-light">鼻頭角</h3>
        <p class="text-light  animate__animated wow animate__bounceInLeft">鼻頭角是東北角知名景點海洞、海崖和海蝕凹壁非常多，豆腐岩、蜂窩岩、蕈狀岩更是居全台之冠。也是潛水初學者的練習教學場所，這裡有自然的岩石屏障將海域區隔為一個區域，鼻頭角又有豐富的海洋生態，這裡也是浮潛愛好者安全的浮潛環境，以鼻頭角來說這裡的魚種很豐富，除了各式熱帶魚之外，還常有機會看的到烏賊群,海底的珊瑚, 海葵，海螅也很是很多樣化及豐富!</p>
      </div>
      <div class="img-intro img2 animate__animated wow animate__fadeIn"></div>
    </div>
    <div class="attractions d-flex">
      <div class="img-intro img3 animate__animated wow animate__fadeIn"></div>
      <div class="introduce p-3">
        <h3 class="text-light">龍洞灣</h3>
        <p class="text-light  animate__animated wow animate__bounceInRight">這裡是很多潛水員初次體驗潛水的地方。因為地形的關係，潛水深度適中，平均約在15~25米， 初學者在這活動較為適合，所以這裡是業界公認潛水初學訓練的天然教場。建議不管是平日或假日時學習潛水要記得預約。初學者也不要自行潛去下海，還是要教練隨行以保安全!不要在颱風來襲或是超大浪時去潛水，所以只要避開以上建議，龍洞灣是非常適合新手下水的浮潛點。</p>
      </div>
    </div>
  </div>
  <div class="container shop-event text-center my-5">
      <div class="display-1">慶祝開店</div>
      <div class="mb-3 h3">在結帳頁面輸入優惠碼，享購物9折優惠</div>
      <div class="h3 mb-2">優惠碼:open0726</div>
      <router-link class="btn topic-color mb-2" to="/products">立即預約潛水</router-link>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  mounted () {
    new WOW({ live: false }).init()
  }
}
</script>
