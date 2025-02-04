<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getDetailInfos } from '@/services';
import detailSwipe from './cpns/detail-swipe.vue';

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

// const detailStore = useDetailStore()
// detailStore.fetchAllDetailData(houseId)
// const { detailInfos } = storeToRefs(detailStore)
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})
  
// console.log(detailInfos.value)

const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less" scoped>
.detail {
  :deep(.van-nav-bar__title) {
    color: var(--primary-color);
  }
}
</style>