<template>
  <h1>Démonstration des composants</h1>
  <p>
    Bonjour Honore Remi je pense tu avance bien avec le code. 
    Et je sais que meme si cela a un peu complexe pour un debut
    ça va aller très vite car je sais que lors que tu te mets à fond 
    tu produits des resultats alors je te dis beaucoup de courage 
    seulement pour la suite il faut aussi bossé dure pour devenir plus fort.
  </p>
  <label>
    <input type="checkbox" v-model="showCount">
    Afficher le compteur
  </label>
  <ul>
    <template v-for="item in items">
      <li v-if="item % 2 == 0">
        {{ item }}
      </li>
    </template>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

  const items = [1, 2, 3, 4]
  const showCount = ref(false)
</script>