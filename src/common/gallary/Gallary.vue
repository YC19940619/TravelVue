<template>
    <div class="gallary-mask" @click="handleGallaryClick">
      <div class="gallary">
        <swiper :options="swiperOption" v-if="ShowSwiper">
          <!-- slides -->
          <swiper-slide
            v-for="(item, index) in gallaryImgs"
            :key="index">
            <img
              class="swiper_img"
              :src="item"
            >
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('handleGallaryShow')
    }
  },
  computed: {
    ShowSwiper () {
      return this.gallaryImgs.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary-mask >>> .swiper-pagination
    position :absolute
    bottom:-1rem
  .gallary-mask
    display: flex
    flex-direction:column
    justify-content :center
    background:#000;
    position :fixed
    left: 0
    bottom: 0
    right: 0
    top:0
    color: #fff
    .gallary
      width: 100%
      height:0
      padding-bottom:100%
      img
        width:100%
      .swiper-container
        overflow :inherit
</style>
