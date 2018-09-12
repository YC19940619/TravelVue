<template>
  <div class='Weekend'>
    <div class='Weekend-title'>周末去哪</div>
    <ul>
      <li class="Weekend-item border-bottom" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import "~styles/maxins.styl"
  .Weekend-title
    width: 100%
    height: .8rem
    line-height:.8rem
    background :#eee
    text-indent :.4rem
    font-size:.28rem
  .Weekend-item
    width:100%
    img
      display:block
      width:100%
    .item-info
      box-sizing :border-box
      padding:.1rem
      .item-title
        line-height: .4rem
        font-size: .28rem
        font-weight :bold
      .item-desc
        line-height: .4rem
        font-size :.24rem
        color: #666
        ellipsis()
</style>
