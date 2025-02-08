<template>
  <div class="auth-container">
    <h2>Register page</h2>

    <form @submit.prevent="register">
      <div class="form-group">
        <div class="name-surname">
          <div class="input-group">
            <label for="name">Name:</label>
            <input type="text" v-model="name" required />
          </div>
          <div class="input-group">
            <label for="surname">Surname:</label>
            <input type="text" v-model="surname" required />
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>

      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>

      <div class="input-group">
        <label for="passwordConfirm">Confirm Password:</label>
        <input type="password" v-model="passwordConfirm" required />
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" v-model="termsAccepted" required />
        <label for="terms">I accept the terms and conditions</label>
      </div>

      <button type="submit">Register</button>
    </form>

    <div v-if="erroMessage" class="error">{{ erroMessage }}</div>
    <p v-if="!isRegister">Already have an account? <router-link to="#" @click.prevent="showLogin">Login here.</router-link></p>
    <component v-if="isRegister" :is="Login" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Login from './Login.vue';

const email = ref('');
const password = ref('');
const passwordConfirm = ref(''); // Ajout de la variable passwordConfirm
const erroMessage = ref('');
const isRegister = ref(false);
const name = ref('');
const surname = ref('');
const termsAccepted = ref(false);
const router = useRouter();

const showLogin = () => {
  isRegister.value = true; // Corrigé pour afficher le formulaire de connexion
};

const register = () => {
  if (password.value !== passwordConfirm.value) {
    erroMessage.value = 'Passwords do not match.';
    return;
  }

  if (!termsAccepted.value) {
    erroMessage.value = 'You must accept the terms and conditions.';
    return;
  }

  // Ajoutez ici votre logique d'inscription (par exemple, appel API)
  alert('Inscription réussie!');
  router.push('/login'); // Retourne à la page de connexion après l'inscription
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.error {
  color: red;
}
</style>

<style scoped>
body {
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
}

.register-container {
  max-width: 500px;
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

.label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.input-group {
  display: inline-block;
  width: calc(50% - 10px);
  margin-right: 10px;
}

.input-group:last-child {
  margin-right: 0;
}

input[type="text"],
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

input[type="checkbox"] {
  margin-right: 5px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: flex-start;
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
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
