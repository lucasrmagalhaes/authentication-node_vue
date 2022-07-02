import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store ({ 
    state: {
        messages: [],
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages
        },
        newMessage(state, message) {
            state.messages.push(message);
        },
        auth(state, token) {
            state.token = token;
        },
        logout(state) {
            state.token = '';
            localStorage.clear('token');
        }
    },
    actions: {
        async getMessages({ commit }) {
            const messages = (await axios.get('http://localhost:3000/messages')).data;
            
            commit('updateMessages', messages);
        },
        async newMessage({ commit }, messageBody) {
            const msg = (await axios.post('http://localhost:3000/messages', { 
                message: messageBody
            })).data;
            
            commit('newMessage', msg.message);
        },
        async getMessage({ commit }, id) {
            return axios.get(`http://localhost:3000/messages/${id}`);
        },
        async register({ commit }, registerData) {
            let token = (await axios.post('http://localhost:3000/register', registerData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit("auth", token);
        },
        async login({ commit }, registerData) {
            let token = (await axios.post('http://localhost:3000/login', registerData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit("auth", token);
        },
    }
});