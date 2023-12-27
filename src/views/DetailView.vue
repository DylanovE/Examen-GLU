<script setup>
import {onMounted, ref} from 'vue';
import IconExitArrow from '@/components/icons/IconExitArrow.vue';
import axios from 'axios';
import router from '@/router/index.js';

// function to route to the course overview page
const navigateToCourses = () => {
    router.push({name: 'course'});
};

// dummy filler data to show if no course data available
const details = ref({
    id: 1,
    title: 'Example title',
    author: 'Author',
    source: '../course-2-header.webp',
    publication_date: 'Publication date',
    intro_text_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum congue euismod. Sed porta turpis ex.',
    intro_text_2: 'Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a scelerisque venenatis, purus erat sollicitudin ligula, id tempor risus augue sed velit. Maecenas nec',
    ingredients_subtitle: 'Titel met wat uitleg',
    ingredients_intro: 'Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a sceleris',
    ingredients_list: 'Ingredient nr 1, Ingredient 400gr, Ingredient 15 eetlepels',
    ingredients_additional_info: 'Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a sceleris Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a sceleris Maecenas ',
    roadmap_subtitle: 'Nog een titel met wat uitleg voor stappenplan',
    roadmap_intro: 'Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a sceleris',
    roadmap: 'Stap 1 snij, Doe nu de, Vul nu nog wat in',
    roadmap_additional_info: 'Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a sceleris Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a sceleris Maecenas et malesuada mauris. Donec scelerisque a ante ac euismod. Phasellus at eros Leo. Suspendisse placerat, dui a sceleris',
});

onMounted(() => {
    fetchCourse();
});

// fetch course data using the id passed trough the params from router
const fetchCourse = () => {
    const courseId = router.currentRoute.value.params.id;
    axios.get(`http://localhost:3001/courses/${courseId}`)
        .then(response => {
            details.value = response.data;
            console.log('Data fetched:', details.value);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
        });
};
</script>




<template>
    <div class="page-container mb-100">
        <div class="course">
            <div class="return pt-20">
                <IconExitArrow @click="navigateToCourses" />
                <label @click="navigateToCourses">terug naar overzicht</label>
            </div>
            <h2>{{ details.title }}</h2>
        </div>

        <img :src="`${details.source}`" alt="Course Image" />

        <div class="course">
            <div>
                <p class="text dimgray float-left">
                    Geschreven door &nbsp;<span class="black">{{ details.author }}</span>
                </p>
                <p class="text dimgray float-right">
                    Datum &nbsp;<span class="black">{{ details.publication_date }}</span>
                </p>
            </div>
            <p class="text-big pt-50">{{ details.intro_text_1 }}</p>
            <p class="text dimgray pt-20">{{ details.intro_text_2 }}</p>
            <h4 class="pt-50">{{ details.ingredients_subtitle }}</h4>
            <p class="pt-20 dimgray">{{ details.ingredients_intro }}</p>
            <ul class="pt-40">
                <li v-for="ingredient in details.ingredients_list.split(',')" :key="ingredient">
                    {{ ingredient.trim() }}
                </li>
            </ul>
            <p class="pt-40 dimgray">{{ details.ingredients_additional_info }}</p>
            <h4 class="pt-50">{{ details.roadmap_subtitle }}</h4>
            <p class="pt-20 dimgray">{{ details.roadmap_intro }}</p>
            <ul class="pt-40 list-numbers">
                <li v-for="roadmapItem in details.roadmap.split(',')" :key="roadmapItem">
                    {{ roadmapItem.trim() }}
                </li>
            </ul>
            <p class="pt-40 dimgray">{{ details.roadmap_additional_info }}</p>
        </div>
    </div>
</template>

<style scoped>
.page-container {
  width: 100%;
  padding: 0 15%;
  display: grid;
  position: relative;
}

.course {
  width: 100%;
  justify-self: center;
  align-self: center;
  max-width: 800px;
}

.return * {
  cursor: pointer;
  margin-left: 20px;
}

.course h2 {
  margin-top: 50px;
}

.page-container img {
  width: 100%;
  padding-bottom: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.list-numbers {
  list-style-type: decimal;
}

@media (max-width: 1140px) {
  .page-container {
    padding: 0 5%;
  }
}
</style>
