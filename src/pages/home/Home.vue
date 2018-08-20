<template>
   <div>
      <home-header></home-header>
   </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
  .iconfont{
    width: 1rem;
    /*font-size:10rem*/
  }
</style>
