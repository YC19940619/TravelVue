<template>
    <div class="header iconfont" ref="header">
      城市选择
      <div class="header-left" @click="goBack">&#xe624;</div>
    </div>
</template>
<script>
export default {
  name: 'CityHeader',
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    width:100%;
    line-height:$headerHeight;
    background:$bgColor;
    color: #fff;
    font-size:0.32rem
    text-align:center
    .header-left
      position:absolute;
      left:0;
      top:0;
      width:.64rem;
      height:$headerHeight;
      text-align:center;
      font-weight:bold;
</style>
