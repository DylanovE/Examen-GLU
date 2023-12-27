<template>
    <div class="dashboard">
        <h1>Course dashboard</h1>
        <button class="btn" @click="showAddForm">Add Course</button>

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th class="hide">Source</th>
                    <th class="hide">Publication Date</th>
                    <th class="hide">Intro Text 1</th>
                    <th class="hide">Intro Text 2</th>
                    <th class="hide">Ingredients Subtitle</th>
                    <th class="hide">Ingredients Intro</th>
                    <th class="hide">Ingredients List</th>
                    <th class="hide">Ingredients Additional Info</th>
                    <th class="hide">Roadmap Subtitle</th>
                    <th class="hide">Roadmap Intro</th>
                    <th class="hide">Roadmap</th>
                    <th class="hide">Roadmap Additional Info</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in courses" :key="course.id">
                    <td>{{ course.title }}</td>
                    <td>{{ course.author }}</td>
                    <td class="hide">{{ course.source }}</td>
                    <td class="hide">{{ course.publication_date }}</td>
                    <td class="hide">{{ course.intro_text_1 }}</td>
                    <td class="hide">{{ course.intro_text_2 }}</td>
                    <td class="hide">{{ course.ingredients_subtitle }}</td>
                    <td class="hide">{{ course.ingredients_intro }}</td>
                    <td class="hide">{{ course.ingredients_list }}</td>
                    <td class="hide">{{ course.ingredients_additional_info }}</td>
                    <td class="hide">{{ course.roadmap_subtitle }}</td>
                    <td class="hide">{{ course.roadmap_intro }}</td>
                    <td class="hide">{{ course.roadmap }}</td>
                    <td class="hide">{{ course.roadmap_additional_info }}</td>
                    <td>
                        <button class="btn" @click="editCourse(course)">Edit</button>
                        <button class="btn btn-delete" @click="deleteCourse(course)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="showForm" class="form-popup">
            <div class="form-container">
                <h3>{{ formTitle }}</h3>
                <form @submit.prevent="submitForm">
                    <div class="fields">
                        <label for="title">Title</label>
                        <input id="title" v-model="formData.title" type="text" required>

                        <label for="author">Author</label>
                        <input id="author" v-model="formData.author" type="text" required>

                        <label for="source">Source</label>
                        <input id="source" v-model="formData.source" type="text" required>

                        <label for="publication_date">Publication Date</label>
                        <input id="publication_date" v-model="formData.publication_date" type="text" required>

                        <label for="intro_text_1">Intro Text 1</label>
                        <textarea id="intro_text_1" v-model="formData.intro_text_1" required></textarea>

                        <label for="intro_text_2">Intro Text 2</label>
                        <textarea id="intro_text_2" v-model="formData.intro_text_2" required></textarea>
                    </div>
                    <div class="fields">
                        <label for="ingredients_subtitle">Ingredients Subtitle</label>
                        <input id="ingredients_subtitle" v-model="formData.ingredients_subtitle" type="text" required>

                        <label for="ingredients_intro">Ingredients Intro</label>
                        <textarea id="ingredients_intro" v-model="formData.ingredients_intro" required></textarea>

                        <label for="ingredients_list">Ingredients List</label>
                        <textarea id="ingredients_list" v-model="formData.ingredients_list" required></textarea>

                        <label for="ingredients_additional_info">Ingredients Additional Info</label>
                        <textarea id="ingredients_additional_info" v-model="formData.ingredients_additional_info" required></textarea>

                        <label for="roadmap_subtitle">Roadmap Subtitle</label>
                        <input id="roadmap_subtitle" v-model="formData.roadmap_subtitle" type="text" required>

                        <label for="roadmap_intro">Roadmap Intro</label>
                        <textarea id="roadmap_intro" v-model="formData.roadmap_intro" required></textarea>

                        <label for="roadmap">Roadmap</label>
                        <textarea id="roadmap" v-model="formData.roadmap" required></textarea>

                        <label for="roadmap_additional_info">Roadmap Additional Info</label>
                        <textarea id="roadmap_additional_info" v-model="formData.roadmap_additional_info" required></textarea>
                    </div>

                    <button type="submit" class="btn">{{ formAction }}</button>
                    <button type="button" class="btn" @click="cancelForm">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            courses: [],
            showForm: false,
            formTitle: '',
            formAction: '',
            formData: {
                id: '',
                title: '',
                author: '',
                source: '',
                publication_date: '',
                intro_text_1: '',
                intro_text_2: '',
                ingredients_subtitle: '',
                ingredients_intro: '',
                ingredients_list: '',
                ingredients_additional_info: '',
                roadmap_subtitle: '',
                roadmap_intro: '',
                roadmap: '',
                roadmap_additional_info: '',
            },
        };
    },
    mounted() {
        this.fetchCourses();
    },
    methods: {
        fetchCourses() {
            axios
                .get('http://localhost:3001/courses')
                .then(response => {
                    this.courses = response.data;
                })
                .catch(error => {
                    console.error('Failed to fetch courses:', error);
                });
        },
        addCourse() {
            axios
                .post('http://localhost:3001/courses', this.formData)
                .then(response => {
                    console.log('Course added:', response.data);
                    this.fetchCourses();
                    this.closeForm();
                })
                .catch(error => {
                    console.error('Failed to add course:', error);
                });
        },
        editCourse(course) {
            this.formTitle = 'Edit Course';
            this.formAction = 'Update';

            this.formData.id = course.id;
            this.formData.title = course.title;
            this.formData.author = course.author;
            this.formData.source = course.source;
            this.formData.publication_date = course.publication_date;
            this.formData.intro_text_1 = course.intro_text_1;
            this.formData.intro_text_2 = course.intro_text_2;
            this.formData.ingredients_subtitle = course.ingredients_subtitle;
            this.formData.ingredients_intro = course.ingredients_intro;
            this.formData.ingredients_list = course.ingredients_list;
            this.formData.ingredients_additional_info = course.ingredients_additional_info;
            this.formData.roadmap_subtitle = course.roadmap_subtitle;
            this.formData.roadmap_intro = course.roadmap_intro;
            this.formData.roadmap = course.roadmap;
            this.formData.roadmap_additional_info = course.roadmap_additional_info;

            this.showForm = true;
        },
        updateCourse() {
            const {
                id,
                title,
                author,
                source,
                publication_date,
                intro_text_1,
                intro_text_2,
                ingredients_subtitle,
                ingredients_intro,
                ingredients_list,
                ingredients_additional_info,
                roadmap_subtitle,
                roadmap_intro,
                roadmap,
                roadmap_additional_info,
            } = this.formData;

            axios
                .put(`http://localhost:3001/courses/${id}`, {
                    title,
                    author,
                    source,
                    publication_date,
                    intro_text_1,
                    intro_text_2,
                    ingredients_subtitle,
                    ingredients_intro,
                    ingredients_list,
                    ingredients_additional_info,
                    roadmap_subtitle,
                    roadmap_intro,
                    roadmap,
                    roadmap_additional_info,
                })
                .then(response => {
                    console.log('Course updated:', response.data);
                    this.fetchCourses();
                    this.closeForm();
                })
                .catch(error => {
                    console.error('Failed to update course:', error);
                });
        },
        deleteCourse(course) {
            axios
                .delete(`http://localhost:3001/courses/${course.id}`)
                .then(response => {
                    console.log('Course deleted:', response.data);
                    this.fetchCourses();
                })
                .catch(error => {
                    console.error('Failed to delete course:', error);
                });
        },
        showAddForm() {
            this.formTitle = 'Add Course';
            this.formAction = 'Add';

            this.formData.id = '';
            this.formData.title = '';
            this.formData.author = '';
            this.formData.source = '';
            this.formData.publication_date = '';
            this.formData.intro_text_1 = '';
            this.formData.intro_text_2 = '';
            this.formData.ingredients_subtitle = '';
            this.formData.ingredients_intro = '';
            this.formData.ingredients_list = '';
            this.formData.ingredients_additional_info = '';
            this.formData.roadmap_subtitle = '';
            this.formData.roadmap_intro = '';
            this.formData.roadmap = '';
            this.formData.roadmap_additional_info = '';

            this.showForm = true;
        },
        closeForm() {
            this.showForm = false;
        },
        submitForm() {
            if (this.formAction === 'Add') {
                this.addCourse();
            } else if (this.formAction === 'Update') {
                this.updateCourse();
            }
        },
        cancelForm() {
            this.closeForm();
        },
    },
};
</script>

  <style scoped>
  .dashboard {
    text-align: center;
    width: 100%;
  }

  table {
    margin: 20px auto;
    border-collapse: collapse;
  }

  table th,
  table td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  .btn {
    padding: 8px 16px;
    margin: 4px;
  }

  .btn-delete {
    background-color: #ff3333;
    color: #fff;
  }

  .form-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  .form-container {
    margin: 5px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 16px;
  }

  .form-container h3 {
    margin-top: 0;
  }

.fields {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  padding-bottom: 10px;
}

form {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.fields input {
    margin-bottom: 20px;
}
/* Media query for smaller screens */
@media (max-width: 2440px) {
  .hide {
    display: none;
  }
}
  </style>

