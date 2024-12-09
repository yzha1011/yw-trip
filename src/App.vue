<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view/>
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
    <tab-bar v-if="!route.meta.hideTabBar"/>
  </div>

</template>

<style scoped>

</style>
