<template>
  <Layout>
    <template #header>
      <!-- Nous pouvons utiliser le v-slot:header comme nous pouvons aussi utliser le #header-->
      En tete
    </template>
    <template v-slot:aside> Sidebar </template>
    <template #main> Main </template>
    <template #footer> Footer </template>
  </Layout>
  <Button><strong>Demo</strong> de bouton</Button>
  <!--  La balyse <slot></slot> permet d'injecter du contenu  -->
  <button @click="showTimer = !showTimer">Afficher / Masquer</button>
  <Timer v-if="showTimer"></Timer>
  <form action="" @submit.prevent="addTodo">
    <fieldset role="group">
      <input type="text" placeholder="Tache à éffectuer" v-model="newTodo" />
      <button :disabled="newTodo.length == 0">Ajouter</button>
    </fieldset>
  </form>
  <div v-if="todos.length == 0">Vous n'avez pas de tache à faire :(</div>
  <div v-else>
    <ul>
      <li
        v-for="todo in sortedTodos"
        :key="todo.date"
        :class="{ completed: todo.completed }"
      >
        <label>
          <input type="checkbox" v-model="todo.completed" />
          {{ todo.title }}
        </label>
      </li>
    </ul>
    <label>
      <input type="checkbox" v-model="hideCompleted" />
      Masquer les taches complétées
    </label>
  </div>

  <Checkbox
    :label="Bonjour"
    @check="console.log('coché')"
    @uncheck="console.log('décoché')"
  />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Timer from "./Timer.vue";
import Checkbox from "./components/Checkbox.vue";
import Layout from "./Layout.vue";
import Button from "./Button.vue";

const hideCompleted = ref(false);
const newTodo = ref("");
const todos = ref([]);

const showTimer = ref(true);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((r) => r.json())
    .then((v) => {
      todos.value = v.map((todo) => ({
        title: todo.title,
        completed: todo.completed,
        date: todo.id, // Utilisez l'ID pour l'unicité
      }));
    });
});

const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  });
  newTodo.value = "";
};

const sortedTodos = computed(() => {
  const sortedTodos = todos.value.slice().sort((a, b) => {
    return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
  });
  if (hideCompleted.value) {
    return sortedTodos.filter((t) => !t.completed);
  }
  return sortedTodos;
});
</script>

<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
