<template>
    <div class="header iconfont">
      <div class="header-left">&#xe624;</div>
      <div class="header-search"><span class="header-search-icon">&#xe632;</span><input class="header-search-input" placeholder="输入城市/景点/游玩/主题"/></div>
      <router-link to="/city">
        <div class="header-right">{{this.doubleCity}}<span class="arrow-icon">&#xe600;</span></div>
      </router-link>
    </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    width:100%;
    line-height:$headerHeight;
    display:flex;
    background:$bgColor;
    color: #fff;
    font-size 0.28rem
    .header-left
      width:.64rem;
      height:$headerHeight;
      text-align:center;
      font-weight:bold;
    .header-search
      padding-left:.2rem
      display flex
      flex:1;
      background:#fff;
      height:0.64rem;
      line-height:0.64rem;
      border-radius:.1rem;
      margin:.12rem 0 .12rem .2rem;
      font-size:0.24rem;
      color: #ccc
      .header-search-icon
        font-size 0.28rem
        display block
        width:.5rem
        height:.64rem
        text-align:center
    .header-right
      padding:0 .1rem
      height:$headerHeight;
      text-align:center;
      color: #fff
      .arrow-icon
        margin-left:.1rem
</style>
