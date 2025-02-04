<template>
  <div class="city">
    <div class="top">
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
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <city-group :group-data="currentGroup"/> -->
       <template v-for="(value, key, index) in allCities">
        <!-- <h2 v-show="tabActive === key">{{ value.title }}</h2> -->
        <city-group v-show="tabActive === key" :group-data="value" />
       </template>
    </div>
  </div>
</template>

<script setup>
// import { getCityAll } from '@/services';
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
// import ywRequest from "@/services/request"

import cityGroup from './cpns/city-group.vue';

const router = useRouter()
const searchValue = ref("")
const cancelClick = () => {
  router.back("./home")
}

const tabActive = ref()

const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>