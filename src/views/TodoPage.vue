<script>
import { useTodoStore } from '../stores/TodoStore';
import SingleTodo from '../components/SingleTodo.vue';
import AddTodoForm from '../components/AddTodoForm.vue';
import { mapState } from 'pinia';
import { ref } from 'vue';
export default {
  name: "TodoPage",
  components: {SingleTodo, AddTodoForm},
  setup() {
    const filter = ref ('todos', 'favvs', 'completed')
    return { filter }
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(useTodoStore, {
      todos: "allTodos",
      pending: "pendingTodos",
      completed: "completedTodos",
      allTodosCount: "allTodosCount",
      completedTodosCount: "completedTodosCount",
      favTodosCount: "completedFavTodosCount",
      favvs: "completedFavTodos",

    }),
  },
  methods: {
  },
}
</script> 

<template>
  <div class="container w-[480px] mx-auto mt-12">
    <h1 class="text-center font-bold text-xl bg-slate-900 p-2 rounded-lg text-white">Personal Notes - Vue + Pinia + Tailwindcss</h1>
    <div class="flex justify-between items-center my-10">
        <button @click="filter = 'todos'" class="border border-slate-500 py-2 px-4 rounded-md">All <span class="bg-slate-500 text-white w-6 h-6 inline-block rounded-full">{{ allTodosCount }}</span></button>
        <button @click="filter = 'favvs'" class="border border-slate-500 py-2 px-4 rounded-md ">Favourite <span class="bg-slate-500 text-white w-6 h-6 inline-block rounded-full">{{ favTodosCount }}</span></button>
        <button @click="filter = 'completed'" class="border border-slate-500 py-2 px-4 rounded-md ">Completed <span class="bg-slate-500 text-white w-6 h-6 inline-block rounded-full">{{ completedTodosCount }}</span></button>
      </div>

      <ul class="bg-slate-100 p-4 rounded-lg my-4" v-if="filter === 'todos'">
      <AddTodoForm/>
      <SingleTodo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      />
    </ul>
      <ul class="bg-slate-100 p-4 rounded-lg my-4" v-if="filter === 'favvs'">
      <AddTodoForm/>
      <SingleTodo
      v-for="todo in favvs"
      :key="todo.id"
      :todo="todo"
      />
    </ul>
      <ul class="bg-slate-100 p-4 rounded-lg my-4" v-if="filter === 'completed'">
      <AddTodoForm/>
      <SingleTodo
      v-for="todo in completed"
      :key="todo.id"
      :todo="todo"
      />
    </ul>
  </div>
</template>
