<template>
  <div>
    <city-header @domHeight="getHeaderHeight"></city-header>
    <city-search @domHeight="getSearchHeight" :citys="citys"></city-search>
    <city-list :letter="letter" :citys="citys" :hotcitys="hotcitys"></city-list>
    <city-alphabet
      :citys="citys"
      :headerheight="headerheight"
      :searchheight="searchheight"
      @cityChange="handleCityChange"
    >
    </city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      citys: {},
      hotcitys: [],
      letter: '',
      headerheight: 0,
      searchheight: 0
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    handleCityChange (letter) {
      this.letter = letter
    },
    getCityInfo () {
      axios.get('/api/static/mock/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      this.citys = res.data.citys
      this.hotcitys = res.data.hotcitys
    },
    getHeaderHeight (height) {
      this.headerheight = height
    },
    getSearchHeight (height) {
      this.searchheight = height
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
