<template>
  <div :class="{active : count >5}">Compteur : {{ count }} <div v-html="firsName"></div></div>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <hr>
  <button @click="sortMovies">Réorganiser</button>

  <form action="" @submit.prevent="addMovie">
    <input type="text" placeholder="Nouveau filme" v-model="movieName">
    <button>Ajouter</button>
  </form>

  <ul>
    <li v-for="movie in movies" :key="movie">
      {{ movie }} <button @click="deleteMovie(movie)">supprimer</button>
    </li>
  </ul>

  <!-- Nous allons créer une personne et definir son age de façon aléatoire -->
  <ul>
    <li>{{ personne.firsName }}</li>
    <li>{{ personne.lastName }}</li>
    <li>{{ personne.age }}</li>
    <button @click.prevent="randomAge">Changer age</button>
  </ul>
</template>

<script setup>
import { ref } from 'vue';


  const movieName = ref('')
  const addMovie = () => {
    movies.value.push(movieName.value)
    movieName.value = ''
  }

  //creation d'une personne
  const personne = ref({
    firsName: 'Honore',
    lastName: 'Remi',
    age: 28
  })
  const randomAge = () => {
    personne.value.age = Math.round(Math.random() * 100)
  }
  const movies = ref([
    'Matrix',
    'Lilo & Stitch',
    'Titanic'
  ])

  const count = ref(0) //Ici nous avons une variable dynamique
  const firsName = '<span>Demo</span>' 
  const increment = (event) =>{
  console.log(event)
  count.value++
 }
 const decrement = () =>{
  count.value-- 
 }

 const deleteMovie = (movie) => {
  movies.value = movies.value.filter(m => m != movie)
 }

 const sortMovies = () =>{
  movies.value.sort((a,b) => a > b ? 1 : -1)
 }
  //count.value = 3; //pour changer la valeur de la variable dynamique, il faut écrire la constante suivi de .value et vous donnez la nouvelle valeur
  const firstTest = 'Honore' //cette variable est une constante qui ne change pas.
</script>

<style scoped>
 .active{
  color: red;
 }
</style>