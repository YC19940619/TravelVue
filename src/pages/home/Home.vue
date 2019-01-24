<template>
   <div>
      <home-header></home-header>
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
import HomeData from '../../../static/mock/mock'
export default {
  name: 'Home',
  data () {
    return {
      SwiperList: [],
      IconsList: [],
      RecommendList: [],
      WeekendList: [],
      lastcity: '',
      city: ''
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
    this.lastcity = this.$store.state.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastcity !== this.$store.state.city) {
      this.lastcity = this.$store.state.city
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo () {
      this.getHomeInfoSucc(HomeData)
    },
    getHomeInfoSucc (data) {
      console.log(data)
      const homedata = data.data
      this.city = homedata.city
      this.SwiperList = homedata.swiperlist
      this.IconsList = homedata.iconlist
      this.RecommendList = homedata.recommendList
      this.WeekendList = homedata.weekendList
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
