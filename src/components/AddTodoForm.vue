<script>
import { useTodoStore } from '../stores/TodoStore';
import { ref } from 'vue';

export default {
    name: "AddTodoForm",
    setup() {
        const todoStore = useTodoStore()
        const newTodo = ref('')

        const handleSubmit = () => {
            if (newTodo.value.length > 0) {
                todoStore.addTodo({
                    title: newTodo.value,
                    isFav: false,
                    isCompleted: false,
                    id: Math.floor(Math.random() * 10000)
                })
                newTodo.value = ''
            }
        }
        return { handleSubmit, newTodo }
    }
}
</script>

<template>
    <form class="mb-6 flex" @submit.prevent="handleSubmit">
        <input
        class="py-2 px-4 w-3/4 mr-3 rounded-sm focus:outline-green-900" type="text"
        placeholder="Add todo..."
        v-model="newTodo">
        <button class="py-2 px-4 w-1/4 bg-green-900 rounded-sm text-white">Add</button>
    </form>
</template>