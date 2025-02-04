<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { getDetailInfos } from '@/services';

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

// const detailStore = useDetailStore()
// detailStore.fetchAllDetailData(houseId)
// const { detailInfos } = storeToRefs(detailStore)

getDetailInfos(houseId).then(res => {
  console.log(res)
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