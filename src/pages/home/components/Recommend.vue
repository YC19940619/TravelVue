<template>
   <div class='recommend'>
      <div class='recommend-title'>热销推荐</div>
      <ul>
        <li class="recommend-item border-bottom" v-for="item in list" :key="item.id">
          <img :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-btn">查看详情</button>
          </div>
        </li>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import "~styles/maxins.styl"
  .recommend-title
    width: 100%
    height: .8rem
    line-height:.8rem
    background :#eee
    text-indent :.4rem
    font-size:.28rem
  .recommend-item
    width:100%
    height:2.4rem
    box-sizing: border-box
    padding:.1rem
    display:flex
    flex-direction:row
    img
      display:block
      height:100%
    .item-info
      flex:1
      height: 100%
      min-width:0
      margin-left:.2rem
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-btn
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff

</style>
