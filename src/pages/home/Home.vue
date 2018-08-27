<template>
   <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
   </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>
  .iconfont{
    width: 1rem;
    /*font-size:10rem*/
  }
</style>
