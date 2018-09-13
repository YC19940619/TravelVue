<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :citys="citys" :hotcitys="hotcitys"></city-list>
    <city-alphabet :citys="citys"></city-alphabet>
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
      hotcitys: []
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/static/mock/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      this.citys = res.data.citys
      this.hotcitys = res.data.hotcitys
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
