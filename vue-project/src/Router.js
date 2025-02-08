import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/loginPage/Login.vue';
import Register from './components/loginPage/Register.vue';
import Demandeur from './components/demandeur/Demandeur.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/demandeur', component: Demandeur },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
