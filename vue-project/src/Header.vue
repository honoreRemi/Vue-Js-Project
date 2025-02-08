<template>
  <div id="app">
    <header class="header">
      <RouterLink to="#" @click.prevent="showSection('home')" class="header__logo">Mon site</RouterLink>
      <nav>
        <RouterLink to="#" @click.prevent="showSection('blog')">Blog</RouterLink>
        <RouterLink to="#" @click.prevent="showSection('contact')">Contact</RouterLink>
      </nav>
    </header>

    <div v-if="currentSection === 'home'">
      <h1>Bienvenue sur la page d'accueil</h1>
    </div>

    <div v-if="currentSection === 'blog'">
      <h1>Blog</h1>
      <p>Ceci est la page du blog.</p>
    </div>

    <div v-if="currentSection === 'contact'">
      <h1>Contact</h1>
      <p>Ceci est la page de contact.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentSection = ref('home'); // Section par défaut

function showSection(section) {
  currentSection.value = section; // Met à jour la section à afficher
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: black; /* Change la couleur de fond en noir */
  border-bottom: 1px solid #ffffff2d;
  margin-top: -100px;
  margin-left: -150px;
  margin-right: -150px;
}

nav {
  display: flex; /* Permet d'afficher les liens horizontalement */
}

nav a {
  margin-left: 1rem; /* Ajoute de l'espace entre les liens */
  text-decoration: none; /* Supprime le soulignement par défaut */
  color: white; /* Change la couleur du texte en blanc pour un meilleur contraste */
}
</style>
