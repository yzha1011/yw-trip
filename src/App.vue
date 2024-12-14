<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router';
import loading from './components/loading/loading.vue';

const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view/>
    <tab-bar v-if="!route.meta.hideTabBar"/>
    <loading />
  </div>

</template>

<style scoped>

</style>
