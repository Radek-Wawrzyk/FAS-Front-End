import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
  },
  {
    path: '/questions/:id',
    name: 'Questions',
    component: () => import(/* webpackChunkName: "questions" */ '../views/Questions/Questions.vue'),
  },
  {
    path: '/ask',
    name: 'Ask',
    component: () => import(/* webpackChunkName: "ask" */ '../views/Ask/Ask.vue'),
  },
  {
    path: '/answers/:id',
    name: 'Answers',
    component: () => import(/* webpackChunkName: "answer" */ '../views/Answers/Answers.vue'),
  },
  {
    path: '/auth/',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/Auth.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.token) {
        next({ name: 'Dashboard' });
      } else {
        next();
      }
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.token) {
        next();
      } else {
        next({ name: 'Auth' });
      }
    },
  },
  {
    path: '/answer-question/:id',
    name: 'AnswerQuestion',
    component: () => import(/* webpackChunkName: "answerQuestion" */ '../views/AnswerQuestion/AnswerQuestion.vue'),
    beforeEnter: (to, from, next) => {
      if (store.state.auth.token) {
        next();
      } else {
        next({ name: 'Auth' });
      }
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound/NotFound.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
