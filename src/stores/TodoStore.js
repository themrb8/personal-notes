import { defineStore } from 'pinia'

export const useTodoStore = defineStore( 'TodoStore', {
    //state
    state: () => ({
        todos: [
        ]
    }),
    //actions
    actions: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        favouriteTodo(id){
            this.todos = this.todos.map(todo => {
                console.log(id);
                if(todo.id == id) {
                    todo = {...todo, isFav:!todo.isFav}
                }
                return todo;
            });
        },
        completedTodo(id){
            this.todos = this.todos.map(todo => {
                console.log(id);
                if(todo.id == id) {
                    todo = {...todo, isCompleted:!todo.isCompleted}
                }
                return todo;
            });
        },
        
    },
    //getters 
    //and gettters can able to access direct state instead of this
    getters: {
        allTodos: (state) => state.todos,
        pendingTodos: (state) => state.todos.filter(todo => !todo.isCompleted),
        completedTodos: (state) => state.todos.filter(todo => todo.isCompleted),
        pendingFavTodos: (state) => state.todos.filter(todo => !todo.isFav),
        completedFavTodos: (state) => state.todos.filter(todo => todo.isFav),
        
        allTodosCount: (state) => state.todos.length,
        
        pendingTodosCount: (state) => state.todos.filter(todo => !todo.isCompleted).length,
        completedTodosCount: (state) => state.todos.filter(todo => todo.isCompleted).length,
        pendingFavTodosCount: (state) => state.todos.filter(todo => !todo.isFav).length,
        completedFavTodosCount: (state) => state.todos.filter(todo => todo.isFav).length,
    }
});