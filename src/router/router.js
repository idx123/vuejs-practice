import { createWebHistory, createRouter } from 'vue-router';
import HomePage from './../views/HomePage';
import AboutPage from './../views/AboutUser';
import ErrorPage from './../views/ErrorPage';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'not-found',
      component: ErrorPage,
    },
  ],
});

export default router;
