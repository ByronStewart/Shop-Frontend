import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    user: {},
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, { token, user }) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    verifyToken({ commit }) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        const token = localStorage.getItem('token');
        axios({
          url: 'http://localhost:5000/api/v1/verify-token',
          data: token,
          method: 'POST',
        })
          .then((res) => {
            const user = res.data.user;

            console.log(user, token);
            commit('auth_success', { token, user });
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },

    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({
          url: 'http://localhost:5000/api/v1/login',
          data: user,
          method: 'POST',
        })
          .then((res) => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            commit('auth_success', { token, user });
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({
          url: 'http://localhost:5000/api/v1/register',
          data: user,
          method: 'POST',
        })
          .then((res) => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            commit('auth_success', token, user);
            resolve(res);
          })
          .catch((err) => {
            commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
