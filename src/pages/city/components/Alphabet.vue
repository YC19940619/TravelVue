<template>
    <div class="list">
      <div class="letter">A</div>
      <div class="letter">B</div>
      <div class="letter">C</div>
      <div class="letter">D</div>
      <div class="letter">E</div>
      <div class="letter">F</div>
      <div class="letter">G</div>
      <div class="letter">H</div>
      <div class="letter">I</div>
      <div class="letter">J</div>
      <div class="letter">K</div>
      <div class="letter">L</div>
      <div class="letter">M</div>
      <div class="letter">N</div>
      <div class="letter">O</div>
      <div class="letter">P</div>
      <div class="letter">Q</div>
      <div class="letter">R</div>
      <div class="letter">S</div>
      <div class="letter">T</div>
      <div class="letter">U</div>
      <div class="letter">V</div>
      <div class="letter">X</div>
      <div class="letter">Y</div>
      <div class="letter">Z</div>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
