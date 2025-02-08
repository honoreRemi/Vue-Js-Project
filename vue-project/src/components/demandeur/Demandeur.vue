<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <div class="logo">
        <img src="@/assets/images/logoCnpsBon.jpg" alt="logo" width="170" />
      </div>
      <router-link to="#" class="navbar-brand">Vente</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="#" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link">Link</router-link>
          </li>

          <div class="btn-group" @mouseleave="closeDropdown">
            <button
              type="button"
              class="btn btn-light dropdown-toggle"
              @click="toggleDropdown"
              aria-expanded="isOpen"
            >
              {{ buttonText }}
            </button>
            <ul class="dropdown-menu" v-if="isOpen">
              <li v-for="(item, index) in items" :key="index">
                <router-link to="#" class="dropdown-item">{{
                  item
                }}</router-link>
              </li>
              <li>
                <router-link to="login" @click.prevent="showLogin"
                  >Login</router-link
                >
              </li>
              <li>
                <router-link to="register" @click.prevent="showRegister"
                  >Register</router-link
                >
              </li>
            </ul>
          </div>
        </ul>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    <component :is="currentComponent"></component>
  </nav>
  <button @click="count++">{{ count }}</button>
 <input v-model="dynamicId"></input>
 <div v-bind="objectOfAttrs"></div>
</template>

<script>
import Login from "../loginPage/Login.vue";
import Register from "../loginPage/Register.vue";

export default {
  props: {
    buttonText: {
      type: String,
      default: "Dropdown",
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      currentComponent: null,
      count: 0,
      dynamicId: "Merci beaucoup",
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    showLogin() {
      this.currentComponent = Login;
    },
    showRegister() {
      this.currentComponent = Register;
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%; /* Assure que la barre de navigation prend toute la largeur */
  z-index: 1030; /* Assure que la barre de navigation soit au-dessus des autres éléments */
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.logo img {
  left: 50px;
  right: 50px;
}
.navbar {
  position: fixed;
  top: 0;
  width: 1400px; /* Largeur fixe */
  height: 100px; /* Hauteur fixe */
  left: 50%;
  transform: translateX(-50%); /* Centrer horizontalement */
  display: flex;
  align-items: center;
  background-color: #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: background-color 0.3s;
}
.navbar:hover {
  background-color: #555;
}
.nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: 1; /* Permettre à la liste de prendre tout l'espace disponible */
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-links a:hover {
  background-color: #666;
  color: #fff;
}

/* Responsive design */

@media (max-width: 768px) {
  .navbar {
    width: 100%; /* Prendre toute la largeur sur petits écrans */
    flex-direction: column;
    align-items: flex-start;
    height: auto; /* Ajuster la hauteur pour le contenu */
    left: 0;
    transform: none;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }

  .btn-group {
    width: 100%; /* S'assurer que le bouton prend toute la largeur */
    text-align: center;
    height: 100%;
  }
  .dropdown-menu {
    width: 100%; /* Ajuster la largeur du menu déroulant */
  }
}

/* Menu déroulant */
.btn-group {
  position: relative;
  display: inline-block;
  margin-left: 30px; /* Ajuster l'espacement à gauche pour le bouton */
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

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}
</style>
