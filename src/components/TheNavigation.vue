<script setup>
import IconBurgerMenu from '@/components/icons/IconBurgerMenu.vue';
import IconExitMark from './icons/IconExitMark.vue';
import {RouterLink} from 'vue-router';
import {ref} from 'vue';

let showMenu = ref(false);
</script>

<template>
    <nav>
        <div class="navbar">
            <img alt="Enkeltje Zelfstandig Logo" class="logo" src="@/assets/logo.svg" />
            <div class="burger-menu" @click="showMenu = !showMenu">
                <IconBurgerMenu />
            </div>
            <div class="navigation" :class="{ hidden: showMenu }">
                <RouterLink class="link text float-left black" to="/">Home</RouterLink>
                <RouterLink class="link text float-right black" to="/courses">Cursussen</RouterLink>
            </div>
        </div>
        <div class="red-bar"></div>
        <div v-if="showMenu" class="fullscreen-menu bg-light-ivory">
            <div class="close-button" @click="showMenu = !showMenu">
                <IconExitMark />
            </div>
            <RouterLink  class="link text black fullscreen-link"  to="/" @click="showMenu = !showMenu">Home</RouterLink>
            <RouterLink class="link text black fullscreen-link" to="/courses" @click="showMenu = !showMenu">Cursussen</RouterLink>
        </div>
    </nav>
</template>

<style scoped>
.burger-menu {
  display: none;
  position: absolute;
  right: 20px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 81px;
  position: relative;
}

.navigation {
  width: 280px;
}

.navigation.hidden {
  display: none;
}

.link {
  text-decoration: none;
}

.link + .link {
  margin-left: 10px;
}

.red-bar {
  height: 20px;
  background-image: url('@/assets/patterns/slash.svg');
  background-repeat: repeat-x;
}

.logo {
  position: absolute;
  left: 20px;
}

.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.fullscreen-link {
  text-decoration: none;
  font-size: 2em;
  margin: 20px 0;
}

@media (max-width: 940px) {
  .navigation {
    display: none;
  }

  .link {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }

  .burger-menu {
    display: flex;
  }

  .navbar {
    justify-content: space-between;
    padding: 10px 20px;
  }
}
</style>
