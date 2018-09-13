<template>
  <div class="list" ref="wapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wapper active">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wapper" v-for="item in hotcitys" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in citys" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="city-list">
          <div class="item border-bottom" v-for="value in item" :key="value.id">
            {{value.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bescroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    citys: Object,
    hotcitys: Array
  },
  mounted () {
    this.scroll = new Bescroll(this.$refs.wapper)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .border-bottom
    &:before
      border-color:#ccc
  .list
    width:100%;
    position :absolute;
    left:0;
    top:1.58rem;
    bottom:0;
    overflow :hidden;
    .title
      width: 100%;
      height:.54rem;
      line-height :.54rem;
      background :#eee;
      font-size :.26rem;
      text-indent :.2rem
    .button-list
      width: 100%;
      box-sizing :border-box;
      padding:.1rem
      padding-right:.6rem
      overflow:hidden
      .button-wapper
        float: left
        width: 33.33%
        .button
          text-align:center
          font-size :.24rem
          padding:.1rem 0
          border:.02rem solid #ccc
          border-radius:.06rem
          margin:.1rem
      .button-wapper.active .button
        border-color: $bgColor
        color: $bgColor
    .city-list
      width:100%
      .item
        width:100%;
        height:.74rem;
        line-height:.74rem;
        font-size :.26rem
        text-indent :.2rem

</style>
