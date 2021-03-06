import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/stores',
      name: 'stores',
      component: () => import('./views/Stores.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./views/Product.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
