<template>
  <div class="search" ref="search">
    <input class="search-input" type="text" placeholder="输入城市或拼音"/>
  </div>
</template>
<script>
export default {
  name: 'CitySearch',
  mounted () {
    this.$emit('domHeight', this.$refs['search'].offsetHeight)
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    width:100%;
    height:.72rem;
    background:$bgColor;
    box-sizing border-box;
    padding:0 0.1rem;
    .search-input
      box-sizing: border-box;
      padding:0 0.1rem;
      width:100%;
      height:.64rem;
      border-radius:0.04rem;
      text-align: center;
      font-size :0.24rem;
      color: #666
</style>
