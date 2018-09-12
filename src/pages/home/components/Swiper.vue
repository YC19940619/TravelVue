<template>
  <div class="wapper">
    <swiper :options="swiperOption" v-if="ShowSwiper">
      <!-- slides -->
      <swiper-slide
        v-for="item in list"
        :key="item.id">
        <img
          class="swiper_img"
          :src="item.src"
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false
      }
    }
  },
  computed: {
    ShowSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wapper >>> .swiper-pagination-bullet-active
    background: #fff !important;
  .wapper
    width:100%;
    height:0;
    overflow:hidden;
    padding-bottom:31.25%;
    background:#ccc;
    .swiper_img
      display: block;
      width:100%;

</style>
