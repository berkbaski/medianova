import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        user: null
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
        logout(store) {
            store.token = '';
            store.user = null;
            localStorage.clear()
        }
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
