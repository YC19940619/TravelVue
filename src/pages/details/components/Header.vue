<template>
  <div>
    <div class="header-fixed iconfont" v-show="headerShow" :style="headerStyle">
      城市选择
      <div class="header-left" @click="goBack">&#xe624;</div>
    </div>
    <div class="header-abs iconfont" @click="goBack" v-show="!headerShow" ref="header">
      &#xe624;
    </div>
  </div>

</template>
<script>
export default {
  name: 'DetailsHeader',
  data () {
    return {
      headerShow: false,
      headerStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  mounted () {
    console.log('mounted')
  },
  activated () {
    let scrollTop = this.$refs.header.offsetHeight + this.$refs.header.offsetTop
    window.addEventListener('scroll', (e) => {
      let opacity = window.scrollY / (scrollTop * 2)
      if (window.scrollY > scrollTop) {
        this.headerStyle = {
          opacity
        }
        this.headerShow = true
      } else {
        this.headerShow = false
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header-fixed
    z-index :2
    position:fixed
    left:0
    top:0
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
  .header-abs
    z-index: 2
    width:.8rem
    height:.8rem
    background :#000
    color: #fff
    font-size :.32rem
    text-align: center
    line-height:.8rem
    position: absolute
    left:.2rem
    top:.2rem
    border-radius :50%
</style>
