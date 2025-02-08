import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { errorHandler } from './errorHandler'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/loginPage/Login.vue'
import Register from './components/loginPage/Register.vue'
import Demandeur from './components/demandeur/Demandeur.vue'
import Accueil from './components/Accueil.vue'
import About from './components/home/About.vue'
import Contact from './components/home/Contact.vue'
import Home from './components/home/Home.vue'

// Définissez vos routes ici
const routes = [
  { path: '/', redirect: '/accueil' }, // route par defaut de notre application
  { path: '/accueil', component: Accueil },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/demandeur', component: Demandeur },
  { path: '/home', component: Home },
  { path: '/contact', component: Contact },
  { path: '/about', component:  About}
]

// Créez une instance de routeur
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Créez et montez l'application Vue
const app = createApp(App)
  app.use(router)
  app.mount('#app')
