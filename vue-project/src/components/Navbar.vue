<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-light', 'flex-column']" class="vertical-navbar">
    <div class="container-fluid d-flex flex-column" style="height: 100%;">
      <a href="#" class="navbar-brand">My App Vue</a>
      <ul class="navbar-nav flex-column">
        <li v-for="(page, index) in page" class="nav-item" :key="index">

          <navbar-link
            :page="page"
            :isActive="activePage == index"
          ></navbar-link>
            
          <a
            :href="page.link.url"
            class="nav-link"
            :class="{ active: activePage === index }"
            aria-current="page"
            :title="`This link goes to the ${page.link.text} page`"
            @click.prevent="navLinkClick(index)"
          >
            {{ page.link.text }}
          </a>
        </li>
      </ul>
      <form class="mt-auto"> <!-- Utilisation de mt-auto pour pousser le bouton vers le bas -->
        <button class="btn btn-primary" @click.prevent="changeTheme()">Theme</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['page', 'activePage', 'navLinkClick'],
  data() {
    return {
      theme: 'light',
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
}
</script>

<style scoped>
.vertical-navbar {
  position: fixed; /* Position fixe pour maintenir la navbar en place */
  top: 0; /* Positionnez-la en haut de la fenêtre */
  left: 0; /* Positionnez-la à gauche de la fenêtre */
  height: 100%; /* Remplissez toute la hauteur de la fenêtre */
  width: 200px; /* Largeur de la navbar */
  overflow-y: auto; /* Ajoute un défilement si nécessaire */
}
</style>