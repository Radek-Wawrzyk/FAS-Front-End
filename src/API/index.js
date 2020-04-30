import axios from 'axios';
import store from '@/store';
import { Notification } from 'element-ui';

// Setup global axios instance
const request = axios.create({
  baseURL: 'http://localhost:4000/api/',
});

// Global handling for request - setting Bearer token for each request
request.interceptors.request.use(
  config => {
    store.state.auth.token ? config.headers.Authorization = `Bearer ${store.state.auth.token}` : false;
    return config;
  },
);

// Global handling for response error
request.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400: {
          console.log('400 - Bad request')
          Notification.error({
            title: 'Error!',
            message: 'Bad HTTP request!',
            type: 'error',
            position: 'top-right',
          });
          break;
        };
        case 401: {
          store.dispatch('logout');
          Notification.error({
            title: 'Error!',
            message: 'Your session has expired!',
            type: 'error',
            position: 'top-right',
          });
          break;
        };
        case 403: {
          store.dispatch('logout');
          Notification.error({
            title: 'Error!',
            message: 'Your session has expired!',
            type: 'error',
            position: 'top-right',
          });
          break;
        };
        case 404: {
          console.log('404 - Not found')
          break;
        };
        case 500: {
          console.log('500 - Internal problem')
          Notification.error({
            title: 'Error!',
            message: 'Internal server problem!',
            type: 'error',
            position: 'top-right',
          });
          break;
        };
        default: {
          console.log('Something went wrong', 'Error!');
          Notification.error({
            title: 'Error!',
            message: 'Something went wrong...',
            type: 'error',
            position: 'top-right',
          });
          break;
        };
      };
      return Promise.reject(error.response);
    }
  },
);

export default request;
