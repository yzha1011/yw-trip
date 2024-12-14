<template>
  <div class="home">
    <homeNavBar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox />
    <homeCategories />

    <div class="search-bar" v-if="isShowSearchBar">
      <searchBar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>

    <homeContent />
    <!-- <button @click="moreBtnClick">load more</button> -->
    
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import useScroll from '@/hooks/useScroll';
import searchBar from '@/components/search-bar/search-bar.vue';
import { watch, computed } from "vue"

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// const moreBtnClick = () => {
//   homeStore.fetchHouselistData()
// }

const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// const isShowSearchBar = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearchBar.value = newTop > 100
// })

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
</script>

<style lang="less" scoped>

.home {
  padding-bottom: 60px;
  // box-sizing: border-box;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

</style>