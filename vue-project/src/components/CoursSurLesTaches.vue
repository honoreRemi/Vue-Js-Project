<template>
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
        v-for="todo in sortedTodos()"
        :key="todo.date"
        :class="{ completed: todo.completed }"
      >
        <label for="checkbox">
          <input type="checkbox" v-model="todo.completed" />
          {{ todo.title }}
        </label>
      </li>
    </ul>
    <label for="">
      <input type="checkbox" v-model="hideCompleted" />
      Masquer les taches complétées
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hideCompleted = ref(false);
const newTodo = ref('');
const todos = ref([
  {
    title: "Tache de test",
    completed: true,
    date: 1,
  },
  {
    title: "Tache à faire",
    completed: false,
    date: 2,
  },
]);
const addTodo = () => {
  todos.value.push({
    title: newTodo.value,
    completed: false,
    date: Date.now(),
  }),
  newTodo.value = '';
};

const sortedTodos = () => {
  const sortedTodos = todos.value.toSorted((a, b) =>
    a.completed > b ? 1 : -1
  );
  if (hideCompleted.value == true) {
    return sortedTodos.filter((t) => t.completed == false);
  }
  return sortedTodos;
};
</script>

<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through; /* Barre le texte */
}
</style>
