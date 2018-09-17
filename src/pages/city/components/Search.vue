<template>
  <div>
    <div class="search" ref="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市或拼音"/>
    </div>
    <div class="search-content" v-show="keyword" ref="searchContent">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">
          {{item.name}}
        </li>
        <li class="search-item border-bottom"  v-show="haslist">
          暂无搜索结果
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bescroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    citys: Object
  },
  data () {
    return {
      keyword: '',
      list: []
    }
  },
  computed: {
    haslist () {
      return !this.list.length
    }
  },
  mounted () {
    this.$emit('domHeight', this.$refs['search'].offsetHeight)
    this.scroll = new Bescroll(this.$refs.searchContent)
  },
  watch: {
    keyword (keyword) {
      let list = []
      if (keyword) {
        for (let i in this.citys) {
          this.citys[i].forEach(function (item) {
            if (item.spell.includes(keyword)) {
              list.push(item)
            }
          })
        }
      }
      this.list = list
    }
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
  .search-content
    width :100%
    position:absolute
    left:0
    bottom:0
    right:0
    top:1.58rem
    background:#cccccc
    z-index:1
    overflow:hidden
    .search-item
      width: 100%
      height:0.64rem
      line-height:0.64rem
      background :#fff
      text-indent :0.24rem
      font-size :0.24rem
</style>
