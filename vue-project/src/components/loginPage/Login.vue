<template>
  <div class="login-container">
    <h2>Login page</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email :</label>
        <input type="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password :</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Connexion</button>
    </form>
    <div v-if="erroMessage" class="error">{{ erroMessage }}</div>
    <p v-if="!isRegister">Don't have an account? <router-link to="#" @click.prevent="showRegister">Sign up here.</router-link></p>
    <component v-if="isRegister" :is="Register" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Register from './Register.vue';

const email = ref('');
const password = ref('');
const erroMessage = ref('');
const isRegister = ref(false);
const router = useRouter();

const showRegister = () =>{
  isRegister.value = true;
};

const login = () => {
  // Vérifiez les informations d'identification
  if (email.value === 'test@gmail.com' && password.value === 'password') {
    alert('Connexion réussie!');
    router.push('/demandeur');
  } else {
    erroMessage.value = 'Email ou mot de passe incorrect.';
  }
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
}

.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: start;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #007bff;
  outline: none;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
