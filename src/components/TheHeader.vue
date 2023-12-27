<script setup>
import router from '@/router/index.js';

const navigateToCourses = () => {
    router.push({name: 'course'});
};
</script>

<template>
    <header>
        <div class="left-column">
            <div>
                <h1>Jij wilt koken!<br />Wat nu?</h1>
                <p class="subtitle">Kijk nu bij onze cursussen en recepten!</p>
                <button class="uppercase white bg-crimson" @click="navigateToCourses">naar cursussen</button>
            </div>
        </div>
        <div class="right-column">
            <div class="image-container">
                <img class="header-image" src="@/assets/images/header.webp" alt="Image" />
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
  display: grid;
  padding-top: 45px;
  padding-bottom: 120px;
  grid-template-columns: 1fr 1.07fr;
}

.left-column div {
  margin-bottom: 55px;
}

.left-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.left-column h1 {
  line-height: 1.2;
}

.left-column .subtitle {
  margin-top: 40px;
}

.left-column button {
  border-radius: 5px;
  padding: 18px 26px;
  border: none;
  margin-top: 60px;
  cursor: pointer;
}

.right-column {
  display: flex;
  justify-content: flex-start;
}

.image-container {
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  box-shadow: 140px 110px 0px -30px var(--vt-c-crimson-6);
}

.header-image {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
  object-position: center;
}

/* Media query for smaller screens */
@media (max-width: 1400px) {
  .image-container {
    width: 500px;
    height: 500px;
    box-shadow: 130px 100px 0px -30px var(--vt-c-crimson-6);
  }
}

@media (max-width: 1200px) {
  .image-container {
    width: 450px;
    height: 450px;
    box-shadow: 110px 90px 0px -30px var(--vt-c-crimson-6);
  }
}

@media (max-width: 1100px) {
  header {
    grid-template-columns: 1fr;
  }

  .left-column {
    order: 2;
    align-items: normal;
    padding-left: 15%;
  }

  .right-column {
    justify-content: center;
    margin-right: 15%;
    padding-bottom: 200px;
    order: 1;
  }

  .image-container {
    width: 600px;
    height: 600px;
    box-shadow: 150px 120px 0px -30px var(--vt-c-crimson-6);
  }

  header {
    padding-bottom: 20px;
  }
}

@media (max-width: 800px) {
  .image-container {
    width: 500px;
    height: 500px;
    box-shadow: 120px 90px 0px -30px var(--vt-c-crimson-6);
  }
}

@media (max-width: 650px) {
  .image-container {
    width: 300px;
    height: 300px;
    box-shadow: 80px 60px 0px -15px var(--vt-c-crimson-6);
  }

  .right-column {
    padding-bottom: 130px;
  }
  .left-column {
    align-items: center;
    padding-left: 0;
  }
}
</style>
