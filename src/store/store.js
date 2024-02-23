import {defineStore} from 'pinia';

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [],
    }),
    actions: {
        async getTodos() {
        const response = await fetch('http://localhost:3001/todo', {
            headers: {
                'Authorization': process.env.VUE_APP_AUTHORIZATION
            }
        })
        this.todos = await response.json()
        },
        async saveTodos() {
        const response = await fetch('http://localhost:3001/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.VUE_APP_AUTHORIZATION
            },
            body: JSON.stringify(this.todos)
        })
        },
        todos() {
            return this.todos
        }
    }
})