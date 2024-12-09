<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item  :to="item.path" icon="home-o">
          <span>{{ item.text }}</span>
          <!-- <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template> -->
        </van-tabbar-item>
      </template>
    </van-tabbar>

    <!-- <template v-for="(item, index) in tabbarData" :key="index">
      <div 
        class="tab-bar-item" 
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar';
import { getAssetURL } from '@/utils/load_assets';
import { ref } from "vue"

const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tab-bar {
  // --van-tabbar-item-icon-size: 30px !important;

   :deep(.van-tabbar-item__icon) {
    font-size: 28px;
  }


  img {
    height: 28px;
  }
}
</style>