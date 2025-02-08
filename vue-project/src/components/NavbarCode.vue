<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <div class="logo">
        <img src="@/assets/images/logoCnpsBon.jpg" alt="logo" width="170" />
      </div>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="#" @click.prevent="showPage(0)">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="#" @click.prevent="showPage(1)">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="#" @click.prevent="showPage(2)">Contact</router-link>
        </li>
      </ul>

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
            <a class="dropdown-item" href="#">{{ item }}</a>
          </li>
          <li>
            <a class="dropdown-item" @click.prevent="showLogin">Login</a>
          </li>
          <li>
            <a class="dropdown-item" @click.prevent="showRegister">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="content" style="margin-top: 200px">
    <h1>{{ currentPage.pageTitle }}</h1>
    <p>{{ currentPage.content }}</p>
    <component :is="currentComponent"></component>

    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col" v-for="plan in plans" :key="plan.name">
        <div
          class="card mb-4 rounded-3 shadow-sm"
          :class="{ 'border-primary': plan.isHighlighted }"
        >
          <div
            class="card-header py-3"
            :class="
              plan.isHighlighted ? 'text-white bg-primary border-primary' : ''
            "
          >
            <h4 class="my-0 fw-normal">{{ plan.name }}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title princing-card-title">
              {{ plan.price }}<small class="text-muted fw-light">/mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li v-for="feature in plan.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <button
              type="button"
              class="w-170 btn btn-lg"
              :class="
                plan.isHighlighted ? 'btn-primary' : 'btn-outline-primary'
              "
            >
              {{ plan.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./loginPage/Login.vue";
import Register from "./loginPage/Register.vue";
import Home from "./home/Home.vue";
import About from "./home/About.vue";
import Contact from "./home/Contact.vue";

export default {
  props: {
    buttonText: {
      type: String,
      default: "My Account",
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
      plans: [
        {
          name: "Free",
          price: "$0",
          features: [
            "10 users included",
            "2 GB of storage",
            "Email support",
            "Help center access",
          ],
          buttonText: "Sign up for free ",
          isHighlighted: false,
        },
        {
          name: "Pro",
          price: "$15",
          features: [
            "20 users included",
            "10 GB of storage",
            "Email support",
            "Help center access",
          ],
          buttonText: "Get started",
          isHighlighted: false,
        },
        {
          name: "Entreprise",
          price: "$29",
          features: [
            "30 users included",
            "15 GB of storage",
            "Email support",
            "Help center access",
          ],
          buttonText: "Contact us",
          isHighlighted: false,
        },
      ],
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
    showPage(index) {
      this.currentPage = this.pages[index]; // Met à jour currentPage avec la page sélectionnée
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
.logo img {
  left: 50px;
  right: 50px;
}
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
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
