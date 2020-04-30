import request from '@/API/index';

export default {
  login(credentials) {
    return request.post('auth/login', {
      ...credentials,
    });
  },
};
