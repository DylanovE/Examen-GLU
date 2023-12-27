<script setup>
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <TheNavigation />

  <RouterView />

  <TheFooter />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 10px;
  height: 81px;
  position: relative;
}

.logo {
  position: absolute;
  left: 150px;
}

div {
  width: 280px;
}

.link {
  margin: 0 10px;
  text-decoration: none;
  color: black;
}

.red-bar {
  height: 20px;
  background-image: url('@/assets/patterns/slash.svg');
  background-repeat: repeat-x;
}
</style>
