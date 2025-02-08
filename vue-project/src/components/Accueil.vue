<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="navBar">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="logo">
          <img src="@/assets/images/logoCnpsBon.jpg" alt="logo" width="170" />
        </div>

        <div class="link">
          <ul class="navbar-nav">
            <li class="nav-item mx-4">
              <router-link to="#" @click.prevent="showPage(0)">Home</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="#" @click.prevent="showPage(1)">About</router-link>
            </li>
            <li class="nav-item mx-2">
              <router-link to="#" @click.prevent="showPage(2)">Contact</router-link>
            </li>
            <li class="nav-item dropdown extra-space" @mouseleave="closeDropdown">
              <button
                type="button"
                class="btn btn-light dropdown-toggle"
                @click="toggleDropdown"
                aria-expanded="isOpen"
              >
                {{ buttonText }}
              </button>
              <ul class="dropdown-menu" v-if="isOpen">
                <li v-for="(item, index) in items" :key="index" class="nav-item">
                  <router-link to="#" class="dropdown-item">{{ item }}</router-link>
                </li>
                <li>
                  <router-link to="#" class="dropdown-item" @click.prevent="showLogin">Login</router-link>
                </li>
                <li>
                  <router-link to="#" class="dropdown-item" @click.prevent="showRegister">Register</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="content" style="margin-top: 60px;"> <!-- Déplacement du contenu sous la barre de navigation -->
    <h1>{{ currentPage.pageTitle }}</h1>
    <p>{{ currentPage.content }}</p>
    <component :is="currentComponent"></component> <!-- Affiche le composant dynamique -->
  </div>
</template>

<script>
import Login from './loginPage/Login.vue';
import Register from './loginPage/Register.vue';

export default {
  props: {
    buttonText: {
      type: String,
      default: "My Account"
    },
    items: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      isOpen: false,
      currentComponent: null, // Initialisez cela pour afficher le composant sélectionné
      currentPage: {},
      pages: [
        {
          pageTitle: "Home page",
          content: "Welcome to our home page",
        },
        {
          pageTitle: "About page",
          content: "Welcome to our about page",
        },
        {
          pageTitle: "Contact page",
          content: "Welcome to our contact page",
        },
      ],
    };
  },
  methods: {
    showPage(index) {
      this.currentPage = this.pages[index];
      this.currentComponent = null; // Réinitialisez le composant lorsque vous changez de page
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    showLogin() {
      this.currentComponent = Login; // Affiche le composant de connexion
      this.currentPage = {}; // Réinitialisez la page actuelle pour éviter le contenu empilé
    },
    showRegister() {
      this.currentComponent = Register; // Affiche le composant d'enregistrement
      this.currentPage = {}; // Réinitialisez la page actuelle pour éviter le contenu empilé
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.content {
  margin-top: 60px; /* Ajustez cette valeur selon la hauteur de votre barre de navigation */
}
.extra-space {
  margin-left: 750px; /* Espacement spécifique d'au moins 10 mètres */
}
.dropdown-menu {
  position: absolute;
  display: flex; /* Aligne les éléments en ligne */
  flex-direction: column; /* Les éléments s'affichent en colonne */
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1000;
  background-color: #444; /* Couleur de fond du menu déroulant */
  color: white; /* Couleur du texte */
}

.dropdown-item {
  padding: 0.5rem 1rem;
  color: white; /* Couleur du texte */
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #666; /* Changer couleur de fond au survol */
}
</style>