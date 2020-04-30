import auth from '../../API/services/auth';
import router from '../../router';
import { Notification } from 'element-ui';

export default {
  state: {
    token: localStorage.getItem('token') || null,
  },
  mutations: {
    LOGIN(state, payload) {
      state.token = payload;
      localStorage.setItem('token', payload);
      router.push('/dashboard');

      Notification.success({
        title: 'Success!',
        message: 'You have successfully logged in!',
        type: 'success',
        position: 'top-right',
      });
    },
    LOGOUT(state) {
      state.token = null;
      localStorage.removeItem('token');
      router.push('/');
    },
  },
  actions: {
    async login({ commit }, payload)  {
      try {
        const { login, password } = payload;
        const { data } = await auth.login({ login, password });

        commit('LOGIN', data.token);
      } catch (err) {
        console.log(err);
      }
    },
    logout ({ commit }) {
      commit('LOGOUT');
    },
  },
};
