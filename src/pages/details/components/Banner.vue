<template>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <p class="banner-name">{{sightName}}</p>
      <div class="banner-info">
        <span class="banner-icon iconfont">&#xe6f5;</span>
        {{gallaryImgs.length}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  methods: {
    handleBannerClick () {
      this.$emit('handleGallaryShow')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    width: 100%
    height: 0
    padding-bottom: 55%
    background: #ccc
    position: relative
    .banner-img
      width:100%
    .banner-name
      width: 100%
      height: .5rem
      line-height: .5rem
      color: #fff
      box-sizing:border-box
      padding:0 .2rem
      font-size :.26rem
      position:absolute
      bottom:0
      left:0
    .banner-info
      display :inline
      padding:0 .2rem
      height: .4rem
      line-height: .4rem
      background :#000
      color: #fff
      position: absolute
      bottom:0.1rem
      right:.2rem
      border-radius:.2rem
      font-size: .24rem
      .banner-icon
        font-size :.24rem
</style>
