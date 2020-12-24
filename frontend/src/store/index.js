import Vue from 'vue'
import Vuex from 'vuex';
import Axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        user: null,
        todoList: []
    },
    mutations: {
        setToken(store, value) {
            store.token = value;
            localStorage.setItem('token', value)
        },
        setUser(store, value) {
            store.user = value;
            localStorage.setItem('user', JSON.stringify(value))
        },
        setTodoList(store, value) {
            store.todoList = value;
        },
        logout(store) {
            store.token = '';
            store.user = null;
            store.todoList = [];
            localStorage.clear()
        },
    },
    actions: {
        getTodoList({state, commit}) {
            Axios.get('/todos', {headers: {'Authorization': `Bearer ${state.token}`}})
                .then(res => {
                    commit('setTodoList', res.data)
                })
        },
        createTodo({commit, state}, description) {
            Axios.post('/todos', {description}, {headers: {'Authorization': `Bearer ${state.token}`}})
                .then(res => {
                    commit('setTodoList', [res.data, ...state.todoList])
                })
        },
        deleteTodo({state}, id) {
            Axios.delete(`/todos/${id}`, {headers: {'Authorization': `Bearer ${state.token}`}})
                .then(() => {
                    const todo = state.todoList.find(x => x._id == id);
                    const index = state.todoList.indexOf(todo);

                    if (index > -1) {
                        state.todoList.splice(index, 1)
                    }
                })
        },
        doneTodo({state}, id) {
            Axios.post('/todos/done', {id}, {headers: {'Authorization': `Bearer ${state.token}`}})
                .then(() => {
                    const todo = state.todoList.find(x => x._id == id);
                    const index = state.todoList.indexOf(todo);

                    if (index > -1) {
                        todo.isDone = true;
                        todo.doneAt = new Date();
                    }
                })
        },
        rollBackDoneTodo({state}, id) {
            Axios.post('/todos/rollbackDone', {id}, {headers: {'Authorization': `Bearer ${state.token}`}})
                .then(() => {
                    const todo = state.todoList.find(x => x._id == id);
                    const index = state.todoList.indexOf(todo);

                    if (index > -1) {
                        todo.isDone = false;
                        todo.doneAt = null;
                    }
                })
        },
        doneAll({state}, id) {
            Axios.post('/todos/doneAll', {id}, {headers: {'Authorization': `Bearer ${state.token}`}})
                .then(() => {
                    const now = new Date();
                    state.todoList.forEach(x => {
                        x.isDone = true;
                        x.doneAt = now;
                    })
                })
        },
    },
    getters: {
        isAuth(state) {
            return !!state.user
        },
        username(state) {
            return state.user ? state.user.username : ''
        },
        tokenFromLocalStorage() {
            return localStorage.getItem('token')
        },
        userFromLocalStorage() {
            const userJson = localStorage.getItem('user');
            return userJson ? JSON.parse(userJson) : null;
        }
    }
})

export default store;
