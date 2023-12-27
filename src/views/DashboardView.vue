<template>
    <div class="container">
        <div class="menu">
            <button @click="toggleCMS">
                Switch to: {{ showUserCMS ? 'Course' : 'User' }}
            </button>
        </div>

        <div v-if="showUserCMS">
            <UserCMS />
        </div>

        <div v-if="showCourseCMS">
            <CourseCMS />
        </div>
    </div>
</template>

<script setup>
import CourseCMS from '@/components/TheCourseCMS.vue';
import UserCMS from '@/components/TheUserCMS.vue';
import {ref} from 'vue';

const showUserCMS = ref(true);
const showCourseCMS = ref(false);

const toggleCMS = () => {
    showUserCMS.value = !showUserCMS.value;
    showCourseCMS.value = !showCourseCMS.value;
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 50vh;
  width: 100%;
  justify-items: center;
}

.menu {
  margin-top: 50px;
}
</style>
