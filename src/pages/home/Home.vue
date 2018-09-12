<template>
   <div>
      <home-header :city="city"></home-header>
      <home-swiper :list="SwiperList"></home-swiper>
      <home-icons :list="IconsList"></home-icons>
      <home-recommend :list="RecommendList"></home-recommend>
      <home-weekend :list="WeekendList"></home-weekend>
   </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      SwiperList: [],
      IconsList: [],
      RecommendList: [],
      WeekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/static/mock/mock.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (data) {
      if (data.data.ret && data.data.data) {
        const homedata = data.data.data
        this.city = homedata.city
        this.SwiperList = homedata.swiperlist
        this.IconsList = homedata.iconlist
        this.RecommendList = homedata.recommendList
        this.WeekendList = homedata.weekendList
      }
    }
  }
}
</script>

<style scoped>
  .iconfont{
    width: 1rem;
    /*font-size:10rem*/
  }
</style>
