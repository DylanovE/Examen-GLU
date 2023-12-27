<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import router from '@/router/index.js';

// function to route to the course detail page and pass the ID
const navigateToDetails = (courseId) => {
    router.push({name: 'detail', params: {id: courseId}});
};

// dummy filler data to show if no course data available
const courses = ref({
    id: 1,
    title: 'Example title',
    author: 'Author',
    source: 'https://blog.paul-uk.com/wp-content/uploads/2020/04/Banner-1.png',
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
    fetchCourses();
});

// fetch course data using the id passed trough the params from router
const fetchCourses = () => {
    axios.get('http://localhost:3001/courses/')
        .then(response => {
            courses.value = response.data;
            console.log('Data fetched:', courses.value);
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
        });
};
</script>

<template>
    <div class="main-content">
        <h1>Cursussen</h1>
        <p class="subtitle">Hier staan alle cursussen die voor van jou een beginnend chefkok maken.</p>
        <div class="grid-container bg-light-ivory">
            <div v-for="course in courses" :key="course.id" class="grid-item">
                <div class="image-container">
                    <img class="course-img" :src="`${course.source}`" alt="Course Image" @click="navigateToDetails(course.id)" />
                    <p class="black bg-white">{{ course.author }}</p>
                    <h3 class="white" @click="navigateToDetails(course.id)">{{ course.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-content {
  width: 100%;
}

h1 {
  padding-top: 65px;
  text-align: center;
}

.course-img {
  width: 100%;
  height: 580px;
  object-fit: cover;
}

.subtitle {
  padding-bottom: 65px;
  text-align: center;
}

.image-container img,
.image-container h3 {
  cursor: pointer;
}

.button {
  padding: 18px 26px;
  border: 1px solid var(--vt-c-black);
  border-radius: 5px;
  letter-spacing: 1px;
  text-decoration: none;
  margin: 70px 0 70px 140px;
  cursor: pointer;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  padding: 50px 100px;
}

.grid-item {
  width: 100%;
  height: 580px;
}

.image-container {
  position: relative;
}

img {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain;
}

.image-container p,
h3 {
  position: absolute;
  bottom: 10%;
  left: 10%;
}

.image-container p {
  bottom: 120px;
  padding: 8px 50px;
  border-radius: 40px;
}

/* Media query for screens upto ultra-wide (3440p) as this will look really bad otherwise */
@media (max-width: 1000px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }

  .course-img {
  height: 440px;
}

.grid-item {
  height: 440px;
}

  .image-container {
    display: flex;
    justify-content: center;
  }

  .grid-container {
    padding: 50px 20px;
  }

  /* Move the elements horizontally to the middle to improve responsive design */
  .image-container p,
  h3 {
    left: 50%;
    transform: translate(-50%);
  }

  .main-content h1 {
    padding: 65px 0;
  }

  .button {
    margin: 70px auto;
  }
}

/* Anything <= 1000 will make text longer than 14 characters stack (break-line) */
/* This together with centered labels will allow 2 lines of text for longer titles to avoid problems with long names */
@media (min-width: 1001px) and (max-width: 1440px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1441px) and (max-width: 1940px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1941px) and (max-width: 2440px) {
  .grid-container {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (min-width: 2441px) and (max-width: 2940px) {
  .grid-container {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 2941px) {
  .grid-container {
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>
