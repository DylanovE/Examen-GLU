<script setup>
import {onMounted, ref} from 'vue';
import axios from 'axios';
import router from '@/router/index.js';

const username = ref('');
const password = ref('');

const login = () => {
    axios
        .get('http://localhost:3001/users')
        .then(response => {
            const users = response.data;
            const user = users.find(u => u.name === username.value);

            if (user && user.password === password.value) {
                console.log('Logged in:', user);

                username.value = '';
                password.value = '';

                // Store the logged-in user's information in localStorage
                localStorage.setItem('user', JSON.stringify(user));

                router.push('/dashboard');
            } else {
                console.error('Invalid login data');
                alert('Ongeldige gebruikersnaam of wachtwoord. Controleer uw gegevens en probeer opnieuw.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Er is een fout opgetreden. Probeer het later opnieuw.');
        });
};

onMounted(() => {
    // Check if a user is already logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        console.log('Already logged in:', user);
        router.push('/dashboard');
    }
});
</script>

<template>
    <div class="login-container">
        <div class="login-form">
            <h2>Login</h2>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="username">Gebruikersnaam:</label>
                    <input id="username" v-model="username" type="text" placeholder="Voer uw gebruikersnaam in" required>
                </div>
                <div class="form-group">
                    <label for="password">Wachtwoord:</label>
                    <input id="password" v-model="password" type="password" placeholder="Voer uw wachtwoord in" required>
                </div>
                <button type="submit">Inloggen</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
}

.login-form {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-form h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
