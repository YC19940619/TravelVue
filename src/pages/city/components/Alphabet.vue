<template>
    <div class="list" ref="list">
      <div class="letter"
           v-for="(item , key) of citys"
           :key="key"
           :ref="key"
           @click="handleLetterClick"
           @touchstart = "touchLetterStart"
           @touchmove = "touchLetterMove"
           @touchend = "touchLetterEnd"
      >
        {{key}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    citys: Object,
    headerheight: Number,
    searchheight: Number
  },
  data () {
    return {
      letterAtop: 0,
      timer: null
    }
  },
  updated () {
    this.letterAtop = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('cityChange', e.target.innerText)
    },
    touchLetterStart (e) {
    },
    touchLetterMove (e) {
      let chagneY = e.targetTouches[0].pageY - this.letterAtop - this.headerheight - this.searchheight
      if (chagneY > 0 && chagneY < this.$refs['list'].offsetHeight) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let letterHeight = this.$refs['A'][0].offsetHeight
          let index = Math.floor(chagneY / letterHeight)
          let letterText = document.getElementsByClassName('letter')[index].innerText
          this.$emit('cityChange', letterText)
        }, 16)
      }
    },
    touchLetterEnd (e) {
    }
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
