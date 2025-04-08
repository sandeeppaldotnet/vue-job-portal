import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';
import LoginPage from '@/components/LoginPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      meta: { requiresAuth: true },  // Requires authentication
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
      meta: { requiresAuth: true },  // Requires authentication
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView,
      meta: { requiresAuth: true },  // Requires authentication
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView,
      meta: { requiresAuth: true },  // Requires authentication
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // If the route requires authentication and the user is not logged in, redirect to login
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });  // Redirect to login page if not authenticated
  } else {
    next();  // Proceed to the route if authenticated or route doesn't require authentication
  }
});

export default router;
