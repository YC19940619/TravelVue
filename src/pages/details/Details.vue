<template>
  <div>
    <details-header></details-header>
    <details-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
      @handleGallaryShow="GallaryShow"
    ></details-banner>
    <common-gallary
      @handleGallaryShow="GallaryHide"
      :gallaryImgs="gallaryImgs"
      v-show="gallaryShow">
    </common-gallary>
    <details-list :categoryList="categoryList"></details-list>
    <div class="main"></div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailsHeader from './components/Header'
import DetailsBanner from './components/Banner'
import CommonGallary from 'common/gallary/Gallary'
import DetailsList from './components/List'
export default {
  name: 'Details',
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      gallaryShow: false,
      categoryList: []
    }
  },
  components: {
    DetailsHeader,
    DetailsBanner,
    CommonGallary,
    DetailsList
  },
  mounted () {
    this.getDetailsInfo()
  },
  methods: {
    getDetailsInfo () {
      axios.get('/api/static/mock/details.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailsInfoSucc)
    },
    getDetailsInfoSucc (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        console.log(data)
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    },
    GallaryShow () {
      this.gallaryShow = true
    },
    GallaryHide () {
      this.gallaryShow = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .main
    height:10000px
</style>
