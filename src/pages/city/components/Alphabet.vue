<template>
    <div class="list">
      <div class="letter" v-for="(item , key) of citys" :key="key">{{key}}</div>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    citys: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    width:.6rem
    position:absolute
    right:0
    top:1.58rem
    bottom:0
    font-size :.26rem
    display:flex
    flex-direction:column
    justify-content :center
    .letter
      width: 100%
      padding:.03rem 0
      color: $bgColor
      text-align:center
</style>
