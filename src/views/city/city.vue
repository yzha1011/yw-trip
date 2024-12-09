<template>
  <div class="city">
    <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置"
      show-action
      action-text="取消"
      shape="round"
      @cancel="cancelClick"
    />
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <!-- <van-tab title="国内·港澳台"></van-tab>
      <van-tab title="海外"></van-tab> -->
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>

  </div>
</template>

<script setup>
// import { getCityAll } from '@/services';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
// import ywRequest from "@/services/request"

const router = useRouter()
const searchValue = ref("")
const cancelClick = () => {
  router.back("./home")
}

const tabActive = ref()

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// const allCity = ref({})
// getCityAll().then(res => {
//   allCity.value = res.data
// })

</script>

<style scoped>

</style>