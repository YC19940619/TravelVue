<template>
  <div>
    <div class="item" v-for="(item, index) in categoryList" :key="index">
      {{item.title}}
        <details-list v-if="item.children" :categoryList="item.children"></details-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsList',
  props: {
    categoryList: Array
  }
}
</script>
<style lang="stylus" scoped>
</style>
