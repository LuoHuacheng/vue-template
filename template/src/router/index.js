import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login'),
    },
    {
      path: '/404',
      component: () => import('@/views/Error/Error-404'),
    },
    {
      path: '/403',
      component: () => import('@/views/Error/Error-403'),
    },
    {
      path: '/500',
      component: () => import('@/views/Error/Error-500'),
    },
  ],
});
