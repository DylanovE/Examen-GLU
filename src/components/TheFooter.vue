<script setup>
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import {RouterLink} from 'vue-router';
</script>

<template>
    <footer class="bg-dark-navy white">
        <div class="info-container">
            <div>
                <h4>Leger des heils<br />Enkeltje Zelfstandig</h4>
            </div>

            <div class="menu crimson text">
                <p class="pt-10 spacing uppercase">menu</p>
                <br />
                <p>
                    <RouterLink class="link text white" to="/">Home</RouterLink><br />
                    <RouterLink class="link text white" to="/courses">Cursussen</RouterLink><br />
                </p>
            </div>

            <div>
                <p class="pt-10 float-right">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <button class="bg-crimson social-button">
                            <IconFacebook />
                        </button>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <button class="bg-crimson social-button">
                            <IconTwitter />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <button class="bg-crimson social-button">
                            <IconInstagram />
                        </button>
                    </a>
                </p>
            </div>
        </div>
        <div class="text copyright">
            <p class="dimgray text">Copyright © 2023 Leger des Heils</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
  padding: 94px 140px 0;
  height: 490px;
}

.info-container {
  height: 370px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  max-width: 1440px;
  margin: 0 auto;
}

.spacing {
  letter-spacing: 6px;
}

.link {
  text-decoration: none;
}

.spacing {
  line-height: 32px;
}

.copyright {
  border-top: 2px solid var(--vt-c-dimgray);
  margin-top: 110px;
  height: 120px;
  display: flex;
  align-items: center;
}

.social-button {
  border-radius: 50%;
  border-width: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
a + a {
  margin-left: 10px;
}

/* Media query for smaller screens */
@media (max-width: 1300px) {
  .info-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1100px) {
  .info-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  footer {
    padding: 94px 40px 0;
  }

  .info-container > * {
    padding-bottom: 70px; /* add vertical gap to items in container, the 'gap:' css will add it on all sides. */
  }

  .info-container > *:last-child {
    padding-bottom: 0; /* Remove the gap for the last row */
  }
  .copyright {
    display: grid;
    text-align: center;
  }
}
</style>
