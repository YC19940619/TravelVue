<template>
   <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
   </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>
  .iconfont{
    width: 1rem;
    /*font-size:10rem*/
  }
</style>
