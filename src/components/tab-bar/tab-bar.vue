<template>
  <div class="tab-bar">
    <van-tabbar 
      v-model="currentIndex" 
      active-color="#ff9854" 
      route
    >
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item  :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load_assets';
import { ref, watch } from "vue"
import { useRoute } from 'vue-router';

const route = useRoute()

watch(route, (newRoute) => {
  const index =  tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})

const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tab-bar {
  // --van-tabbar-item-icon-size: 30px !important;

   :deep(.van-tabbar-item__icon) {
    font-size: 28px;
  }


  img {
    height: 26px;
  }
}
</style>