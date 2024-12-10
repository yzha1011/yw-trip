<template>
  <div class="home">
    <homeNavBar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
// import ywRequest from '@/services/request/index'
import { ref } from 'vue'

// const hotSuggests = ref([])
// ywRequest.get({
//   url: "/home/hotSuggests"
// }).then(res => {
//   hotSuggests.value = res.data
// })
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
// const categories = ref([])
// ywRequest.get({
//   url: "/home/categories"
// }).then(res => {
//   categories.value = res.data
// })
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}


</style>