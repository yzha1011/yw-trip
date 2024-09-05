<template>
  <div class="tab-bar">
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tab-bar-item">
      <img src="@/assets/img/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>